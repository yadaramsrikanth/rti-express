import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import { CiCalendar } from "react-icons/ci";
import "./index.css"

const CategoryBasedItem=()=>{
    const [newsItems,setnewsItems]=useState([])
    console.log("news",newsItems)

    useEffect(()=>{

      const fetchNewsItems=async()=>{
        const url="https://api.rtiexpress.in/v1/news/fetchAll"
        const response= await fetch(url)
        const data=await response.json()
        const responseData=data.news
        console.log(responseData)
        const  OnePercategory=Object.values(
       responseData.reduce((acc,item)=>{
        if(!acc[item.category.toUpperCase()]){
            acc[item.category.toUpperCase()]=item
        }
        return acc
    },{})
)
setnewsItems(OnePercategory)

      }
      fetchNewsItems()
        
    },[])
  if (!newsItems || newsItems.length === 0) return null;
const first=newsItems[0]

    return <><h1 className="breaking-news-heading">Breaking news</h1>
    <div className="news-container-category-based">
        
        <div className="container-for-left-flex-item">
            <Link to={`news/${first._id}`} className="category-based-link-element">
            <img src= {first.media } alt={first.headline} className="category-image-left" />
            <p className="category-of-item-left">{first.category.toUpperCase()}</p>
            <p className="category-based-headline">{first.headline}</p>
            <div className="calender-container-in-category">
            <CiCalendar />
            <p>{new Date(first.updatedAt).toLocaleDateString("en-GB", {day: "2-digit",month: "long",year: "numeric"})}</p>
            </div>
            </Link>
        </div>

        <ul className="unordered-container-for-right-side-items">
            {
            newsItems.slice(0,6).map((item)=>(
            <li key={item._id} className="category-based-list-item-right-container">
               <Link to={`news/${item._id}`} className="category-based-link-element-right">
                <div>
            <p className="category-of-item-right">{item.category.toUpperCase()}</p>
             <p className="category-based-headline-right">{item.headline}</p>
            <div className="calender-container-in-category-right">
            <CiCalendar />
            <p>{new Date(item.updatedAt).toLocaleDateString("en-GB", {day: "2-digit",month: "long",year: "numeric"})}</p>
            </div>
             </div>       
              <img src={item.media}  alt={item.headline} className="image-on-right-side"/>      
            </Link>
            </li>
        ))
            }
          
        </ul>
    </div>

   </>
}

export default CategoryBasedItem