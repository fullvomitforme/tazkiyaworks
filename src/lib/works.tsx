interface WorkData {
  img_url: string;
  id: string;
  external: boolean;
  year: string;
  category: string;
  width: number;
  height: number;
  url: string;
}

const works: WorkData[] = [
  {
    img_url: '/work/onmarket/onmarket-card.png',
    id: 'onmarket.id',
    external: false,
    year: '2024',
    category: 'ui/ux design',
    width: 500 / 1.5,
    height: 200 / 1.5,
    url: '/works/onmarket',
  },
  {
    img_url: '/work/onmarket/ondelivery-card.png',
    id: 'ondelivery.id',
    external: false,
    year: '2024',
    category: 'ui/ux design',
    width: 500 / 1.5,
    height: 200 / 1.5,
    url: '/works/ondelivery',
  },
  {
    img_url: '/work/onmarket/onmarket-card.png',
    id: 'onmarket.id',
    external: false,
    year: '2024',
    category: 'ui/ux design',
    width: 500 / 1.5,
    height: 200 / 1.5,
    url: '/works/onmarket',
  },
  {
    img_url: '/work/onmarket/ondelivery-card.png',
    id: 'ondelivery.id',
    external: false,
    year: '2024',
    category: 'ui/ux design',
    width: 500 / 1.5,
    height: 200 / 1.5,
    url: '/works/ondelivery',
  },
  {
    img_url: '/work/onmarket/onmarket-card.png',
    id: 'onmarket.id',
    external: false,
    year: '2024',
    category: 'ui/ux design',
    width: 500 / 1.5,
    height: 200 / 1.5,
    url: '/works/onmarket',
  },
  {
    img_url: '/work/onmarket/ondelivery-card.png',
    id: 'ondelivery.id',
    external: false,
    year: '2024',
    category: 'ui/ux design',
    width: 500 / 1.5,
    height: 200 / 1.5,
    url: '/works/ondelivery',
  },
  {
    img_url: '/work/onmarket/onmarket-card.png',
    id: 'onmarket.id',
    external: false,
    year: '2024',
    category: 'ui/ux design',
    width: 500 / 1.5,
    height: 200 / 1.5,
    url: '/works/onmarket',
  },
  {
    img_url: '/work/onmarket/ondelivery-card.png',
    id: 'ondelivery.id',
    external: false,
    year: '2024',
    category: 'ui/ux design',
    width: 500 / 1.5,
    height: 200 / 1.5,
    url: '/works/ondelivery',
  },
];

let worksReversed = works.slice().reverse();

export { works, worksReversed };
