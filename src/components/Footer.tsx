export function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-8 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="label text-zinc-500">© Sean Kerr · Sydney</div>
        <div className="flex items-center gap-6 text-sm">
          <a
            href="https://www.linkedin.com/in/sean-kerr-a8a073a/"
            target="_blank"
            rel="noreferrer"
            className="link-quiet"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/kerrsee"
            target="_blank"
            rel="noreferrer"
            className="link-quiet"
          >
            X
          </a>
          <a
            href="https://github.com/seanrkerr"
            target="_blank"
            rel="noreferrer"
            className="link-quiet"
          >
            GitHub
          </a>
          <a
            href="https://github.com/thefirstsean"
            target="_blank"
            rel="noreferrer"
            className="link-quiet"
          >
            GitHub 2
          </a>
        </div>
      </div>
    </footer>
  )
}
