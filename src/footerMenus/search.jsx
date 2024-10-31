import React, {useRef, useState, useEffect} from "react";

function Search({asideBar, setAsideBar}){
    const asideEl = 'm-5';
    const asideRef = useRef(null);

    const animate = asideBar ? 'animate-slideUp' : 'animate-slideDown';

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (asideRef.current && !asideRef.current.contains(event.target)) {
                setAsideBar(false);
            }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [asideRef, setAsideBar]);

    return(
        <aside
        ref={asideRef}
        className={`text-white absolute w-[455px] bg-black/75 backdrop-blur-md rounded-xl h-[555px] left-2 bottom-[50px] ${animate}`}
    >
        <h3 className='m-5'>Pinned</h3>
        <div className='flex'>
            <h4 className={asideEl}>Apps...</h4>
            <h4 className={asideEl}>Apps...</h4>
            <h4 className={asideEl}>Apps...</h4>
            <h4 className={asideEl}>Apps...</h4>
            <h4 className={asideEl}>Apps...</h4>
        </div>
        <h3 className='m-5'>Recommended</h3>        
        <div className='flex'>
            <h4 className={asideEl}>Apps...</h4>
            <h4 className={asideEl}>Apps...</h4>
            <h4 className={asideEl}>Apps...</h4>
            <h4 className={asideEl}>Apps...</h4>
            <h4 className={asideEl}>Apps...</h4>
        </div>
    </aside>
    )
}

export default Search