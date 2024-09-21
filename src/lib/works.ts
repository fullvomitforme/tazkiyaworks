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

interface WorksExperience {
  company: string;
  position: string;
  year: string;
  url: string;
}

const worksExperience: WorksExperience[] = [
  {
    company: 'On Indonesia',
    position: 'UI/UX Designer',
    year: '2024 - Present',
    url: 'works/onindonesia-ui-ux',
  },
  {
    company: 'On Indonesia',
    position: 'Quality Assurance',
    year: '2023 - 2024',
    url: 'works/onindonesia-quality-assurance',
  },
  {
    company: 'Ondelivery Indonesia',
    position: 'Administrative Specialist',
    year: '2022 - 2023',
    url: 'works/ondelivery-administrative-specialist',
  },
  {
    company: 'PT. Printcom Solusi',
    position: 'Graphic Designer',
    year: '2021 - 2022',
    url: 'works/printcom-graphic-designer',
  },
  {
    company: 'Jakarta International Expo (JIExpo)',
    position: 'Intern Graphic Designer',
    year: '2020 - 2020',
    url: 'works/jiexpo-intern-graphic-designer',
  },
  {
    company: 'Heulaula Studios',
    position: 'Graphic Designer',
    year: '2019 - Present',
    url: 'works/heulaulastudios-graphic-designer',
  },
];

const works: WorkData[] = [
  {
    img_url:
      'https://storage.onindonesia.id/tazkiyaworks/public/work/onmarket/onmarket-card.png',
    id: 'Onmarket Website',
    external: true,
    year: '2024',
    category: 'UI/UX Design',
    width: 450 / 1.5,
    height: 300 / 1.5,
    url: 'https://onmarket.id/',
  },
  {
    img_url:
      'https://storage.onindonesia.id/tazkiyaworks/public/work/ondelivery/ondelivery-card.png',
    id: 'Ondelivery Website',
    external: true,
    year: '2024',
    category: 'UI/UX Design',
    width: 950 / 2.5,
    height: 550 / 2.5,
    url: 'https://ondelivery.id/',
  },
  {
    img_url:
      'https://storage.onindonesia.id/tazkiyaworks/public/work/heulaulastudios/infographic-sea.jpg',
    id: 'Sea Infographic',
    external: false,
    year: '2024',
    category: 'Graphic Design',
    width: 724 / 2.5,
    height: 1024 / 2.5,
    url: 'works/sea-infographic',
  },
  {
    img_url:
      'https://storage.onindonesia.id/tazkiyaworks/public/work/heulaulastudios/sunvawe_artwork.jpg',
    id: 'Sunwave Single Artwork Design',
    external: false,
    year: '2024',
    category: 'Graphic Design',
    width: 250,
    height: 250,
    url: 'works/sunvawe-artwork',
  },
  {
    img_url:
      'https://storage.onindonesia.id/tazkiyaworks/public/work/heulaulastudios/pesta-hari-akhir-project.jpg',
    id: 'Pesta Hari Akhir',
    external: false,
    year: '2024',
    category: 'Graphic Design',
    width: 250,
    height: 250,
    url: 'works/pesta-hari-akhir',
  },
  {
    img_url:
      'https://storage.onindonesia.id/tazkiyaworks/public/work/heulaulastudios/pt-saudara-bintang-bersama.jpg',
    id: 'PT. Saudara Bintang Bersama Branding',
    external: false,
    year: '2024',
    category: 'Graphic Design',
    width: 480,
    height: 270,
    url: 'works/pt-saudara-bintang-bersama',
  },
  // {
  //   img_url: 'https://via.placeholder.com/400x300.png?text=Portfolio',
  //   id: 'portfolio',
  //   external: true,
  //   year: '2023',
  //   category: 'UI/UX Design',
  //   width: 400,
  //   height: 300,
  //   url: 'https://tazkiyaworks.fun',
  // },

  // {
  //   img_url: 'https://via.placeholder.com/380x250.png?text=Attendance+App',
  //   id: 'attendance-app',
  //   external: true,
  //   year: '2024',
  //   category: 'Mobile App',
  //   width: 380,
  //   height: 250,
  //   url: 'https://onsunshine.app',
  // },
  // {
  //   img_url: 'https://via.placeholder.com/350x450.png?text=Poster+Design',
  //   id: 'poster-design',
  //   external: false,
  //   year: '2021',
  //   category: 'Graphic Design',
  //   width: 350,
  //   height: 450,
  //   url: '/works/poster-design',
  // },
  // {
  //   img_url: 'https://via.placeholder.com/500x400.png?text=Corporate+Website',
  //   id: 'corporate-website',
  //   external: false,
  //   year: '2020',
  //   category: 'UI/UX Design',
  //   width: 500,
  //   height: 400,
  //   url: '/works/corporate-website',
  // },
];

let worksReversed = works.reverse();

export { works, worksReversed, worksExperience };
