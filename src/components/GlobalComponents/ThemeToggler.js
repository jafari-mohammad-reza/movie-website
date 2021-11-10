import React from 'react'
import useDarkTheme from '../../hooks/useDarkTheme';

function ThemeToggler() {
    const [colorTheme, setCurrentTheme] = useDarkTheme();
    return (
        <div
            onClick={() => setCurrentTheme(colorTheme)}
            className={`rounded-full  inline-flex flex-shrink-0 items-center  border-red-600 border-2 w-24 h-10  ${colorTheme === 'light' ? "bg-red-600" : "bg-darkTheme-primaryBackGround dark:bg-transparent"
                }  `}
        >
            <span className={`bg-white themTogglerBTn rounded-full w-11 h-9 transition duration-300 transform ${colorTheme === 'light' ? 'translate-x-12 DarkThemTogglerBTn ' : 'translate-x-0 LightThemTogglerBTn'}`} />
            {/* <img src="https://th.bing.com/th/id/OIP.yfwNm1PqJoaBxWAPicNYsgHaHa?w=197&h=197&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="" className="absolute top-0 left-0" /> */}
        </div>
    )
}

export default ThemeToggler
