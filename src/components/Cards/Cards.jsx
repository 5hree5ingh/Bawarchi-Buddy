import React from 'react' 
import Button from '../Button/Button'
import { FaHeart } from "react-icons/fa";
import { MdAdd } from "react-icons/md";

const Cards = (props) => {
  return (
    <div className=''>
        {/* ICONS */}
        <div className='flex justify-between'>
          <span className='text-zinc-300 text-3xl'><FaHeart /></span> {/* ✅ No need to wrap JSX in curly braces inside JSX */}
          <button className='text-white text-3xl bg-gradient-to-b from-orange-400 to-orange-500 rounded-lg'><MdAdd /></button> {/* ✅ Same here */}
        </div>

        {/* IMAGE  */}
        <div className='w-full h-50  '>
          <img src={props.image} alt="product" className='w-full h-full object-contain' /> 
        </div>

        {/* DESCRIPTION */}
        <div className='text-center'>
          <h3 className='text-2xl text-zinc-600 font-bold'>{props.product}</h3>
          <p className='text-2xl text-zinc-600 mt-4 mb-3'>${props.price.toFixed(2)}</p>
          <div><Button content="Shop" /></div> {/* ❌ You wrote "Show now" earlier, but your button content was "Shop" in the JSON */}
        </div>
    </div>
  )
}

export default Cards
