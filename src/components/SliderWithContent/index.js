import {Link} from "react-router-dom"
import {Swiper,SwiperSlide} from "swiper/react"
import {Navigation,Autoplay,Pagination} from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import TodaysSpotLight from "../TodaysSpotLight/index"

import LiveNews from "../LiveNews"
import CategoryBasedItem from "../CategoryBasedItem"

import CitizenVoice from "../CitizenVoice"
import ReporterActivistContext from "../../ReactContext"
import "./index.css"
// import data from "../../data.json"
import { useContext, useEffect, useState } from "react"


const SliderWithContent=()=>{
    const [topArticles,setTopArticlesData]=useState([])
   
      const [citizenVoiceValue,setCitizenVoice]=useState(false)
      const {setIsReporterModal,setIsActivistModal}=useContext(ReporterActivistContext)
const aticlesvalue=10
useEffect(()=>{
const fetchingTopNewsArticles=async()=>{
  try{
  const url=`https://api.rtiexpress.in/v1/news/fetch?limit=${aticlesvalue}`
  const toparticlesdata=await fetch(url)
  const toparticleResponseData=await toparticlesdata.json()
  console.log("articles",toparticleResponseData.news)
  setTopArticlesData(toparticleResponseData.news)

  }catch(e){
    console.log("top articles api: ",e)
  }
  
}
fetchingTopNewsArticles()
},[])




    return <div className="slider-text-main-container">
      <div className="slider-top-rti-join-container">
        <div className="slider-container">
        <Swiper modules={[Navigation,Autoplay,Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{clickable:true}}
        pagination={{clickable:true}}
        autoplay={{delay:3000,disableOnInteraction:false}}
        style={{padding:"30px"}}
        >
         {
           topArticles.map((item)=>(
            
            <SwiperSlide key={item.id}>
                <Link to={`/news/${item._id}`} className="slide-link">
                <img src={item.media}  alt={`slider ${item.id}`} className="slider-image"/>
                <p className="slide-para-content">{item.headline}</p>
              </Link>
            </SwiperSlide>
           
           )) 
           
         }   


        </Swiper>
    </div>
      <div className="rti-join-buttons-activist-reporter-citizen-container">

      <button  onClick={()=>setIsReporterModal(true)} className="reporter-button">RTI Reporter</button>
      <button onClick={()=>setIsActivistModal(true)} className="reporter-button">RTI Activist</button>
      <button className="reporter-button" onClick={()=>setCitizenVoice(true)}>Citizen Voice</button>
    </div>

    </div>
    
     
        {/* //new styles */}
        <CategoryBasedItem/>

 
  
           <h2 className="latest-news-heading">Latest News</h2>

    <div className="spot-light-home-adds-container">
    <div className="adds-size-container-home">
    <img src="https://res.cloudinary.com/dqdx0yz2t/image/upload/v1754575769/IMG-20250807-WA0016_pmop91.jpg" alt="first-add" className="add-banner-image-home-1"/>
    </div>
    <div className="spot-light-home-container">
       
        <TodaysSpotLight/>
    </div>
    <div className="adds-size-container-home">
  <img src="https://res.cloudinary.com/dqdx0yz2t/image/upload/v1754996290/SLN_Technologies_and_Consultancy_2_seghqa_orpxme_jqbbmg_qpx7fo.jpg" alt="second-add" className="add-banner-image-home-1"/>
</div>
</div>
    
    <h2 className="latest-news-heading recent-posts-heading">Recent Posts</h2> 
     <LiveNews/>
    <CitizenVoice isOpen={citizenVoiceValue}  onClose={()=>setCitizenVoice(false)} />

     

</div>
}


export default SliderWithContent