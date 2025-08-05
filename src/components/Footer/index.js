import { Link } from "react-router-dom"
import "./index.css"
const logoImageUrl="https://res.cloudinary.com/dqdx0yz2t/image/upload/v1752644036/IMG-20250715-WA0002_xrwuem.jpg"

const Footer=()=>{
    return <div className="footer-main-container">
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
}

export default Footer