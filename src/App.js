// import {Swiper,SwiperSlide} from "swiper/react"
// import {Pagination,Autoplay} from "swiper/modules"

import { BrowserRouter,Routes,Route, Link } from "react-router-dom";
import { CgMail } from "react-icons/cg";
// import { MdToggleOn } from "react-icons/md";
// import { MdToggleOff } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import Header from "./components/Header/Header";
// import Register from "./components/Register/Register";
import SliderWithContent from "./components/SliderWithContent/index";
import NewsDetails from "./components/NewsDetails";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer"
import NotFound from "./components/NotFound";
import LegalInfo from "./components/Legal";
// import RTIReporterForm from "./components/RTIReporterForm";
// import addimages from "./addImages.json"
import "./App.css"
import { useState } from "react";

const languageOptions=[
  {id:1,label:"Telugu",value:"TELUGU"},
  {id:2,label:"English",value:"ENGLISH"}
]



const App=()=>{
  // const [isON,SetIsON]=useState(false)
  const [language,setLanguage]=useState("TELUGU")
const imageUrl="https://res.cloudinary.com/dqdx0yz2t/image/upload/v1754575769/RT-3_bcitau.png"


// const toToggle=()=>{
  // SetIsON((prev)=>!prev)
// }

const onChangeLanguage=(e)=>{
  setLanguage(e.target.value)
}
  return <BrowserRouter>
   <div className="app-container">
    <div className="top-container">
      <div className="email-container">
     <CgMail size={20} className="icon-email"/>
      <p className="website-mail">hello@rtiexpress.com</p>
      </div>
      
      <div className="top-left-side-text-container">
         <select value={language} onChange={onChangeLanguage} className="drop-down-container">
            {languageOptions.map((lan)=>(
              <option key={lan.id} value={lan.value}>{lan.label}</option>
            ))}
          </select>
        {/* <div className="toggle-container" onClick={toToggle}> */}
         
        {/* {isON?<MdToggleOn size={35}  color="green" />:<MdToggleOff size={35} color="gray"/>} */}
        {/* <p className="language"> {isON ? 'English' : 'తెలుగు'}</p> */}
        {/* </div> */}
  
 

  <a href="https://www.facebook.com/share/1QU7yNAkhg/" target="_blank"  rel="noopener noreferrer"><FaFacebook size={25} className="social-media-icon facebook"/></a>
 <a href="https://www.instagram.com/rtiexpress/" target="_blank"  rel="noopener noreferrer"><FaInstagram size={25} className="social-media-icon insta"/></a>
  <a href="https://www.youtube.com/@rtiexpress667" target="_blank"  rel="noopener noreferrer"><FaYoutube size={25} className="social-media-icon youtube"/></a>
  
 <a href="https://www.linkedin.com/in/rti-express-news-058a44378/" target="_blank" rel="noopener noreferrer"> <p><BiLogoLinkedin size={25} className="social-media-icon linkedin" /></p></a>
<a href="https://x.com/rti_expressnews" target="_blank" rel="noopener noreferrer"> <p><BiLogoTwitter size={25} className="social-media-icon twitter" /></p></a>
  <a title="View Location on Google Maps" target="_blank"  rel="noopener noreferrer" href="https://maps.app.goo.gl/kKD3CUwdMENNYT2a7"><p><MdLocationOn size={25} className="social-media-icon map-icon"/></p></a>
   <p className="feedback text">Feedback</p>
      
      
      </div>
    </div>
    <div className="logo-container">
      <Link to="/">
    <img src={imageUrl} className="logo-rti-express" alt="RTI EXPRESS" /></Link>
    <div className="bg-color-container">
          {/* <Swiper modules={[Pagination,Autoplay]} 
          spaceBetween={50}
        slidesPerView={1}
        autoplay={{delay:2000,disableOnInteraction:false}}
       pagination={{clickable:true}}
        >
            {
              addimages.map((addItem)=>(
 <SwiperSlide key={addItem.id}>
  <img src={addItem.add_image} alt={`addimage-ban ${addItem.id}`} className="add-banner-images"/>
 </SwiperSlide>
              ))
            }
           
          </Swiper> */}


    </div>
    </div>
    <Header language={language}/>
  
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
   <Route path="/legal-info" element={<LegalInfo/>} />
    <Route path="*" element={<NotFound/>}/>
    </Routes>

    <Footer />
  </div>
  </BrowserRouter>
}

export default App