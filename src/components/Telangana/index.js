import { useCallback, useEffect, useState,useContext } from "react"

import ArticleSection from "../ArticleSection";
import {LanguageContext} from "../../ReactContext"



const Telangana=()=>{
    
    const {isLanguage} =useContext(LanguageContext)
    const [telanganaNews,setTelanaganaNews]=useState([])
    console.log("language",isLanguage)
    console.log("telangana",telanganaNews)
const fetchTelanganaNews=useCallback(async()=>{
    const data=await fetch(`https://api.rtiexpress.in/v1/newsdata/telangana?language=${isLanguage}`)   
        const responseData=await data.json()
        console.log(responseData)
        setTelanaganaNews(responseData.results || [])
},[isLanguage])

     useEffect(()=>{
        fetchTelanganaNews()
    },[fetchTelanganaNews])  
    
    


return <ArticleSection newsdata={telanganaNews} />

    
}

export default Telangana