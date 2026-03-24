// PROJECTS
export type Project = {
  id: number
  slug: string
  tag: string
  title: string
  year: string
  ferramentas: string
  description: string
  style: string
  aspect: string
  client: string
  mainBanner: string
  homeImages: Array<string>
  projectImages: Array<{
    src: string
    type: 'vertical' | 'horizontal' | 'full'
  }>
  publi: {
    icon: string
    social: string
    client?: string
    data: string
    link?: string
  }
}

export const HOME_PAGE_PORTOFOLIO: Array<Project> = [
  {
    id: 1,
    slug: 'casa-pet',
    tag: 'Prefeitura',
    title: 'Casa Pet',
    year: '2024-2026',
    ferramentas: 'Canva, Photoshop, GPT-5.4',
    description:
      'Criação de peças gráficas para o programa Casa Pet da prefeitura, incluindo materiais de divulgação para adoção responsável e cuidados com animais.',
    style: 'grid-cols-2 max-[450px]:grid-cols-2',
    aspect: 'aspect-video',
    client: 'Prefeitura Municipal',
    mainBanner: '/casa-pet/2.webp',
    homeImages: [
      '/casa-pet/2.webp',
      '/casa-pet/7.webp',
      '/casa-pet/6.webp',
      '/casa-pet/9.webp',
    ],
    projectImages: [
      { src: '/casa-pet/8.webp', type: 'full' },
      { src: '/casa-pet/1.webp', type: 'vertical' },
      { src: '/casa-pet/3.webp', type: 'vertical' },
      { src: '/casa-pet/4.webp', type: 'vertical' },
      { src: '/casa-pet/2.webp', type: 'horizontal' },
      { src: '/casa-pet/5.webp', type: 'vertical' },
      { src: '/casa-pet/12.webp', type: 'vertical' },
      { src: '/casa-pet/11.webp', type: 'vertical' },
      { src: '/casa-pet/7.webp', type: 'horizontal' },
      { src: '/casa-pet/9.webp', type: 'horizontal' },
      { src: '/casa-pet/6.webp', type: 'horizontal' },
      { src: '/casa-pet/10.webp', type: 'full' },
    ],
    publi: {
      icon: '/instagram.svg',
      social: 'Instagram',
      client: '@casapet',
      data: 'setembro de 2025',
      link: 'https://www.instagram.com/p/DO8VhzADT_j/?igsh=NnIwOTRpc3Y5cWt5',
    },
  },
  {
    id: 2,
    slug: 'neps',
    tag: 'Prefeitura',
    title: 'NEPS',
    year: '2024-2026',
    ferramentas: 'Canva, Photoshop, GPT-5.4',
    description:
      'Design de campanhas educativas e material institucional para o Núcleo de Educação e Promoção à Saúde, com foco em comunicação visual acessível e informativa.',
    style: 'grid-cols-2',
    aspect: 'aspect-square',
    client: 'Prefeitura Municipal',
    mainBanner: '/neps/6.webp',
    homeImages: ['/neps/6.webp', '/neps/8.webp'],
    projectImages: [
      { src: '/neps/8.webp', type: 'vertical' },
      { src: '/neps/6.webp', type: 'vertical' },
      { src: '/neps/7.webp', type: 'vertical' },
      { src: '/neps/5.webp', type: 'vertical' },
      { src: '/neps/4.webp', type: 'full' },
      { src: '/neps/2.webp', type: 'vertical' },
      { src: '/neps/1.webp', type: 'horizontal' },
    ],
    publi: {
      icon: '/instagram.svg',
      social: 'Instagram',
      data: 'março de 2025',
      link: '',
    },
  },
  {
    id: 3,
    slug: 'semmai',
    tag: 'Prefeitura',
    title: 'SEMMAI',
    year: '2024-2026',
    ferramentas: 'Canva, Photoshop, GPT-5.4',
    description:
      'Desenvolvimento de materiais visuais para a Secretaria Municipal de Meio Ambiente, com sinalização de áreas de preservação, pedais ecológicos e eventos ambientais.',
    style: 'grid-cols-2',
    aspect: 'aspect-video',
    client: 'Prefeitura Municipal',
    mainBanner: '/casa-pet/7.webp',
    homeImages: [
      '/semmai/1.webp',
      '/semmai/2.webp',
      '/semmai/5.webp',
      '/semmai/6.webp',
    ],
    projectImages: [
      { src: '/semmai/1.webp', type: 'vertical' },
      { src: '/semmai/2.webp', type: 'full' },
      { src: '/semmai/3.webp', type: 'vertical' },
      { src: '/semmai/4.webp', type: 'vertical' },
      { src: '/semmai/5.webp', type: 'vertical' },
      { src: '/semmai/6.webp', type: 'vertical' },
    ],

    publi: {
      icon: '/instagram.svg',
      social: 'Instagram',
      data: 'setembro de 2025',
      link: 'https://www.instagram.com/p/DOv1bg2jRGR/?igsh=MWxkNGZwczlpdTMwMQ==',
    },
  },
  {
    id: 4,
    slug: 'sms',
    tag: 'Prefeitura',
    title: 'SMS',
    year: '2024-2026',
    ferramentas: 'Canva, Photoshop, GPT-5.4',
    description:
      'Peças visuais para a Secretaria Municipal de Saúde, incluindo campanhas de vacinação, eventos sazonais e comunicados oficiais com identidade visual consistente.',
    style: 'grid-cols-2',
    aspect: 'aspect-square',
    client: 'Prefeitura Municipal',
    mainBanner: '/sms/11.webp',
    homeImages: ['/sms/1.webp', '/sms/10.webp'],
    projectImages: [
      { src: '/sms/1.webp', type: 'vertical' },
      { src: '/sms/2.webp', type: 'horizontal' },
      { src: '/sms/3.webp', type: 'vertical' },
      { src: '/sms/4.webp', type: 'vertical' },
      { src: '/sms/5.webp', type: 'vertical' },
      { src: '/sms/6.webp', type: 'vertical' },
      { src: '/sms/7.webp', type: 'vertical' },
      { src: '/sms/8.webp', type: 'vertical' },
      { src: '/sms/9.webp', type: 'vertical' },
      { src: '/sms/10.webp', type: 'vertical' },
      { src: '/sms/11.webp', type: 'vertical' },
    ],
    publi: {
      icon: '/instagram.svg',
      social: 'Instagram',
      data: 'julho de 2025',
      link: 'https://www.instagram.com/p/DMgV7KBRtak/?igsh=NDhnNzQ1Y3ZtcHFi',
    },
  },
  {
    id: 5,
    slug: 'una-volume-1',
    tag: 'Faculdade',
    title: 'UNA — Volume I',
    year: '2023-2026',
    ferramentas: 'Canva, Photoshop, GPT-5.4',
    description:
      'Projetos acadêmicos e criativos desenvolvidos para o Centro Universitário UNA, incluindo ilustrações, artes para eventos e materiais promocionais.',
    style: 'grid-cols-2',
    aspect: 'aspect-video',
    client: 'Faculdade Una',
    mainBanner: '/una/18.webp',
    homeImages: ['/una/9.webp', '/una/18.webp', '/una/23.webp', '/una/12.webp'],
    projectImages: [
      { src: '/una/2.webp', type: 'vertical' },
      { src: '/una/1.webp', type: 'vertical' },
      { src: '/una/5.webp', type: 'vertical' },
      { src: '/una/4.webp', type: 'vertical' },
      { src: '/una/3.webp', type: 'vertical' },
      { src: '/una/6.webp', type: 'vertical' },
      { src: '/una/14.webp', type: 'vertical' },
      { src: '/una/7.webp', type: 'horizontal' },
      { src: '/una/8.webp', type: 'horizontal' },
      { src: '/una/9.webp', type: 'horizontal' },
      { src: '/una/10.webp', type: 'horizontal' },
      { src: '/una/12.webp', type: 'horizontal' },
      { src: '/una/13.webp', type: 'vertical' },
      { src: '/una/11.webp', type: 'vertical' },
    ],
    publi: {
      icon: '/instagram.svg',
      social: 'Instagram',
      data: 'abril de 2025',
      link: 'https://www.instagram.com/p/DIMdmLNOEiw/?igsh=OGIxa3drd2Z4Y2lv',
    },
  },
  {
    id: 6,
    slug: 'una-volume-2',
    tag: 'Faculdade',
    title: 'UNA — Volume II',
    year: '2023-2026',
    ferramentas: 'Canva, Photoshop, GPT-5.4',
    description:
      'Criação de logotipos e identidade visual para grupos de estudo e projetos acadêmicos, como o GEACEMIV, com guias de cores e aplicações da marca.',
    style: 'grid-cols-2',
    aspect: 'aspect-square',
    client: 'Faculdade Una',
    mainBanner: '/una/23.webp',
    homeImages: ['/una/26.webp', '/una/24.webp'],
    projectImages: [
      { src: '/una/15.webp', type: 'full' },
      { src: '/una/16.webp', type: 'full' },
      { src: '/una/18.webp', type: 'horizontal' },
      { src: '/una/23.webp', type: 'horizontal' },
      { src: '/una/26.webp', type: 'vertical' },
      { src: '/una/24.webp', type: 'vertical' },
      { src: '/una/21.webp', type: 'vertical' },
      { src: '/una/17.webp', type: 'horizontal' },
      { src: '/una/19.webp', type: 'vertical' },
      { src: '/una/20.webp', type: 'vertical' },
      { src: '/una/22.webp', type: 'vertical' },
      { src: '/una/25.webp', type: 'vertical' },
      { src: '/una/27.webp', type: 'vertical' },
    ],
    publi: {
      icon: '/instagram.svg',
      social: 'Instagram',
      data: 'abril de 2025',
      link: '',
    },
  },
  {
    id: 7,
    slug: 'outros-trabalhos',
    tag: 'Freelance',
    title: 'Outros Trabalhos',
    year: '2022-2026',
    ferramentas: 'Canva, Photoshop, GPT-5.4',
    description:
      'Projetos diversos realizados para clientes e causas pessoais, incluindo artes religiosas, ilustrações temáticas e trabalhos de design independentes.',
    style: 'grid-cols-2',
    aspect: 'aspect-video',
    client: 'Clientes Diversos',
    mainBanner: '/others/13.webp',
    homeImages: [
      '/others/7.webp',
      '/others/8.webp',
      '/others/10.webp',
      '/others/13.webp',
    ],
    projectImages: [
      { src: '/others/8.webp', type: 'horizontal' },
      { src: '/others/13.webp', type: 'horizontal' },
      { src: '/others/2.webp', type: 'vertical' },
      { src: '/others/1.webp', type: 'vertical' },
      { src: '/others/14.webp', type: 'vertical' },
      { src: '/others/15.webp', type: 'vertical' },
      { src: '/others/7.webp', type: 'vertical' },
      { src: '/others/11.webp', type: 'vertical' },
      { src: '/others/12.webp', type: 'vertical' },
      { src: '/others/6.webp', type: 'vertical' },
      { src: '/others/9.webp', type: 'vertical' },
      { src: '/others/10.webp', type: 'horizontal' },
      { src: '/others/5.webp', type: 'vertical' },
    ],
    publi: {
      icon: '/instagram.svg',
      social: 'Instagram',
      data: 'novembro de 2025',
      link: '',
    },
  },
] as const
