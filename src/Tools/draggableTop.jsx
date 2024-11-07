import { useEffect, useRef } from 'react';

function Draggable({ onClose, children }) {
    const handleRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        let isDragging = false;
        let offsetX = 0;
        let offsetY = 0;

        const onMouseDown = (e) => {
            isDragging = true;
            const rect = containerRef.current.getBoundingClientRect();
            offsetX = e.clientX - rect.left;
            offsetY = e.clientY - rect.top;
        };

        const onMouseMove = (e) => {
            if (isDragging && containerRef.current) {
                containerRef.current.style.left = `${e.clientX - offsetX}px`;
                containerRef.current.style.top = `${e.clientY - offsetY}px`;
            }
        };

        const onMouseUp = () => {
            isDragging = false;
        };

        if (handleRef.current) {
            handleRef.current.addEventListener('mousedown', onMouseDown);
        }
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);

        return () => {
            if (handleRef.current) {
                handleRef.current.removeEventListener('mousedown', onMouseDown);
            }
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };
    }, []);

    return (
        <div ref={containerRef} className="absolute">
            <nav
                ref={handleRef}
                className="relative select-none flex flex-row-reverse justify-start rounded-t-xl h-[30px] w-full text-black bg-white pr-2"
            >
                <span className="pr-2 p-1 cursor-pointer" onClick={onClose}>X</span>
                <span className="pr-2 p-1 cursor-pointer">▢</span>
                <span className="pr-2 p-1">-</span>
            </nav>
            {children}
        </div>
    );
}

export default Draggable;