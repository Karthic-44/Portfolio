import Contact from './components/Contact'
import Footer from './components/Footer'
import Projects from './components/Projects'
import About from './components/About'
import Header from './components/Header'
import Navbar from './components/Navbar'
import LenisScroll from './components/LenisScroll'
import Education from './components/Education'
import Experience from './components/Experience'
import Achivements from './components/Achivements'
import Certifications from './components/Certifications'

export default function App() {
    return (
        <>  
            <LenisScroll />
            <Navbar />
            <Header />
            <About />
            <Education />
            <Certifications />
            <Experience/>
            <Projects />
            <Achivements/>
            <Contact />
            <Footer />
        </>
    )
}