
import React from 'react';

function Draggable({ onClose }) {
    const styles = "pr-2 p-1 cursor-pointer";

    return (
        <nav className="relative select-none flex flex-row-reverse justify-start rounded-t-xl h-[30px] w-full text-black bg-white pr-2">
            <span className={styles} onClick={onClose}>X</span>
            <span className={styles} onClick={onClose}>▢</span>
            <span className={styles}>-</span>
        </nav>
    );
}

export default Draggable;
