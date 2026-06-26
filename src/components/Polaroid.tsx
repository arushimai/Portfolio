import { useEffect, useRef } from 'react';
import type { Milestone } from '../data';

interface PolaroidProps {
  milestone: Milestone;
  rotation: number;  // deg
  offsetX: number;   // px
  isNew: boolean;
  zIndex: number;
}

export function Polaroid({ milestone, rotation, offsetX, isNew, zIndex }: PolaroidProps) {
  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isNew || !photoRef.current) return;
    const el = photoRef.current;
    el.classList.remove('developing');
    // Force reflow to restart animation
    void el.offsetWidth;
    el.classList.add('developing');
  }, [isNew]);

  const cssVars = {
    '--rot': `${rotation}deg`,
    '--tx': `${offsetX}px`,
  } as React.CSSProperties;

  return (
    <div
      className={`polaroid polaroid-${milestone.type}${isNew ? ' is-new' : ' settled'}`}
      style={{ ...cssVars, zIndex }}
    >
      {/* Photo area */}
      <div className="pol-photo" ref={photoRef}>
        <div
          className="pol-photo-bg"
          style={{ background: milestone.gradient }}
        >
          <span className="pol-photo-label">{milestone.photoLabel}</span>
          <div className="pol-title">{milestone.title}</div>
          <div className="pol-role">{milestone.role}</div>
          <div className="pol-tags">
            {milestone.tags.map(t => (
              <span
                key={t}
                className="pol-tag"
                style={{ borderColor: `${milestone.accent}44`, color: milestone.accent }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Caption strip */}
      <div className="pol-caption">
        <span className="pol-caption-text">{milestone.caption}</span>
        <span className="pol-year">{milestone.year}</span>
      </div>
    </div>
  );
}
