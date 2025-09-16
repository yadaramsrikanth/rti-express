import { Link } from "react-router-dom"
// import { MdCopyright } from "react-icons/md";
import ReporterActivistContext from "../../ReactContext"
import "./index.css"
import { useContext } from "react";
// const logoImageUrl="https://res.cloudinary.com/dqdx0yz2t/image/upload/v1752644036/IMG-20250715-WA0002_xrwuem.jpg"
// const logoImageUrl="https://res.cloudinary.com/dqdx0yz2t/image/upload/v1754575769/RT-3_bcitau.png"
// const logoImageUrl="https://res.cloudinary.com/dqdx0yz2t/image/upload/v1752644036/IMG-20250715-WA0002_xrwuem.jpg"
const logoImageUrl="https://res.cloudinary.com/dqdx0yz2t/image/upload/v1757666809/e7b04b41322092344b0fbacff8b44a049fb61a63_g6minf.jpg"
const Footer=()=>{
  const {setIsReporterModal,setIsActivistModal}=useContext(ReporterActivistContext)
    return <div className="footer-main-container">
              {/* <img src={logoImageUrl}  alt="logo-in-footer" className="footer-image-logo"/> */}
  <div className="background-colour-container">
      <div className="footer-info-containerss">
        <div className="website-info-in-footer">
        <img src={logoImageUrl}  alt="logo-in-footer" className="footer-image-logo"/>
      
      <p>#7-2-28, Near Indian Gas,</p>
      <p>Vasavi Dharmashala Road,</p>
      <p>Hindupur, Sri Sathya Sai(D),</p>
      <p>Andhra Pradesh – 515201</p>
      <p><span>Contact:</span> +9176688 86666,</p>
      <p> +9190596 79786</p>
      <p><span>Email:</span> contact@rtiexpress.in</p>
    </div>
<div className="company-container">
    <h2 className="company-name-heading">Company</h2>
 <a href="https://www.rtiexpressnews.com/" target="_blank" rel="noopener noreferrer"><p>E-paper</p></a>
    <Link to="/about"><p>AboutUs</p></Link>
     <Link to="/contact" ><p>ContactUs</p></Link>
   <p onClick={()=>setIsReporterModal(true)}>RTI Reporter</p>
    <p onClick={()=>setIsActivistModal(true)}>RTI Activist</p>
    <Link to="/legal-info"><p>legal</p></Link>
</div>

<div className="company-container">
    <h2 className="company-name-heading">Explore</h2>
  <Link to="/"><p>Telangana</p></Link>  
     <Link to="/"><p>AndhraPradesh</p></Link> 
   <Link to="/national">  <p>National</p></Link> 
   <Link to="/international">  <p>International</p></Link> 
    <Link to="/cinema"> <p>Cinema</p></Link> 
     <Link to="/business"><p>Business</p></Link> 
     <Link to="/sports"> <p>Sports</p></Link> 
</div>






<div className="company-container">
    <h2 className="company-name-heading">Policies</h2>
<Link to="/termsandconditions"><p>Terms and Conditions</p></Link> 
    <p>Privacy Policy</p>
    <p>Refund Policy</p>
     <p>User Policies</p>
</div>

<div className="company-container">
    <h2 className="company-name-heading">Follow Us On</h2>
     <a href="https://www.facebook.com/share/1QU7yNAkhg/" target="_blank" rel="noopener noreferrer"><p>Facebook</p></a> 
  <a href="https://www.instagram.com/rtiexpress/" target="_blank" rel="noopener noreferrer"> <p>Instagram</p></a> 
     <a href="https://www.youtube.com/@rtiexpress667" target="_blank" rel="noopener noreferrer"><p>Youtube</p></a>
  <a href="https://x.com/rti_expressnews" target="_blank" rel="noopener noreferrer">  <p>X</p></a>
   <a  href="https://www.linkedin.com/in/rti-express-news-058a44378/" target="_blank" rel="noopener noreferrer"> <p>Linkedin</p></a>
</div>
</div>
<hr className="horizontal-line"/>
<div className="copy-right-container">
  <a href="https://krishlabs.in/" target="_blank" rel="noopener noreferrer">Designed and Developed by Krishlabs</a>
  {/* <p>Designed and Developed by Krishlabs</p> */}
  {/* <p className="copy-right-logo-text"><MdCopyright size={18} className="copy-righ-icon"/> 2025 All Rights Reserved</p> */}

    </div>
    </div></div>
}

export default Footer