import git from '../../assets/icons/git.svg';
import github from '../../assets/icons/github.svg';
import jira from '../../assets/icons/jira.svg';
import slack from '../../assets/icons/slack.svg';
import terminal from '../../assets/icons/terminal.svg';
import linux from '../../assets/icons/linux.svg';

export const GridTools = () => {
    return (
        <div className={`mx-2 py-4 text-center lg:mx-7  border border-slate-400 rounded-xl`}>
            <div className={`grid grid-cols-3 sm:grid-cols-4 sm:mx-4 lg:grid-cols-6 gap-5 lg:mx-1 place-items-center`}>
                
                <img 
                    className="w-16 h-16 transition ease-in-out delay-300 lg:hover:-translate-y-1 lg:hover:scale-110  duration-300"
                    src={git}
                    alt={'git'}
                />
                <img 
                    className="w-16 h-16 transition ease-in-out delay-300 lg:hover:-translate-y-1 lg:hover:scale-110  duration-300"
                    src={github}
                    alt={'github'}
                />
                <img 
                    className="w-16 h-16 transition ease-in-out delay-300 lg:hover:-translate-y-1 lg:hover:scale-110  duration-300"
                    src={jira}
                    alt={'jira'}
                />
                <img 
                    className="w-16 h-16 transition ease-in-out delay-300 lg:hover:-translate-y-1 lg:hover:scale-110  duration-300"
                    src={slack}
                    alt={'slack'}
                />
                <img 
                    className="w-16 h-16 transition ease-in-out delay-300 lg:hover:-translate-y-1 lg:hover:scale-110  duration-300"
                    src={terminal}
                    alt={'terminal'}
                />
                <img 
                    className="w-16 h-16 transition ease-in-out delay-300 lg:hover:-translate-y-1 lg:hover:scale-110  duration-300"
                    src={linux}
                    alt={'linux'}
                />
            </div>
        </div>
    )
}