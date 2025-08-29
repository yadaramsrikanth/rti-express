
import { useEffect, useState } from "react"
import "./index.css"


const LiveNews=()=>{
    
    const [livenews,setLiveNews]=useState([])
const fetchLiveNews=async()=>{
    const url="https://api.rtiexpress.in/api/v1/news/fetchNews?language=English"
    const response = await fetch(url)
    
    
    const data=await response.json()
    console.log(data)
    setLiveNews(data)
}

    useEffect(()=>{
     fetchLiveNews()
    },[])

    return <div className="live-news-main-container">
        <h1>లైవ్ న్యూస్</h1>
        <ul className="unordered-live-news-container">
            {
                livenews.map((newsItem)=>(
                    <li key={newsItem._id}>
                        {/* <img className="live-news-image" src={newsItem.image} alt={newsItem.headline} /> */}
                    </li>
                ))
            }
        </ul>
    </div>
}

export default LiveNews