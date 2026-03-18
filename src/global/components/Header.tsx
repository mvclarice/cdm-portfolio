export default function Header() {
  return (
    <header
      className="w-full py-[1.2rem] px-6 md:px-12 -mx-2 border-b border-gray-900/50 bg-black/70 fixed 
       flex items-center justify-center z-40 backdrop-blur-sm"
    >
      <nav
        id="navbar"
        className="flex w-full max-w-6xl items-center justify-between gap-4"
      >
        <a className="text-2xl font-semibold font-serif whitespace-nowrap">
          Clarice <span className="text-teal">.</span>
        </a>

        <ul className="nav-links-style text-xs sm:text-[0.8rem] flex gap-4 sm:gap-10">
          <li>
            <a aria-label="Go to the beginning section" href="/#inicio">
              Início
            </a>
          </li>
          <li>
            <a aria-label="Go to the portfolio section" href="/#portfolio">
              Portfólio
            </a>
          </li>
          <li>
            <a aria-label="Go to the contact c" href="/#contato">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
