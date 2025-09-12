import { useEffect, useState } from "react"
import ArticleSection from "../ArticleSection"
import "./index.css"


const National=()=>{
    

    const [nationalnewsData,setnationalNewsData]=useState([])

    console.log("national",nationalnewsData)
const fetchnationalData=async()=>{
    const data=await fetch("https://api.rtiexpress.in/v1/newsdata/national")   
        const responseData=await data.json()
        console.log(responseData)
        setnationalNewsData(responseData.results || [])
}

     useEffect(()=>{
        fetchnationalData()
    },[])  
    
 
return <ArticleSection newsdata={nationalnewsData} /> 

    
}

export default National
