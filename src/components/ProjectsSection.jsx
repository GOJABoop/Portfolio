import React from 'react'
import { Card } from './Card'

export const ProjectsSection = () => {
  return (
    <section className='bg-slate-300'>
        <div>ProjectsSection</div>
        <div className='container mx-auto mt-5 pb-5 text-center'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                <Card key={1} name={'BookStore'} description={'A book store'} linkRepo={''} link={''}/>
                <Card key={2} name={'Point of sale'} description={'A book store'} linkRepo={''} link={''}/>
                <Card key={3} name={'Pokedex'} description={'A book store'} linkRepo={''} link={''}/>
                <Card key={4} name={'Graph Algorithms'} description={'A book store'} linkRepo={''} link={''}/>
                <Card key={5} name={'Scoreboards'} description={'A book store'} linkRepo={''} link={''}/>
                <Card key={6} name={'My Data Structures'} description={'A book store'} linkRepo={''} link={''}/>
                <Card key={7} name={'Gifs App'} description={'A book store'} linkRepo={''} link={''}/>
                <Card key={8} name={'Doginator'} description={'A book store'} linkRepo={''} link={''}/>
                <Card key={9} name={'Multilayer Perceptron'} description={'A book store'} linkRepo={''} link={''}/>
            </div>
        </div>
    </section>
  )
}
