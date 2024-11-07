import React from 'react';
import AppsInfo from './appsData'; 

function App({ name, img, index, openApp }) {
    const increment = 90;
    const [currentHeight, setCurrentHeight] = React.useState(0);
    const [currentWidth, setCurrentWidth] = React.useState(0);
    const [isDragging, setIsDragging] = React.useState(false);
    const [offsetX, setOffsetX] = React.useState(0);
    const [offsetY, setOffsetY] = React.useState(0);

    React.useEffect(() => {
        const newHeight = (index % 8) * increment;
        const newWidth = Math.floor(index / 8) * increment;

        setCurrentHeight(newHeight);
        setCurrentWidth(newWidth);
    }, [index]);

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

    React.useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, offsetX, offsetY]);

    return (
        <main
            className="select-none hover:bg-white hover:bg-opacity-10 rounded-xl absolute cursor-pointer text-white text-sm text-center min-h-[85px] shadow-2xl w-16 mt-4 pt-2"
            style={{ left: `${currentWidth + 10}px`, top: `${currentHeight}px` }}
            onMouseDown={handleMouseDown}
            onDoubleClick={() => openApp(name)}
        >
            <abbr className='no-underline' title={name}>
                <div
                    className="mx-auto w-12 h-12 rounded-lg text-center bg-cover"
                    style={{ backgroundImage: `url(${img})` }}
                    alt={name}
                />
                <span className="shadow-3xl">{name}</span>
            </abbr>
        </main>
    );
}

function FinalApp({ openApp }) {
    return (
        <div className="relative">
            {AppsInfo.map((item, index) => (
                <App key={index} name={item.name} img={item.img} index={index} openApp={openApp} /> // Pass openApp to each App
            ))}
        </div>
    );
}

export default FinalApp;
