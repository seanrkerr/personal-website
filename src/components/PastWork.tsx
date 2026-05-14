import { useMemo, useState } from 'react'
import { portfolio } from '../data/portfolio'

export function PastWork() {
  const complete = useMemo(() => portfolio.filter((e) => e.complete), [])

  const shuffled = useMemo(
    () => [...complete].sort(() => Math.random() - 0.5),
    [complete],
  )

  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? shuffled : shuffled.slice(0, 3)

  return (
    <section id="work" className="experience-section">
      <div className="experience-section-bg" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-12 py-24 md:py-32">
        <div className="mb-16 max-w-3xl">
          <div className="label text-zinc-400 mb-4">— Past work</div>
          <h2 className="display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-[-0.02em]">
            <span className="v13-grad-head">Senior engineering across</span>{' '}
            <span
              className="serif-italic v13-grad-pink font-normal"
              style={{ display: 'inline-block', paddingRight: '0.12em', paddingLeft: '0.04em' }}
            >
              Australian enterprise
            </span>
            <span className="v13-grad-head">.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-1 max-w-4xl -mx-5">
          {visible.map((entry) => {
            const Tag = entry.link ? 'a' : 'div'
            return (
              <Tag
                key={entry.id}
                {...(entry.link
                  ? { href: entry.link, target: '_blank', rel: 'noreferrer' }
                  : {})}
                className="exp-row group"
              >
                <div className="exp-title">
                  {entry.role}
                  <span className="exp-company">
                    · {entry.company} <span className="exp-arrow">↗</span>
                  </span>
                </div>
                <p className="exp-desc">{entry.description}</p>
                {entry.tags.length > 0 && (
                  <div className="exp-tags">
                    {entry.tags.map((t) => (
                      <span key={t} className="exp-tag">{t}</span>
                    ))}
                  </div>
                )}
              </Tag>
            )
          })}
        </div>

        {shuffled.length > 3 && (
          <div className="mt-8 px-5">
            <button
              onClick={() => setExpanded((e) => !e)}
              className="v13-cta-secondary !text-xs"
            >
              {expanded ? 'Show fewer' : 'Show all work'}
            </button>
          </div>
        )}

        <div className="mt-16 max-w-4xl px-5">
          <div className="label text-zinc-500 mb-3">— And also</div>
          <p className="display text-2xl md:text-3xl lg:text-4xl font-light leading-[1.15] tracking-[-0.02em]">
            <span className="v13-grad-head">Engagements at </span>
            <span className="v13-grad-aurora font-normal">Commonwealth Bank</span>
            <span className="v13-grad-head"> &amp; </span>
            <span className="v13-grad-aurora font-normal">Westpac</span>
            <span className="v13-grad-head">, plus </span>
            <span
              className="serif-italic v13-grad-pink font-normal"
              style={{ display: 'inline-block', paddingRight: '0.12em', paddingLeft: '0.04em' }}
            >
              contracts
            </span>
            <span className="v13-grad-head"> at smaller startups.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
