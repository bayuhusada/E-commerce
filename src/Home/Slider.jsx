import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';

const Slider = () => {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    })
  },[])
  return (
    <div data-aos="zoom-in" className='w-[80%] rounded h-[500px] mx-auto mt-5 bg-slate-800'>
      <h1>SLIDER</h1>
    </div>
  )
}

export default Slider