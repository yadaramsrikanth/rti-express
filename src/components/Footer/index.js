import { Link } from "react-router-dom"
import { MdCopyright } from "react-icons/md";
import "./index.css"
const logoImageUrl="https://res.cloudinary.com/dqdx0yz2t/image/upload/v1752644036/IMG-20250715-WA0002_xrwuem.jpg"

const Footer=()=>{
    return <div className="footer-main-container">
      <div className="footer-info-containerss">
        <div className="website-info-in-footer">
        <img src={logoImageUrl}  alt="logo-in-footer" className="footer-image-logo"/>
      
      <p>#7-2-28, Near Indian Gas,</p>
      <p>Vasavi Dharmashala Road,</p>
      <p>Hindupur, Sri Sathya Sai District,</p>
      <p>Andhra Pradesh – 515201</p>
      <p><span>Contact:</span> +9176688 86666, +9190596 79786</p>
      <p><span>Email:</span> contact@rtiexpress.in</p>
    </div>
<div className="company-container">
    <h2 className="company-name-heading">Company</h2>
 <a href="https://www.rtiexpressnews.com/" target="_blank" rel="noopener noreferrer"><p>E-paper</p></a>
    <Link to="/about"><p>AboutUs</p></Link>
     <Link to="/contact" ><p>ContactUs</p></Link>
   <a  target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/1chrWcKXZJlU0tF7jTJProrx8TQCr_vZIBSpJulAIO_8/edit"><p>RTI Reporter</p></a> 
    <p>RTI Activist</p>
</div>


<div className="legal-info-conatiner">
    <h2 className="legal-heading">Legal</h2>
<p>Legal Information</p>
<p>RNI:APTEL/2018/76797</p>
<p>RNI:APTEL/2019/15838</p>
<p> <span>Certificate of incorporation:</span>U64200AP2021PTC118146</p>
<p>MSME:UDYAM-AP-250038710</p>
<p>Register of Firms No:(43 Of 2018)</p>
<p>Labour Reg No:AP-25-18-006-03671823</p>
<p>Postal licenced:HDP/010/2024-2026</p>
<p>GST No:37ABJPF4955F1ZK</p>
</div>








<div className="company-container">
    <h2 className="company-name-heading">EXPLORE</h2>
  <Link to="/"><p>Telangana</p></Link>  
     <Link to="/"><p>AndhraPradesh</p></Link> 
   <Link to="/">  <p>National</p></Link> 
   <Link to="/">  <p>International</p></Link> 
    <Link to="/"> <p>Cinema</p></Link> 
     <Link to="/"><p>Business</p></Link> 
     <Link to="/"> <p>Sports</p></Link> 
</div>

<div className="company-container">
    <h2 className="company-name-heading">Follow Us On</h2>
     <a href="https://www.facebook.com/share/1QU7yNAkhg/" target="_blank" rel="noopener noreferrer"><p>Facebook</p></a> 
  <a href="https://www.instagram.com/rtiexpress/" target="_blank" rel="noopener noreferrer"> <p>Instagram</p></a> 
     <a href="https://www.youtube.com/@rtiexpress667" target="_blank" rel="noopener noreferrer"><p>Youtube</p></a>
    <p>Twitter</p>
    <p>Linkedin</p>
</div>
</div>
<hr className="horizontal-line"/>
<div className="copy-right-container">
  <p>Designed and Developed by Krishlabs</p>
  <p className="copy-right-logo-text"><MdCopyright size={18} className="copy-righ-icon"/> 2025 All Rights Reserved</p>

    </div>
    </div>
}

export default Footer