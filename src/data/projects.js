export const projects = [
  {
    id: 1,
    title: "Room Homepage",
    description: "",
    tags: ["JavaScript", "HTML5", "CSS3"],
    demoUrl: "https://room-homepage-master-eta.vercel.app",
    repoUrl: "https://github.com/abok-cymk/room-homepage-master/",
    featured: true,
  },
  {
    id: 2,
    title: "Product List with cart",
    description: "",
    tags: ["JavaScript", "HTML5", "CSS3"],
    demoUrl: "https://abok-cymk.github.io/product-list-with-cart-main/",
    repoUrl: "https://github.com/abok-cymk/product-list-with-cart-main",
    featured: true,
  },
  {
    id: 3,
    title: "Time Tracking Dashboard",
    description: "",
    tags: ["JavaScript", "HTML5", "CSS3"],
    demoUrl: "https://time-tracking-dashboard-main-six-omega.vercel.app/",
    repoUrl: "https://github.com/abok-cymk/time-tracking-dashboard-main",
    featured: true,
  },
  {
    id: 4,
    title: "REST Countries API with Color Theme Switcher",
    description: "",
    tags: ["JavaScript", "HTML5", "CSS3"],
    demoUrl:
      "https://abok-cymk.github.io/rest-countries-api-with-color-theme-switcher-master/",
    repoUrl:
      "https://github.com/abok-cymk/rest-countries-api-with-color-theme-switcher-master",
    featured: true,
  },
  {
    id: 5,
    title: "E-commerce Product Page",
    description: "",
    tags: ["JavaScript", "HTML5", "CSS3"],
    demoUrl: "https://abok-cymk.github.io/ecommerce-product-page-main/",
    repoUrl: "https://github.com/abok-cymk/ecommerce-product-page-main",
    featured: true,
  },
];


export const allTags = [...new Set(projects.flatMap(p => p.tags))].sort()