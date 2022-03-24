import React, {useState, useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'

const SideBarItem = ({title, path , length = null}) => {
    const location = useLocation();
    const [activePage, setActivePage] = useState(location.pathname);
    useEffect(() => {

        setActivePage(location.pathname);
    }, [location.pathname])
    return (
        <Link to={path} className="sideBarItem">
            {activePage === path && (
                <hr className="border-none transform rotate-180 md:rotate-90   lg:-ml-14 -ml-7 h-6 md:-ml-8  text-red-600  bg-red-600 rounded-full md:h-2 w-3 md:w-8 lg:w-10"/>
            )}
            <div className={`${activePage === path && "text-red-600"} relative`}>
                {title} {length >= 1  && <span className='absolute -top-3 bg-lightTheme-primaryColor rounded-full text-red-600 px-1.5 py-0 text-sm  dark:bg-darkTheme-primaryColor    -right-3.5 md:-right-4 lg:-right-5'>{length}</span>} 
            </div>
        </Link>
    )
}
export default SideBarItem
