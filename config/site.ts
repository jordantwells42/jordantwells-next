export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Jordan Wells",
  description: "The personal website of Jordan Wells.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  publications: [
    {
      title:
        "Stability Oracle: a structure-based graph-transformer framework for identifying stabilizing mutations",
      authors:
        "Daniel J. Diaz, Chengyue Gong, Jeffrey Ouyang-Zhang, James M. Loy, Jordan Wells, David Yang, Andrew D. Ellington, Alex Dimakis, Adam R. Klivans",
      link: "https://www.nature.com/articles/s41467-024-49780-2",
    },
    {
      title:
        "Binding Oracle: Fine-Tuning From Stability to Binding Free Energy",
      authors:
        "Chengyue Gong, Adam Klivans, Jordan Wells, James Loy, qiang liu, Alex Dimakis, Daniel Diaz",
      link: "https://openreview.net/forum?id=ChU7MCLk1J",
    },
    {
      title:
        "A modular and synthetic biosynthesis platform for de novo production of diverse halogenated tryptophan-derived molecules",
      authors:
        "Kevin B. Reed, Sierra M. Brooks, Jordan Wells, Kristin J. Blake, Minye Zhao, Kira Placido, Simon d’Oelsnitz, Adit Trivedi, Shruti Gadhiyar, Hal S. Alper",
      link: "https://www.nature.com/articles/s41467-024-47387-1",
    },
  ],
  links: {
    github: "https://github.com/jordantwells42",
    medium: "https://medium.com/@jordantwells",
    resume: "/jtw_resume.pdf",
    linkedin: "https://www.linkedin.com/in/jordantwells/",
  },
  projects: [
    {
      title: "Where Should I Eat",
      subtitle: "Match your cravings with restaurants in your area",
      desc: "I made this app to settle the constant question of 'Where should I eat?'. Put in where you are and what you're craving, and I'll tell you where to eat. Made with the Yelp API, it takes a query location and a query food type and elegantly displays options on a map. I have a Tinder style card interaction that allows users to swipe left to ignore a restaurant and swipe right to get directions/more info about it!",
      images: ["/images/WE1.webp", "/images/WE2.webp", "/images/WE3.webp"],
      alts: [
        "Where Should I Eat? Results Page",
        "Where Should I Eat? Location Page",
        "Where Should I Eat? Food Page",
      ],
      links: [
        {
          title: "Try it Yourself",
          subtitle: "Demo Page",
          link: "https://whereshouldieat.app/",
        },
        {
          title: "Learn More",
          subtitle: "Medium Post",
          link: "https://betterprogramming.pub/web-dev-tips-i-learned-from-building-the-tinder-of-finding-a-restaurant-974612e1c0a0",
        },
      ],
      skills: ["RESTful APIs", "Dynamic Maps / Map Tiling", "UI/UX Design"],
    },
    {
      title: "Step2Beat",
      subtitle: "Run to your favorite artists using Spotify",
      desc: "Step2Beat is a web application that allows you to run to your favorite artists using Spotify. You can search for your favorite artists and create a treadmill workout with different intensities. It will then generate a playlist where each each song's BPM matches the speed you want to go at.",
      images: ["/images/SB2.webp", "/images/SB1.webp", "/images/SB3.webp"],
      alts: [
        "The Step2Beat homepage",
        "Choosing songs for Step2Beat",
        "Login Page",
      ],
      links: [
        {
          title: "Try it Yourself",
          subtitle: "Demo Page",
          link: "https://step2beat.jordantwells.com/",
        },
        {
          title: "Learn More",
          subtitle: "Github Repo",
          link: "https://github.com/jordantwells42/step2beat",
        },
      ],
      skills: [
        "RESTful APIs",
        "Authentication (OAuth 2.0 / Next Auth)",
        "Async/Await/Promises",
      ],
    },
    {
      title: "Vibesition",
      subtitle: "A Spotify playlist generator for the Vibes",
      desc: "I've always been interested in how an album or movie can seemlessly transition between one mood to the next by carefully selecting the right songs. This web app uses the Spotify API to interpolate between a song of one mood to a song of another mood, using Spotify's Audio Features. The user can select the two songs they want to transition between, and add the playlist to their personal spotify library.",
      images: ["/images/VB1.webp", "/images/VB2.webp", "/images/VB3.webp"],
      alts: [
        "The results page of Vibesition",
        "Choosing songs for vibesition",
        "Choosing songs for vibesition",
      ],
      links: [
        {
          title: "Try it Yourself",
          subtitle: "Demo Page",
          link: "https://vibesition.jordantwells.com/",
        },
        {
          title: "Learn More",
          subtitle: "Medium Blog Post",
          link: "https://medium.com/p/498bb488c275",
        },
      ],
      skills: [
        "RESTful APIs",
        "Authentication (OAuth 2.0 / Next Auth)",
        "Async/Await/Promises",
      ],
    },
    {
      title: "HueWind",
      subtitle: "A (Tailwind CSS) palette generator for the web",
      desc: "I have been obsessed with using Tailwind CSS to rapidly speed up my web development projects. Wanting to escape the default provided colors, I made a palette generator to help create cohesive color schemes.",
      images: ["/images/HW1.webp", "/images/HW2.webp", "/images/HW3.webp"],
      alts: [
        "The landing page and main color selection",
        "Complementary color selection",
        "The generated color palette",
      ],
      links: [
        {
          title: "Try it Yourself",
          subtitle: "Demo Page",
          link: "https://huewind.jordantwells.com/",
        },
        {
          title: "Learn More",
          subtitle: "Medium Blog Post",
          link: "https://medium.com/p/398da47846cc",
        },
      ],
      skills: ["Next.js", "UI/UX Design", "Front End Development"],
    },
    /*
  {
    "title": "They're a 10 but...",
    "subtitle": "A web app based off the viral TikTok Trend",
    "desc": "I wanted to practice full stack development using a database, so I created a game based off a TikTok trend. It uses Prisma, tRPC, and PlanetScale to store user ratings and average them into a final results page. ",
    "images": ["/images/TB1.webp", "/images/TB2.webp", "/images/TB3.webp"],
    "alts": [
      "They're a 10 but... demo",
      "They're a 10 but... demo results",
      "They're a 10 but... demo 2"
    ],
    "links": [
      {
        "title": "Try it Yourself",
        "subtitle": "Demo Page",
        "link": "https://10but.jordantwells.com/"
      },
      {
        "title": "Learn More",
        "subtitle": "Dev.to Post",
        "link": "https://dev.to/jordantwells42/theyre-a-10-but-they-use-redis-as-their-primary-database-theyre-still-a-10-17op"
      }
    ],
    "skills": ["Full Stack Development", "Backend Development", "Databases / Redis"]
  },
  */
    {
      title: "Protein Viewer",
      subtitle: "An annotated protein crystal structure viewer",
      desc: "I wanted to create a protein viewer to aid in my research work in the Ellington and Alper labs, and to help out the graduate students that I work with. Typically, generating visualizations of this type using PyMOL can take several minutes and needs to be done hundreds of times to generate designs, so this viewer expedites that process. Built using React and ngl molecular viewer, you can view any protein from the RCSB, explore different residues, and look at interactions between residues. ",
      images: ["/images/PV1.webp", "/images/PV2.webp", "/images/PV3.webp"],
      alts: [
        "A full view of a protein crystal structure from the RCSB and UI",
        "A close up view of a protein crystal structure residue residue interactions",
        "A close up view of another protein crystal structure residue residue interactions",
      ],
      links: [
        {
          title: "Try it Yourself",
          subtitle: "Demo Page",
          link: "https://protein.jordantwells.com/",
        },
        {
          title: "Learn More",
          subtitle: "GitHub Repo",
          link: "https://github.com/jordantwells42/protein-viewer",
        },
      ],
      skills: ["React", "JavaScript", "ngl/Three.js"],
    },

    {
      title: "Tarot",
      subtitle: "A Tarot card reading simulator",
      desc: "I wanted to create a project using a card which was brought to life using the react-spring and use-gesture React libraries. I have always found Tarot interesting although I do not practice or subscribe to it myself, so I wanted to create a way for others to learn more about it.",
      images: ["/images/TR1.webp", "/images/TR2.webp", "/images/TR3.webp"],
      alts: [
        "A Tarot card reading simulator",
        "A Tarot card reading simulator, showing card descriptions",
        "A Tarot card reading simulator, with fumbled around cards",
      ],
      links: [
        {
          title: "Try it Yourself",
          subtitle: "Demo Page",
          link: "https://tarot.jordantwells.com/",
        },
        {
          title: "Learn More",
          subtitle: "GitHub Repo",
          link: "https://github.com/jordantwells42/tarot",
        },
      ],
      skills: ["react-spring", "@use-gesture", "Next.js"],
    },
    {
      title: "minimage",
      subtitle: "Generates abstract art using a genetic algorithm",
      desc: "I wanted to create a way to generate minimalist, abstract art that you could see the progression of. Using Python, I created a genetic algorithm which takes an input image, and attempt to 'evolve' a copy of it using simple polygons. This is achieved by creating a population of images with random polygons with random colors, selecting the images with the best 'fitness' that most closely resemble the input image, and crossbreeding and mutating the resulting selected images for several generations.",
      images: ["/images/pearl.webp", "/images/turtle.webp"],
      alts: [
        "An abstract version of Girl with a Pearl Earring by Vermeer",
        "An abstract version of a turtle",
      ],
      links: [
        {
          title: "Learn More",
          subtitle: "GitHub Repo",
          link: "https://github.com/jordantwells42/minimage",
        },
      ],
      skills: ["Genetic Algorithms", "Python", "Image Processing"],
    },
    /*
  {
    "title": "PalArt",
    "subtitle": "A painting practice prompter",
    "desc": "I wanted to create a tool to help me practice painting. PalArt is a simple web application that helps you create a palette and idea of what you would like to paint. ",
    "images": ["/images/PA1.webp", "/images/PA2.webp", "/images/PA3.webp"],
    "alts": [
      "The PalArt demo",
      "The PalArt demo with a palette",
      "The PalArt demo with a palette and a painting idea"
    ],
    "links": [
      {
        "title": "Try it Yourself",
        "subtitle": "Demo Page",
        "link": "https://palart.jordantwells.com/"
      },
      {
        "title": "Learn More",
        "subtitle": "GitHub Repo",
        "link": "https://github.com/jordantwells42/PalArt"
      }
    ],
    "skills": ["Async JavaScript", "Tailwind CSS", "Next.js"]
  },

  {
    "title": "This Site",
    "subtitle": "My personal portfolio website",
    "desc": "A website to host all of my projects and information. Made with Next.js and deployed on Vercel. I would describe it more but you can just check out parts of it right now! ",
    "images": ["/images/JW3.webp", "/images/JW2.webp", "/images/JW1.webp"],
    "alts": [
      "The cloud background of jordantwells.com",
      "The project cards of jordantwells.com",
      "The hero background of jordantwells.com"
    ],
    "links": [
      {
        "title": "Read about it",
        "subtitle": "Medium Blog Post",
        "link": "https://medium.com/@jordantwells/how-i-created-a-responsive-personal-portfolio-website-with-next-js-c516cd61e4ec?sk=cf2c3950de9dd3e47970322262c18f2a"
      },
      {
        "title": "Learn More",
        "subtitle": "GitHub Repo",
        "link": "https://github.com/jordantwells42/jordantwells-next"
      }
    ],
    "skills": ["Next.js", "Web Dev", "JavaScript"]
  },
  */
    {
      title: "Ray Marching",
      subtitle: "A GLSL shader experiment",
      desc: "Inspired by the incredible work of Inigo Quilez, I wanted to learn how to use shaders. I created this simple demo to practice signed-distance functions, ray marching, pixelation, and interactivity within a GLSL fragment shader.",
      images: ["/images/RM1.webp", "/images/RM2.webp", "/images/RM3.webp"],
      alts: [
        "The Ray Marching demo utilizing GLSL fragment shaders",
        "A pixelated version of the Ray Marching demo with GLSL fragment shaders",
        "A close up view of the Ray Marching demo with GLSL fragment shaders",
      ],
      links: [
        {
          title: "Try it Yourself",
          subtitle: "Demo Page",
          link: "https://ray.jordantwells.com/",
        },
        {
          title: "Learn More",
          subtitle: "GitHub Repo",
          link: "https://github.com/jordantwells42/ray-marching",
        },
      ],
      skills: ["OpenGL Shaders", "GLSL", "Three.js"],
    },
    /*
  {
    "title": "NoteTab",
    "subtitle": "A new tab chrome extension that lets you take notes",
    "desc": "I wanted to create a place to easily jot down notes in a place that I will always seem them and be reminded of them. NoteTab overhauls the Chrome New Tab with my own custom page developed with HTML, CSS, and JS. This page has the ability to add sticky notes where you can take notes that are stored across browser sessions. You can also choose a selection of background images that are randomly chosen for each session.",
    "images": ["/images/NT1.webp", "/images/NT2.webp", "/images/NT3.webp"],
    "alts": [
      "The New Tab with several sticky notes",
      "The New Tab with more sticky notes",
      "The New Tab with few sticky notes"
    ],
    "links": [
      {
        "title": "Try it Yourself",
        "subtitle": "Chrome Web Store Page",
        "link": "https://chrome.google.com/webstore/detail/notetab/pbpbbpkaaakjiiafopoofnfohkhggajl"
      },
      {
        "title": "Learn More",
        "subtitle": "GitHub Repo",
        "link": "https://github.com/jordantwells42/NoteTab"
      }
    ],
    "skills": ["Chrome Extension Dev", "JavaScript", "Event Loops"]
  }
  */
  ],
};
