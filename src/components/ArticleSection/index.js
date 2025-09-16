import { CiCalendar } from "react-icons/ci";
import {Link} from "react-router-dom"

import "./index.css"


const ArticleSection=(props)=>{
    const {newsdata}=props
    
    console.log("article section")

    
if (newsdata.length===0) return <p style={{margin:"50px",textAlign:"center",fontSize:"25px"}}>News Loading...</p>  


const firstArticle=newsdata[0]
const nextThreearticles=newsdata.slice(1,4)
const remainingArticles=newsdata.slice(4)



return (<div className="news-container">

    <div className="first-row-container">

        {/* first article */}

        <div className="first-article-container">
            <Link to={`/news/${firstArticle.article_id}`} className="article-link-item">
            <img src={firstArticle.image_url} alt={firstArticle.title} className="first-article-image"/>
            <div className="first-article-info-container">
            <p className="first-article-title">{firstArticle.title}</p>
            <p className="source-name">source: {firstArticle.source_name}</p>
            <div className="firsta-article-calender-container">
            <CiCalendar />
            <p>{new Date(firstArticle.pubDate).toLocaleDateString("en-GB", {day: "2-digit",month: "long",year: "numeric"})}</p>
            
            </div>

            </div>
            </Link>
            </div>
 
    {/* next three articles */}
    <ul className="next-three-articles-container-unordered">
        {
            nextThreearticles.map((eachArticle)=>(
                <li key={eachArticle.article_id} className="next-three-articles-list-item-container">
                <Link to={`/news/${eachArticle.article_id}`} className="next-three-article-link-item">

                    <img src={eachArticle.image_url} alt={eachArticle.title} className="next-three-article-image"/>
                    <p className="next-three-article-title">{eachArticle.title}</p>
                    <p className="source-name">source: {eachArticle.source_name}</p>
                    <div className="firsta-article-calender-container">
                        <CiCalendar />
                        <p>{new Date(eachArticle.pubDate).toLocaleDateString("en-GB", {day: "2-digit",month: "long",year: "numeric"})}</p>
                    </div>
               </Link>  
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
        <Link to={`/news/${article.article_id}`} className="remaining-article-link-item">

        <img src={article.image_url} alt={index} className="remaining-article-image"/>
       <div className="first-article-info-container">
        <p className="remaining-article-title">{article.title}</p>
        <p className="source-name">source: {firstArticle.source_name}</p>
        <div className="firsta-article-calender-container">
        <CiCalendar />
        <p>{new Date(firstArticle.pubDate).toLocaleDateString("en-GB", {day: "2-digit",month: "long",year: "numeric"})}</p>
       </div>
       </div>
       </Link>   </li>
    ))
}

        </ul>

   

</div>)


    
}

export default ArticleSection