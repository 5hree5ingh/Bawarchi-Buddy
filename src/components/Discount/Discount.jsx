import React from 'react'
import Button from "../Button/Button"
import Offer from "../../assets/Offer.png"

const Discount = () => {
  return (
    <section className='bg-zinc-100 mt-20'>
      
      <div className='flex md:flex-row flex-col py-10 px-10 max-w-[1440px] mx-auto'>

        {/* Left Rotated Discount */}
        <span className='md:text-9xl md:p-x-0 px-8 text-6xl  text-orange-500 font-bold z-1 md:self-center tranform md:rotate-[270deg]'>
          30%
        </span>

        {/* Center Content */}
        <div className='flex-1 max-w-[700px] px-8'>
          <h3 className='md:text-7xl text-4xl text-zinc-800 font-bold'>First Order Discount</h3>
          <p className='text-zinc-600 my-6'>
            Get an exclusive 30% discount on your first order — available only on online payments.
          </p>
          <Button content="Shop now" />
        </div>

        {/* Right Image */}
        

      </div>
    </section>
  )
}

export default Discount
