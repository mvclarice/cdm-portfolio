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
    cover: '/casa-pet/1.png',
    photos: [
      '/casa-pet/2.png',
      '/casa-pet/1.png',
      '/casa-pet/3.png',
      '/casa-pet/4.png',
      '/casa-pet/5.png',
      '/casa-pet/10.png',
      '/casa-pet/6.png',
      '/casa-pet/11.png',
      '/casa-pet/8.png',
      '/casa-pet/7.png',
      '/casa-pet/9.png',
    ],
  },
  {
    id: '2',
    title: 'PREFEITURA - NEPS',
    cover: '/neps/4.png',
    photos: [
      '/neps/5.png',
      '/neps/2.png',
      '/neps/3.png',
      '/neps/4.png',
      '/neps/1.png',
      '/neps/6.png',
      '/neps/7.png',
      '/neps/8.png',
    ],
  },
  {
    id: '3',
    title: 'PREFEITURA - SMS ',
    cover: '/sms/7_.png',
    photos: [
      '/sms/11_.png',
      '/sms/1_.png',
      '/sms/2_.png',
      '/sms/3_.png',
      '/sms/4_.png',
      '/sms/5_.png',
      '/sms/6_.png',
      '/sms/7_.png',
      '/sms/8_.png',
      '/sms/9_.png',
      '/sms/10_.png',
    ],
  },
  {
    id: '4',
    title: 'PREFEITURA - SEMMAI',
    cover: '/semmai/1_.png',
    photos: [
      '/semmai/2_.png',
      '/semmai/1_.png',
      '/semmai/3_.png',
      '/semmai/4_.png',
      '/semmai/5_.png',
      '/semmai/6_.png',
    ],
  },
  {
    id: '5',
    title: 'FACULDADE (UNA) I',
    cover: '/',
    photos: ['/'],
  },
  {
    id: '6',
    title: 'FACULDADE (UNA) II',
    cover: '/',
    photos: ['/'],
  },
  {
    id: '7',
    title: 'OUTROS TRABALHOS',
    cover: '/',
    photos: ['/'],
  },
]
