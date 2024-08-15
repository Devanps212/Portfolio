import './home.css'
import Nav from "../navBar/navbar"
import Banner from "../banner/banner"
import AboutMe from "../aboutMe/aboutMe"
import Skills from '../Skills/skills'
import Projects from '../projects/projects'


const Home = ()=>{
    return(
        <>
        <Nav/>
        <Banner/>
        <AboutMe/>
        <Skills/>
        <Projects/>
        </>
    )
}

export default Home