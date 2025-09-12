import {Link} from "react-router-dom"
import { useEffect, useState } from "react"
import "./index.css"


const LiveNews=()=>{
    
    const [livenews,setLiveNews]=useState([])
const fetchLiveNews=async()=>{
    const url="https://api.rtiexpress.in/v1/news/fetch"
    const response = await fetch(url)
    
    
    const data=await response.json()
    console.log("live news: ",data)
    setLiveNews(data.news)
}

    useEffect(()=>{
     fetchLiveNews()
    },[])

    return <div className="live-news-main-container">
        <h1 className="live-news-heading" >లైవ్ న్యూస్</h1>
        <ul className="unordered-live-news-container">
            {
                livenews.map((newsItem)=>(
                    <li key={newsItem._id}  className="live-news-item-card">
                       <Link to={`news/${newsItem._id}`} className="link-live-news-item-card">
                        <img className="live-news-image" src={newsItem.media} alt={newsItem.headline} />
                    <p className="live-news-description">{newsItem.headline}</p>
                    </Link>
                    </li>
                ))
            }
        </ul>
    </div>
}

export default LiveNews