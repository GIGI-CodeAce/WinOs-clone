import React, { useEffect, useState } from 'react';
import AppsInfo from './appsData';

function App(props) {
    const increment = 90;

    const [currentHeight, setCurrentHeight] = useState(0);
    const [currentWidth, setCurrentWidth] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [offsetX, setOffsetX] = useState(0);
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const newHeight = (props.index % 8) * increment;
        const newWidth = Math.floor(props.index / 8) * increment;

        setCurrentHeight(newHeight);
        setCurrentWidth(newWidth);
    }, [props.index]);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setOffsetX(e.clientX - currentWidth);
        setOffsetY(e.clientY - currentHeight);
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            setCurrentWidth(e.clientX - offsetX);
            setCurrentHeight(e.clientY - offsetY);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, offsetX, offsetY]);

    return (
        <main
            className=" select-none hover:bg-white hover:bg-opacity-10 rounded-xl absolute cursor-pointer text-white text-sm text-center shadow-2xl w-16 pt-4"
            style={{ left: `${currentWidth + 10}px`, top: `${currentHeight}px` }}
            onMouseDown={handleMouseDown}
        >
            <div
                className="mx-auto w-12 h-12 rounded-lg text-center bg-cover"
                style={{ backgroundImage: `url(${props.img})` }}
                alt={props.name}
            />
            <span className="shadow-3xl">{props.name}</span>
        </main>
    );
}

function FinalApp() {
    return (
        <>
            <div className=" relative">
                {AppsInfo.map((item, index) => (
                    <App key={index} name={item.name} img={item.img} index={index} />
                ))}
            </div>
        </>
    );
}

export default FinalApp