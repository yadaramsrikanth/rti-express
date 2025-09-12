import { useEffect, useState } from "react"
import ArticleSection from "../ArticleSection"
import "./index.css"


const Sports=()=>{
    

    const [sportsData,setSportsData]=useState([])

    console.log("sports",sportsData)
    const fetchsportsData=async()=>{
    const data=await fetch("https://api.rtiexpress.in/v1/newsdata/sports")   
        const responseData=await data.json()
        console.log(responseData)
        setSportsData(responseData.results || [])
}

     useEffect(()=>{
        fetchsportsData()
    },[])  
    
 return <ArticleSection newsdata={sportsData}/>    

    
}

export default Sports



