import { useEffect, useRef, forwardRef, useImperativeHandle, useCallback } from 'react';

export interface LandingHandle {
  getLandingEl: () => HTMLDivElement | null;
  getLCDRect: () => DOMRect | null;
  animateCameraZoom: () => void;
}

interface LandingProps {
  onShoot: (lcdRect: DOMRect) => void;
}

export const Landing = forwardRef<LandingHandle, LandingProps>(({ onShoot }, ref) => {
  const landingDivRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const lcdRef = useRef<HTMLDivElement>(null);
  const camSceneRef = useRef<HTMLDivElement>(null);
  const shutterRef = useRef<SVGCircleElement>(null);
  const fired = useRef(false);

  const positionLCD = useCallback(() => {
    if (!svgRef.current || !lcdRef.current) return;
    const r = svgRef.current.getBoundingClientRect();
    const scaleX = r.width / 620;
    const scaleY = r.height / 410;
    lcdRef.current.style.left = `${26 * scaleX}px`;
    lcdRef.current.style.top = `${52 * scaleY}px`;
    lcdRef.current.style.width = `${390 * scaleX}px`;
    lcdRef.current.style.height = `${300 * scaleY}px`;
  }, []);

  useEffect(() => {
    positionLCD();
    window.addEventListener('resize', positionLCD);
    return () => window.removeEventListener('resize', positionLCD);
  }, [positionLCD]);

  useImperativeHandle(ref, () => ({
    getLandingEl: () => landingDivRef.current,
    getLCDRect: () => lcdRef.current?.getBoundingClientRect() ?? null,
    animateCameraZoom: () => {
      camSceneRef.current?.classList.add('clicked');
    },
  }));

  const shoot = useCallback(() => {
    if (fired.current) return;
    fired.current = true;

    if (shutterRef.current) {
      shutterRef.current.style.transform = 'scale(0.82)';
      setTimeout(() => {
        if (shutterRef.current) shutterRef.current.style.transform = '';
      }, 180);
    }

    const rect = lcdRef.current?.getBoundingClientRect();
    if (rect) onShoot(rect);
  }, [onShoot]);

  return (
    <div id="landing" ref={landingDivRef} onClick={shoot} style={{ cursor: 'pointer' }}>
      <div className="bokeh bk1" />
      <div className="bokeh bk2" />
      <div className="bokeh bk3" />
      <div className="bokeh bk4" />
      <div className="bokeh bk5" />

      <p className="landing-top">Arushi Maisuria · Portfolio 2026</p>

      <div className="cam-scene" ref={camSceneRef}>
        <svg
          ref={svgRef}
          id="camera-svg"
          width="620"
          height="410"
          viewBox="0 0 620 410"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={shoot}
        >
          <rect x="8" y="10" width="608" height="394" rx="20" fill="rgba(0,0,0,0.5)" />
          <rect x="2" y="2" width="612" height="394" rx="18" fill="#111115" />
          <rect x="2" y="2" width="612" height="36" rx="18" fill="#161618" />
          <rect x="2" y="24" width="612" height="14" fill="#161618" />
          <rect x="2" y="2" width="612" height="3" rx="2" fill="rgba(255,255,255,0.06)" />
          <rect x="2" y="2" width="3" height="394" rx="2" fill="rgba(255,255,255,0.04)" />

          <rect x="18" y="44" width="406" height="316" rx="8" fill="#0a0a0c" />
          <rect x="26" y="52" width="390" height="300" rx="5" fill="#101018" />
          <rect x="26" y="52" width="390" height="300" rx="5" fill="url(#screenTex)" opacity="0.04" />

          <text x="30" y="42" fontFamily="DM Sans,sans-serif" fontSize="8" letterSpacing="1" fill="rgba(255,255,255,0.2)">20.3 MEGA PIXELS   Wi-Fi   AUTO</text>

          <rect x="448" y="38" width="90" height="100" rx="6" fill="#1a1a1e" />
          <g fill="rgba(255,255,255,0.06)">
            {[55,65,75,85,95,105,115,125].map(cy =>
              [462,474,486,498,510,522].map(cx => (
                <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.5" />
              ))
            )}
          </g>

          <circle cx="570" cy="22" r="20" fill="#1e1e22" />
          <circle cx="570" cy="22" r="15" fill="#252528" />
          <circle cx="570" cy="22" r="4" fill="#555" />
          <g stroke="rgba(255,255,255,0.15)" strokeWidth="1">
            <line x1="570" y1="2" x2="570" y2="6" />
            <line x1="570" y1="38" x2="570" y2="42" />
            <line x1="550" y1="22" x2="554" y2="22" />
            <line x1="586" y1="22" x2="590" y2="22" />
          </g>

          <circle cx="540" cy="10" r="14" fill="#222226" />
          <circle ref={shutterRef} cx="540" cy="8" r="10" fill="#cc4430" id="shutter-circle" style={{ transformOrigin: '540px 8px', transition: 'transform 0.1s ease' }} />
          <circle cx="540" cy="8" r="6" fill="#b53a28" />
          <text x="540" y="28" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="5.5" letterSpacing="0.5" fill="rgba(255,255,255,0.2)">SHUTTER</text>

          <rect x="450" y="148" width="36" height="22" rx="6" fill="#1a1a1e" />
          <rect x="495" y="148" width="36" height="22" rx="6" fill="#1a1a1e" />
          <text x="468" y="162" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="7" fill="rgba(255,255,255,0.35)">⊞</text>
          <text x="513" y="162" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="7" fill="rgba(255,255,255,0.35)">))))</text>
          <text x="490" y="192" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="10" fill="rgba(255,255,255,0.2)">🗑</text>

          <circle cx="490" cy="252" r="42" fill="#1e1e22" />
          <circle cx="490" cy="252" r="37" fill="#252528" />
          <g stroke="rgba(255,255,255,0.1)" strokeWidth="1">
            <line x1="490" y1="215" x2="490" y2="221" />
            <line x1="490" y1="283" x2="490" y2="289" />
            <line x1="453" y1="252" x2="459" y2="252" />
            <line x1="521" y1="252" x2="527" y2="252" />
          </g>
          <circle cx="490" cy="252" r="20" fill="#1a1a1e" />
          <circle cx="490" cy="252" r="15" fill="#222226" />
          <text x="490" y="257" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="7" letterSpacing="1" fill="rgba(255,255,255,0.4)">SET</text>
          <text x="490" y="233" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="6" fill="rgba(255,255,255,0.25)">±</text>
          <text x="514" y="256" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="6" fill="rgba(255,255,255,0.25)">⚡</text>
          <text x="490" y="274" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="6" fill="rgba(255,255,255,0.25)">INFO</text>
          <text x="466" y="256" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="6" fill="rgba(255,255,255,0.25)">MF</text>

          <rect x="453" y="316" width="36" height="24" rx="7" fill="#1a1a1e" />
          <rect x="499" y="316" width="50" height="24" rx="7" fill="#1a1a1e" />
          <text x="471" y="332" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="7" fill="rgba(255,255,255,0.35)">▶</text>
          <text x="524" y="332" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="7" letterSpacing="0.5" fill="rgba(255,255,255,0.35)">MENU</text>

          <rect x="0" y="120" width="10" height="40" rx="4" fill="#1a1a1e" />
          <rect x="610" y="120" width="10" height="40" rx="4" fill="#1a1a1e" />
          <rect x="240" y="396" width="120" height="6" rx="3" fill="#1a1a1e" />

          <defs>
            <pattern id="screenTex" x="0" y="0" width="3" height="3" patternUnits="userSpaceOnUse">
              <rect width="1" height="1" fill="white" />
            </pattern>
          </defs>
        </svg>

        <div id="lcd-overlay" ref={lcdRef} onClick={shoot}>
          <div className="lv-bg" />
          <div className="lv-grid" />
          <div className="lv-scanlines" />
          <div className="lv-cross" />

          <div className="lv-subject">
            <div className="lv-photo">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <circle cx="18" cy="13" r="7" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
                <path d="M4 34c0-7.7 6.3-14 14-14s14 6.3 14 14" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
              </svg>
              <p>photo</p>
            </div>
            <p className="lv-name">Arushi<br />Maisuria</p>
            <p className="lv-role">Marketing · Communications · Data</p>
          </div>

          <div className="focus-bracket">
            <div className="fb-corner fb-tl" />
            <div className="fb-corner fb-tr" />
            <div className="fb-corner fb-bl" />
            <div className="fb-corner fb-br" />
          </div>
          <div className="focus-lock" />

          <div className="lv-hud">
            <div className="hud-top">
              <span className="hud-mode">AUTO</span>
              <div className="hud-battery">
                <div className="battery-bar" />
                <div className="battery-tip" />
              </div>
            </div>
            <div className="hud-bottom">
              <div className="hud-exposure">
                <div>1/250s</div>
                <div>f/2.8</div>
                <div>ISO 200</div>
              </div>
              <div className="hud-shoot">Tap to capture</div>
            </div>
          </div>
        </div>
      </div>

      <p style={{ marginTop: '28px', fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'oklch(55% 0.06 35 / 0.65)', zIndex: 2, fontFamily: "'DM Sans', sans-serif" }}>
        Click the shutter or screen to open
      </p>
    </div>
  );
});

Landing.displayName = 'Landing';
