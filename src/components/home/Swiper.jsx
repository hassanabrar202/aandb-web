import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Image } from '@nextui-org/react'
import {useNavigate} from "react-router-dom";

export const SwiperComponent = () => {
    const navigate=useNavigate()
  return (
    <>
      <div className='px-8'>
        <Swiper
          modules={[Navigation, Autoplay]}
          centeredSlides={true}
          navigation={true}
          breakpoints={{
            default: {
              slidesPerView: 1,
              spaceBetween: 25,
            },
            426: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
          }}
          autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
          loop={true}
        >
          <SwiperSlide className='py-8'>
            <Image
                onClick={()=>navigate('/dashboard')}
              src='https://images.unsplash.com/photo-1529690086133-c8e4bc9e1f6a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fHw%3D'
              alt=''
              isZoomed={true}
            />
          </SwiperSlide>
          <SwiperSlide className='py-8'>
            <Image
                onClick={()=>navigate('/dashboard')}
              src='https://images.pexels.com/photos/54108/peacock-bird-spring-animal-54108.jpeg?auto=compress&cs=tinysrgb&w=500&h=500'
              alt=''
              isZoomed={true}
            />
          </SwiperSlide>
          <SwiperSlide className='py-8'>
            <Image
                onClick={()=>navigate('/dashboard')}
              src='https://i.pinimg.com/736x/80/8c/a9/808ca986b05ef04a969f1d0395b56a3e.jpg'
              alt=''
              isZoomed={true}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default Swiper
