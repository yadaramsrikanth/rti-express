import {useParams} from "react-router-dom"
import NewsCardsandText from "../NewsCardsandText/index"
import data from "../../data.json"
import "./index.css"
import { useEffect, useState } from "react"

const NewsDetails=()=>{
    const [slide,setSlide]=useState(null)
    const {id}=useParams()
    console.log(id)
  

    useEffect(()=>{

       const fetchnewsFullDetailsBasedOnId=async()=>{
         let resultResponse=null
            
         //rti backend

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
                // setSlide(newsdata.news)
                resultResponse=newsdata.news
         }else{
      
            throw new Error("Backend not availbale")

         }
        
    }catch(error){
        console.error(error.message);
        
    }
    // local json

    if(!resultResponse){
      const localSlide = data.find((item) => item.id.toString() === id)
       if (localSlide){
        resultResponse=localSlide
       }  else{
        console.log("local json error")
       }
    }
    // third party
    if(!resultResponse){
        try{
            const categoriesUrl=`https://api.rtiexpress.in/v1/newsdata/newsByArticleId/${id}`
            const categoriesresponse=await fetch(categoriesUrl)
            if(!categoriesresponse.ok) throw new Error("Third-party API failed")   
            const categoriesresponseData= await categoriesresponse.json()
            console.log("third party api categories data",categoriesresponseData)
            if(categoriesresponseData){
                // setSlide(categoriesresponseData.results)
                resultResponse=categoriesresponseData.news.results[0]
            }

        }catch(e){
            console.log("Third-party fetch failed",e.message);
        }
    }
    setSlide(resultResponse)
}
    fetchnewsFullDetailsBasedOnId()
    },[id])


    




    if(!slide) return <h1 style={{textAlign:"center"}}>No Data Found</h1>
    return <div className="slide-details-item-container">
        <div className="news-fullinfo-container">
        <img src={slide.image||slide.media||slide.image_url} alt={`news ${id}`} className="news-details-image"/>
        <p className="slide-description">{slide.description}</p>
        
        </div>
        <div className="news-card-news-details-container">
        <NewsCardsandText />
        </div>
    </div>
}

export default NewsDetails