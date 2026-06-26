import { useEffect, useRef } from 'react';
import { skills, certifications } from '../data';

function useReveal(containerRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const els = containerRef.current?.querySelectorAll('.reveal');
    if (!els) return;
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }),
      { threshold: 0.15 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [containerRef]);
}

export function SkillsSection() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section className="section skills-section" ref={ref}>
      <div className="s-head">
        <div className="s-label reveal">Technical Specs</div>
        <div className="s-title reveal">Capabilities</div>
      </div>
      <div className="skills-grid">
        {Object.entries(skills).map(([cat, list], i) => (
          <div key={cat} className="skill-card reveal" style={{ transitionDelay: `${i * 80}ms` }}>
            <div className="skill-cat">{cat}</div>
            <ul className="skill-list">
              {list.map(s => <li key={s}>{s}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export function EduSection() {
  return (
    <div className="edu-section">
      <div className="s-label">Education</div>
      <div className="edu-uni">The Pennsylvania State University</div>
      <div className="edu-detail">
        Advertising &amp; Public Relations / Bellisario College of Communications<br />
        Minor: Digital Media Trends and Analytics / College of IST<br />
        University Park, PA / May 2026
      </div>
    </div>
  );
}

export function CertsSection() {
  const frames = [...certifications, ...certifications];

  return (
    <section className="section certs-section">
      <div className="s-head">
        <div className="s-label">Credentials</div>
        <div className="s-title">Certifications</div>
      </div>

      <div className="film-strip-wrap">
        <div className="film-track">
          {frames.map((c, i) => (
            <div className="film-frame" key={i}>
              <div className="ff-sprockets">
                {[...Array(4)].map((_, j) => <div key={j} className="ff-hole" />)}
              </div>
              <div className="ff-name">{c.name}</div>
              <div className="ff-issuer">{c.issuer}</div>
              <div className="ff-date">{c.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="contact-section">
      <div className="s-label">Get in Touch</div>
      <div style={{ marginTop: '22px' }}>
        <a href="mailto:amaisuria03@gmail.com" className="ct-email">
          amaisuria03@gmail.com
        </a>
      </div>
      <div className="ct-meta">
        <span className="ct-item">New Jersey</span>
        <span className="ct-item">732-484-7611</span>
        <span className="ct-item">Penn State '26</span>
      </div>
      <div className="footer-lens">
        <div className="footer-lens-inner" />
      </div>
      <div className="footer-mark">2026 Arushi Maisuria</div>
    </section>
  );
}
