export function Contact() {
  return (
    <section id="contact" className="border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-8 md:px-12 py-20 md:py-24">
        <div className="max-w-2xl">
          <h2 className="display text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-[-0.02em] mb-6">
            Working on something?{' '}
            <span
              className="serif-italic v13-grad-pink font-normal"
              style={{ display: 'inline-block', paddingRight: '0.12em', paddingLeft: '0.04em' }}
            >
              Let's talk.
            </span>
          </h2>

          <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
            The best way to reach me is email. I usually reply within a day.
          </p>

          <div className="flex flex-col gap-3">
            <a href="mailto:hello@seankerr.com" className="contact-link">
              <span className="label text-zinc-500 w-20">Email</span>
              <span className="text-base">hello@seankerr.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/sean-kerr-a8a073a/"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span className="label text-zinc-500 w-20">LinkedIn</span>
              <span className="text-base">linkedin.com/in/sean-kerr-a8a073a</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
