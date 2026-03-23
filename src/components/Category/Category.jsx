import React from 'react'
import Button from "../Button/Button"
import Heading from '../Heading/Heading'
import spices from '../../assets/spices.png'
import chilli_powder from '../../assets/chilli_powder.png'
import shahi_paneer from '../../assets/Offer.png'
const Card_details = [
  {
    "id": 1,
    "heading": "Spices Powder",
    "description": "Aromatic and finely ground spices to add rich flavor and authentic taste to your everyday meals.",
    "image": chilli_powder
  },
  {
    "id": 2,
    "heading": "Ready Made Powder",
    "description": "Instant cooking made easy with our blend of ready-made spice powders crafted for every Indian dish.",
    "image": shahi_paneer
  },
  {
    "id": 3,
    "heading": "Spice",
    "description": "Premium-quality whole and ground spices, directly sourced to preserve freshness and purity.",
    "image": spices
  }
]


const Category = () => {

  const renderCards = () => Card_details.map(card => {
    return (
      <div key={card.id} className='flex-1 basis-[300px] -mt-[30px] '>

        {/* Card Image */}
        <div className='h-[300px] overflow-hidden -mb-11'><img className='w-full h-full object-contain' src={card.image} alt="" /></div>

        {/* Card Description */}
        <div className='bg-zinc-100 pt-8 p-3 rounded-xl'>
        <div><h2 className='text-zinc-800 text-3xl font-bold'>{card.heading}</h2></div>
        <div><p className='text-zinc-600 mt-3 mb-6'>{card.description}</p></div>
        <Button content="See All"/>
        </div>
      </div>
    )
  });

  return (
    <section>
      <div className='py-20 max-w-[1440px] mx-auto px-10'>
        <Heading highlight='Shop' content='by Category' />

        {/* Category Cards */}
        <div className='flex flex-wrap gap-10'>
          {renderCards()}
        </div>
      </div>
    </section>
  )
}

export default Category