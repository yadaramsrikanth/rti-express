import { useEffect, useState,useCallback,useContext } from "react"
import ArticleSection from "../ArticleSection"
import { LanguageContext } from "../../ReactContext"
import "./index.css"


const Sports=()=>{
    const {isLanguage}=useContext(LanguageContext)

    const [sportsData,setSportsData]=useState([])

    console.log("sports",sportsData)
    const fetchsportsData=useCallback(async()=>{
    const data=await fetch(`https://api.rtiexpress.in/v1/newsdata/sports?language=${isLanguage}`)   
        const responseData=await data.json()
        console.log(responseData)
        setSportsData(responseData.results || [])
},[isLanguage])

     useEffect(()=>{
        fetchsportsData()
    },[fetchsportsData])  
    
 return <ArticleSection newsdata={sportsData}/>    

    
}

export default Sports



