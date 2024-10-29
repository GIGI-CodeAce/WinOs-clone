import React from 'react';

function Footer() {
  return (
    <footer className="select-none cursor-pointer flex items-center w-full h-[50px] absolute text-gray-400 bottom-0 backdrop-blur-md">
        <div className="flex items-center">
            <span className="material-symbols-outlined">cards</span>
        </div>
        <div className="flex items-center w-24 h-[35px] bg-gray-600/50 rounded-3xl m-2">
            <span className="material-symbols-outlined mt-1 ml-1">search</span>Search
        </div>
        <div className="flex items-center">
            <span className="material-symbols-outlined">shopping_bag shop folder picture_as_pdf</span>
        </div>
        <div className=" absolute right-40 hidden sm:block items-center"><span className="material-symbols-outlined flex ">
            keyboard_arrow_up
            </span></div>
        <div className="flex absolute right-16 items-center"><span className="material-symbols-outlined">
            wifivolume_upbattery_5_bar
            </span></div>
        <div className="flex absolute right-2 items-center">8:09:32</div>
    </footer>
  );
}

export default Footer;
