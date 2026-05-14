const lanes = [
  {
    accent: 'about-lane-1',
    title: 'Building AI products',
    desc:
      "Saccade AI helps HR teams transform workforces — auditing roles, generating personalised transition plans for each employee. My Social Agent automates short-form content production so one person can sustain a real content presence.",
  },
  {
    accent: 'about-lane-2',
    title: 'Engineering & mentoring',
    desc:
      "Senior full-stack work, often with an AI/agents component, for teams that need depth they don't have in-house. Plus team mentoring — architecture, practices, individual growth.",
  },
  {
    accent: 'about-lane-3',
    title: 'Workforce AI advisory',
    desc:
      "Helping HR leaders and exec teams at mid-market companies figure out what AI actually means for their teams. Not the hype version. The operational one — what's coming next quarter, what to do about it, where to start.",
  },
]

export function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-section-bg" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-12 py-24 md:py-32">
        <div className="mb-16 max-w-4xl">
          <div className="label text-zinc-400 mb-4">— About</div>
          <h2 className="display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-[-0.02em]">
            <span className="v13-grad-head">A senior engineer building</span>{' '}
            <span
              className="serif-italic v13-grad-pink font-normal"
              style={{ display: 'inline-block', paddingRight: '0.12em', paddingLeft: '0.04em' }}
            >
              AI products
            </span>{' '}
            <span className="v13-grad-head">and advising teams through the shift.</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-photo">
            <img src="/sean.jpg?v=5" alt="Sean Kerr" />
          </div>

          <div className="about-prose">
            <p>I'm Sean. I live in Sydney.</p>
            <p>
              Senior software engineer by trade — that's been the thread running through my whole
              career. Most of what I've shipped has been customer-facing applications and platforms at enterprise scale:
              banking, insurance, telco, financial services. Along the way I've led teams, mentored
              a lot of engineers, and developed strong opinions about what actually makes software
              organisations work (and what wastes everyone's time).
            </p>
            <p>
              For the last few years AI has been changing what software is, which means it's also
              changing what I work on. My time now splits across three things:
            </p>
          </div>
        </div>

        <div className="about-lanes">
          {lanes.map((l) => (
            <div key={l.title} className={`about-lane ${l.accent}`}>
              <div className="about-lane-title">
                <span className="about-lane-arrow">→</span> {l.title}
              </div>
              <p className="about-lane-desc">{l.desc}</p>
            </div>
          ))}
        </div>

        <div className="about-closing">
          <p>
            I write about all of this most weeks. The view from inside production AI systems is
            different from the press view, and that distinction matters more than most people
            realise.
          </p>
          <p>
            If any of this is useful for what you're working on,{' '}
            <a href="mailto:hello@seankerr.com" className="link-quiet" style={{ color: '#f472b6' }}>
              get in touch
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
