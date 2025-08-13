import React from 'react'

const Heading = (props) => {
    return (
        <div className='w-fit mx-auto '>
            <h2 className='text-[2.2rem] md:text-5xl font-bold'><span className='text-orange-500'>{props.highlight} </span>{props.content}</h2>
            <div className='w-25 h-1 bg-orange-300 md:mt-6 mt-3 ml-auto'></div>
        </div>
    )
}

export default Heading