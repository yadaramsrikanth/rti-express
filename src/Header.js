import { FaSquareFacebook } from "react-icons/fa6";
import "./Header.css"

const Header=()=>{
    return <div className="Header-container">
        <p className="text" id="home">Home</p>
        <FaSquareFacebook size={24}/>
    </div>
}

export default Header