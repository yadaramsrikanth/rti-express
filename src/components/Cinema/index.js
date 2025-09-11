import { useEffect, useState } from "react"
import { CiCalendar } from "react-icons/ci";

import "./index.css"


const Cinema=()=>{
    

    const [cinemaData,setCinemaData]=useState([])

    console.log(cinemaData)
    const fetchcinemaData=async()=>{
    const data=await fetch("https://api.rtiexpress.in/v1/newsdata/entertainment")   
        const responseData=await data.json()
        console.log(responseData)
        setCinemaData(responseData.results || [])
}

     useEffect(()=>{
        fetchcinemaData()
    },[])  
    
    
if (cinemaData.length===0) return <p style={{margin:"50px",textAlign:"center",fontSize:"25px"}}>News Loading...</p>  


const firstArticle=cinemaData[0]
const nextThreearticles=cinemaData.slice(1,4)
const remainingArticles=cinemaData.slice(4)



return (<div className="news-container">

    <div className="first-row-container">

        {/* first article */}

        <div className="first-article-container">
            <img src={firstArticle.image_url} alt={firstArticle.title} className="first-article-image"/>
            <div className="first-article-info-container">
            <p className="first-article-title">{firstArticle.title}</p>
            <p className="source-name">source: {firstArticle.source_name}</p>
            <div className="firsta-article-calender-container">
            <CiCalendar />
            <p>{new Date(firstArticle.pubDate).toLocaleDateString("en-GB", {day: "2-digit",month: "long",year: "numeric"})}</p>
       </div>

       </div>
        </div>

    {/* next three articles */}
    <ul className="next-three-articles-container-unordered">
        {
            nextThreearticles.map((eachArticle)=>(
                <li key={eachArticle.article_id} className="next-three-articles-list-item-container">
                    <img src={eachArticle.image_url} alt={eachArticle.title} className="next-three-article-image"/>
                    <p className="next-three-article-title">{eachArticle.title}</p>
                    <p className="source-name">source: {eachArticle.source_name}</p>
                    <div className="firsta-article-calender-container">
                        <CiCalendar />
                        <p>{new Date(eachArticle.pubDate).toLocaleDateString("en-GB", {day: "2-digit",month: "long",year: "numeric"})}</p>
                    </div>
                </li>
            ))
        }

    </ul>
 </div>
    {/* remaining article */}
        <ul className="remaining-article-unordered-container">
{
    remainingArticles.map((article,index)=>(
        <li key={article.article_id} className="remaining-article-list-item-container">
        <img src={article.image_url} alt={index} className="remaining-article-image"/>
       <div className="first-article-info-container">
        <p className="remaining-article-title">{article.title}</p>
        <p className="source-name">source: {firstArticle.source_name}</p>
        <div className="firsta-article-calender-container">
        <CiCalendar />
        <p>{new Date(firstArticle.pubDate).toLocaleDateString("en-GB", {day: "2-digit",month: "long",year: "numeric"})}</p>
       </div>
       </div>
        </li>
    ))
}

        </ul>

   

</div>)

    
}

export default Cinema














// import { useEffect, useState } from "react"
// import "./index.css"


// const Cinema=()=>{
    

//     const [cinemaData,setCinemaData]=useState([])

//     console.log(cinemaData)
// const fetchCinemaData=async()=>{
//     const data=await fetch("https://api.rtiexpress.in/v1/newsdata/entertainment")   
//         const responseData=await data.json()
//         console.log(responseData)
//         setCinemaData(responseData.results || [])
// }

//      useEffect(()=>{
//         fetchCinemaData()
//     },[])        



//     return <>{cinemaData.length===0 ? <p style={{margin:"50px",textAlign:"center",fontSize:"25px"}}>News Loading</p>  : <ul className="unordered-international-news-container">
//             {
//                cinemaData.map((newsItem)=>(
//                     <li key={newsItem.article_id} className="international-card-list-item">
//                         <img src={newsItem.image_url} alt={newsItem.title}  className="international-image"/>
//                         <p className="international-news-item-text">{newsItem.title}</p>
//                     </li>
//                 ))
//             }
//         </ul>
//     }
//   </>  
// }

// export default Cinema