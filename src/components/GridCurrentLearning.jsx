import ai from '../../assets/icons/ai.svg';
import typescript from '../../assets/icons/typescript.svg';
import node from '../../assets/icons/node.svg';
import docker from '../../assets/icons/docker.svg';
import jest from '../../assets/icons/jest.svg';
import mongodb from '../../assets/icons/mongodb.svg';


export const GridCurrentLearning = () => {
    return (
        <div className={`mx-2 py-4 text-center lg:mx-7  border border-slate-400 rounded-xl`}>
            <div className={`grid grid-cols-3 sm:grid-cols-4 sm:mx-4 lg:grid-cols-6 gap-5 lg:mx-1 place-items-center`}>

                <img
                    className="w-16 h-16 transition ease-in-out delay-300 lg:hover:-translate-y-1 lg:hover:scale-110  duration-300"
                    src={ai}
                    alt={'ai'}
                />
                <img
                    className="w-16 h-16 transition ease-in-out delay-300 lg:hover:-translate-y-1 lg:hover:scale-110  duration-300"
                    src={typescript}
                    alt={'typescript'}
                />
                <img
                    className="w-16 h-16 transition ease-in-out delay-300 lg:hover:-translate-y-1 lg:hover:scale-110  duration-300"
                    src={node}
                    alt={'node'}
                />
                <img
                    className="w-16 h-16 transition ease-in-out delay-300 lg:hover:-translate-y-1 lg:hover:scale-110  duration-300"
                    src={docker}
                    alt={'docker'}
                />
                <img
                    className="w-16 h-16 transition ease-in-out delay-300 lg:hover:-translate-y-1 lg:hover:scale-110  duration-300"
                    src={jest}
                    alt={'jest'}
                />
                <img
                    className="w-16 h-16 transition ease-in-out delay-300 lg:hover:-translate-y-1 lg:hover:scale-110  duration-300"
                    src={mongodb}
                    alt={'mongodb'}
                />
            </div>
        </div>
    )
}