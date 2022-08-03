import javascript from '../../assets/icons/javascript.svg';
import cpp from '../../assets/icons/cpp.svg';
import c_sharp from '../../assets/images/c_sharp.png';
import python from '../../assets/icons/python.svg';
import java from '../../assets/icons/java.svg';
import react from '../../assets/icons/react.svg';
import laravel from '../../assets/icons/laravel.svg';
import mysql from '../../assets/icons/mysql.svg';
import postgresql from '../../assets/icons/postgresql.svg';
import html from '../../assets/icons/html.svg';
import css from '../../assets/icons/css.svg';
import tailwind from '../../assets/icons/tailwind.svg';

export const GridTechnologies = () => {
    return (
        <div className={`mx-2 py-4 text-center lg:mx-24  border border-slate-400 rounded-xl`}>
            <div className={`grid grid-cols-3 sm:grid-cols-4 sm:mx-4 lg:grid-cols-12 gap-5 lg:mx-1 place-items-center`}>
                
                <img 
                    className="w-16 h-16 transition ease-in-out delay-300 lg:hover:-translate-y-1 lg:hover:scale-110  duration-300"
                    src={javascript}
                    alt={'javascript'}
                />
                <img 
                    className="w-16 h-16 transition ease-in-out delay-300 lg:hover:-translate-y-1 lg:hover:scale-110  duration-300"
                    src={cpp}
                    alt={'cpp'}
                />
                <img 
                    className="w-16 h-16 transition ease-in-out delay-300 lg:hover:-translate-y-1 lg:hover:scale-110  duration-300"
                    src={c_sharp}
                    alt={'c_sharp'}
                />
                <img 
                    className="w-16 h-16 transition ease-in-out delay-300 lg:hover:-translate-y-1 lg:hover:scale-110  duration-300"
                    src={python}
                    alt={'python'}
                />
                <img 
                    className="w-16 h-16 transition ease-in-out delay-300 lg:hover:-translate-y-1 lg:hover:scale-110  duration-300"
                    src={java}
                    alt={'java'}
                />
                <img 
                    className="w-16 h-16 transition ease-in-out delay-300 lg:hover:-translate-y-1 lg:hover:scale-110  duration-300"
                    src={react}
                    alt={'react'}
                />
                <img 
                    className="w-16 h-16 transition ease-in-out delay-300 lg:hover:-translate-y-1 lg:hover:scale-110  duration-300"
                    src={laravel}
                    alt={'laravel'}
                />
                <img 
                    className="w-16 h-16 transition ease-in-out delay-300 lg:hover:-translate-y-1 lg:hover:scale-110  duration-300"
                    src={mysql}
                    alt={'mysql'}
                />
                <img 
                    className="w-16 h-16 transition ease-in-out delay-300 lg:hover:-translate-y-1 lg:hover:scale-110  duration-300"
                    src={postgresql}
                    alt={'postgresql'}
                />
                <img 
                    className="w-16 h-16 transition ease-in-out delay-300 lg:hover:-translate-y-1 lg:hover:scale-110  duration-300"
                    src={html}
                    alt={'html'}
                />
                <img 
                    className="w-16 h-16 transition ease-in-out delay-300 lg:hover:-translate-y-1 lg:hover:scale-110  duration-300"
                    src={css}
                    alt={'css'}
                />
                <img 
                    className="w-16 h-16 transition ease-in-out delay-300 lg:hover:-translate-y-1 lg:hover:scale-110  duration-300"
                    src={tailwind}
                    alt={'tailwind'}
                />
            </div>
        </div>
    )
}
