import React, { useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Card  from "./Card";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import axios from '../utility/axios';
import { requests } from '../utility/requests';



function Row(props) {
    const { title, selector, action, platform, isGenreRow, genre} = props;
    const dispatch = useDispatch();
    const videoList = useSelector(selector);
   const [videoByGenre, setVideoByGenre]=useState(null)


   const fetchVideoByGenre=async()=>{
    const response=await axios.get(requests.getVideoByGenre(platform,genre.id))
    setVideoByGenre(response.data.results);

   }
    useEffect(()=>{
      if(!isGenreRow){
      dispatch(action())
    }
  },[isGenreRow])

  useEffect(()=>{
    if(isGenreRow && genre && platform){
      fetchVideoByGenre();
    }
  },[isGenreRow, genre, platform])

    // if(genre){
    //   axios.get(`${platform}?with_genres=${genre.name}`)
    // }

    return (
      <>
      {
        isGenreRow?
      <div className="py-3 video-row text-white">
        <h3 className='mb-2'>{genre?.name}</h3>
        <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={5}
        onSlideChange={() => console.log('slide change')}
       onSwiper={(swiper) => console.log(swiper)}
      >
        {
          videoByGenre?.map((item)=>{
            return(
              <SwiperSlide key={item.id}>
                <Card video={item} type={platform}/>
              </SwiperSlide>
            )
          }
          )
        }
        </Swiper>
      </div>
      :
      <div className="py-3 video-row text-white">
        <h3 className='mb-2'>{title}</h3>
        <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={5}
        onSlideChange={() => console.log('slide change')}
       onSwiper={(swiper) => console.log(swiper)}
      >
        {
          videoList?.status === "success" ?
          videoList.data.results.map((item)=>{
            return(
              <SwiperSlide key={item.id}>
                <Card video={item} type={platform}/>
              </SwiperSlide>
            )
          }
          ): ""
        }
        </Swiper>
      </div>


      
    
    

      }
      </>
    );

}

export default Row;