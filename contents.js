// If you wish to use different images, add them to the src/img folder
const email = "./src/img/email.svg";
const linkedin = "./src/img/linkedin.svg";
const github = "./src/img/github-mark.svg";
const code = "./src/img/code.svg";
const githubReverse = "./src/img/github-mark-reverse.svg";
const link = "./src/img/external-link-svgrepo-com.svg";

// List of links to display in contact section
// label: Text label for the link
// href: Destination link redirects to
// iconSrc: Location where the icon is saved
const linkList = [
  { label: "Email", href: "mailto:ygao050@gmail.com", iconSrc: email },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ygao000/",
    iconSrc: linkedin,
  },
  {
    label: "Github",
    href: "https://www.github.com/cyphersept",
    iconSrc: github,
  },
  {
    label: "Site Code",
    href: "https://www.github.com/cyphersept/monochrome-portfolio-template",
    iconSrc: code,
  },
];

// Key information displayed in the header and about sections
// name: Your name, used as the header and nav title
// pageTitle: Webpage title, displayed in browser bar and search links
// jobTitle: Used as the secondary tagline in the header
// description: List of paragraphs in the "About section"
const info = {
  name: "Yuan Gao",
  pageTitle: "Yuan Gao — Web Developer Portfolio",
  jobTitle: "Frontend Web Developer",
  description: [
    "I'm a Montreal-based web developer with a keen interest in what makes the internet tick. With my background in freelance illustration, I combine sharp visuals with user-friendly functionality to deliver unique utilities via the convenience of the world wide web.",
  ],
};

// Footer link
const footer = {
  label: "cyphersept 2025",
  href: "http://www.github.com/cyphersept/black-fish-white-fish-template",
  iconSrc: github,
};

// List of skills for the animated text carousel
const skillList = [
  "BS Comp Sci",
  "Frontend",
  "HTML",
  "JS",
  "CSS",
  "Java",
  "SQL",
  "React",
  "Webpack",
  "Vite",
  "Jest",
  "Tailwind",
  "APIs",
  "Design",
  "Illustration",
  "English",
  "Mandarin",
  "French B2",
];

// Info to populate project cards with

// name: Title of project to display
// img: Relative path to image file to display
// imgAlt: Alt text for images. Fill these out to improve your SEO
// desc: Short description of project
// stack: A comma separated list of technologies used in the project.
// links: list of project-relevant links to display on card

const projectList = [
  {
    name: "Repalette",
    img: "./src/img/repalette-demo.gif",
    imgAlt: "",
    desc: "Lightning-fast and pixel-perfect palette swaps with bulk downloads.",
    stack: "Canvas API, File API, HTML, Javascript, CSS",
    links: [
      {
        label: "repo",
        href: "https://www.github.com/cyphersept/repalette",
        iconSrc: githubReverse,
      },
      {
        label: "live site",
        href: "https://www.cyphersept.github.io/repalette/",
        iconSrc: link,
      },
    ],
  },
  {
    name: "Weather App",
    img: "./src/img/weather.webp",
    imgAlt: "",
    desc: "Cyberpunk weather updates",
    stack: "React, TailwindCSS, OpenMeteo API, Vite",
    links: [
      {
        label: "repo",
        href: "https://www.github.com/cyphersept/react-weather",
        iconSrc: githubReverse,
      },
      {
        label: "live site",
        href: "https://www.cyberpunk-weather.netlify.app/",
        iconSrc: link,
      },
    ],
  },
  {
    name: "Re:Engage",
    img: "./src/img/reengage.webp",
    imgAlt: "",
    desc: "Social platform to connect with peers tackling similar problems. Toast Dash Hackathon Finalist.",
    stack: "React, Vite, TailwindCSS",
    links: [
      {
        label: "repo",
        href: "https://www.github.com/cyphersept/toast-dash",
        iconSrc: githubReverse,
      },
      {
        label: "live site",
        href: "https://www.status-share-dash.netlify.app/",
        iconSrc: link,
      },
    ],
  },
  {
    name: "Natural Cure",
    img: "./src/img/naturalcure.webp",
    imgAlt:
      "Soothing cottagecore lavender and purple shopping site layout for Natural Cure",
    desc: "Shopping app boilerplate with clientside routing and cart functionality, all made from scratch.",
    stack: "React Router, React, Vite, TailwindCSS",
    links: [
      {
        label: "repo",
        href: "https://www.github.com/cyphersept/natural-cure",
        iconSrc: githubReverse,
      },
      {
        label: "live site",
        href: "https://www.shop-natural-cure.netlify.app/",
        iconSrc: link,
      },
    ],
  },
  {
    name: "Battleship",
    img: "./src/img/battleship.webp",
    imgAlt:
      "Game with two light blue battleship grids in front of wavy ocean overlay",
    desc: "A faithful recreation of a timeless classic.",
    stack: "Jest, Webpack, HTML, Javascript, CSS",
    links: [
      {
        label: "repo",
        href: "https://www.github.com/cyphersept/battleship",
        iconSrc: githubReverse,
      },
      {
        label: "live site",
        href: "https://www.cyphersept.github.io/battleship/",
        iconSrc: link,
      },
    ],
  },
  {
    name: "Flag Memory",
    img: "./src/img/flag-memory.webp",
    imgAlt:
      "Online quiz game with large flag icons against a black and pink background",
    desc: "How well can you remember the flags of the world? Try it in multiple languages!",
    stack: "React, Vite, FlagsAPI",
    links: [
      {
        label: "repo",
        href: "https://www.github.com/cyphersept/memory-game",
        iconSrc: githubReverse,
      },
      {
        label: "live site",
        href: "https://www.flag-memory.netlify.app/",
        iconSrc: link,
      },
    ],
  },
  {
    name: "CV Creator",
    img: "./src/img/cv-maker.webp",
    imgAlt: "Black and beige professional resume template for Sun Wukong",
    desc: "Build a sleek, minimalist professional CV from the comfort of your browser.",
    stack: "React, Typescript, Vite",
    links: [
      {
        label: "repo",
        href: "https://www.github.com/cyphersept/cv-application",
        iconSrc: githubReverse,
      },
      {
        label: "live site",
        href: "https://www.cypher-cv.netlify.app/",
        iconSrc: link,
      },
    ],
  },
  {
    name: "Cardmaker",
    img: "./src/img/cardmaker.webp",
    imgAlt:
      "Row of parchment background skill cards with wax seal below a text input box",
    desc: "Create prototype cards for a custom board game straight from your notes in a single click.",
    stack: "HTML, Javascript, CSS",
    links: [
      {
        label: "repo",
        href: "https://www.github.com/cyphersept/cardmaker",
        iconSrc: githubReverse,
      },
      {
        label: "live site",
        href: "https://www.cyphersept.github.io/cardmaker/",
        iconSrc: link,
      },
    ],
  },
  {
    name: "Signup Page",
    img: "./src/img/signup.webp",
    imgAlt: "Relaxing calming green and brown matcha themed signup page",
    desc: "Responsive sign up form with input validation and screen-reader accessibility.",
    stack: "HTML, Javascript, CSS",
    links: [
      {
        label: "repo",
        href: "https://www.github.com/cyphersept/signup-page",
        iconSrc: githubReverse,
      },
      {
        label: "live site",
        href: "https://www.cyphersept.github.io/signup-page",
        iconSrc: link,
      },
    ],
  },
  {
    name: "Dash Template",
    img: "./src/img/dash.webp",
    imgAlt: "Dark blue and teal cute whimsical dashboard site preview",
    desc: "A fun and cheery dashboard layout with a crafty feel. WCAG level AA accessible.",
    stack: "HTML, Javascript, CSS",
    links: [
      {
        label: "repo",
        href: "https://www.github.com/cyphersept/dashboard-homepage",
        iconSrc: githubReverse,
      },
      {
        label: "live site",
        href: "https://www.cyphersept.github.io/dashboard-homepage/",
        iconSrc: link,
      },
    ],
  },
  {
    name: "Homepage Template",
    img: "./src/img/homepage-1.webp",
    imgAlt:
      "Blue and white professional portfolio site preview with woman named Ashley Williams",
    desc: "A modern design for tablet, mobile, and desktop, recreated with pixel-perfect precision.",
    stack: "HTML, Javascript, CSS",
    links: [
      {
        label: "repo",
        href: "https://www.github.com/cyphersept/responsive-homepage",
        iconSrc: githubReverse,
      },
      {
        label: "live site",
        href: "https://www.cyphersept.github.io/responsive-homepage/",
        iconSrc: link,
      },
    ],
  },
  {
    name: "Portfolio Template",
    img: "./src/img/monochrome.webp",
    imgAlt:
      "Eyecatching modern lack and white koi garden themed high contrast portfolio template",
    desc: "No-code, SEO-optimized, lightning-fast template compiled from a single text file.",
    stack: "EJS, Vite, HTML, Javascript, CSS",
    links: [
      {
        label: "repo",
        href: "https://www.github.com/cyphersept/monochrome-portfolio-template",
        iconSrc: githubReverse,
      },
      {
        label: "live site",
        href: "https://www.cyphersept.github.io/monochrome-portfolio-template/",
        iconSrc: link,
      },
    ],
  },
];

export { info, footer, linkList, skillList, projectList };
