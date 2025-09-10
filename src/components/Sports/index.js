import { useEffect, useState } from "react"
import "./index.css"


const Sports=()=>{
    

    const [sportsData,setSportsData]=useState([])

    console.log(sportsData)
const fetchsportsData=async()=>{
    const data=await fetch("https://api.rtiexpress.in/v1/newsdata/sports")   
        const responseData=await data.json()
        console.log(responseData)
        setSportsData(responseData.results || [])
}

     useEffect(()=>{
        fetchsportsData()
    },[])        



    return <>{sportsData.length===0 ? <p style={{margin:"50px",textAlign:"center",fontSize:"25px"}}>News Loading</p>  : <ul className="unordered-international-news-container">
            {
              sportsData.map((newsItem)=>(
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

export default Sports