import { useEffect, useState } from "react"

import ArticleSection from "../ArticleSection"
import "./index.css"


const Business=()=>{
    

    const [businessnewsData,setbusinessNewsData]=useState([])

    console.log("business",businessnewsData)
    const fetchBusinessData=async()=>{
    const data=await fetch("https://api.rtiexpress.in/v1/newsdata/business")   
        const responseData=await data.json()
        console.log(responseData)
        setbusinessNewsData(responseData.results || [])
}

     useEffect(()=>{
        fetchBusinessData()
    },[])  
    
return <ArticleSection newsdata={businessnewsData}/>    
    
}

export default Business
