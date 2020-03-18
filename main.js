const projects = [
  {
    title: "Budget Manager",
    desc: "Budget App to manage your budget on the go!!",
    stack: ["HTML5", "CSS3", "JS", "JQUERY", "FIREBASE"],
    imgUrl: "./assets/images/projects/budget.PNG",
    gitUrl: "https://github.com/kaushikdev/budget",
    liveUrl: "https://kaushikdev.github.io/budget"
  },
  {
    title: "Blog App",
    desc: "An blogging app to share the struggles/learnings of a beginner developer.",
    stack: ["HTML5", "CSS3", "JS", "JQUERY", "FIREBASE"],
    imgUrl: "./assets/images/projects/blog.PNG",
    gitUrl: "https://github.com/kaushikdev/blog",
    liveUrl: "https://kaushikdev.github.io/blog/"
  },
  {
    title: "Weather App",
    desc: "An app that shows you current weather.",
    stack: ["HTML5", "CSS3", "JS"],
    imgUrl: "./assets/images/projects/weather.PNG",
    gitUrl: "https://github.com/kaushikdev/weather",
    liveUrl: "https://kaushikdev.github.io/weather"
  },
  {
    title: "TickyBot Clone",
    desc: "This is clone of the site https://tickybott.herokuapp.com/.",
    stack: ["HTML5", "CSS3", "JS"],
    imgUrl: "./assets/images/projects/TickyBotClone.PNG",
    gitUrl: "https://github.com/kaushikdev/TickyBotClone",
    liveUrl: "https://kaushikdev.github.io/TickyBotClone"
  }
 
];

const windowHeight = window.innerHeight;
const PROJECT_TITLE = document.querySelector("#ptitle");
const PROJECT_DESC = document.querySelector("#pdesc");
const PROJECT_IMG = document.querySelector("#pimg");
const PROJECT_STACK = document.querySelector("#pstack");
const PROJECT_LIVEURL = document.querySelector("#purls-live");
const PROJECT_GITURL = document.querySelector("#purls-git");

const menuItems = ["menu-item-home", "menu-item-project", "menu-item-blog", "menu-item-contact"];
const homeItem = document.querySelector("#"+menuItems[0]);
const projectItem = document.querySelector("#"+menuItems[1]);
const blogItem = document.querySelector("#"+menuItems[2]);
const contactItem = document.querySelector("#"+menuItems[3]);

let projectCount = 0;

