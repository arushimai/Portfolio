import { useRef, useCallback, useEffect } from 'react';
import { Landing, LandingHandle } from './components/Landing';
import { Portfolio } from './components/Portfolio';

export default function App() {
  const flashRef = useRef<HTMLDivElement>(null);
  const portalRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const landingHandleRef = useRef<LandingHandle>(null);
  const fired = useRef(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  const handleShoot = useCallback((lcdRect: DOMRect) => {
    if (fired.current) return;
    fired.current = true;

    const flash = flashRef.current;
    const portal = portalRef.current;
    const portfolio = portfolioRef.current;
    const handle = landingHandleRef.current;
    const landing = handle?.getLandingEl();

    if (!flash || !portal || !landing || !portfolio) return;

    // Set up portal at LCD position
    portal.style.left = `${lcdRect.left}px`;
    portal.style.top = `${lcdRect.top}px`;
    portal.style.width = `${lcdRect.width}px`;
    portal.style.height = `${lcdRect.height}px`;
    portal.style.borderRadius = '5px';
    portal.style.background = 'white';
    portal.style.opacity = '0';

    // Flash LCD screen then full screen
    setTimeout(() => {
      flash.classList.add('on');
    }, 60);
    setTimeout(() => {
      flash.classList.remove('on');
      flash.classList.add('off');
    }, 170);

    // Camera zoom
    setTimeout(() => {
      handle?.animateCameraZoom();
    }, 100);

    // Portal expand from LCD to full screen
    setTimeout(() => {
      portal.style.opacity = '1';
      portal.classList.add('rushing');
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          portal.style.left = '0';
          portal.style.top = '0';
          portal.style.width = '100vw';
          portal.style.height = '100vh';
          portal.style.borderRadius = '0';
        });
      });
    }, 200);

    // Show portfolio, fade out landing
    setTimeout(() => {
      landing.classList.add('fade-out');
      portfolio.classList.add('visible');
      document.body.style.overflow = 'auto';
      portfolio.classList.add('pv');
      initScrollReveal(portfolio);

      portal.style.transition = 'opacity 0.5s ease';
      portal.style.opacity = '0';

      setTimeout(() => {
        landing.classList.add('gone');
        portal.style.display = 'none';
      }, 550);
    }, 1550);
  }, []);

  return (
    <>
      <div id="flash" ref={flashRef} />

      <Landing ref={landingHandleRef} onShoot={handleShoot} />

      <div id="lcd-portal" ref={portalRef} />

      <Portfolio ref={portfolioRef} />
    </>
  );
}

function initScrollReveal(root: HTMLElement) {
  const els = root.querySelectorAll('.rv, .rl, .rr');
  const obs = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }),
    { threshold: 0.1 }
  );
  els.forEach(el => obs.observe(el));
}
