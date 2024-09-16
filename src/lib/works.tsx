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
    company: 'TazkiyaWorks',
    position: 'UI/UX Designer',
    year: '2023 - Present',
    url: 'works/portfolio',
  },
  {
    company: 'Ecommerce App',
    position: 'Web Developer',
    year: '2022 - 2023',
    url: 'works/portfolio',
  },
  {
    company: 'OnSunshine',
    position: 'Mobile App Developer',
    year: '2024 - Present',
    url: 'works/portfolio',
  },
  {
    company: 'Poster Design',
    position: 'Graphic Designer',
    year: '2021 - 2022',
    url: 'works/portfolio',
  },
  {
    company: 'Corporate Website',
    position: 'UI/UX Designer',
    year: '2020 - 2021',
    url: 'works/portfolio',
  },
];

const works: WorkData[] = [
  {
    img_url: 'https://via.placeholder.com/400x300.png?text=Portfolio',
    id: 'portfolio',
    external: true,
    year: '2023',
    category: 'UI/UX Design',
    width: 400,
    height: 300,
    url: 'https://tazkiyaworks.fun',
  },
  {
    img_url: 'https://via.placeholder.com/450x300.png?text=Ecommerce+App',
    id: 'ecommerce-app',
    external: false,
    year: '2022',
    category: 'Web Development',
    width: 450,
    height: 300,
    url: '/works/ecommerce',
  },
  {
    img_url: 'https://via.placeholder.com/380x250.png?text=Attendance+App',
    id: 'attendance-app',
    external: true,
    year: '2024',
    category: 'Mobile App',
    width: 380,
    height: 250,
    url: 'https://onsunshine.app',
  },
  {
    img_url: 'https://via.placeholder.com/350x450.png?text=Poster+Design',
    id: 'poster-design',
    external: false,
    year: '2021',
    category: 'Graphic Design',
    width: 350,
    height: 450,
    url: '/works/poster-design',
  },
  {
    img_url: 'https://via.placeholder.com/500x400.png?text=Corporate+Website',
    id: 'corporate-website',
    external: false,
    year: '2020',
    category: 'UI/UX Design',
    width: 500,
    height: 400,
    url: '/works/corporate-website',
  },
];

let worksReversed = works.reverse();

export { works, worksReversed, worksExperience };
