import React from 'react'
import Heading from '../Heading/Heading'
import Basket from "../../assets/image.png"
import { FaHeart } from "react-icons/fa6";
import { FaLeaf } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import { TbToolsKitchen3 } from "react-icons/tb";

const Values = () => {

  const render1 = Data1.map(Details => {
    return (
    // Card Icon

    <div className='flex md:flex-row-reverse gap-x-7 md:m-10 m-7 ' key={Details.id}>
      <div className='flex justify-center items-center'><span className='flex justify-center items-center text-white text-2xl md:text-3xl bg-gradient-to-b from-orange-400 to-orange-500 md:w-15 md:h-15 w-10 h-10 rounded-full'>{Details.logo}</span></div>
      
      {/* Single Card Content */}
      <div className='md:text-right'>
      <div className='text-zinc-800 md:text-3xl text-2xl font-bold'>{Details.title}</div>
      <div className='text-zinc-600 '>{Details.description}</div>
      </div>
    </div>)
  })
  const render2 = Data2.map(Details2 => {
    return (
    // Card Icon

    <div className='flex flex-row gap-x-7 md:m-10 m-7' key={Details2.id}>
      <div className='flex justify-center items-center'><span className='flex justify-center items-center text-white text-2xl md:text-3xl bg-gradient-to-b from-orange-400 to-orange-500 md:w-15 md:h-15 w-10 h-10 rounded-full'>{Details2.logo}</span></div>
      
      {/* Single Card Content */}
      <div className='text-left'>
      <div className='text-zinc-800 md:text-3xl text-2xl font-bold'>{Details2.title}</div>
      <div className='text-zinc-600 '>{Details2.description}</div>
      </div>
    </div>)
  })
  return (
    <section>
      <div className='max-w-[1440px] mx-auto px-10'>
        <Heading highlight="Our" content="Value" />
      </div>
      <div className='flex md:flex-row flex-col md:gap-5  '>
        {/* LEFT VALUE  */}
        <div className=' flex flex-col md:justify-between flex-1 '>{render1}</div>

        {/* MIDDLE IMAGE */}
        <div className='hidden md:block flex-1'><img src={Basket} alt="" /></div>

        {/* RIGHT VALUE */}
        <div className=' flex flex-col justify-between flex-1'>
          {render2}
        </div>

      </div>
    </section>
  )
}
const Data1 = [
  {
    "id": 1,
    "title": "Trust",
    "description": "Thousands of families trust us for delivering fresh, genuine, and flavorful spices straight from the source.",
    "logo" : <FaHeart />
  },
  {
    "id": 2,
    "title": "100% Organic",
    "description": "Our spices are cultivated using organic farming practices—no harmful chemicals, just pure natural goodness.",
    "logo" : <FaLeaf />
  }]
const Data2 = [{
  "id": 3,
  "title": "Farm to Kitchen",
  "description": "We source directly from local farmers, ensuring each spice you get is freshly harvested and full of flavor.",
  "logo" : <TbToolsKitchen3 />
},
{
  "id": 4,
  "title": "Handpicked Quality",
  "description": "Every batch goes through strict quality checks—only the best spices make it to your kitchen.",
  "logo" : <FaHandHoldingHeart />
}
]

export default Values