import quizzical from "../imgs/quizzical.png"
import snake from "../imgs/snake.png"
import abzijgen from "../imgs/abzijgen.png"
import speedTyping from '../imgs/speed-typing.png'
import tenzies from '../imgs/tenzies.png'
import portfolio from '../imgs/portfolio.png'

const projects = [
    {
        name: "Quizzical",
        summary: `A customizable quiz app built with React and The Open Trivia Database API.`,
        liveSite: "https://gk-quizzical.netlify.app/",
        githubRepo: "https://github.com/gare-Ware/Quizzical" ,
        url: "quizzical",
        screens: quizzical
    },
    {
        name: "My Portfolio (this site!)",
        summary: "A user friendly and accessible portfolio website featuring a sleek dark UI. Built with React.",
        liveSite: "https://garyk.dev/",
        githubRepo: "https://github.com/gare-Ware/garyk-portfolio",
        url: "my-portfolio",
        screens: portfolio
    },
    {
        name: "Abzijgen",
        summary: "IN PROGRESS - A promotional website for a New Jersey startup CBD company. Themed to mimic their logo and brand.",
        liveSite: "https://abzijgen.com/",
        githubRepo: "https://github.com/gare-Ware/Abzijgen",
        url: "abzijgen",
        screens: abzijgen
    },
    {
        name: "Snake",
        summary: "A classic snake game with retro-inspired design and animations.",
        liveSite: "https://gk-snakegame.netlify.app//",
        githubRepo: "https://github.com/gare-Ware/Snake-Game" ,
        url: "snake",
        screens: snake
    },
    {
        name: "Speed Typing",
        summary: "A stylish and fun speed typing game built with React using Custom Hooks.",
        liveSite: "https://gk-speedtyping.netlify.app/",
        githubRepo: "https://github.com/gare-Ware/speed-typing.git",
        url: "speed-typing",
        screens: speedTyping
    },
    {
        name: "Tenzies",
        summary: "A simple dice game built with React.",
        liveSite: "https://gk-tenzies.netlify.app/",
        githubRepo: "https://github.com/gare-Ware/Tenzies.git",
        url: "tenzies",
        screens: tenzies
    }
]

export default projects
