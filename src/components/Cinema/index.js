import { useEffect, useState } from "react"

import ArticleSection from "../ArticleSection"
import "./index.css"


const Cinema=()=>{
    

    const [cinemaData,setCinemaData]=useState([])

    console.log("cinema",cinemaData)
    const fetchcinemaData=async()=>{
    const data=await fetch("https://api.rtiexpress.in/v1/newsdata/entertainment")   
        const responseData=await data.json()
        console.log(responseData)
        setCinemaData(responseData.results || [])
}

     useEffect(()=>{
        fetchcinemaData()
    },[])  
    
return <ArticleSection newsdata={cinemaData}/>



    
}

export default Cinema

