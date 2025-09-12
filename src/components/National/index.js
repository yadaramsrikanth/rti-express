import { useCallback, useContext, useEffect, useState } from "react"
import ArticleSection from "../ArticleSection"
import { LanguageContext } from "../../ReactContext"
import "./index.css"


const National=()=>{
    const {isLanguage}=useContext(LanguageContext)

    const [nationalnewsData,setnationalNewsData]=useState([])

    console.log("national",nationalnewsData)
const fetchnationalData=useCallback(async()=>{
    const data=await fetch(`https://api.rtiexpress.in/v1/newsdata/national?language=${isLanguage}`)   
        const responseData=await data.json()
        console.log(responseData)
        setnationalNewsData(responseData.results || [])
},[isLanguage])

     useEffect(()=>{
        fetchnationalData()
    },[fetchnationalData])  
    
 
return <ArticleSection newsdata={nationalnewsData} /> 

    
}

export default National
