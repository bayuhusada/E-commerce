import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import BestProduct from './BestProduct';

const Product = () => {
  useEffect(() =>{
    AOS.init({
      duration: 1000,
    })

  },[])

  return (
    <>
    <div className=' h-screen w-[80%] mx-auto'>
      <h1>Product</h1>
      <div className='grid grid-cols-2 gap-7'>
        <div data-aos="fade-right" className='bg-red-300 w-full h-52 rounded-xl'>1</div>
        <div data-aos="fade-left" className='bg-red-300 w-full h-52 rounded-xl'>2</div>
        <div data-aos="fade-right" className='bg-red-300 w-full h-52 rounded-xl'>3</div>
        <div data-aos="fade-left" className='bg-red-300 w-full h-52 rounded-xl'>4</div>
      </div>

      <div className='mt-4'>
      <h1>Product 2</h1>
        <div className="flex justify-between gap-3 mt-2">
          <div className="bg-blue-500 text-white p-10 rounded-lg w-1/3"> Product</div>
          <div className="bg-green-500 text-white p-10 rounded-lg w-1/3"> Product</div>
          <div className="bg-red-500 text-white p-10 rounded-lg w-2/4"> Product</div>
        </div>
      </div>

      <div className='mt-4'>
      <h1>Product 3</h1>
        <div className="flex justify-between gap-3 mt-2">
          <div className="bg-red-500 text-white p-10 rounded-lg w-2/4"> Product</div>
          <div className="bg-blue-500 text-white p-10 rounded-lg w-1/3"> Product</div>
          <div className="bg-green-500 text-white p-10 rounded-lg w-1/3"> Product</div>
        </div>
      </div>

      <div className='mt-4'>
      <h1>Product 4</h1>
        <div className="flex justify-between gap-3 mt-2">
          <div className="bg-blue-500 text-white p-10 rounded-lg w-1/3"> Product</div>
          <div className="bg-red-500 text-white p-10 rounded-lg w-2/4"> Product</div>
          <div className="bg-green-500 text-white p-10 rounded-lg w-1/3"> Product</div>
        </div>
      </div>
    </div>

    <BestProduct/>
    </>
  )
}

export default Product