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
        
        <h1 className="hero-name">Arushi<br/><em>Maisuria</em></h1>
        <p className="hero-tagline">Marketing & Communications · Data Analytics · Broadcast Journalism</p>
        <div className="hero-contacts">
          <a href="mailto:amaisuria03@gmail.com"><ContactIcon type="email" />amaisuria03@gmail.com</a>
          <a href="tel:7324847611"><ContactIcon type="phone" />732-484-7611</a>
          <a href="#"><ContactIcon type="location" />New Jersey</a>
        </div>
      </div>
      <div className="hero-right">
        <div className="polaroid">
          <div className="polaroid-img">
            <img src="/image0.jpeg" alt="Arushi Maisuria" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
          </div>
          <p className="polaroid-cap">State College, PA</p>
        </div>
        <p className="hero-summary">
          Aspiring media professional with experience in digital marketing, broadcast journalism, and data-driven storytelling. Passionate about blending creative strategy with analytics.
        </p>
      </div>
    </section>
  );
}

function ContactIcon({ type }: { type: 'email' | 'phone' | 'location' }) {
  const iconProps = {
    className: 'contact-icon',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };

  if (type === 'email') {
    return (
      <svg {...iconProps}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  if (type === 'phone') {
    return (
      <svg {...iconProps}>
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1L8 9.5a16 16 0 0 0 6.5 6.5l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.6.5 2.5.6a2 2 0 0 1 1.7 2z" />
      </svg>
    );
  }

  return (
    <svg {...iconProps}>
      <path d="M20 10c0 5-8 12-8 12s-8-7-8-12a8 8 0 1 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ExperienceSection() {
  const jobs: {
    logo: string; company: string; meta: string; num: string; role: string;
    bullets: string[]; delay: string;
    clients?: { name: string; period: string; bullets: string[] }[];
  }[] = [
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
      clients: [
        {
          name: 'Orangetheory Fitness',
          period: 'Aug – Dec 2025',
          bullets: [
            'Designed weekly social media content calendars',
            'Monitored engagement metrics and optimized strategy using analytics',
            'Sourced and secured local influencer partnerships; coordinated sponsorships and promotional events',
            'Developed consumer email marketing campaigns; segmented subscriber lists to improve targeting',
            'Tracked campaign performance using GA4 and social analytics dashboards',
          ],
        },
        {
          name: 'The Hershey Company',
          period: 'March – May 2026',
          bullets: [
            'Created social media content concepts and promotional materials aligned with brand voice and marketing objectives',
            'Assisted in developing campaign presentations by analyzing competitor activity, consumer insights, and digital marketing opportunities',
            'Evaluated social media performance metrics and engagement trends to inform content strategy and improve audience reach',
          ],
        },
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
                {job.clients && (
                  <div className="exp-clients">
                    <p className="exp-clients-label">Client Work</p>
                    <div className="exp-clients-grid">
                      {job.clients.map(c => (
                        <div className="exp-client-card" key={c.name}>
                          <div className="exp-client-header">
                            <span className="exp-client-name">{c.name}</span>
                            <span className="exp-client-period">{c.period}</span>
                          </div>
                          <ul className="exp-bullets exp-client-bullets">
                            {c.bullets.map((b, i) => <li key={i}>{b}</li>)}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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
                  <span key={c.label} className="chip">{c.label}</span>
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
    { name: 'Google Analytics', date: 'May 2026', abbr: 'G', color: '#4285F4' },
    { name: 'IBM Digital Marketing', date: 'June 2025', abbr: 'IBM', color: '#1261FE' },
    { name: 'Meta Social Media Trends', date: 'July 2025', abbr: 'M', color: '#0082FB' },
    { name: 'PWC Data Analytics', date: 'Aug 2025', abbr: 'PwC', color: '#D04A02' },
    { name: 'Hootsuite Digital Analytics', date: 'Dec 2025', abbr: 'H', color: '#F9A61A' },
    { name: 'Stukent Digital Marketing', date: 'Dec 2025', abbr: 'S', color: '#00A2E8' },
  ];

  return (
    <section id="education">
      <div className="container">
        <p className="section-label rv">Background</p>
        <h2 className="section-title rv">Education & Certifications</h2>
        <div className="edu-card rv">
          <div className="edu-card-left">
            <img src="/old-main.png" className="edu-watermark" alt="" />
            <div className="edu-grad-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3.333 1.667 8.667 1.667 12 0v-5"/>
              </svg>
            </div>
            <p className="edu-school-name">The Pennsylvania<br />State University</p>
            <p className="edu-degree">B.A. Advertising & Public Relations</p>
            <p className="edu-college">Bellisario College of Communications</p>
            <div className="edu-divider" />
            <p className="edu-minor-label">Minor: Digital Media Trends & Analytics</p>
            <p className="edu-college">College of Information Science & Technology</p>
          </div>
          <div className="edu-card-right">
            <p className="edu-cert-label">Certifications</p>
            <div className="edu-cert-list">
              {certs.map(c => (
                <div className="edu-cert-row" key={c.name}>
                  <div className="edu-cert-icon" style={{ borderColor: c.color + '55' }}>
                    <span style={{
                      color: c.color,
                      fontWeight: 700,
                      fontSize: c.abbr.length > 2 ? '7px' : c.abbr.length > 1 ? '9px' : '13px',
                      fontFamily: 'DM Sans, sans-serif',
                      letterSpacing: c.abbr.length > 2 ? '-0.5px' : 'normal',
                      lineHeight: 1,
                    }}>{c.abbr}</span>
                  </div>
                  <span className="edu-cert-name">{c.name}</span>
                  <span className="edu-cert-date">{c.date}</span>
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
        <a href="/Arushi_Maisuria_Resume.pdf" download>Resume</a>
        <a href="mailto:amaisuria03@gmail.com">Email</a>
        <a href="tel:7324847611">Call</a>
        <a href="https://www.linkedin.com/in/arushimaisuria/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
}
