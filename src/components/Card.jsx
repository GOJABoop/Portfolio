export const Card = ({ name, description, linkRepo, img }) => {
    return (
        <a href={linkRepo} target="blank" className="flex items-center mx-4 bg-white rounded-lg border shadow-md md:mx-0 md:flex-row md:w-full hover:bg-slate-200 hover:border-slate-400">
            <img className="object-cover w-18 h-20 rounded-t-lg md:rounded-none md:rounded-l-lg" src={ img } alt={ name } />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className='text-left mb-1 text-2xl font-bold tracking-tight text-gray-900'>{ name }</h5>
                <p className="mb-0.5 italic text-gray-700 text-left">{ description }</p>
                
            </div>
            
        </a>
    )

}
