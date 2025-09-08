import {useParams} from "react-router-dom"
import NewsCardsandText from "../NewsCardsandText/index"
import data from "../../data.json"
import "./index.css"
import { useEffect, useState } from "react"

const NewsDetails=()=>{
    const [slide,setSlide]=useState(null)
    const {id}=useParams()
    console.log(id)
    // let slide=data.find((item)=>item.id.toString()===id)




    useEffect(()=>{

        const localSlide = data.find((item) => item.id.toString() === id)
            if (localSlide) {
         setSlide(localSlide)
        }

        const fetchnewsFullDetailsBasedOnId=async()=>{
            try{
        console.log(id)
        const newsurl=`https://api.rtiexpress.in/v1/news/fetchByNewsId/${id}`
        const newsresponse=await fetch(newsurl)
       
         if (!newsresponse.ok) {
          throw new Error("Backend not available, using local JSON");
        }
         const newsdata=await newsresponse.json()
          console.log(newsdata)
         if(newsdata && newsdata.news){
                setSlide(newsdata.news[0])
         }else{
            const localSlide = data.find((item) => item.id.toString() === id);
          setSlide(localSlide || null);
         }
        
        
        
    }catch(error){
        console.error(error.message);
        const localSlide = data.find((item) => item.id.toString() === id);
        setSlide(localSlide || null);
    }
}
    fetchnewsFullDetailsBasedOnId()
    },[id])

    if(!slide) return <h1 style={{textAlign:"center"}}>No Data Found</h1>
    return <div className="slide-details-item-container">
        <div className="news-fullinfo-container">
        <img src={slide.image||slide.media} alt={`news ${id}`} className="news-details-image"/>
        <p className="slide-description">{slide.description}</p>
        
        </div>
        <div className="news-card-news-details-container">
        <NewsCardsandText />
        </div>
    </div>
}

export default NewsDetails