import { Card } from './Card'

export const GridTechnologies = ( { stack = [], length, mx }) => {
    return (
        <div className={`mx-2 py-4 text-center lg:mx-${mx}  border border-slate-400 rounded-xl`}>
            <div className={`grid grid-cols-3 sm:grid-cols-4 sm:mx-4 lg:grid-cols-${length} gap-5 lg:mx-1 place-items-center`}>
                { 
                    stack?.map( (item, index) => (
                        <img className="w-16 h-16 transition ease-in-out delay-300 lg:hover:-translate-y-1 lg:hover:scale-110  duration-300" key={ index.toString() } src={`/assets/icons/${item}.svg`} alt={ item } />
                    ))
                }
            </div>
        </div>
    )
}
