import BannerView from "../../Components/bannerView/bannerView";
import About from "../../Components/about/about";
import Skills from "../../Components/skills/skills";
import Resume from "../../Components/resume/resume";
import Contact from "../../Components/contact/contact";
import Copyright from "../../Components/copyright/copyright";


import { Element } from "react-scroll";

export default function Home() {
    return <div>

        <Element name={'home'} id="home"><BannerView /></Element>
        <Element name={'about'} id="about"><About /></Element>
        <Element name={'skills'} id="skills"><Skills /></Element>
        <Element name={'resume'} id="resume"><Resume /></Element>
        <Element name={'contact'} id="contact"><Contact /></Element>
        <Copyright />

    </div>
}