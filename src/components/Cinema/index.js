import { useEffect, useState } from "react"
import "./index.css"


const Cinema=()=>{
    

    const [cinemaData,setCinemaData]=useState([])

    console.log(cinemaData)
const fetchCinemaData=async()=>{
    const data=await fetch("https://api.rtiexpress.in/v1/newsdata/entertainment")   
        const responseData=await data.json()
        console.log(responseData)
        setCinemaData(responseData.results || [])
}

     useEffect(()=>{
        fetchCinemaData()
    },[])        



    return <>{cinemaData.length===0 ? <p style={{margin:"50px",textAlign:"center",fontSize:"25px"}}>News Loading</p>  : <ul className="unordered-international-news-container">
            {
               cinemaData.map((newsItem)=>(
                    <li key={newsItem.article_id} className="international-card-list-item">
                        <img src={newsItem.image_url} alt={newsItem.title}  className="international-image"/>
                        <p className="international-news-item-text">{newsItem.title}</p>
                    </li>
                ))
            }
        </ul>
    }
  </>  
}

export default Cinema