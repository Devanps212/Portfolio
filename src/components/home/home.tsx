import './home.css'
import Nav from "../navBar/navbar"
import Banner from "../banner/banner"
import AboutMe from "../aboutMe/aboutMe"
import Skills from '../Skills/skills'
import Projects from '../projects/projects'
import Service from '../service/myService'
import Footer from '../footer/footer'
import ContactMe from '../contactMe/contactMe'
import MyJourney from '../MyJourney/myJourney'


const Home = ()=>{
    return(
        <>
        <Nav/>
        <Banner/>
        <AboutMe/>
        <Skills/>
        <Projects/>
        <MyJourney/>
        <Service/>
        <ContactMe/>
        <Footer/>
        </>
    )
}

export default Home