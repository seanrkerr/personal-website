import { Reveal } from './Reveal'
import { ArrowRight, ArrowUpRight } from './Icons'

const workedWith = [
  { name: 'CBA', label: 'Commonwealth Bank', stat: 'v13-stat-1' },
  { name: 'Westpac', label: 'Banking', stat: 'v13-stat-2' },
  { name: 'NRMA', label: 'Insurance', stat: 'v13-stat-3' },
  { name: 'amaysim', label: 'Telecommunications', stat: 'v13-stat-4' },
]

export function Hero() {
  return (
    <section className="v13-bg">
      <div className="v13-aurora" />
      <div className="v13-grid" />
      <div className="v13-grain" />

      <Reveal delayMs={0}>
        <header className="relative z-10 px-8 md:px-12 py-6 flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Sean Kerr"
              className="w-9 h-9 object-contain"
              style={{ filter: 'drop-shadow(0 0 12px rgba(217, 70, 239, 0.25))' }}
            />
            <span className="label text-zinc-300">Sean Kerr</span>
          </div>
          <div className="flex items-center gap-6 label text-zinc-500">
            <a href="#about" className="link-quiet hidden md:inline">About</a>
            <a href="#work" className="link-quiet hidden md:inline">Work</a>
            <a href="mailto:hello@seankerr.com" className="v13-cta-secondary !py-2 !text-xs">
              Get in touch
            </a>
          </div>
        </header>
      </Reveal>

      <div className="relative z-10 px-8 md:px-12 pt-16 pb-12 max-w-7xl mx-auto">
        <Reveal delayMs={100} className="mb-10">
          <div className="v13-pill">
            <span className="live-dot" />
            Available · Sydney, AU
          </div>
        </Reveal>

        <Reveal delayMs={200}>
          <h1 className="v13-headline text-5xl md:text-7xl lg:text-[5.5rem] max-w-5xl">
            <span className="v13-grad-head">I build </span>
            <span className="v13-grad-aurora">AI products,</span>
            <br />
            <span className="v13-grad-head">mentor engineering teams,</span>
            <br />
            <span className="v13-grad-head">and </span>
            <span
              className="serif-italic v13-grad-pink font-normal"
              style={{ display: 'inline-block', paddingRight: '0.12em', paddingLeft: '0.04em' }}
            >
              write
            </span>{' '}
            <span className="v13-grad-head">about how AI</span>
            <br />
            <span className="v13-grad-head">is reshaping work.</span>
          </h1>
        </Reveal>

        <Reveal delayMs={350}>
          <p className="mt-10 text-lg text-zinc-300 leading-relaxed max-w-2xl body-sans">
            Senior full-stack engineer with a decade behind me. Currently building two AI businesses,
            mentoring teams through the shift, and writing about what AI is actually doing to work.
          </p>
        </Reveal>

        <Reveal delayMs={500}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="mailto:hello@seankerr.com" className="v13-cta-primary">
              Get in touch
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#work" className="v13-cta-secondary">View work</a>
          </div>
        </Reveal>

        <Reveal delayMs={650}>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl">
            <a
              href="https://saccadeai.com"
              target="_blank"
              rel="noreferrer"
              className="v13-product-row group"
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #064e3b 0%, #022c22 100%)',
                    border: '1px solid rgba(94, 234, 212, 0.4)',
                    boxShadow: '0 0 20px rgba(52, 211, 153, 0.15)',
                  }}
                >
                  <span className="display text-emerald-300 text-lg italic font-normal">s</span>
                </div>
                <div>
                  <div className="text-sm text-zinc-100 font-medium">Saccade AI</div>
                  <div className="text-xs text-zinc-400 mt-0.5">Workforce AI transformation</div>
                </div>
              </div>
              <ArrowUpRight className="v13-arrow w-4 h-4 text-zinc-500" />
            </a>

            <a
              href="https://mysocialagent.ai"
              target="_blank"
              rel="noreferrer"
              className="v13-product-row group"
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #4a044e 0%, #1e1b4b 100%)',
                    border: '1px solid rgba(217, 70, 239, 0.4)',
                    boxShadow: '0 0 20px rgba(217, 70, 239, 0.2)',
                  }}
                >
                  <span className="display text-fuchsia-300 text-lg italic font-normal">m</span>
                </div>
                <div>
                  <div className="text-sm text-zinc-100 font-medium">My Social Agent</div>
                  <div className="text-xs text-zinc-400 mt-0.5">AI content engine</div>
                </div>
              </div>
              <ArrowUpRight className="v13-arrow w-4 h-4 text-zinc-500" />
            </a>
          </div>
        </Reveal>

        <Reveal delayMs={800}>
          <div className="mt-12">
            <div className="flex items-baseline gap-3 mb-4 flex-wrap">
              <div className="label text-zinc-400">— Worked with</div>
              <div className="label text-zinc-600">
                / Senior full-stack engineering across enterprise teams
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl">
              {workedWith.map((w) => (
                <div key={w.name} className={`v13-stat-card ${w.stat}`}>
                  <div className="text-2xl text-zinc-50 font-medium tracking-tight">{w.name}</div>
                  <div className="label text-zinc-500 mt-2">{w.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
