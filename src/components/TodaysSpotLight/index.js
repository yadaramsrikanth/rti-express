import {Link} from "react-router-dom"
import todaysSpotlightnews from "../../todaysSpotlightnews.json"
import "./index.css"
const TodaysSpotLight=()=>{
    return <ul className="todays-spot-light-unordered-container">
        {
            todaysSpotlightnews.map((item,index)=>(
               
                <li key={index} className="spot-light-list-item-container">
                    <Link to={`/news/${item.id}`} className="spot-light-link">
                    <img src={item.image} alt={`spot ${index}`} className="spot-light-image" />
                    <p className="spot-light-text">{item.text}</p>
                
                </Link>
                </li>
            )
       ) }
    </ul>
}

export default TodaysSpotLight