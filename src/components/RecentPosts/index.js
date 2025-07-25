import {Link} from "react-router-dom"
import todaysSpotlightnews from "../../todaysSpotlightnews.json"
import "./index.css"

const RecentPosts=()=>{
    return <ul className="recent-posts-unordered-container">
        {
            todaysSpotlightnews.slice(0,3).map((item,index)=>(
                <li className="list-item-recent-post">
                    <Link to={`/news/${item.id}`} className="recent-post-link-element">
                    <img src={item.image} alt={`recent ${index}`}  className="recent-post-image"/>
                    <p className="recent-posts-para">{item.text}</p>
                    </Link>
                </li>
            ))
        }
    </ul>
}

export default RecentPosts