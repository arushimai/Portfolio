interface CameraProps {
  capturing: boolean;
}

export function Camera({ capturing }: CameraProps) {
  return (
    <div className={`camera-wrap${capturing ? ' capturing' : ''}`}>
      <div className="camera-body">

        {/* Top panel */}
        <div className="cam-top">
          <div className="cam-viewfinder" />
          <div className="cam-brand">Arushi One-Step</div>
          <div className="cam-sensor" />
        </div>

        {/* Rainbow stripe */}
        <div className="cam-stripe" />

        {/* Lens area */}
        <div className="cam-lens-area">
          <div className="lens-housing">
            <div className="lens-ring lens-r1">
              <div className="lens-ring lens-r2">
                <div className="lens-ring lens-r3">
                  <div className="lens-glass">
                    <div className="lens-shutter" />
                    <div className="lens-glare" />
                  </div>
                </div>
              </div>
            </div>
            <div className="lens-label">50mm / f1.4 / 77</div>
          </div>

          <div className="cam-shutter-btn" title="scroll to capture" />
        </div>

        {/* Bottom strip */}
        <div className="cam-bottom">
          <div className="cam-model">600</div>
        </div>
      </div>

      {/* Film slot */}
      <div className="cam-slot-housing">
        <div className="cam-slot">
          <div className="slot-roller left" />
          <div className="slot-gap" />
          <div className="slot-roller right" />
        </div>
      </div>
    </div>
  );
}
