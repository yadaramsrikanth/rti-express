import { useEffect, useState } from "react"

import ArticleSection from "../ArticleSection";

import "./index.css"


const International=()=>{
    

    const [internationalnewsData,setInternationalNewsData]=useState([])

    console.log("international",internationalnewsData)
const fetchInternationalData=async()=>{
    const data=await fetch("https://api.rtiexpress.in/v1/newsdata/international")   
        const responseData=await data.json()
        console.log(responseData)
        setInternationalNewsData(responseData.results || [])
}

     useEffect(()=>{
        fetchInternationalData()
    },[])  
    
    


return <ArticleSection newsdata={internationalnewsData} />

    
}

export default International