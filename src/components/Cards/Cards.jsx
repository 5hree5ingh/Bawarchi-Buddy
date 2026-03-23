import React from 'react' 
import Button from '../Button/Button'
import { FaHeart } from "react-icons/fa";
import { MdAdd } from "react-icons/md";

const Cards = ({ image, product, price }) => {
  return (
    <div className='group relative overflow-hidden transition-all duration-300'>
        {/* ICONS */}
        <div className='flex justify-between items-center relative z-10'>
          <span className='text-zinc-300 text-3xl cursor-pointer hover:text-red-500 transition-colors duration-300 drop-shadow-sm'>
            <FaHeart />
          </span>
          <button className='text-white text-3xl bg-gradient-to-br from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform active:scale-95'>
            <MdAdd />
          </button>
        </div>

        {/* IMAGE  */}
        <div className='w-full h-48 sm:h-56 mt-4 flex items-center justify-center overflow-hidden rounded-xl bg-transparent'>
          <img 
            src={image} 
            alt={product} 
            className='max-w-[80%] max-h-full object-contain filter mix-blend-multiply drop-shadow-xl transform group-hover:scale-110 group-hover:rotate-2 transition-transform duration-500' 
            onError={(e) => { e.target.onerror = null; e.target.src="https://spoonacular.com/cdn/ingredients_500x500/spice-mix.jpg" }}
          /> 
        </div>

        {/* DESCRIPTION */}
        <div className='text-center mt-6'>
          <h3 className='text-xl sm:text-2xl text-zinc-700 font-bold group-hover:text-orange-500 transition-colors duration-300 truncate px-2'>{product}</h3>
          <p className='text-xl sm:text-2xl text-orange-600 font-semibold mt-2 mb-4'>${price.toFixed(2)}</p>
          <div className='flex justify-center'>
            <div className='transform group-hover:-translate-y-1 transition-transform duration-300 w-full px-6'>
              <Button content="Shop" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Cards
