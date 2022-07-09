import React from 'react'

export const Card = ({ name, description, linkRepo, link }) => {
  
    const projectImageUrl = `/assets/icons/tailwind.svg`; 
    
    return (
        <a href="https://github.com/GOJAx64" target="blank" className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:w-full hover:bg-slate-200 hover:border-slate-400">
            <img className="object-cover w-24 h-full rounded-t-lg md:rounded-none md:rounded-l-lg" src={ projectImageUrl } alt={ name } />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className='mb-1 text-2xl font-bold tracking-tight text-gray-900'>{ name }</h5>
                <p className="mb-0.5 italic text-gray-700 text-left">{ description }</p>
                
            </div>
            
        </a>
    )

}
