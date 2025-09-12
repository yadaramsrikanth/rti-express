import { useCallback, useEffect, useState,useContext } from "react"

import ArticleSection from "../ArticleSection"
import {LanguageContext} from "../../ReactContext"

import "./index.css"


const Cinema=()=>{
    
    const {isLanguage}=useContext(LanguageContext)

    const [cinemaData,setCinemaData]=useState([])

    console.log("cinema",cinemaData)
    const fetchcinemaData=useCallback(async()=>{
    const data=await fetch(`https://api.rtiexpress.in/v1/newsdata/entertainment?language=${isLanguage}`)   
        const responseData=await data.json()
        console.log(responseData)
        setCinemaData(responseData.results || [])
},[isLanguage])

     useEffect(()=>{
        fetchcinemaData()
    },[fetchcinemaData])  
    
return <ArticleSection newsdata={cinemaData}/>



    
}

export default Cinema

