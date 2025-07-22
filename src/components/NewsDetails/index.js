import {useParams} from "react-router-dom"
import data from "../../data.json"
import "./index.css"

const NewsDetails=()=>{
    const {id}=useParams()
    const slide=data.find((item)=>item.id.toString()===id)
    if(!slide) return <h1 style={{textAlign:"center"}}>No Data Found</h1>
    return <div className="slide-details-item-container">
        <img src={slide.image} alt={`news ${id}`} className="news-details-image"/>
        <p className="slide-description">{slide.description}</p>
    </div>
}

export default NewsDetails