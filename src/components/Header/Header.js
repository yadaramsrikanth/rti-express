import Modal from "react-modal"

import { RxHamburgerMenu } from "react-icons/rx";
// import { MdToggleOn } from "react-icons/md";
// import { MdToggleOff } from "react-icons/md";
import { MdOutlineClose,MdLocationOn  } from "react-icons/md";
import { FaFacebook ,FaInstagram,FaYoutube} from "react-icons/fa";

import { BiLogoLinkedin,BiLogoTwitter } from "react-icons/bi";

import {Link} from "react-router-dom"
// import RTIReporterForm from "../RTIReporterForm";
// import RTIActivistForm from "../RTIActivistForm"
import ReporterActivistContext from "../../ReactContext";
import {LanguageContext} from "../../ReactContext"
import "./Header.css"


import { useState,useEffect, useContext} from "react";
Modal.setAppElement("#root");

const languageOptions=[
  {id:1,label:"Telugu",value:"TELUGU"},
  {id:2,label:"English",value:"ENGLISH"},
  {id:3,label:"kannada",value:"KANNADA"},
  {id:4,label:"Hindi",value:"HINDI"}
]
const Header=()=>{
  const {setIsReporterModal,setIsActivistModal}=useContext(ReporterActivistContext)
  const {isLanguage,setIsLanguage}=useContext(LanguageContext)
  // const [reporterisModalOpeninMobile,setReporterisModalOpeninMobile]=useState(false)
  //   const [activistisModalOpeninMobile,setactivistisModalOpeninMobile]=useState(false)

  // const {language}=props
  // const [mobileLanguage,setMobileLanguage]=useState("TELUGU")
  // const imageUrl="https://res.cloudinary.com/dqdx0yz2t/image/upload/v1752660174/IMG-20250715-WA0002_xrwuem-removebg-preview_qdht1o.png"
// const imageUrl="https://res.cloudinary.com/dqdx0yz2t/image/upload/v1754575769/RT-3_bcitau.png"
const imageUrl="https://res.cloudinary.com/dqdx0yz2t/image/upload/v1752644036/IMG-20250715-WA0002_xrwuem.jpg"
  // const [languageCategory,setLanguageCategory]=useState(false)
   

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

//   const categories=isLanguage==="ENGLISH" ?[ "Home","Telangana",
//   "Andhra Pradesh",
//   "National",
//   "InterNational",
//   "Cinema",
//   "Business",
//   "Sports",
// "E-paper",
// "AboutUs",
// "ContactUs"
// ]:
//   [ "హోమ్ ","తెలంగాణ",
//   "ఆంధ్రప్రదేశ్",
//   "జాతీయం",
//   "అంతర్జాతీయం",
//   "సినిమా",
//   "బిజినెస్",
//   "క్రీడలు",
// "ఈ-పేపర్",
// "మా గురించి",
// "సంప్రదించండి"]

switch(isLanguage){
  case "TELUGU":
    categories=[ "హోమ్ ","తెలంగాణ","ఆంధ్రప్రదేశ్","జాతీయం","అంతర్జాతీయం","సినిమా","బిజినెస్","క్రీడలు","ఈ-పేపర్","మా గురించి","సంప్రదించండి"]
    break
  case "ENGLISH":
    categories=[ "Home","Telangana","Andhra Pradesh","National","International","Cinema","Business","Sports","E-paper","AboutUs","ContactUs"]
    break
  case "KANNADA":    
        categories=["ಮುಖಪುಟ","ತೆಲಂಗಾಣ","ಆಂಧ್ರ ಪ್ರದೇಶ","ರಾಷ್ಟ್ರೀಯ","ಅಂತರರಾಷ್ಟ್ರೀಯ","ಸಿನಿಮಾ","ವ್ಯವಸ್ಥೆ","ಕ್ರೀಡೆ","ಇ-ಕಾಗದ","ನಮ್ಮ ಬಗ್ಗೆ","ಸಂಪರ್ಕಿಸಿ"]
        break
  case "HINDI":
        categories=["होम", "तेलंगाना", "आंध्र प्रदेश", "राष्ट्रीय", "अंतरराष्ट्रीय", "सिनेमा", "व्यापार", "खेल", "ई-पेपर", "हमारे बारे में", "संपर्क करें"]
        break
  default:
    categories=[ "హోమ్ ","తెలంగాణ","ఆంధ్రప్రదేశ్","జాతీయం","అంతర్జాతీయం","సినిమా","బిజినెస్","క్రీడలు","ఈ-పేపర్","మా గురించి","సంప్రదించండి"]
  }










  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

    return <> <nav className="Header-container">
    <Link to="/">  <img src={imageUrl} alt="logo" className="logo-rti-express-header" />  </Link>  {/*/* newly */ }
    {/* <div className="header-items-to-navigate"> */}
     <Link to="/" className="header-link-item">   <p className="text" id="home">{categories[0]}</p></Link>
      <Link to="/"className="header-link-item">  <p className="text" id="home">{categories[1]}</p></Link>
       <Link to="/" className="header-link-item"> <p className="text" id="home">{categories[2]}</p></Link>
       <Link to="/national" className="header-link-item"> <p className="text" id="home">{categories[3]}</p></Link>
       <Link to="/international" className="header-link-item"> <p className="text" id="home">{categories[4]}</p></Link>
       <Link to="/" className="header-link-item"> <p className="text" id="home">{categories[5]}</p></Link>
        <Link to="/" className="header-link-item"> <p className="text" id="home">{categories[6]}</p></Link>
        <Link to="/" className="header-link-item"> <p className="text" id="home">{categories[7]}</p></Link>

        <a href="https://www.rtiexpressnews.com/" target="_blank" rel="noopener noreferrer" className="text epaper"  id="home"><p>{categories[8]}</p></a>
        <Link to="/about" className="about-us-link-element">
         <p className="text" id="home">{categories[9]}</p> </Link>
        <Link to="/contact"  className="about-us-link-element"><p className="text" id="home">{categories[10]}</p></Link>
      {/* </div> */}
       </nav>

    <nav className="mobile-view-small-large-screen-hamburger-icon-container">
    <Link to="/"><img src={imageUrl} className="mobile-logo-rti-express" alt="RTI EXPRESS" /> </Link>
         <select value={isLanguage} onChange={onChangeLanguageMobile} className="drop-down-container">
            {languageOptions.map((lan)=>(
              <option key={lan.id} value={lan.value}>{lan.label}</option>
            ))}
          </select>
      
      {/* <div onClick={onToggleInmobileView} className="categories-container-on-mobile-view"> */}
        {/* {isON || languageCategory?<MdToggleOn size={30}  color="green" />:<MdToggleOff size={30} color="gray"/>} */}
        {/* <p className="language"> {isON || languageCategory ? 'English' : 'తెలుగు'}</p> */}
      {/* </div> */}
     { !isMenuOpen&&<button onClick={OpenIconHamburger} className="hamburger-button"><RxHamburgerMenu/></button>
    }
      
    </nav>
    {isMenuOpen&&<div className="right-side-drawer">
        <button className="close-button-mobile-view" onClick={closeIconHamburger}><MdOutlineClose /></button>
        
      <Link to="/" className="header-link-item"> <p  id="home">{categories[0]}</p></Link>
       <Link to="/" className="header-link-item"> <p  id="home">{categories[1]}</p></Link>
       <Link to="/" className="header-link-item"> <p id="home">{categories[2]}</p></Link>
       <Link to="/" className="header-link-item"> <p  id="home">{categories[3]}</p></Link>
       <Link to="/" className="header-link-item"> <p  id="home">{categories[4]}</p></Link>
       <Link to="/" className="header-link-item"> <p  id="home">{categories[5]}</p></Link>
            <Link to="/" className="header-link-item"> <p className="text" id="home">{categories[6]}</p></Link>
            <Link to="/" className="header-link-item"> <p className="text" id="home">{categories[7]}</p></Link>

       <a href="https://www.rtiexpressnews.com/" target="_blank" rel="noopener noreferrer" className="text epaper"  id="home"><p>{categories[8]}</p></a>
        
        <Link to="/contact"  className="about-us-link-element"><p className="text" id="home">{categories[9]}</p></Link>
         <Link to="/about" className="about-us-link-element"><p id="home">{categories[10]}</p></Link>
         <p onClick={()=>setIsActivistModal(true)} className="text" id="home"> RTI Activist Join </p>
        {/* <a className="text epaper" id="home" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/1chrWcKXZJlU0tF7jTJProrx8TQCr_vZIBSpJulAIO_8/edit"><p>RTI Reporter Join</p></a>  */}
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

    {/* <RTIReporterForm  isOpen={reporterisModalOpeninMobile}  onClose={()=>setReporterisModalOpeninMobile(false)}/>
       <RTIActivistForm isOpen={activistisModalOpeninMobile}  onClose={()=>setactivistisModalOpeninMobile(false)}/> */}
       </>

}

export default Header