import { Card } from './Card'

export const GridTechnologies = ( { stack = [], length }) => {
    //console.log(stack);

    return (
        <div className='mx-4 py-4 text-center rounded rounded-xl bg-slate-300 border border-slate-500 lg:mx-32'>
            <div className={`grid grid-cols-3 sm:grid-cols-4 sm:mx-4 lg:grid-cols-8 gap-4 lg:mx-1 place-items-center`}>
                { 
                    stack?.map( (item, index) => (
                        <img className="w-16 h-16" key={ index.toString() } src={`/assets/icons/${item}.svg`} alt={ item } />
                    ))
                }
            </div>
        </div>
    )
}
