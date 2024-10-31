import React, { useState, useRef, useEffect } from 'react';
import Search from './footerMenus/search';

function Footer() {
    const [asideBar, setAsideBar] = useState(false);

    function toggleAside() {
        setAsideBar(!asideBar);
    }

    return (
        <footer className="z-20 select-none cursor-pointer flex items-center w-full h-[50px] absolute text-gray-400 bottom-0 bg-gray-400/30 backdrop-blur-md">
            <Search asideBar={asideBar} setAsideBar={setAsideBar}/>
            <div onClick={toggleAside} className="flex items-center w-10 h-8 cover"
          style={{
            backgroundImage: `url('https://raw.githubusercontent.com/GIGIsOtherStuff/WinOSmedia/main/Files/other/win10.png')`,
            backgroundSize: 'cover',
        }}>
            </div>
            <div onClick={toggleAside} className="flex items-center w-24 h-[35px] bg-gray-600/50 rounded-3xl m-2">
                <span className="material-symbols-outlined mt-1 ml-1">search</span>Search
            </div>
            <div className="flex items-center">
                <span className="material-symbols-outlined">shopping_bag shop folder picture_as_pdf</span>
            </div>
            <div className="absolute right-40 hidden sm:block items-center">
                <span className="material-symbols-outlined flex">keyboard_arrow_up</span>
            </div>
            <div className="flex absolute right-16 items-center">
                <span className="material-symbols-outlined">wifivolume_upbattery_5_bar</span>
            </div>
            <div className="flex absolute right-2 items-center">8:09:32</div>
        </footer>
    );
}

export default Footer;
