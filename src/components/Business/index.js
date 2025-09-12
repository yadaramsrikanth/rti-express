import { useContext,useCallback, useEffect, useState } from "react"
import ArticleSection from "../ArticleSection"
import {LanguageContext} from "../../ReactContext"

import "./index.css"


const Business=()=>{
    
    const{isLanguage} =useContext(LanguageContext)

    const [businessnewsData,setbusinessNewsData]=useState([])

    console.log("business",businessnewsData)
    const fetchBusinessData=useCallback(async()=>{
    const data=await fetch(`https://api.rtiexpress.in/v1/newsdata/business?language=${isLanguage}`)   
        const responseData=await data.json()
        console.log(responseData)
        setbusinessNewsData(responseData.results || [])
},[isLanguage])

     useEffect(()=>{
        fetchBusinessData()
    },[fetchBusinessData])  
    
return <ArticleSection newsdata={businessnewsData}/>    
    
}

export default Business
