import { useLocation } from '@tanstack/react-router'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const currentPath = location.pathname

  return (
    <header
      className="w-full py-[1.2rem] px-6 md:px-12 border-b border-gray-900/50 bg-black/70 fixed 
       flex items-center justify-center z-50 backdrop-blur-sm"
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
            <a href="#inicio">Início</a>
          </li>
          <li>
            <a href="#portfolio">Portfólio</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
    // <>
    //   {/* HEADER */
    //   <header className="relative w-full h-full flex items-center bg-green-950 text-white">
    //     <div className="flex h-22 w-full items-center sm:justify-center justify-between px-6">
    //       <div className="flex items-center h-full">
    //         {/* PROJECT ROUTES */}
    //         {HEADER_ROUTES.map((route, index) => (
    //           <Link
    //             key={index}
    //             className={`hidden sm:flex h-full items-center hover:bg-green-900/20 cursor-pointer
    //             ${currentPath === route.path ? 'border-b-3 border-green-700/80' : ''}
    //             `}
    //             to={route.path}
    //           >
    //             <div className="flex h-full items-center px-8 ">
    //               <span className="uppercase font-bold text-sm">
    //                 {route.label}
    //               </span>
    //             </div>
    //           </Link>
    //         ))}
    //         {/* My logo */}
    //         <img
    //           src="/global/my-logo.png"
    //           className="sm:hidden w-24 h-12 opacity-90"
    //         />
    //       </div>
    //       <button
    //         className="sm:hidden p-2 hover:bg-green-900 border border-green-900 rounded-lg cursor-pointer"
    //         aria-label="Open menu"
    //         onClick={() => setIsOpen(!isOpen)}
    //       >
    //         <Menu size={28} color="green" />
    //       </button>
    //     </div>
    //   </header>

    //   {/* MOBILE MENU */}
    //   {isOpen && (
    //     <div className="sm:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur">
    //       {/* Close button */}
    //       <button
    //         onClick={() => setIsOpen(false)}
    //         className="absolute top-6 right-2 p-2 rounded-lg bg-green-900 hover:bg-green-950 cursor-pointer text-gray-300"
    //         aria-label="Close menu"
    //       >
    //         <X size={28} />
    //       </button>

    //       {/* Menu container */}
    //       <Card className="mt-20 items-center animate-slide-down" size={'md'}>
    //         <ProjectLogo className="mb-4" />

    //         {HEADER_ROUTES.map((route) => {
    //           const isActive = currentPath === route.path

    //           return (
    //             <Link
    //               key={route.path}
    //               to={route.path}
    //               onClick={() => setIsOpen(false)}
    //               className={`
    //                 w-full py-4 mt-4 text-center uppercase font-semibold text-[15px]
    //                 transition-colors hover:bg-green-900 rounded-2xl
    //                 ${isActive ? 'text-green-700 border-x-3 border-green-800' : 'text-white/70'}
    //               `}
    //             >
    //               {route.label}
    //             </Link>
    //           )
    //         })}
    //       </Card>
    //     </div>
    //   )}
    // </>
  )
}
