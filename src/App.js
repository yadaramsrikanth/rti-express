import { CgMail } from "react-icons/cg";
import Header from "./Header";
import Register from "./Register";
import "./App.css"
const App=()=>{
const imageUrl="https://res.cloudinary.com/dqdx0yz2t/image/upload/v1752484779/baa1282749cc67b4168457ccdf668bef78425d9e_qvofhy.jpg"


  return <div className="app-container">
    <div className="top-container">
      <div className="email-container">
     <CgMail size={22} className="icon"/>
      <h3 className="website-mail">hello@rtiexpress.com</h3></div>
      <div className="top-left-side-text-container">
  <p className="feedback text">Feedback</p>
  <p className="symbol text">|</p>
  <p className="text epaper">Epaper</p>
      </div>
    </div>
    <div className="logo-container">
    <img src={imageUrl} className="logo-rti-express" alt="RTI EXPRESS" />
    <div className="bg-color-container"></div>
    </div>
    <Header />
    <div className="map-form-container">
    <div className="map-container"> 
 <div className="form-main-container">
  <h2 className="early-access-heading">Be among the first to explore our new website</h2>
  <p className="signup-para">sign up now for early access</p>
 
  <Register/>
 </div>
 </div>
    </div>
  </div>
}

export default App