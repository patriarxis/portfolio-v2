import { IProjects } from "@domain";

export const projects: IProjects = {
  signet: {
    name: "Signet",
    card: {
      name: "Signet",
      description:
        "A local-first email signature library — pick a template, fill your details, and copy HTML that pastes cleanly into Outlook, Gmail, and CRM senders.",
      image: "/assets/projects/signet/images/signet-desktop.png",
      url: "/projects/signet",
      tags: ["Vue 3", "TypeScript", "Vite", "CodeMirror"],
    },
    display: {
      src: "/assets/projects/signet/readme.md",
      metaInfo: {
        name: "readme.md",
        directory: "~/signet/readme.md",
        type: "Markdown",
        size: "3KB",
        date: "27-07-2026",
      },
    },
    carousel: {
      images: [
        "/assets/projects/signet/images/signet-desktop.png",
        "/assets/projects/signet/images/signet-tablet.png",
        "/assets/projects/signet/images/signet-phone.png",
      ],
      metaInfo: {
        name: "Images",
        directory: "~/signet/images",
        type: "Folder",
        size: "300KB",
        date: "27-07-2026",
      },
    },
    warning: {
      message: "** Look here for more info **",
      links: [
        {
          name: "Live",
          url: "https://signet.patriarxis.com",
        },
        {
          name: "GitHub",
          url: "https://github.com/patriarxis/signet",
        },
      ],
      metaInfo: {
        name: "Warning",
        directory: "~/system/warning",
        type: "System Function",
        size: "8KB",
        date: "27-07-2026",
      },
    },
  },
  cipher: {
    name: "Cipher",
    card: {
      name: "Cipher",
      description:
        "A browser-only password generator — set length and character options, get a cryptographically secure password, check strength, and copy it. Nothing leaves the device.",
      image: "/assets/projects/cipher/images/cipher-icon.png",
      url: "/projects/cipher",
      tags: ["Vue 3", "TypeScript", "Vite", "Vitest"],
    },
    display: {
      src: "/assets/projects/cipher/readme.md",
      metaInfo: {
        name: "readme.md",
        directory: "~/cipher/readme.md",
        type: "Markdown",
        size: "2KB",
        date: "27-07-2026",
      },
    },
    carousel: {
      images: [
        "/assets/projects/cipher/images/cipher-icon.png",
        "/assets/projects/cipher/images/cipher-apple-touch.png",
      ],
      metaInfo: {
        name: "Images",
        directory: "~/cipher/images",
        type: "Folder",
        size: "20KB",
        date: "27-07-2026",
      },
    },
    warning: {
      message: "** Look here for more info **",
      links: [
        {
          name: "Live",
          url: "https://cipher.patriarxis.com",
        },
        {
          name: "GitHub",
          url: "https://github.com/patriarxis/cipher",
        },
      ],
      metaInfo: {
        name: "Warning",
        directory: "~/system/warning",
        type: "System Function",
        size: "8KB",
        date: "27-07-2026",
      },
    },
  },
  simplepad: {
    name: "SimplePad",
    card: {
      name: "SimplePad",
      description:
        "A private rich-text notepad in the browser — open the URL, type, leave. Notes auto-save locally with Markdown shortcuts and a floating format toolbar.",
      image: "/assets/projects/simplepad/images/simplepad-icon.png",
      url: "/projects/simplepad",
      tags: ["Vue 3", "TypeScript", "Vite", "TipTap"],
    },
    display: {
      src: "/assets/projects/simplepad/readme.md",
      metaInfo: {
        name: "readme.md",
        directory: "~/simplepad/readme.md",
        type: "Markdown",
        size: "2KB",
        date: "27-07-2026",
      },
    },
    carousel: {
      images: [
        "/assets/projects/simplepad/images/simplepad-icon.png",
        "/assets/projects/simplepad/images/simplepad-apple-touch.png",
      ],
      metaInfo: {
        name: "Images",
        directory: "~/simplepad/images",
        type: "Folder",
        size: "20KB",
        date: "27-07-2026",
      },
    },
    warning: {
      message: "** Look here for more info **",
      links: [
        {
          name: "Live",
          url: "https://simplepad.patriarxis.com",
        },
        {
          name: "GitHub",
          url: "https://github.com/patriarxis/simplepad",
        },
      ],
      metaInfo: {
        name: "Warning",
        directory: "~/system/warning",
        type: "System Function",
        size: "8KB",
        date: "27-07-2026",
      },
    },
  },
  favigo: {
    name: "Favigo",
    card: {
      name: "Favigo",
      description:
        "Drop a PNG, ICO, SVG, or WebP and see how it reads at common sizes — and in the real browser tab — before you ship it.",
      image: "/assets/projects/favigo/images/favigo-icon.png",
      url: "/projects/favigo",
      tags: ["Vue 3", "TypeScript", "Vite"],
    },
    display: {
      src: "/assets/projects/favigo/readme.md",
      metaInfo: {
        name: "readme.md",
        directory: "~/favigo/readme.md",
        type: "Markdown",
        size: "2KB",
        date: "27-07-2026",
      },
    },
    carousel: {
      images: [
        "/assets/projects/favigo/images/favigo-icon.png",
        "/assets/projects/favigo/images/favigo-apple-touch.png",
      ],
      metaInfo: {
        name: "Images",
        directory: "~/favigo/images",
        type: "Folder",
        size: "20KB",
        date: "27-07-2026",
      },
    },
    warning: {
      message: "** Look here for more info **",
      links: [
        {
          name: "Live",
          url: "https://favigo.patriarxis.com",
        },
        {
          name: "GitHub",
          url: "https://github.com/patriarxis/favigo",
        },
      ],
      metaInfo: {
        name: "Warning",
        directory: "~/system/warning",
        type: "System Function",
        size: "8KB",
        date: "27-07-2026",
      },
    },
  },
  spinzy: {
    name: "Spinzy",
    card: {
      name: "Spinzy",
      description:
        "A full-screen promotional prize-wheel experience for FlexCar events — guests spin for weighted prizes on a branded canvas UI; operators tune the catalog without touching code.",
      image: "/assets/projects/spinzy/images/spinzy-suv-runner.png",
      url: "/projects/spinzy",
      tags: ["TypeScript", "Vite", "Konva", "Web Audio"],
    },
    display: {
      src: "/assets/projects/spinzy/readme.md",
      metaInfo: {
        name: "readme.md",
        directory: "~/spinzy/readme.md",
        type: "Markdown",
        size: "2KB",
        date: "27-07-2026",
      },
    },
    carousel: {
      images: [
        "/assets/projects/spinzy/images/spinzy-suv-runner.png",
        "/assets/projects/spinzy/images/spinzy-wheel-suv.webp",
        "/assets/projects/spinzy/images/spinzy-prize-suv.webp",
        "/assets/projects/spinzy/images/spinzy-prize-mystery-box.webp",
        "/assets/projects/spinzy/images/spinzy-prize-voucher.webp",
      ],
      metaInfo: {
        name: "Images",
        directory: "~/spinzy/images",
        type: "Folder",
        size: "140KB",
        date: "27-07-2026",
      },
    },
    warning: {
      message: "** Look here for more info **",
      links: [
        {
          name: "Live",
          url: "https://spinzy.patriarxis.com",
        },
        {
          name: "GitHub",
          url: "https://github.com/patriarxis/spinzy",
        },
      ],
      metaInfo: {
        name: "Warning",
        directory: "~/system/warning",
        type: "System Function",
        size: "8KB",
        date: "27-07-2026",
      },
    },
  },
  "thats-a-scan": {
    name: "That's a Scan",
    card: {
      name: "That's a Scan",
      description:
        "An interactive map for browsing geolocated surface texture scans — inspect place-tied PBR references on an Athens map and download map packs at multiple resolutions.",
      image: "/assets/projects/thats-a-scan/images/thats-a-scan-mark.svg",
      url: "/projects/thats-a-scan",
      tags: ["React", "TypeScript", "Vite", "Leaflet"],
    },
    display: {
      src: "/assets/projects/thats-a-scan/readme.md",
      metaInfo: {
        name: "readme.md",
        directory: "~/thats-a-scan/readme.md",
        type: "Markdown",
        size: "2KB",
        date: "27-07-2026",
      },
    },
    carousel: {
      images: [
        "/assets/projects/thats-a-scan/images/thats-a-scan-mark.svg",
      ],
      metaInfo: {
        name: "Images",
        directory: "~/thats-a-scan/images",
        type: "Folder",
        size: "1KB",
        date: "27-07-2026",
      },
    },
    warning: {
      message: "** Look here for more info **",
      links: [
        {
          name: "GitHub",
          url: "https://github.com/patriarxis/thats-a-scan",
        },
      ],
      metaInfo: {
        name: "Warning",
        directory: "~/system/warning",
        type: "System Function",
        size: "8KB",
        date: "27-07-2026",
      },
    },
  },
  retrofolio: {
    name: "Retrofolio",
    card: {
      name: "Retrofolio",
      description:
        "A portfolio website template from 3ll — projects live as files in a retro PC-style interface with windows, a file explorer, markdown write-ups, and themeable chrome.",
      image: "/assets/projects/retrofolio/images/retrofolio-ui-home.png",
      url: "/projects/retrofolio",
      tags: ["Vue 3", "TypeScript", "Vite", "SCSS"],
    },
    display: {
      src: "/assets/projects/retrofolio/readme.md",
      metaInfo: {
        name: "readme.md",
        directory: "~/retrofolio/readme.md",
        type: "Markdown",
        size: "2KB",
        date: "27-07-2026",
      },
    },
    carousel: {
      images: [
        "/assets/projects/retrofolio/images/retrofolio-ui-home.png",
        "/assets/projects/retrofolio/images/retrofolio-logo.webp",
      ],
      metaInfo: {
        name: "Images",
        directory: "~/retrofolio/images",
        type: "Folder",
        size: "1.5MB",
        date: "27-07-2026",
      },
    },
    warning: {
      message: "** Look here for more info **",
      links: [
        {
          name: "Live",
          url: "https://retrofolio.3ll.gr",
        },
      ],
      metaInfo: {
        name: "Warning",
        directory: "~/system/warning",
        type: "System Function",
        size: "8KB",
        date: "27-07-2026",
      },
    },
  },
  "3ll": {
    name: "3ll",
    card: {
      name: "3ll",
      description:
        "Studio site for 3ll — a small design practice that builds tailor-made websites and applications. One page, no CMS: identity, live work, and a clear way to get in touch.",
      image: "/assets/projects/3ll/images/3ll-meta-home.png",
      url: "/projects/3ll",
      tags: ["HTML", "CSS", "SVG"],
    },
    display: {
      src: "/assets/projects/3ll/readme.md",
      metaInfo: {
        name: "readme.md",
        directory: "~/3ll/readme.md",
        type: "Markdown",
        size: "2KB",
        date: "27-07-2026",
      },
    },
    carousel: {
      images: [
        "/assets/projects/3ll/images/3ll-meta-home.png",
        "/assets/projects/3ll/images/3ll-product-retrofolio.webp",
        "/assets/projects/3ll/images/3ll-product-kardias.webp",
        "/assets/projects/3ll/images/3ll-mark.svg",
      ],
      metaInfo: {
        name: "Images",
        directory: "~/3ll/images",
        type: "Folder",
        size: "1.2MB",
        date: "27-07-2026",
      },
    },
    warning: {
      message: "** Look here for more info **",
      links: [
        {
          name: "Live",
          url: "https://3ll.gr",
        },
      ],
      metaInfo: {
        name: "Warning",
        directory: "~/system/warning",
        type: "System Function",
        size: "8KB",
        date: "27-07-2026",
      },
    },
  },
};
