// Homepage
export const HOME_PAGE_PORTOFOLIO = [
  {
    id: 1,
    tag: 'Prefeitura',
    title: 'Casa Pet',
    description:
      'Criação de peças gráficas para o programa Casa Pet da prefeitura, incluindo materiais de divulgação para adoção responsável e cuidados com animais.',
    images: [
      '/casa-pet/2.webp',
      '/casa-pet/7.webp',
      '/casa-pet/6.webp',
      '/casa-pet/9.webp',
    ],
    style: 'grid-cols-2 max-[450px]:grid-cols-2',
    aspect: 'aspect-video',
  },
  {
    id: 2,
    tag: 'Prefeitura',
    title: 'NEPS',
    description:
      'Design de campanhas educativas e material institucional para o Núcleo de Educação e Promoção à Saúde, com foco em comunicação visual acessível e informativa.',
    images: ['/neps/6.webp', '/neps/8.webp'],
    style: 'grid-cols-2',
    aspect: 'aspect-square',
  },

  {
    id: 3,
    tag: 'Prefeitura',
    title: 'SEMMAI',
    description:
      'Desenvolvimento de materiais visuais para a Secretaria Municipal de Meio Ambiente, com sinalização de áreas de preservação, pedais ecológicos e eventos ambientais.',
    images: [
      '/semmai/1.webp',
      '/semmai/2.webp',
      '/semmai/5.webp',
      '/semmai/6.webp',
    ],
    style: 'grid-cols-2',
    aspect: 'aspect-video',
  },
  {
    id: 4,
    tag: 'Prefeitura',
    title: 'SMS',
    description:
      'Peças visuais para a Secretaria Municipal de Saúde, incluindo campanhas de vacinação, eventos sazonais e comunicados oficiais com identidade visual consistente.',
    images: ['/sms/1.webp', '/sms/10.webp'],
    style: 'grid-cols-2',
    aspect: 'aspect-square',
  },
  {
    id: 5,
    tag: 'Faculdade',
    title: 'UNA — Volume I',
    description:
      'Projetos acadêmicos e criativos desenvolvidos para o Centro Universitário UNA, incluindo ilustrações, artes para eventos e materiais promocionais.',
    images: ['/una/9.webp', '/una/18.webp', '/una/23.webp', '/una/12.webp'],
    style: 'grid-cols-2',
    aspect: 'aspect-video',
  },
  {
    id: 6,
    tag: 'Faculdade',
    title: 'UNA — Volume II',
    description:
      'Criação de logotipos e identidade visual para grupos de estudo e projetos acadêmicos, como o GEACEMIV, com guias de cores e aplicações da marca.',
    images: ['/una/26.webp', '/una/24.webp'],
    style: 'grid-cols-2',
    aspect: 'aspect-square',
  },
  {
    id: 7,
    tag: 'Freelance',
    title: 'Outros Trabalhos',
    description:
      'Projetos diversos realizados para clientes e causas pessoais, incluindo artes religiosas, ilustrações temáticas e trabalhos de design independentes.',
    images: [
      '/others/7.webp',
      '/others/8.webp',
      '/others/10.webp',
      '/others/13.webp',
    ],
    style: 'grid-cols-2',
    aspect: 'aspect-video',
  },
]

// Especific Page
export type Album = {
  id: string
  title: string
  cover: string
  photos: Array<string>
}

export const albums: Array<Album> = [
  {
    id: '1',
    title: 'PREFEITURA - CASA PET',
    cover: '/casa-pet/1.webp',
    photos: [
      '/casa-pet/2.webp',
      '/casa-pet/1.webp',
      '/casa-pet/3.webp',
      '/casa-pet/4.webp',
      '/casa-pet/5.webp',
      '/casa-pet/10.webp',
      '/casa-pet/6.webp',
      '/casa-pet/11.webp',
      '/casa-pet/8.webp',
      '/casa-pet/7.webp',
      '/casa-pet/9.webp',
      '/casa-pet/12.webp',
    ],
  },
  {
    id: '2',
    title: 'PREFEITURA - NEPS',
    cover: '/neps/6.webp',
    photos: [
      '/neps/8.webp',
      '/neps/2.webp',
      '/neps/3.webp',
      '/neps/4.webp',
      '/neps/1.webp',
      '/neps/6.webp',
      '/neps/7.webp',
    ],
  },
  {
    id: '3',
    title: 'PREFEITURA - SMS ',
    cover: '/sms/11.webp',
    photos: [
      '/sms/1.webp',
      '/sms/2.webp',
      '/sms/3.webp',
      '/sms/4.webp',
      '/sms/5.webp',
      '/sms/6.webp',
      '/sms/7.webp',
      '/sms/8.webp',
      '/sms/9.webp',
      '/sms/10.webp',
      '/sms/11.webp',
    ],
  },
  {
    id: '4',
    title: 'PREFEITURA - SEMMAI',
    cover: '/semmai/2.webp',
    photos: [
      '/semmai/1.webp',
      '/semmai/2.webp',
      '/semmai/3.webp',
      '/semmai/4.webp',
      '/semmai/5.webp',
      '/semmai/6.webp',
    ],
  },
  {
    id: '5',
    title: 'FACULDADE - (UNA) I',
    cover: '/una/6.webp',
    photos: [
      '/una/14.webp',

      '/una/2.webp',
      '/una/3.webp',
      '/una/1.webp',
      '/una/5.webp',
      '/una/4.webp',
      '/una/7.webp',
      '/una/8.webp',
      '/una/9.webp',
      '/una/10.webp',
      '/una/11.webp',
      '/una/12.webp',
      '/una/13.webp',
      '/una/6.webp',
    ],
  },
  {
    id: '6',
    title: 'FACULDADE -(UNA) II',
    cover: '/una/23.webp',
    photos: [
      '/una/18.webp',
      '/una/24.webp',
      '/una/16.webp',
      '/una/17.webp',
      '/una/18.webp',
      '/una/19.webp',
      '/una/20.webp',
      '/una/21.webp',
      '/una/22.webp',
      '/una/23.webp',
      '/una/26.webp',
      '/una/27.webp',
      '/una/15.webp',
    ],
  },
  {
    id: '7',
    title: 'OUTROS TRABALHOS',
    cover: '/others/13.webp',
    photos: [
      '/others/8.webp',
      '/others/2.webp',
      '/others/1.webp',
      '/others/5.webp',
      '/others/6.webp',
      '/others/7.webp',
      '/others/8.webp',
      '/others/9.webp',
      '/others/10.webp',
      '/others/11.webp',
      '/others/12.webp',
      '/others/13.webp',
      '/others/14.webp',
      '/others/15.webp',
    ],
  },
]
