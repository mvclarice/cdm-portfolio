import { HeroSection, PortfolioSection } from '@/components'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const MAIN_PHOTOS = [
  {
    src: '/una/18.webp',
    class: 'sm:col-span-2 max-[450px]:aspect-square object-cover',
  },
  {
    src: '/casa-do-gato.webp',
    class: 'max-[450px]:aspect-square aspect-video sm:h-85 w-full object-cover',
  },
  {
    src: '/una/26.webp',
    class: 'max-[450px]:aspect-square aspect-video sm:h-85 w-full object-cover',
  },
]

export default function HomePage() {
  return (
    <>
      {/* BACKGROUND */}
      <div className="fixed inset-0 z-[-1] bg-gradient" />

      <main className="flex flex-col gap-20 px-6 lg:px-24 py-20 overflow-x-hidden">
        {/* Hero Section */}
        <section id="inicio">
          <HeroSection />
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="min-h-full w-full">
          <PortfolioSection />
        </section>

        {/* Contact Section */}
        <section id="contato" className="min-h-full w-full">
          Contact
        </section>
      </main>
    </>
  )
}

// export default function HomePage() {
//   const [selectedPhoto, setSelectedPhoto] = useState<string | undefined>(
//     undefined,
//   )

//   return (
//     <section className="min-h-screen px-6 py-24 flex flex-col items-center gap-14">
//       {/* Logo */}
//       <ProjectLogo />
//       {/* Hero text */}
//       <div className="flex flex-col gap-8">
//         <div className="flex flex-col items-center text-center max-w-2xl">
//           <h1 className="text-white uppercase text-3xl md:text-4xl font-extrabold">
//             Design gráfico e artes visuais
//           </h1>

//           <p className="mt-4 text-white/80 max-sm:text-lg text-xl">
//             Produção de imagens para diferentes projetos.
//           </p>
//         </div>
//         {/* CTAs */}
//         <div className="flex gap-6 flex-wrap justify-center text-white">
//           <Link className="max-sm:w-full" to="/portfolio">
//             <Button className="max-sm:w-full " variant={'primary'} size={'md'}>
//               Ver portfólio
//             </Button>
//           </Link>

//           <Link className="max-sm:w-full" to="/contact">
//             <Button className="max-sm:w-full" variant={'secondary'} size={'md'}>
//               Entrar em contato
//             </Button>
//           </Link>
//         </div>
//       </div>

//       <div className="flex flex-col items-center gap-4 my-4">
//         <p className="text-white max-md:text-2xl text-3xl text-center font-bold uppercase">
//           Prévia de alguns trabalhos:
//         </p>

//         {/* Some projects */}
//         <Card className="max-w-4xl w-full p-6">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {/* Main Photos */}
//             {MAIN_PHOTOS.map((photo) => (
//               <img
//                 key={photo.src}
//                 src={photo.src}
//                 className={`${photo.class} bg-green-300/10 rounded-lg hover:scale-102 cursor-pointer`}
//                 onClick={() => setSelectedPhoto(photo.src)}
//               />
//             ))}
//           </div>
//         </Card>
//       </div>
//       {/* View the selected image in full size */}
//       <LightBox
//         src={selectedPhoto}
//         onClose={() => setSelectedPhoto(undefined)}
//       />
//     </section>
//   )
// }
