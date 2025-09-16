import { useCallback, useEffect, useState,useContext } from "react"

import ArticleSection from "../ArticleSection";
import {LanguageContext} from "../../ReactContext"



const AP=()=>{
    
    const {isLanguage} =useContext(LanguageContext)
    const [apNews,setapNews]=useState([])
    console.log("language",isLanguage)
    console.log("apnews",apNews)
const fetchapnews=useCallback(async()=>{
    const data=await fetch(`https://api.rtiexpress.in/v1/newsdata/andhraPradesh?language=${isLanguage}`)   
        const responseData=await data.json()
        console.log(responseData)
        setapNews(responseData.results || [])
},[isLanguage])

     useEffect(()=>{
        fetchapnews()
    },[fetchapnews])  
    
    


return <ArticleSection newsdata={apNews} />

    
}

export default AP