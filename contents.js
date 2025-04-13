// List of images used in the template
// If you wish to use different images, add them to the src/img folder
const email = "./src/img/email.svg";
const linkedin = "./src/img/linkedin.svg";
const github = "./src/img/github-mark.svg";
const code = "./src/img/code.svg";
const githubReverse = "./src/img/github-mark-reverse.svg";
const link = "./src/img/external-link-svgrepo-com.svg";
const flower = "./src/img/plum.svg";
const p1 = "./src/img/vecteezy_peony_55282909.svg";
const p2 = "./src/img/vecteezy_flowers_59907405.svg";
const p3 = "./src/img/vecteezy_branch.svg";

const templateUrl =
  "https://www.github.com/cyphersept/monochrome-portfolio-template";

// List of links to display in contact section
// label: Text label for the link
// href: Destination link redirects to
// iconSrc: Location where the icon is saved
const linkList = [
  { label: "Email", href: "mailto:example@email.com", iconSrc: email },
  { label: "LinkedIn", href: "https://www.linkedin.com/", iconSrc: linkedin },
  { label: "Github", href: "https://github.com/", iconSrc: github },
  { label: "Site Code", href: templateUrl, iconSrc: code },
];

// Key information displayed in the header and about sections
// name: Your name, used as the header and nav title
// pageTitle: Webpage title, displayed in browser bar and search links
// jobTitle: Used as the secondary tagline in the header
// description: List of paragraphs in the "About section".
// FOR ADVANCED USERS: If you wish to add links or text styling, you will have to manually edit the "index.html" file in the root folder (NOT the one in /dist)
const info = {
  name: "Lorum Ipsum",
  pageTitle: "Lorum Ipsum — Example Portfolio",
  jobTitle: "Professional Placeholder",
  description: [
    "Hey there!",
    "This page is a customizable template! Compiled from static assets with Vite and EJS, it offers the lightning-fast performance of modern optimized frameworks with the ease of updating a single text file.",
  ],
};

// Footer link
const footer = {
  label: "cyphersept 2025",
  href: templateUrl,
  iconSrc: github,
};

// List of skills for the animated text carousel
const skillList = [
  "Tempor",
  "Ut mollit",
  "Dolor",
  "Nisi consectetur",
  "Aliqua",
  "Labore",
  "Reprehenderit",
  "Esse commodo",
  "Laborum",
  "Voluptate",
  "Officia",
  "Cupidatat",
  "Ex adipisicing",
  "Irure et",
  "Ipsum",
  "Ad culpa",
  "Elit",
  "Velit",
];

// Info to populate project cards with
// Add as many as you like!

// name: Title of project to display
// img: Relative path to image file to display
// imgAlt: Alt text for images. Fill these out to improve your SEO
// desc: Short description of project
// stack: A comma separated list of technologies used in the project.
// links: list of project-relevant links to display on card.

const projectList = [
  {
    name: "Proident aliquip labore",
    img: p1,
    desc: "Irure tempor nulla mollit sunt esse cupidatat pariatur sint.",
    stack: "Veniam, Eu ex, Pariatur",
    links: [
      { label: "repo", href: templateUrl, iconSrc: githubReverse },
      { label: "live", href: templateUrl, iconSrc: link },
      { label: "deco", href: templateUrl, iconSrc: flower },
    ],
  },
  {
    name: "Ipsum nisi id",
    img: p2,
    desc: "Laboris laboris incididunt est eiusmod quis Lorem deserunt minim Lorem.",
    stack: "Ut commodo, Lorem consectetur, Magna, Ut dolor",
    links: [
      { label: "repo", href: templateUrl, iconSrc: githubReverse },
      { label: "live", href: templateUrl, iconSrc: link },
      { label: "deco", href: templateUrl, iconSrc: flower },
    ],
  },
  {
    name: "Voluptate ut ut",
    img: p3,
    desc: "Velit occaecat et reprehenderit reprehenderit commodo consequat est esse ex.",
    stack: "Dolor, Culpa, Fugiat, Officia",
    links: [
      { label: "repo", href: templateUrl, iconSrc: githubReverse },
      { label: "live", href: templateUrl, iconSrc: link },
      { label: "deco", href: templateUrl, iconSrc: flower },
    ],
  },
  {
    name: "Cupidatat non",
    img: p1,
    desc: "Mollit cillum do ea quis mollit ea aliquip ipsum sunt minim cillum nisi esse.",
    stack: "Ex Dolore, Tempor, Cillum, Pariatur",
    links: [
      { label: "repo", href: templateUrl, iconSrc: githubReverse },
      { label: "live", href: templateUrl, iconSrc: link },
    ],
  },
  {
    name: "Mollit anim laborum",
    img: p2,
    desc: "Culpa elit ullamco anim consequat reprehenderit excepteur laboris officia sint.",
    stack: "Reprehenderit, Ullamco, Excepteur, Labore",
    links: [
      { label: "repo", href: templateUrl, iconSrc: githubReverse },
      { label: "live", href: templateUrl, iconSrc: link },
    ],
  },
  {
    name: "Sint sint velit",
    img: p3,
    desc: "Cillum consequat sunt officia enim excepteur aliqua minim quis Lorem ut veniam.",
    stack: "Sint, Labore, Amet, Velit",
    links: [
      { label: "repo", href: templateUrl, iconSrc: githubReverse },
      { label: "live", href: templateUrl, iconSrc: link },
    ],
  },
];

export { info, footer, linkList, skillList, projectList };
