import {Link} from "react-router-dom"
import {Swiper,SwiperSlide} from "swiper/react"
import {Pagination,Navigation} from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "./index.css"
import data from "../../data.json"
import { useState } from "react"

const SliderWithContent=()=>{
    const [activeIndex,setactiveIndex]=useState(0)
    return <div className="slider-text-main-container">
        <div className="slider-container">
        <Swiper modules={[Pagination,Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation pagination={{clickable:true}}
        onSlideChange={(swiper)=>setactiveIndex(swiper.activeIndex)}
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
    <div>{data[activeIndex].description}</div>
</div>
}


export default SliderWithContent