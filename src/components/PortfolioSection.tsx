import { SectionLabel } from './SectionLabel'
import { PortfolioItem } from './subcomponents/PortfolioItem'

const MY_PORTOFOLIO = [
  {
    id: 1,
    tag: 'Prefeitura',
    title: 'Casa Pet',
    description:
      'Criação de peças gráficas para o programa Casa Pet da prefeitura, incluindo materiais de divulgação para adoção responsável e cuidados com animais.',
    images: ['', '', '', ''],
  },
  {
    id: 2,
    tag: 'Prefeitura',
    title: 'NEPS',
    description:
      'Design de campanhas educativas e material institucional para o Núcleo de Educação e Promoção à Saúde, com foco em comunicação visual acessível e informativa.',
    images: ['', '', '', ''],
  },

  {
    id: 3,
    tag: 'Prefeitura',
    title: 'SMS',
    description:
      'Peças visuais para a Secretaria Municipal de Saúde, incluindo campanhas de vacinação, eventos sazonais e comunicados oficiais com identidade visual consistente.',
    images: ['', '', '', ''],
  },
  {
    id: 4,
    tag: 'Prefeitura',
    title: 'SEMMAI',
    description:
      'Desenvolvimento de materiais visuais para a Secretaria Municipal de Meio Ambiente, com sinalização de áreas de preservação, pedais ecológicos e eventos ambientais.',
    images: ['', '', '', ''],
  },
  {
    id: 5,
    tag: 'Faculdade',
    title: 'UNA — Volume I',
    description:
      'Projetos acadêmicos e criativos desenvolvidos para o Centro Universitário UNA, incluindo ilustrações, artes para eventos e materiais promocionais.',
    images: ['', '', '', ''],
  },
  {
    id: 6,
    tag: 'Faculdade',
    title: 'UNA — Volume II',
    description:
      'Criação de logotipos e identidade visual para grupos de estudo e projetos acadêmicos, como o GEACEMIV, com guias de cores e aplicações da marca.',
    images: ['', '', '', ''],
  },
  {
    id: 7,
    tag: 'Freelance',
    title: 'Outros Trabalhos',
    description:
      'Projetos diversos realizados para clientes e causas pessoais, incluindo artes religiosas, ilustrações temáticas e trabalhos de design independentes.',
    images: ['', '', '', ''],
  },
]

export function PortfolioSection() {
  return (
    <div className="h-full flex flex-col items-center justify-center w-full">
      <SectionLabel rightDivider={true}>Trabalhos Selecionados</SectionLabel>

      <h2 className="text-5xl font-serif font-semibold tracking-tight">
        Portfólio
      </h2>

      {MY_PORTOFOLIO.map((item, index) => (
        <PortfolioItem
          key={`${item.id}_${index}`}
          number={item.id}
          tag={item.tag}
          title={item.title}
          description={item.description}
          images={[1, 2, 3, 4]}
        />
      ))}
    </div>
  )
}
