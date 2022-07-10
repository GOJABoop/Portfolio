import { Card } from './Card';

export const GridProjects = () => {
  return (
    <div className='container mx-auto mt-1 pb-12 text-center'>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:mx-4 lg:grid-cols-3 gap-5 lg:mx-0">
            <Card key={1} name={'BookStore'} description={'React JS, TypesScript, Jest'} linkRepo={'https://github.com/GOJAx64/bookstore'} img={'/assets/images/books.png'}/>
            <Card key={2} name={'Point of sale'} description={'Angular, Spring boot'} linkRepo={'https://github.com/GOJAx64/Point-of-sale'} img={'/assets/images/point-of-sale.png'}/>
            <Card key={3} name={'Pokedex'} description={'React JS, API Rest, Jest'} linkRepo={'https://github.com/GOJAx64/Point-of-sale'} img={'/assets/images/pokeball.png'}/>
            <Card key={4} name={'Graph Algorithms'} description={'C#, Math, Image Manipulation'} linkRepo={'https://github.com/GOJAx64/Point-of-sale'} img={'/assets/images/neural.png'}/>
            <Card key={5} name={'Scoreboards'} description={'Laravel 8, Web'} linkRepo={'https://github.com/GOJAx64/Point-of-sale'} img={'/assets/images/notes.png'}/>
            <Card key={6} name={'My Data Structures'} description={'C++, List, Hash, Trees...'} linkRepo={'https://github.com/GOJAx64/Point-of-sale'} img={'/assets/images/connection.png'}/>
            <Card key={7} name={'Gifs App'} description={'React JS, API Rest, Jest'} linkRepo={'https://github.com/GOJAx64/Point-of-sale'} img={'/assets/images/gif.png'}/>
            <Card key={8} name={'Doginator'} description={'PHP, MySQL'} linkRepo={'https://github.com/GOJAx64/Point-of-sale'} img={'/assets/images/question.png'}/>
            <Card key={9} name={'Multilayer Perceptron'} description={'Python, Machine Learning'} linkRepo={'https://github.com/GOJAx64/Point-of-sale'} img={'/assets/images/deep-learning.png'}/>
        </div>
    </div>
  )
}
