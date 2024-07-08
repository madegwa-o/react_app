import NavBar from './NavigationBar/NavBar'
import MyProfile from './Profile/MyProfile'
import './App.css'
import Skills from './Skills/Skills'
import TechStack from './TechStack/TechStack'
import HireMe from './HireMe/HireMe'
import LetsConnect from './LetsConnect/LetsConnect'
import TimeLine from './TimeLine/TimeLine'

function App() {
  return (
    <>
      <NavBar/>
      <section id="about">
        <MyProfile />
      </section>
      <section id="skills">
        <Skills/>
      </section>
      <section id="projects">
        <TechStack/>
      </section>
      <section id="timeline">
        <TimeLine/>
      </section>
      <section id="resume">
        <HireMe/>
      </section>
      <section id="connect">
        <LetsConnect/>
      </section>
    </>
  )
}

export default App
