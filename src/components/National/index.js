import { useEffect, useState } from "react"
import "./index.css"


const National=()=>{
    

    const [internationalnewsData,setInternationalNewsData]=useState([])

    console.log(internationalnewsData)
const fetchInternationalData=async()=>{
    const data=await fetch("https://api.rtiexpress.in/v1/newsdata/India")   
        const responseData=await data.json()
        console.log(responseData)
        setInternationalNewsData(responseData.results || [])
}

     useEffect(()=>{
        fetchInternationalData()
    },[])        



    return <>{internationalnewsData.length===0 ? <p style={{margin:"50px",textAlign:"center",fontSize:"25px"}}>News Loading</p>  : <ul className="unordered-international-news-container">
            {
                internationalnewsData.map((newsItem)=>(
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

export default National