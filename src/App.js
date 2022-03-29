import Navbar from "./Components/Navbar";
import Home from './Components/Home'
import About from './Components/About'
import RecentProjects from './Components/RecentProjects'
import Contact from './Components/Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content-container">
        <Home />
        <About />
        <RecentProjects />
        <Contact />
      </main>
    </div>
  );
}

export default App;


/* 
Site map 
  - App components
    - Navbar component
      - hamburger icon custom animates to x when menu open
      - contact button
        - button class
      - navmenu
    - home
    - about
    - recent projects
      - project page component
      - route to show different project pages
    - contact
      - contact form component
    - external link component
*/