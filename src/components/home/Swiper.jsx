import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Image } from '@nextui-org/react'

export const SwiperComponent = () => {
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
              src='https://picsum.photos/id/1/5000/3333'
              alt=''
              isZoomed={true}
            />
          </SwiperSlide>
          <SwiperSlide className='py-8'>
            <Image
              src='https://picsum.photos/id/2/5000/3333'
              alt=''
              isZoomed={true}
            />
          </SwiperSlide>
          <SwiperSlide className='py-8'>
            <Image
              src='https://picsum.photos/id/3/5000/3333'
              alt=''
              isZoomed={true}
            />
          </SwiperSlide>
          <SwiperSlide className='py-8'>
            <Image
              src='https://picsum.photos/id/4/5000/3333'
              alt=''
              isZoomed={true}
            />
          </SwiperSlide>
          <SwiperSlide className='py-8'>
            <Image
              src='https://picsum.photos/id/5/5000/3333'
              alt=''
              isZoomed={true}
            />
          </SwiperSlide>
          <SwiperSlide className='py-8'>
            <Image
              src='https://picsum.photos/id/6/5000/3333'
              alt=''
              isZoomed={true}
            />
          </SwiperSlide>
          <SwiperSlide className='py-8'>
            <Image
              src='https://picsum.photos/id/7/5000/3333'
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
