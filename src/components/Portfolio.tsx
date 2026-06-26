import { forwardRef } from 'react';

export const Portfolio = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div id="portfolio" ref={ref}>
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <OrgsSection />
      <FooterSection />
    </div>
  );
});

Portfolio.displayName = 'Portfolio';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-deco">A</div>
        <p className="hero-eyebrow">Portfolio · 2026</p>
        <h1 className="hero-name">Arushi<br /><em>Maisuria</em></h1>
        <p className="hero-tagline">Marketing & Communications · Digital Strategy · Data Analytics · Broadcast Journalism</p>
        <div className="hero-contacts">
          <a href="mailto:amaisuria03@gmail.com"><span className="cdot" />amaisuria03@gmail.com</a>
          <a href="tel:7324847611"><span className="cdot" />732-484-7611</a>
          <a href="#"><span className="cdot" />New Jersey</a>
        </div>
      </div>
      <div className="hero-right">
        <div className="polaroid">
          <div className="polaroid-img">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
              <circle cx="25" cy="18" r="10" stroke="oklch(40% 0.015 50)" strokeWidth="1.5" />
              <path d="M5 46c0-11 8.9-20 20-20s20 8.9 20 20" stroke="oklch(40% 0.015 50)" strokeWidth="1.5" />
            </svg>
            <p>profile photo</p>
          </div>
          <p className="polaroid-cap">Arushi, 2026</p>
        </div>
        <p className="hero-summary">
          Aspiring media professional with experience in digital marketing, broadcast journalism, and data-driven storytelling. Passionate about blending creative strategy with analytics.
        </p>
      </div>
    </section>
  );
}

function ExperienceSection() {
  const jobs = [
    {
      logo: 'CA',
      company: 'CommAgency',
      meta: 'State College, PA\nAug 2025 – May 2026',
      num: '01',
      role: 'Digital Marketing Intern',
      bullets: [
        'Developed marketing strategies and client deliverables for regional and national brands',
        'Sourced and secured local influencer partnerships; coordinated sponsorships and promotional events',
        'Developed consumer email marketing campaigns; segmented subscriber lists to improve targeting',
        'Produced multimedia content (video, graphics, copy) to enhance audience engagement',
        'Created integrated marketing campaigns across social media, email, web, and earned media',
        'Led client meetings and presented campaign insights, performance reports, and strategic recommendations',
        'Tracked campaign performance using GA4 and social analytics dashboards',
      ],
      delay: '0.05s',
    },
    {
      logo: 'F',
      company: 'Forbes Advisor',
      meta: 'Jersey City, NJ\nJune – Aug 2024',
      num: '02',
      role: 'Digital Production Intern',
      bullets: [
        'Produced written, video, and visual content for multi-channel marketing campaigns',
        'Increased social media engagement through consistent content publishing and audience interaction',
        'Developed newsletter and email marketing content to drive subscriber engagement',
        'Managed website updates to maintain accurate, engaging digital presence',
        'Supported development of paid social campaigns driving increased online engagement',
      ],
      delay: '0.15s',
    },
    {
      logo: 'NL',
      company: 'The News Lab',
      meta: 'State College, PA\nSept 2022 – May 2023',
      num: '03',
      role: 'Communications Intern',
      bullets: [
        'Reported and produced in-depth local stories through interviews and field research',
        'Researched, wrote, and edited scripts in AP style to ensure clarity, accuracy, and journalistic quality',
        'Delivered live and recorded news broadcasts with strong on-camera presence and teleprompter proficiency',
      ],
      delay: '0.25s',
    },
  ];

  return (
    <section id="experience">
      <div className="container">
        <p className="section-label rv">Work Experience</p>
        <h2 className="section-title rv">Where I've Made an Impact</h2>
        <div className="exp-timeline">
          {jobs.map(job => (
            <div className="exp-item rv" key={job.num} style={{ transitionDelay: job.delay }}>
              <div className="exp-side">
                <div className="exp-logo">{job.logo}</div>
                <p className="exp-company">{job.company}</p>
                <p className="exp-meta" style={{ whiteSpace: 'pre-line' }}>{job.meta}</p>
                <span className="exp-side-num">{job.num}</span>
              </div>
              <div className="exp-content">
                <p className="exp-role">{job.role}</p>
                <ul className="exp-bullets">
                  {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const groups = [
    {
      title: 'Analytics & Data',
      chips: [
        { label: 'GA4', hot: true },
        { label: 'Google Ads', hot: true },
        { label: 'Tableau', hot: true },
        { label: 'Basic SQL', hot: true },
        { label: 'KPI Measurement' },
        { label: 'A/B Testing' },
        { label: 'SEO / SEM / GEO' },
        { label: 'Campaign Measurement' },
        { label: 'Conversion Optimization' },
        { label: 'Keyword Research' },
      ],
      delay: '0.05s',
    },
    {
      title: 'Marketing & Strategy',
      chips: [
        { label: 'Email Marketing', hot: true },
        { label: 'Paid Media', hot: true },
        { label: 'Copywriting' },
        { label: 'Market Research' },
        { label: 'Audience Segmentation' },
        { label: 'Consumer Psychology' },
        { label: 'Competitive Analysis' },
      ],
      delay: '0.13s',
    },
    {
      title: 'Tools & Platforms',
      chips: [
        { label: 'Adobe Suite', hot: true },
        { label: 'Hootsuite', hot: true },
        { label: 'Mailchimp' },
        { label: 'Microsoft Suite' },
      ],
      delay: '0.21s',
    },
  ];

  return (
    <section id="skills">
      <div className="container">
        <p className="section-label rv">Capabilities</p>
        <h2 className="section-title rv">Skills & Tools</h2>
        <div className="skills-cols">
          {groups.map(g => (
            <div className="rv" key={g.title} style={{ transitionDelay: g.delay }}>
              <p className="skill-group-title">{g.title}</p>
              <div className="skill-chips">
                {g.chips.map(c => (
                  <span key={c.label} className={`chip${c.hot ? ' hot' : ''}`}>{c.label}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationSection() {
  const certs = [
    { name: 'Google Analytics', date: 'May 2026' },
    { name: 'IBM Digital Marketing', date: 'June 2025' },
    { name: 'Meta Social Media Trends', date: 'July 2025' },
    { name: 'PWC Data Analytics', date: 'Aug 2025' },
    { name: 'Hootsuite Digital Analytics', date: 'Dec 2025' },
    { name: 'Stukent Digital Marketing', date: 'Dec 2025' },
  ];

  return (
    <section id="education">
      <div className="container">
        <p className="section-label rv">Background</p>
        <h2 className="section-title rv">Education & Certifications</h2>
        <div className="edu-layout">
          <div className="rl">
            <div className="edu-block">
              <p className="edu-school">The Pennsylvania<br />State University</p>
              <p className="edu-detail" style={{ marginTop: '10px' }}>
                <strong>B.A. Advertising & Public Relations</strong><br />
                Bellisario College of Communications
              </p>
              <p className="edu-detail" style={{ marginTop: '6px', fontSize: '12px' }}>
                Minor: Digital Media Trends & Analytics<br />
                <span style={{ color: 'var(--ink-light)' }}>College of Information Science & Technology</span>
              </p>
              <span className="edu-badge">Expected May 2026</span>
            </div>
          </div>
          <div className="rr">
            <div className="certs-col">
              {certs.map(c => (
                <div className="cert-row" key={c.name}>
                  <div className="cert-icon">✓</div>
                  <div>
                    <p className="cert-name">{c.name}</p>
                    <p className="cert-date">{c.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OrgsSection() {
  const orgs = [
    {
      name: 'TEDxPSU',
      role: 'Marketing Liaison',
      bullets: [
        'Executed multi-platform marketing for event promotion',
        'Collaborated cross-functionally for brand consistency',
        'Increased digital visibility through targeted outreach',
      ],
      delay: '0.05s',
    },
    {
      name: 'THON Organization',
      role: 'Public Relations Chair',
      bullets: [
        'Engaged audiences for Penn State\'s largest student philanthropy',
        'Distributed promotional materials to drive participation',
        'Strengthened brand visibility and donor relationships',
      ],
      delay: '0.15s',
    },
    {
      name: 'Student Programming Assoc.',
      role: 'Marketing Liaison',
      bullets: [
        'Developed content to increase student event attendance',
        'Aligned campaigns with event coordinators for artist branding',
        'Analyzed metrics to optimize promotional reach',
      ],
      delay: '0.25s',
    },
  ];

  return (
    <section id="additional">
      <div className="container">
        <p className="section-label rv">Campus Life</p>
        <h2 className="section-title rv">Leadership & Organizations</h2>
        <div className="org-grid">
          {orgs.map(o => (
            <div className="org-card rv" key={o.name} style={{ transitionDelay: o.delay }}>
              <p className="org-name">{o.name}</p>
              <p className="org-role">{o.role}</p>
              <ul className="org-bullets">
                {o.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FooterSection() {
  return (
    <footer>
      <p className="footer-brand">Arushi Maisuria</p>
      <div className="footer-links">
        <a href="mailto:amaisuria03@gmail.com">Email</a>
        <a href="tel:7324847611">Call</a>
        <a href="#">LinkedIn</a>
      </div>
    </footer>
  );
}
