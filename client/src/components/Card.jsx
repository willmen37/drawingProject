import React from 'react'

const Card = ( {name, prompt, photo}) => {
  return (
    
    <div className='rounded-xl group relative shadow-card hover:shadow-cardhover card'>
      <img
        className='w-full h-auto object-cover rounded-xl'
        src={photo}
        alt={prompt}
      />
      <div className='group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-white bg-opacity-50 m-2 p-4 rounded-md'>
        <p className='font bold text-black text-[20px] overflow-y-auto prompt'>{prompt}</p>

        <div className='mt-5 flex justify-between items-center gap-2'>
          <div className='w-7 h-7 rounded-full object-cover bg-red-700 flex justify-center items-center text-white text-xs font-bold'>
            {name[0].toUpperCase()}
          </div>
          <p className='font-extrabold text-red-700  text-sm'>{name}</p>
        </div>
      </div>
      
    </div>
  )
}

export default Card