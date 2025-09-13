import { useCallback, useEffect, useState,useContext } from "react"

import ArticleSection from "../ArticleSection";
import {LanguageContext} from "../../ReactContext"

import "./index.css"


const International=()=>{
    
    const {isLanguage} =useContext(LanguageContext)
    const [internationalnewsData,setInternationalNewsData]=useState([])
    console.log("language",isLanguage)
    console.log("international",internationalnewsData)
const fetchInternationalData=useCallback(async()=>{
    const data=await fetch(`https://api.rtiexpress.in/v1/newsdata/international?language=${isLanguage}`)   
        const responseData=await data.json()
        console.log(responseData)
        setInternationalNewsData(responseData.results || [])
},[isLanguage])

     useEffect(()=>{
        fetchInternationalData()
    },[fetchInternationalData])  
    
    


return <ArticleSection newsdata={internationalnewsData} />

    
}

export default International