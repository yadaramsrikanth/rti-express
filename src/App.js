import { BrowserRouter,Routes,Route } from "react-router-dom";
import { CgMail } from "react-icons/cg";
import { MdToggleOn } from "react-icons/md";
import { MdToggleOff } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import Header from "./components/Header/Header";
// import Register from "./components/Register/Register";
import SliderWithContent from "./components/SliderWithContent/index";
import NewsDetails from "./components/NewsDetails";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import "./App.css"
import { useState } from "react";
const App=()=>{
  const [isON,SetIsON]=useState(false)
const imageUrl="https://res.cloudinary.com/dqdx0yz2t/image/upload/v1752644036/IMG-20250715-WA0002_xrwuem.jpg"

const toToggle=()=>{
  SetIsON((prev)=>!prev)
}

  return <BrowserRouter>
   <div className="app-container">
    <div className="top-container">
      <div className="email-container">
     <CgMail size={22} className="icon-email"/>
      <h3 className="website-mail">hello@rtiexpress.com</h3>
      </div>
      
      <div className="top-left-side-text-container">
        <div className="toggle-container" onClick={toToggle}>
        {isON?<MdToggleOn size={35}  color="green" />:<MdToggleOff size={35} color="gray"/>}
        <p className="language"> {isON ? 'English' : 'తెలుగు'}</p>
        </div>
  
 

  <a href="https://www.facebook.com/share/1QU7yNAkhg/" target="__blank"><FaFacebook size={20} className="social-media-icon"/></a>
 <a href="https://www.instagram.com/rtiexpress/" target="__blank"><FaInstagram size={20} className="social-media-icon"/></a>
  <a href="https://www.youtube.com/@rtiexpress667" target="__blank"><FaYoutube size={20} className="social-media-icon"/></a>
  <p><BiLogoLinkedin size={20} className="social-media-icon" /></p>
  <p><BiLogoTwitter size={20} className="social-media-icon" /></p>
   <p className="feedback text">Feedback</p>
      
      
      </div>
    </div>
    <div className="logo-container">
    <img src={imageUrl} className="logo-rti-express" alt="RTI EXPRESS" />
    <div className="bg-color-container"></div>
    </div>
    <Header isON={isON}/>
  
  {/* <div className="map-form-container"> */}
  {/* <div className="map-container">  */}
 {/* <div className="form-main-container"> */}
  {/* <h1 className="coming-soon">COMING SOON.....</h1> */}
  {/* <h2 className="early-access-heading">Be among the first to explore our new website</h2> */}
  {/* <p className="signup-para">sign up now for early access</p> */}
 
  {/* <Register/> */}
 {/* </div> */}
 {/* </div> */}
    {/* </div> */}
    <Routes>
    <Route path="/" element={<SliderWithContent/>}/>
    <Route path="/news/:id" element={<NewsDetails/>}/>
    <Route path="/about" element={<AboutUs/>}/>
    <Route path="/contact" element={<ContactUs/>} />
    </Routes>


  </div>
  </BrowserRouter>
}

export default App