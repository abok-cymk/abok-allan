export const projects = [
    {
        id: 1,
        title: "",
        description: "",
        tags: [],
        demoUrl: "",
        repoUrl: "https://github.com/abok-cymk/",
        featured: true,
    },
     {
        id: 2,
        title: "",
        description: "",
        tags: [],
        demoUrl: "",
        repoUrl: "https://github.com/abok-cymk/",
        featured: true,
    },
    {
        id: 3,
        title: "",
        description: "",
        tags: [],
        demoUrl: "",
        repoUrl: "https://github.com/abok-cymk/",
        featured: true,
    },
    {
        id: 4,
        title: "",
        description: "",
        tags: [],
        demoUrl: "",
        repoUrl: "https://github.com/abok-cymk/",
        featured: true,
    },
    {
        id: 5,
        title: "",
        description: "",
        tags: [],
        demoUrl: "",
        repoUrl: "https://github.com/abok-cymk/",
        featured: true,
    },
]


export const allTags = [...new Set(projects.flatMap(p => p.tags))].sort()