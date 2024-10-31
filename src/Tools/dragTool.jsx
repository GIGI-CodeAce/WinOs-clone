import { useEffect } from 'react';

function Drag({ handleRef, sectionRef }) {
    useEffect(() => {
        if (!handleRef.current || !sectionRef.current) return; // Ensure refs are available

        const section = sectionRef.current;
        let isDragging = false;
        let offsetX = 0;
        let offsetY = 0;

        const onMouseDown = (e) => {
            isDragging = true;
            offsetX = e.clientX - section.offsetLeft;
            offsetY = e.clientY - section.offsetTop;
        };

        const onMouseMove = (e) => {
            if (isDragging) {
                const windowWidth = window.innerWidth;
                const windowHeight = window.innerHeight;

                let x = e.clientX - offsetX;
                let y = e.clientY - offsetY;

                if (x < -99) x = -99;
                if (y < 0) y = 0;
                if (x + section.offsetWidth > windowWidth + 99) {
                    x = windowWidth + 99 - section.offsetWidth;
                }
                if (y + section.offsetHeight > windowHeight + 99) {
                    y = windowHeight + 99 - section.offsetHeight;
                }

                section.style.left = `${x}px`;
                section.style.top = `${y}px`;
            }
        };

        const onMouseUp = () => {
            isDragging = false;
        };

        // Attach event listeners
        handleRef.current.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);

        return () => {
            if (handleRef.current) {
                handleRef.current.removeEventListener('mousedown', onMouseDown);
            }
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };
    }, [handleRef, sectionRef]);

    return null;
}

export default Drag;
