import { Card } from './Card'

export const GridTechnologies = ( { stack }) => {
    //console.log(stack);

    return (
    <div className='container mx-auto py-4 text-center rounded rounded-xl bg-slate-300 border border-slate-500'>
        <div className="grid grid-cols-3 sm:grid-cols-4 sm:mx-4 lg:grid-cols-9 gap-4 lg:mx-1 place-items-center">
            { 
                stack?.map(item => (
                    <div> 
                        <img className="w-18 h-20" key={ item } src={`/assets/icons/${item}.svg`} alt={ item } />
                    </div>
                ))
            }
        </div>
    </div>
  )
}
