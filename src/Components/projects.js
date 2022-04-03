import quizzicalAnswers from "../imgs/quizzical-screens/quizzical-answers.png"
import snakeHome from "../imgs/snake-screens/snake-gameplay.png"
import abzijgenComingsoon from "../imgs/abzijgen-screens/abzijgen-comingsoon.png"
import portfolioHome from "../imgs/portfolio-screens/portfolio-home.png"
import speedTypingHome from '../imgs/speed-typing-screens/speed-typing-active.png'

const projects = [
    {
        name: "Quizzical",
        summary: "A customizable quiz app built with React and The Open Trivia Database API.",
        liveSite: "https://gk-quizzical.netlify.app/",
        githubRepo: "https://github.com/gare-Ware/Quizzical" ,
        url: "quizzical",
        screens: quizzicalAnswers
    },
    {
        name: "Snake",
        summary: "A classic snake game with retro-inspired design and animations.",
        liveSite: "https://gk-snakegame.netlify.app//",
        githubRepo: "https://github.com/gare-Ware/Snake-Game" ,
        url: "snake",
        screens: snakeHome
    },
    {
        name: "Abzijgen",
        summary: "A promotional website for a New Jersey startup CBD company, themed to match their logo.",
        liveSite: "https://abzijgen.com/",
        githubRepo: "https://github.com/gare-Ware/Abzijgen",
        url: "abzijgen",
        screens: abzijgenComingsoon 
    },
    {
        name: "My Portfolio (this site!)",
        summary: "A user friendly and accessible portfolio website featuring a sleek dark UI. Built with React.",
        liveSite: "https://garyk.dev/",
        githubRepo: "https://github.com/gare-Ware/garyk-portfolio",
        url: "my-portfolio",
        screens: portfolioHome
    },
    {
        name: "Speed Typing",
        summary: "A stylish and fun speed typing game built with React using Custom Hooks.",
        liveSite: "https://gk-speedtyping.netlify.app/",
        githubRepo: "https://github.com/gare-Ware/speed-typing.git",
        url: "speed-typing",
        screens: speedTypingHome
    }
]

export default projects
