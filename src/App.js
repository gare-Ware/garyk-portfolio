import Navbar from "./Components/Navbar";
import Home from './Components/Home'
import About from './Components/About'
import RecentProjects from './Components/RecentProjects'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <RecentProjects />
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