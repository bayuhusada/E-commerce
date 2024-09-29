import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';

const BestProduct = () => {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    })
    AOS.refresh()
  },[])

  return (
    <div className='w-[80%] h-screen mx-auto mt-14'>
      <h1>Best Product</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center'>
        <div data-aos="fade-up" data-aos-delay="0" className='bg-red-300 w-[260px] h-[180px] p-10'>Best Product</div>
        <div data-aos="fade-up" data-aos-delay="200"className='bg-red-300 w-[260px] h-[180px] p-10'>Best Product</div>
        <div data-aos="fade-up" data-aos-delay="400"className='bg-red-300 w-[260px] h-[180px] p-10'>Best Product</div>
        <div data-aos="fade-up" data-aos-delay="500"className='bg-red-300 w-[260px] h-[180px] p-10'>Best Product</div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center mt-5'>
        <div data-aos="fade-up" data-aos-delay="600" className='bg-red-300 w-[260px] h-[180px] p-10'>Best Product</div>
        <div data-aos="fade-up" data-aos-delay="800"className='bg-red-300 w-[260px] h-[180px] p-10'>Best Product</div>
        <div data-aos="fade-up" data-aos-delay="1000"className='bg-red-300 w-[260px] h-[180px] p-10'>Best Product</div>
        <div data-aos="fade-up" data-aos-delay="1200"className='bg-red-300 w-[260px] h-[180px] p-10'>Best Product</div>
      </div>
    </div>
  )
}

export default BestProduct