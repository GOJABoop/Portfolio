import { Card } from './Card';
import  neural from '../../assets/images/neural.png';
import  notes from '../../assets/images/notes.png';
import  connection from '../../assets/images/connection.png';
import  gif from '../../assets/images/gif.png';
import  question from '../../assets/images/question.png';
import  deep_learning from '../../assets/images/deep-learning.png';
import  books from '../../assets/images/books.png';
import  point_of_sale from '../../assets/images/point-of-sale.png';
import  pokeball from '../../assets/images/pokeball.png';

export const GridProjects = () => {
  return (
    <div className='container mx-auto mt-1 pb-12 text-center'>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:mx-4 lg:grid-cols-3 gap-5 lg:mx-0">
            <Card 
              key={4} 
              name={'Graph Algorithms'} 
              description={'C#, Math, Image Manipulation'} 
              linkRepo={'https://github.com/GOJAx64/Prim-Kruskal-Dijkstra'} 
              img={neural}
            />
            <Card 
              key={5} 
              name={'Scoreboards'} 
              description={'Laravel 8, Web'} 
              linkRepo={'https://github.com/GOJAx64/Scoreboards'} 
              img={notes}
            />
            <Card 
              key={6} 
              name={'My Data Structures'} 
              description={'C++, List, Hash, Trees...'} 
              linkRepo={'https://github.com/GOJAx64/My-data-structures'} 
              img={connection}
            />
            <Card 
              key={7} 
              name={'Gifs App'} 
              description={'React JS, API Rest, Jest'} 
              linkRepo={'https://github.com/GOJAx64/Gif-App'} 
              img={gif}
            />
            <Card 
              key={8} 
              name={'Doginator'} 
              description={'PHP, MySQL'} 
              linkRepo={'https://github.com/GOJAx64/Doginator'} 
              img={question}
            />
            <Card 
              key={9} 
              name={'Perceptron'} 
              description={'Python, Machine Learning'} 
              linkRepo={'https://github.com/GOJAx64/Perceptron'} 
              img={deep_learning}
            />
            <Card 
              key={1} 
              name={'BookStore'} 
              description={'React JS, TypesScript, Jest'} 
              linkRepo={'https://github.com/GOJAx64/bookstore'} 
              img={books}
            />
            <Card 
              key={2} 
              name={'Point of sale'} 
              description={'React JS, Nest, TypesScript'} 
              linkRepo={'https://github.com/GOJAx64/Point-of-sale'} 
              img={point_of_sale}
            />
            <Card 
              key={3} 
              name={'Pokedex'} 
              description={'React JS, API Rest, Jest'} 
              linkRepo={'https://github.com/GOJAx64/Pokedex'} 
              img={pokeball}
            />
        </div>
    </div>
  )
}
