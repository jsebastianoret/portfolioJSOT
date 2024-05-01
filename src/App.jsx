
import './App.css'
import Contact from './components/Contact/Contact'
import MainImage from './components/MainImage'
import Nav from './components/Nav'
import Projects from './components/Projects/Projects'
import Skill from './components/Skill/SkillSet'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <header>
        <MainImage/>

      
      
      </header>
      <Nav/>

      
      <main>


        <Projects></Projects>
        <Skill></Skill>
        <Experience ></Experience>
        <Contact></Contact>
      </main>

      <footer className='bg-dark p-2 text-center mt-5'>
        <Footer></Footer>

      </footer>


    

    </>
  )
}

export default App
