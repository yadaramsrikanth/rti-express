import Modal from "react-modal"

import { RxHamburgerMenu } from "react-icons/rx";

import { MdOutlineClose,MdLocationOn  } from "react-icons/md";
import { FaFacebook ,FaInstagram,FaYoutube} from "react-icons/fa";

import { BiLogoLinkedin,BiLogoTwitter } from "react-icons/bi";

import {Link,useLocation} from "react-router-dom"

import ReporterActivistContext from "../../ReactContext";
import {LanguageContext} from "../../ReactContext"


import teluguLanguage from "../../telugu.json"
import hindiLanguage from "../../hindi.json"
import englishLanguage from "../../english.json"
import kannadaLanguage from "../../kannada.json"

import "./Header.css"


import { useState,useEffect, useContext} from "react";
Modal.setAppElement("#root");

const languageOptions=[
 
  {id:1,label:"English",value:"en"},
   {id:2,label:"Telugu",value:"te"},
  {id:3,label:"kannada",value:"kn"},
  {id:4,label:"Hindi",value:"hi"}
]
const Header=()=>{

  const location=useLocation()
  const currentPath = location.pathname === "/" ? "home" : location.pathname.slice(1);
  const [activeSection,setActivesection]=useState("home")
  const {setIsReporterModal,setIsActivistModal}=useContext(ReporterActivistContext)
  const {isLanguage,setIsLanguage}=useContext(LanguageContext)
  const pathofUrl=activeSection ||currentPath
 
const imageUrl="https://res.cloudinary.com/dqdx0yz2t/image/upload/v1757666809/e7b04b41322092344b0fbacff8b44a049fb61a63_g6minf.jpg"  


const [isMenuOpen,setIsMenuOpen]=useState(false)

const OpenIconHamburger=()=>{
  setIsMenuOpen(true)
}

const closeIconHamburger=()=>{
  setIsMenuOpen(false)
}


const onChangeLanguageMobile=(e)=>{
setIsLanguage(e.target.value)
}

let categories=[]

switch(isLanguage){
  case "te":
    categories=teluguLanguage
    break
  case "en":
    categories=englishLanguage
    break
  case "kn":    
       categories=kannadaLanguage
        break
  case "hi":
        categories=hindiLanguage
        break
  default:
    categories=englishLanguage
  }
useEffect(() => {
    setActivesection(""); // Clear epaper highlight on route change
  }, [location]);

useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);
// onClick={()=>setActivesection("home")}
    return <> <nav className="Header-container">
    <Link to="/">  <img src={imageUrl} alt="logo" className="logo-rti-express-header" />  </Link>  
    <div className="header-items-separator-container"></div>
    <div className="header-items-container">
    {/* <div className="header-items-to-navigate"> */}
     <Link to="/" className="header-link-item">   <p className={`${pathofUrl==="home"?"active":""} text`} id="home" >{categories[0]}</p></Link>
      <Link to="/ap"className="header-link-item">  <p className={`${pathofUrl==="ap"?"active":""} text`} id="home">{categories[1]}</p></Link>
       <Link to="/telangana" className="header-link-item"> <p className={`${pathofUrl==="telangana"?"active":""} text`} id="home" >{categories[2]}</p></Link>
       <Link to="/national" className="header-link-item"> <p className={`${pathofUrl==="national"?"active":""} text`} id="home" >{categories[3]}</p></Link>
       <Link to="/international" className="header-link-item"> <p className={`${pathofUrl==="international"?"active":""} text`} id="home" >{categories[4]}</p></Link>
       <Link to="/cinema" className="header-link-item"> <p className={`${pathofUrl==="cinema"?"active":""} text`} id="home" >{categories[5]}</p></Link>
        <Link to="/business" className="header-link-item"> <p className={`${pathofUrl==="business"?"active":""} text`} id="home" >{categories[6]}</p></Link>
        <Link to="/sports" className="header-link-item"> <p className={`${pathofUrl==="sports"?"active":""} text`} id="home" >{categories[7]}</p></Link>

        <a href="https://www.rtiexpressnews.com/" target="_blank" rel="noopener noreferrer"    className={`${pathofUrl==="epaper"?"active":""} text epaper`} id="home"  onClick={()=>setActivesection("epaper")}><p>{categories[8]}</p></a>
      
     
   </div>    
</nav>
    <nav className="mobile-view-small-large-screen-hamburger-icon-container">
    <Link to="/"><img src={imageUrl} className="mobile-logo-rti-express" alt="RTI EXPRESS" /> </Link>
         <select value={isLanguage} onChange={onChangeLanguageMobile} className="drop-down-container">
            {languageOptions.map((lan)=>(
              <option key={lan.id} value={lan.value}>{lan.label}</option>
            ))}
          </select>
      
     
      
     { !isMenuOpen&&<button onClick={OpenIconHamburger} className="hamburger-button"><RxHamburgerMenu/></button>
    }
      
    </nav>
    {isMenuOpen&&<div className="right-side-drawer">
        <button className="close-button-mobile-view" onClick={closeIconHamburger}><MdOutlineClose /></button>
        
      <Link to="/" className="header-link-item"> <p  id="home">{categories[0]}</p></Link>
       <Link to="/" className="header-link-item"> <p  id="home">{categories[1]}</p></Link>
       <Link to="/" className="header-link-item"> <p id="home">{categories[2]}</p></Link>
       <Link to="/national" className="header-link-item"> <p  id="home">{categories[3]}</p></Link>
       <Link to="/international" className="header-link-item"> <p  id="home">{categories[4]}</p></Link>
       <Link to="/" className="header-link-item"> <p  id="home">{categories[5]}</p></Link>
            <Link to="/" className="header-link-item"> <p className="text" id="home">{categories[6]}</p></Link>
            <Link to="/" className="header-link-item"> <p className="text" id="home">{categories[7]}</p></Link>

       <a href="https://www.rtiexpressnews.com/" target="_blank" rel="noopener noreferrer" className="text epaper"  id="home"><p>{categories[8]}</p></a>
        
      
         <p onClick={()=>setIsActivistModal(true)} className="text" id="home"> RTI Activist Join </p>
      <p onClick={()=>setIsReporterModal(true)} className="text" id="home"> RTI Reporter Join </p> 
        <p className="text" id="home">Feedback</p>
        <p id="home">hello@rtiexpress.com</p>
        <hr className="horizontal-line-mobile-view"/>
        <div className="social-media-links-container">
          <a href="https://www.facebook.com/share/1QU7yNAkhg/" target="_blank" rel="noopener noreferrer"><FaFacebook size={20} className="social-media-icon facebook"/></a>
            
           <a href="https://www.instagram.com/rtiexpress/" target="_blank" rel="noopener noreferrer"><FaInstagram size={20} className="social-media-icon insta"/></a>
           
          <a href="https://www.youtube.com/@rtiexpress667" target="_blank" rel="noopener noreferrer"><FaYoutube size={20} className="social-media-icon youtube"/></a>
         <a href="https://www.linkedin.com/in/rti-express-news-058a44378/" target="_blank" rel="noopener noreferrer"> <p><BiLogoLinkedin size={20} className="social-media-icon linkedin" /></p></a> 
          <a  href="https://x.com/rti_expressnews" target="_blank" rel="noopener noreferrer">    <p><BiLogoTwitter size={20} className="social-media-icon twitter" /></p> </a> 
              <a title="View Location on Google Maps" target="_blank"  rel="noopener noreferrer" href="https://maps.app.goo.gl/kKD3CUwdMENNYT2a7"><p><MdLocationOn size={22} className="social-media-icon map-icon"/></p></a>
 
          
        </div>
        </div>}

  
       </>

}

export default Header