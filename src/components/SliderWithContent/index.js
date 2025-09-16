import {Link} from "react-router-dom"
import {Swiper,SwiperSlide} from "swiper/react"
import {Navigation,Autoplay,Pagination} from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
// import { FiArrowUpRight } from "react-icons/fi";
import TodaysSpotLight from "../TodaysSpotLight/index"
// import AddsBanner from "../AddsBanner/index"
// import PopularNews from "../PopularNews/index"
// import RecentPosts from "../RecentPosts/index"
import LiveNews from "../LiveNews"
import CategoryBasedItem from "../CategoryBasedItem"
// import RTIReporterForm from "../RTIReporterForm/index"
// import RTIActivistForm from "../RTIActivistForm"
import CitizenVoice from "../CitizenVoice"
import ReporterActivistContext from "../../ReactContext"
import "./index.css"
// import data from "../../data.json"
import { useContext, useEffect, useState } from "react"


const SliderWithContent=()=>{
    const [topArticles,setTopArticlesData]=useState([])
    // const [isReporterModalOpen,setIsReporterModalOpen]=useState(false)
    //   const [isActivistrModalOpen,setIsActivistModalOpen]=useState(false)
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
    {/* <div className="rti-join-and-news-letter-container"> */}
    {/* <div className="rti-join-container"> */}
      {/* <h3 className="join-heading">Join RTI</h3> */}
     
  {/* <a className="reporter-button" target="__blank" href="https://docs.google.com/forms/d/1chrWcKXZJlU0tF7jTJProrx8TQCr_vZIBSpJulAIO_8/edit" >RTI Reporter</a>  */}
       {/* <button  onClick={()=>setIsReporterModal(true)} className="reporter-button">RTI Reporter</button> */}
      {/* <button onClick={()=>setIsActivistModal(true)} className="reporter-button">RTI Activist  </button> */}
      
      {/* </div> */}
      {/* <div className="news-letter-container">
        <h3 className="daily-news-letter-heading">Daily Newsletter</h3>
        <p className="news-para">Get all the top stories from Blogs to keep track.</p>
      <div className="news-letter-mail-container">
        <input value={isEmail} type="email" placeholder="Enter Your e-mail" onChange={(e)=>setIsEmail(e.target.value)}/>
        <FiArrowUpRight size={25}/>
      </div>
      </div> */}
      {/* </div> */}
      {/* </div> */}

      {/* old one it is giving extra space
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
      </div> */}


 {/* //new styles */}
<CategoryBasedItem/>

 
  {/* <div className="home-spot-light-popular-news-adds-container"> */}
    {/* <div className="spot-light-popular-news-container"> */}
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
    
    {/* <div className="home-popular-news-container">
        <h1 className="taja-varathalu">తాజా వార్తలు</h1>
        <PopularNews/>
      </div> */}
    {/* </div> */}

      {/* <AddsBanner/> */}
      {/* </div> */}
      {/* <div className="recent-post-home-container">
      <h1 className="taja-updates-heading taja-varathalu">తాజా అప్‌డేట్స్</h1>
      <RecentPosts/>
      </div> */}
      
      
       



        <CitizenVoice isOpen={citizenVoiceValue}  onClose={()=>setCitizenVoice(false)} />

      {/* <RTIReporterForm isOpen={isReporterModalOpen}  onClose={()=>setIsReporterModalOpen(false)}/>
      <RTIActivistForm isOpen={isActivistrModalOpen}  onClose={()=>setIsActivistModalOpen(false)}/> */}

</div>
}


export default SliderWithContent