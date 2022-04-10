import quizzical from "../imgs/quizzical.png"
import snake from "../imgs/snake.png"
import abzijgen from "../imgs/abzijgen.png"
import speedTyping from '../imgs/speed-typing.png'
import tenzies from '../imgs/tenzies.png'
import portfolio from '../imgs/portfolio.png'

const projects = [
    {
        name: "Quizzical",
        summary: <>A customizable quiz app built with <span>React</span> using hooks and <span>reusable functional components</span>. Data <span>fetched</span> and decoded from The Open Trivia Database <span>API</span> then used to create a series of <span>nested arrays and objects</span> which handle the display and user-input.</>,
        liveSite: "https://gk-quizzical.netlify.app/",
        githubRepo: "https://github.com/gare-Ware/Quizzical" ,
        url: "quizzical",
        screens: quizzical
    },
    {
        name: "My Portfolio (this site!)",
        summary: <>A user friendly and <span>accessible</span> portfolio website featuring a sleek, dark UI. Built with <span>React</span> using <span>hooks</span> and <span>reusable functional components</span>. <span>EmailJS</span> used to handle form submissions. Features <span>React-Icons</span> and bold <span>typography</span> to create a seamless user-experience.</>,
        liveSite: "https://garyk.dev/",
        githubRepo: "https://github.com/gare-Ware/garyk-portfolio",
        url: "my-portfolio",
        screens: portfolio
    },
    {
        name: "Abzijgen",
        summary: <><span>IN PROGRESS</span> A promotional website for a New Jersey startup CBD company. <span>Themed</span> to mimic their brand with <span>SVG images</span> extracted from their product logo using <span>Adobe Illustrator</span> and implemented as background elements in <span>CSS</span>. Mockup rendered in <span>Figma</span>. Coming soon page live at custom domain while full site is developed. Utilized <span>SEO</span> practices for top Google search result.</>,
        liveSite: "https://fervent-pare-dbd0bb.netlify.app/",
        githubRepo: "https://github.com/gare-Ware/abzijgen-v2",
        url: "abzijgen",
        screens: abzijgen
    },
    {
        name: "Snake",
        summary: <>A classic snake game with retro-inspired design and animations. Uses <span>javascript arithmetic</span> to create boundary logic for snake movement. <span>Event listeners</span> and <span>keyboardEvent key properties</span> implement user control for snake. Touch button controls on smaller screens.
        </>,
        liveSite: "https://gk-snakegame.netlify.app//",
        githubRepo: "https://github.com/gare-Ware/Snake-Game" ,
        url: "snake",
        screens: snake
    },
    {
        name: "Speed Typing",
        summary: <>A stylish and fun timed typing game built with <span>React</span> using <span>custom hooks</span>. User input for time limit.</>,
        liveSite: "https://gk-speedtyping.netlify.app/",
        githubRepo: "https://github.com/gare-Ware/speed-typing.git",
        url: "speed-typing",
        screens: speedTyping
    },
    {
        name: "Tenzies",
        summary: <>A dice game built with <span>React</span>. High score of rolls and time maintained via <span>local storage</span>. Die images rendered with <span>CSS</span> and <span>flexbox</span>. <span>Npm</span> package <span>react-confetti</span> used for winning animation.</>,
        liveSite: "https://gk-tenzies.netlify.app/",
        githubRepo: "https://github.com/gare-Ware/Tenzies.git",
        url: "tenzies",
        screens: tenzies
    }
]

export default projects
