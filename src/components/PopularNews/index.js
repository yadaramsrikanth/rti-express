import {Link} from "react-router-dom"
import popularnewsdata from '../popularnewsdata.json';
import "./index.css"

const PopularNews=()=>{
    return <ul className='popular-news-unordered-container'>
        {
            popularnewsdata.map((item,index)=>(
                <li key ={index} className='popular-news-item-card'>
                    <Link to={`/news/${item.id}`} className="popular-news-link-eleemnt">
                    <img src={item.image} alt={`popular ${index}`}  className='popular-news-image'/>
                    <p className='popular-news-text'>{item.text}</p>
                    </Link>
                </li>
            ))
        }
    </ul>
}

export default PopularNews