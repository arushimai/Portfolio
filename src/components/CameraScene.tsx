import { useEffect, useRef, useState, useCallback } from 'react';
import { Camera } from './Camera';
import { Polaroid } from './Polaroid';
import { milestones, getPileRotation, getPileOffsetX } from '../data';
import { playShutter, playEject, playLand } from '../sounds';

interface PrintedPolaroid {
  milestoneId: number;
  rotation: number;
  offsetX: number;
  isNew: boolean;
  zIndex: number;
}

const SCROLL_PER_MILESTONE = 80; // vh per milestone
const SCENE_VH = milestones.length * SCROLL_PER_MILESTONE + 160;

function delay(ms: number) {
  return new Promise<void>(resolve => setTimeout(resolve, ms));
}

export function CameraScene() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [printed, setPrinted] = useState<PrintedPolaroid[]>([]);
  const [capturing, setCapturing] = useState(false);
  const [flashing, setFlashing] = useState(false);
  const [nameOpacity, setNameOpacity] = useState(1);
  const [activeIdx, setActiveIdx] = useState(0);

  const lastTriggered = useRef(-1);
  const capturingRef = useRef(false);

  const triggerCapture = useCallback(async (idx: number) => {
    if (capturingRef.current) return;
    capturingRef.current = true;
    setCapturing(true);
    setActiveIdx(idx);

    // 1. Shutter click sound + shutter animation starts
    playShutter();

    // 2. Flash after brief shutter close
    await delay(140);
    setFlashing(true);
    await delay(65);
    setFlashing(false);

    // 3. Eject sound starts
    playEject();

    // 4. Add polaroid (enter animation triggers immediately)
    setPrinted(prev => {
      const next: PrintedPolaroid[] = prev.map(p => ({ ...p, isNew: false }));
      next.push({
        milestoneId: idx,
        rotation: getPileRotation(idx),
        offsetX: getPileOffsetX(idx),
        isNew: true,
        zIndex: idx + 1,
      });
      return next;
    });

    // 5. Land thud after polaroid animation
    await delay(850);
    playLand();

    // 6. Done
    await delay(300);
    setCapturing(false);
    capturingRef.current = false;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sceneRef.current) return;

      const rect = sceneRef.current.getBoundingClientRect();
      const sceneH = sceneRef.current.offsetHeight;
      const vh = window.innerHeight;

      const scrolled = Math.max(0, -rect.top);
      const maxScroll = sceneH - vh;
      const progress = Math.min(1, scrolled / maxScroll);

      // Fade name out as soon as scrolling starts
      setNameOpacity(Math.max(0, 1 - progress * 8));

      if (progress < 0.02) return;

      const rawIdx = (progress * milestones.length * SCROLL_PER_MILESTONE) / SCROLL_PER_MILESTONE;
      const newIdx = Math.min(Math.floor(rawIdx), milestones.length - 1);

      if (newIdx > lastTriggered.current) {
        lastTriggered.current = newIdx;
        triggerCapture(newIdx);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [triggerCapture]);

  const activeMilestone = milestones[activeIdx] ?? milestones[0];

  return (
    <>
      {/* Full-screen flash */}
      <div className={`flash-overlay${flashing ? ' on' : ''}`} />

      <div
        className="camera-scene"
        ref={sceneRef}
        style={{ height: `${SCENE_VH}vh` }}
      >
        <div className="sticky-stage">
          <div className="stage-glow" />

          {/* Left: scroll progress dots */}
          <div className="progress-bar">
            {milestones.map((_, i) => (
              <div
                key={i}
                className={`progress-dot${i < activeIdx ? ' done' : i === activeIdx ? ' active' : ''}`}
              />
            ))}
          </div>

          {/* Right: current milestone label */}
          <div className="milestone-label visible">
            <div className="ml-year">{activeMilestone.year}</div>
            <div className="ml-title">{activeMilestone.title}</div>
            <div className="ml-role">{activeMilestone.role}</div>
          </div>

          {/* Name */}
          <div className="stage-hero" style={{ opacity: nameOpacity }}>
            <div className="stage-name">Arushi <em>Maisuria</em></div>
            <div className="stage-tagline">Marketing / Media / Storytelling</div>
          </div>

          {/* Camera + Pile */}
          <div className="stage-content">
            <div className="active-photo" key={activeMilestone.id}>
              <div className={`active-photo-frame active-photo-${activeMilestone.type}`}>
                <div className="active-photo-image" style={{ background: activeMilestone.gradient }}>
                  <span>{activeMilestone.photoLabel}</span>
                </div>
                <div className="active-photo-copy">
                  <span className="active-photo-kicker">{activeMilestone.type}</span>
                  <h2>{activeMilestone.title}</h2>
                  <p>{activeMilestone.story}</p>
                  <div className="active-photo-meta">{activeMilestone.location}</div>
                </div>
              </div>
            </div>

            <Camera capturing={capturing} />

            <div className="pile-container">
              {printed.map(p => (
                <Polaroid
                  key={p.milestoneId}
                  milestone={milestones[p.milestoneId]}
                  rotation={p.rotation}
                  offsetX={p.offsetX}
                  isNew={p.isNew}
                  zIndex={p.zIndex}
                />
              ))}
            </div>
          </div>

          {/* Scroll cue (fades once scrolling starts) */}
          {printed.length === 0 && (
            <div className="scroll-cue">
              <span>scroll to capture</span>
              <div className="cue-line" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
