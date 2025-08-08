import {Link} from "react-router-dom"
import {Swiper,SwiperSlide} from "swiper/react"
import {Pagination,Navigation,Autoplay} from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { FiArrowUpRight } from "react-icons/fi";
import TodaysSpotLight from "../TodaysSpotLight/index"
import AddsBanner from "../AddsBanner/index"
import PopularNews from "../PopularNews/index"
import RecentPosts from "../RecentPosts/index"
import "./index.css"
import data from "../../data.json"
import { useState } from "react"


const SliderWithContent=()=>{
    const [isEmail,setIsEmail]=useState("")
    return <div className="slider-text-main-container">
      <div className="slider-top-rti-join-container">
        <div className="slider-container">
        <Swiper modules={[Pagination,Navigation,Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation pagination={{clickable:true}}
        
        autoplay={{delay:3000,disableOnInteraction:false}}
        >
         {
           data.map((item)=>(
            
            <SwiperSlide key={item.id}>
                <Link to={`/news/${item.id}`} className="slide-link">
                <img src={item.image}  alt={`slider ${item.id}`} className="slider-image"/>
              </Link>
            </SwiperSlide>
           
           )) 
           
         }   


        </Swiper>
    </div>
    <div className="rti-join-and-news-letter-container">
    <div className="rti-join-container">
      <h3 className="join-heading">Join RTI</h3>
     
  <a className="reporter-button" target="__blank" href="https://docs.google.com/forms/d/1chrWcKXZJlU0tF7jTJProrx8TQCr_vZIBSpJulAIO_8/edit" >RTI Reporter</a> 
      <button className="reporter-button">RTI Activist  </button>
      </div>
      <div className="news-letter-container">
        <h3 className="daily-news-letter-heading">Daily Newsletter</h3>
        <p className="news-para">Get all the top stories from Blogs to keep track.</p>
      <div className="news-letter-mail-container">
        <input value={isEmail} type="email" placeholder="Enter Your e-mail" onChange={(e)=>setIsEmail(e.target.value)}/>
        <FiArrowUpRight size={25}/>
      </div>
      </div>
      </div>
      </div>
     <div className="home-spot-light-adds-container">
    <div className="spot-light-home-container">
        <TodaysSpotLight/>
    </div> 
      <AddsBanner/>
      </div>
      <div className="home-popular-recent-posts-conatiner">
      <div className="home-popular-news-container">
        <h1 className="taja-varathalu">తాజా వార్తలు</h1>
        <PopularNews/>
      </div>
      <div className="recent-post-home-container">
      <h1 className="taja-updates-heading taja-varathalu">తాజా అప్‌డేట్స్</h1>
      <RecentPosts/>
      </div>
      </div>
</div>
}


export default SliderWithContent