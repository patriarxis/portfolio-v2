import { IProjects } from "@domain";

export const projects: IProjects = {
  kardias: {
    name: "Kardias",
    card: {
      name: "Kardias",
      description:
        "3LL team crafted Kardias Luxury Suites' brand identity & booking website, enhancing UX, refining design, and ensuring seamless integration with booking platforms. Expertly navigating challenges, the team orchestrated a seamless blend of creativity and technology, resulting in a visually stunning, user-friendly, and efficient booking engine, delighting both client and guests.",
      image: "/assets/projects/kardias/images/kardias-logo-mockup.png",
      url: "/projects/kardias",
      tags: ["React", "Tailwind", "Figma", "Illustrator", "Vite"],
    },
    display: {
      src: "/assets/projects/kardias/readme.md",
      metaInfo: {
        name: "readme.md",
        directory: "~/kardias/readme.md",
        type: "Markdown",
        size: "14KB",
        date: "22-10-2023",
      },
    },
    carousel: {
      images: [
        "/assets/projects/kardias/images/kardias-bedroom-mockup.jpg",
        "/assets/projects/kardias/images/kardias-business-card-gold.jpg",
        "/assets/projects/kardias/images/kardias-iconography.png",
        "/assets/projects/kardias/images/kardias-logo-mockup.png",
        "/assets/projects/kardias/images/kardias-sign-mockup.jpg",
        "/assets/projects/kardias/images/kardias-ui-booking.png",
        "/assets/projects/kardias/images/kardias-ui-home.png",
        "/assets/projects/kardias/images/kardias-ui-suite.png",
        "/assets/projects/kardias/images/kardias-ui-suites.png",
      ],
      metaInfo: {
        name: "Images",
        directory: "~/kardias/images",
        type: "Folder",
        size: "6.5MB",
        date: "22-10-2023",
      },
    },
    warning: {
      message: "** Look here for more info **",
      links: [
        {
          name: "Live Website",
          url: "https://dev.kardias.gr",
        },
      ],
      metaInfo: {
        name: "Warning",
        directory: "~/system/warning",
        type: "System Function",
        size: "8KB",
        date: "22-10-2023",
      },
    },
  },
  brioche: {
    name: "Brioche",
    card: {
      name: "Brioche",
      description:
        "Brioche entrusted us to develop their branding and static website, and now we're in the process of a significant update, transforming it into a food delivery platform.",
      image: "/assets/projects/brioche/images/brioche-logo.png",
      url: "/projects/brioche",
      tags: ["Thymleaf", "htmx", "HTML/CSS", "JS"],
    },
    display: {
      src: "/assets/projects/brioche/readme.md",
      metaInfo: {
        name: "readme.md",
        directory: "~/brioche/readme.md",
        type: "Markdown",
        size: "13KB",
        date: "22-10-2023",
      },
    },
    carousel: {
      images: [
        "/assets/projects/brioche/images/brioche-ui-home.png",
        "/assets/projects/brioche/images/brioche-counter-illustration.png",
        "/assets/projects/brioche/images/brioche-coffee-cup.png",
        "/assets/projects/brioche/images/brioche-logo-mockup.png",
        "/assets/projects/brioche/images/brioche-prints.png",
      ],
      metaInfo: {
        name: "Images",
        directory: "~/brioche/images",
        type: "Folder",
        size: "5MB",
        date: "22-10-2023",
      },
    },
    warning: {
      message: "** Look here for more info **",
      links: [
        {
          name: "Static Website",
          url: "https://briochecoffee.gr",
        },
      ],
      metaInfo: {
        name: "Warning",
        directory: "~/system/warning",
        type: "System Function",
        size: "8KB",
        date: "22-10-2023",
      },
    },
  },
  retrofolio: {
    name: "Retrofolio",
    card: {
      name: "Retrofolio",
      description: "",
      image: "/assets/projects/retrofolio/images/retrofolio-logo.png",
      url: "/projects/retrofolio",
      tags: ["Vue", "Typescript", "SCSS", "Vite"],
    },
    display: {
      src: "/assets/projects/retrofolio/readme.md",
      metaInfo: {
        name: "readme.md",
        directory: "~/retrofolio/readme.md",
        type: "Markdown",
        size: "11KB",
        date: "22-10-2023",
      },
    },
    carousel: {
      images: [
        "/assets/projects/retrofolio/images/retrofolio-ui-home.png",
        "/assets/projects/retrofolio/images/retrofolio-logo.png",
      ],
      metaInfo: {
        name: "Images",
        directory: "~/retrofolio/images",
        type: "Folder",
        size: "12MB",
        date: "22-10-2023",
      },
    },
    warning: {
      message: "** Look here for more info **",
      links: [
        {
          name: "Website",
          url: "https://retrofolio.3ll.gr",
        },
        {
          name: "Github repo",
          url: "https://github.com/3ll-stdio/retrofolio",
        },
      ],
      metaInfo: {
        name: "Warning",
        directory: "~/system/warning",
        type: "System Function",
        size: "8KB",
        date: "22-10-2023",
      },
    },
  },
  /* 
  synoditis: {
    name: "Synoditis",
    card: {
      name: "Synoditis",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat ipsum volutpat porttitor nec ut augue. Tincidunt libero vestibulum massa ac sagittis suscipit bibendum viverra rutrum.",
      image: "/assets/projects/project-1/images/img-1.png",
      url: "/projects/synoditis",
      tags: ["React", "JS", "Android"],
    },
    display: {
      src: "/assets/projects/synoditis/readme.md",
      metaInfo: {
        name: "readme.md",
        directory: "~/synoditis/readme.md",
        type: "Markdown",
        size: "11KB",
        date: "22-10-2023",
      },
    },
    carousel: {
      images: [
        "/assets/projects/project-3/images/img-1.png",
        "/assets/projects/project-3/images/img-1.png",
        "/assets/projects/project-3/images/img-1.png",
        "/assets/projects/project-3/images/img-1.png",
      ],
      metaInfo: {
        name: "Images",
        directory: "~/synoditis/images",
        type: "Folder",
        size: "12MB",
        date: "22-10-2023",
      },
    },
    warning: {
      message: "** Look here for more info **",
      links: [],
      metaInfo: {
        name: "Warning",
        directory: "~/system/warning",
        type: "System Function",
        size: "8KB",
        date: "22-10-2023",
      },
    },
  },
  "blast-assessment-tool": {
    name: "Blast Assessment Tool",
    card: {
      name: "Blast Assessment Tool",
      description: "European commission.",
      image: "/assets/projects/project-1/images/img-1.png",
      url: "/projects/blast-assessment-tool",
      tags: ["HTML/CSS", "JS", "ECL v3"],
    },
    display: {
      src: "/assets/projects/blast-assessment-tool/readme.md",
      metaInfo: {
        name: "readme.md",
        directory: "~/blast-assessment-tool/readme.md",
        type: "Markdown",
        size: "11KB",
        date: "22-10-2023",
      },
    },
    carousel: {
      images: [
        "/assets/projects/project-3/images/img-1.png",
        "/assets/projects/project-3/images/img-1.png",
        "/assets/projects/project-3/images/img-1.png",
        "/assets/projects/project-3/images/img-1.png",
      ],
      metaInfo: {
        name: "Images",
        directory: "~/blast-assessment-tool/images",
        type: "Folder",
        size: "12MB",
        date: "22-10-2023",
      },
    },
    warning: {
      message: "** Look here for more info **",
      links: [],
      metaInfo: {
        name: "Warning",
        directory: "~/system/warning",
        type: "System Function",
        size: "8KB",
        date: "22-10-2023",
      },
    },
  },
  gg: {
    name: "GG",
    card: {
      name: "GG",
      description: "gg",
      image: "/assets/projects/project-1/images/img-1.png",
      url: "/projects/gg",
      tags: ["UI/UX, Figma, Illustrator"],
    },
    display: {
      src: "/assets/projects/gg/readme.md",
      metaInfo: {
        name: "readme.md",
        directory: "~/gg/readme.md",
        type: "Markdown",
        size: "11KB",
        date: "22-10-2023",
      },
    },
    carousel: {
      images: [
        "/assets/projects/project-3/images/img-1.png",
        "/assets/projects/project-3/images/img-1.png",
        "/assets/projects/project-3/images/img-1.png",
        "/assets/projects/project-3/images/img-1.png",
      ],
      metaInfo: {
        name: "Images",
        directory: "~/gg/images",
        type: "Folder",
        size: "12MB",
        date: "22-10-2023",
      },
    },
    warning: {
      message: "** Look here for more info **",
      links: [],
      metaInfo: {
        name: "Warning",
        directory: "~/system/warning",
        type: "System Function",
        size: "8KB",
        date: "22-10-2023",
      },
    },
  },
  lmss: {
    name: "LMSS",
    card: {
      name: "LMSS",
      description: "lmss",
      image: "/assets/projects/project-1/images/img-1.png",
      url: "/projects/lmss",
      tags: ["UI/UX, Figma, Illustrator"],
    },
    display: {
      src: "/assets/projects/lmss/readme.md",
      metaInfo: {
        name: "readme.md",
        directory: "~/lmss/readme.md",
        type: "Markdown",
        size: "11KB",
        date: "22-10-2023",
      },
    },
    carousel: {
      images: [
        "/assets/projects/project-3/images/img-1.png",
        "/assets/projects/project-3/images/img-1.png",
        "/assets/projects/project-3/images/img-1.png",
        "/assets/projects/project-3/images/img-1.png",
      ],
      metaInfo: {
        name: "Images",
        directory: "~/lmss/images",
        type: "Folder",
        size: "12MB",
        date: "22-10-2023",
      },
    },
    warning: {
      message: "** Look here for more info **",
      links: [],
      metaInfo: {
        name: "Warning",
        directory: "~/system/warning",
        type: "System Function",
        size: "8KB",
        date: "22-10-2023",
      },
    },
  },
  graphit: {
    name: "GraphIT",
    card: {
      name: "GraphIT",
      description: "graphit",
      image: "/assets/projects/project-1/images/img-1.png",
      url: "/projects/graphit",
      tags: ["UI/UX, Figma, Illustrator"],
    },
    display: {
      src: "/assets/projects/graphit/readme.md",
      metaInfo: {
        name: "readme.md",
        directory: "~/graphit/readme.md",
        type: "Markdown",
        size: "11KB",
        date: "22-10-2023",
      },
    },
    carousel: {
      images: [
        "/assets/projects/project-3/images/img-1.png",
        "/assets/projects/project-3/images/img-1.png",
        "/assets/projects/project-3/images/img-1.png",
        "/assets/projects/project-3/images/img-1.png",
      ],
      metaInfo: {
        name: "Images",
        directory: "~/graphit/images",
        type: "Folder",
        size: "12MB",
        date: "22-10-2023",
      },
    },
    warning: {
      message: "** Look here for more info **",
      links: [],
      metaInfo: {
        name: "Warning",
        directory: "~/system/warning",
        type: "System Function",
        size: "8KB",
        date: "22-10-2023",
      },
    },
  },
  "3ll": {
    name: "3ll",
    card: {
      name: "3ll",
      description: "3ll",
      image: "/assets/projects/project-1/images/img-1.png",
      url: "/projects/3ll",
      tags: ["UI/UX, Figma, Illustrator"],
    },
    display: {
      src: "/assets/projects/3ll/readme.md",
      metaInfo: {
        name: "readme.md",
        directory: "~/3ll/readme.md",
        type: "Markdown",
        size: "11KB",
        date: "22-10-2023",
      },
    },
    carousel: {
      images: [
        "/assets/projects/project-3/images/img-1.png",
        "/assets/projects/project-3/images/img-1.png",
        "/assets/projects/project-3/images/img-1.png",
        "/assets/projects/project-3/images/img-1.png",
      ],
      metaInfo: {
        name: "Images",
        directory: "~/3ll/images",
        type: "Folder",
        size: "12MB",
        date: "22-10-2023",
      },
    },
    warning: {
      message: "** Look here for more info **",
      links: [],
      metaInfo: {
        name: "Warning",
        directory: "~/system/warning",
        type: "System Function",
        size: "8KB",
        date: "22-10-2023",
      },
    },
  },
   */
};
