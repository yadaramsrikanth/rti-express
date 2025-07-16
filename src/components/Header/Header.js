import { RxHamburgerMenu } from "react-icons/rx";
import { MdToggleOn } from "react-icons/md";
import { MdToggleOff } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import "./Header.css"
import { useState } from "react";

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
  "Ideals",
  "Cultural",
  "Business",
  "Editorial",
  "Sports"]:
  [ "తెలంగాణ",
  "ఆంధ్రప్రదేశ్",
  "జాతీయం",
  "సినిమా",
  "ఆదర్శం",
  "సాంస్కృతికం",
  "బిజినెస్",
  "లొగొట్టు సంపాదకీయం",
  "క్రీడలు"]
  console.log(categories)
    return <> <nav className="Header-container">
        <p className="text" id="home">{categories[0]}</p>
        <p className="text" id="home">{categories[1]}</p>
        <p className="text" id="home">{categories[2]}</p>
        <p className="text" id="home">{categories[3]}</p>
        <p className="text" id="home">{categories[4]}</p>
        <p className="text" id="home">{categories[5]}</p>
        <p className="text" id="home">{categories[6]}</p>
        <p className="text" id="home">{categories[7]}</p>
        <p className="text" id="home">{categories[8]}</p>
        <p className="text" id="home">Contact Us</p>
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
        <p  id="home">{categories[6]}</p>
        <p  id="home">{categories[7]}</p>
        <p  id="home">{categories[8]}</p>
        <p id="home">Contact Us</p>
        <p id="home">hello@rtiexpress.com</p>
        </div>}


       </>

}

export default Header