import quizzicalAnswers from "../imgs/quizzical-screens/quizzical-answers.png"
import snakeHome from "../imgs/snake-screens/snake-gameplay.png"
import abzijgenComingsoon from "../imgs/abzijgen-screens/abzijgen-comingsoon.png"
import portfolioMockup from "../imgs/portfolio-screens/portfolio-mockup.png"

const projects = [
    {
        name: "Quizzical",
        summary: "A customizable quiz app made with The Open Trivia Database API.",
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
        summary: "A promotional website for a local startup CBD company, themed to match their logo.",
        liveSite: "https://abzijgen.com/",
        githubRepo: "https://github.com/gare-Ware/Abzijgen",
        url: "abzijgen",
        screens: abzijgenComingsoon 
    },
    {
        name: "My Portfolio (this site!)",
        summary: "A user friendly and accessible portfolio website featuring a sleek dark UI.",
        liveSite: "https://garyk.dev/",
        githubRepo: "https://github.com/gare-Ware/garyk-portfolio",
        url: "my-portfolio",
        screens: portfolioMockup
    }
]

export default projects
