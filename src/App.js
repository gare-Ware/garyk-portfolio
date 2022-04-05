import Navbar from "./Components/Navbar";
import Home from './Components/Home'
import About from './Components/About'
import RecentProjects from './Components/RecentProjects'
import Contact from './Components/Contact'
import ScrollSpy from "react-ui-scrollspy";

// import ProjectDetails from "./Pages/ProjectDetails";
// import projects from "./Components/projects";
// import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Navbar />
      <main>
        <ScrollSpy scrollThrottle={100}>
          <Home />
          <About />
          <RecentProjects />
          <Contact />
        </ScrollSpy>
      </main>
    </div>
  );
}

export default App;

/*   const projectPages = projects.map(obj => (
    <Route 
      path={`/project-details/${obj.url}`}
      element={<ProjectDetails project={obj} />}
    />
  ))

  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <About />
              <RecentProjects />
              <Contact />
            </>
          } />
          {projectPages}
        </Routes>
      </main>
    </div>
  ); */