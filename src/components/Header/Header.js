import { RxHamburgerMenu } from "react-icons/rx";
import { MdToggleOn } from "react-icons/md";
import { MdToggleOff } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import "./Header.css"
import { useState,useEffect} from "react";

const Header=(props)=>{
  const {isON}=props
  const imageUrl="https://res.cloudinary.com/dqdx0yz2t/image/upload/v1752660174/IMG-20250715-WA0002_xrwuem-removebg-preview_qdht1o.png"

  const [languageCategory,setLanguageCategory]=useState(false)
   

const [isMenuOpen,setIsMenuOpen]=useState(false)

const OpenIconHamburger=()=>{
  setIsMenuOpen(true)
}

const closeIconHamburger=()=>{
  setIsMenuOpen(false)
}


const onToggleInmobileView=()=>{
setLanguageCategory((prev)=>(!prev))
}


  const categories=isON ||languageCategory ? [ "Telangana",
  "Andhra Pradesh",
  "National",
  "Cinema",
  "Business",
  "Sports"]:
  [ "తెలంగాణ",
  "ఆంధ్రప్రదేశ్",
  "జాతీయం",
  "సినిమా",
  "బిజినెస్",
  "క్రీడలు"]

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
        <p className="text" id="home">{categories[0]}</p>
        <p className="text" id="home">{categories[1]}</p>
        <p className="text" id="home">{categories[2]}</p>
        <p className="text" id="home">{categories[3]}</p>
        <p className="text" id="home">{categories[4]}</p>
        <p className="text" id="home">{categories[5]}</p>
        <a href="https://www.rtiexpressnews.com/" target="__blank" className="text epaper"  id="home"><p>E-paper</p></a>
        
       
       <p className="text" id="home">AboutUs</p> 
        <p className="text" id="home">ContactUs</p>
        
       </nav>

    <nav className="mobile-view-small-large-screen-hamburger-icon-container">
      <img src={imageUrl} className="mobile-logo-rti-express" alt="RTI EXPRESS" />
      <div onClick={onToggleInmobileView} className="categories-container-on-mobile-view">
        {isON || languageCategory?<MdToggleOn size={30}  color="green" />:<MdToggleOff size={30} color="gray"/>}
        <p className="language"> {isON || languageCategory ? 'English' : 'తెలుగు'}</p>
      </div>
     { !isMenuOpen&&<button onClick={OpenIconHamburger} className="hamburger-button"><RxHamburgerMenu/></button>
    }
      
    </nav>
    {isMenuOpen&&<div className="right-side-drawer">
        <button className="close-button-mobile-view" onClick={closeIconHamburger}><MdOutlineClose /></button>
        
         <p  id="home">{categories[0]}</p>
        <p  id="home">{categories[1]}</p>
        <p id="home">{categories[2]}</p>
        <p  id="home">{categories[3]}</p>
        <p  id="home">{categories[4]}</p>
        <p  id="home">{categories[5]}</p>
       <a href="https://www.rtiexpressnews.com/" target="__blank" className="text epaper"  id="home"><p>Epaper</p></a>
        <p className="text" id="home"> RTI Activist Join </p>
        <a className="text epaper" id="home" target="__blank" href="https://docs.google.com/forms/d/1chrWcKXZJlU0tF7jTJProrx8TQCr_vZIBSpJulAIO_8/edit"><p>RTI Reporter Join</p></a>  
        <p id="home">Contact Us</p>
        <p id="home">hello@rtiexpress.com</p>
        <hr className="horizontal-line"/>
        <div className="social-media-links-container">
          <a href="https://www.facebook.com/share/1QU7yNAkhg/" target="__blank"><FaFacebook size={20} className="social-media-icon"/></a>
            
           <a href="https://www.instagram.com/rtiexpress/" target="__blank"><FaInstagram size={20} className="social-media-icon"/></a>
           
          <a href="https://www.youtube.com/@rtiexpress667" target="__blank"><FaYoutube size={20} className="social-media-icon"/></a>
            
             
          
        </div>
        </div>}


       </>

}

export default Header