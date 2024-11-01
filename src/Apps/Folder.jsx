
import React, { useState } from "react";
import Draggable from "../Tools/draggableTop";

function Folder() {
    const filesStyle = "bg-gray-700 m-1 p-1 rounded-lg";
    const librarysStyle = "border-b-2 border-black";
    const [isShowing, setIsShowing] = useState(true);

    const Close = () => setIsShowing(false);

    return (
        isShowing && (
            <Draggable onClose={Close}>
                <main className="text-white w-[700px] h-[420px] bg-zinc-800 rounded-b-xl">
                <nav className="p-2 flex items-center justify-center cursor-move">
                    <span className="material-symbols-outlined select-none cursor-pointer">
                        arrow_back arrow_forward arrow_upward refresh
                    </span>
                    <span className="bg-gray-700 rounded w-full p-1 ml-1 flex text-gray-300">
                        <span className="material-symbols-outlined">home</span> > Home >
                    </span>
                    <span className="bg-gray-700 rounded w-80 p-1 ml-1 flex text-gray-300">
                        Search home<span className="material-symbols-outlined">search</span>
                    </span>
                </nav>

                <aside className="columns-1 border-2 border-black rounded-bl-xl w-32 h-[372px]">
                    <ul className="p-1 cursor-pointer">
                        <li className={librarysStyle}>Home</li>
                        <li className={librarysStyle}>Gallery</li>
                        <li className={librarysStyle}>Downloads</li>
                        <li className={librarysStyle}>Documents</li>
                        <li className={librarysStyle}>Desktop</li>
                        <li className={librarysStyle}>Pictures</li>
                        <li className={librarysStyle}>Music</li>
                        <li className={librarysStyle}>Videos</li>
                        <li className={librarysStyle}>Folder</li>
                    </ul>
                </aside>

                <div className="absolute top-20 left-32 w-[570px] h-[370px] rounded-br-xl bg-zinc-900 pt-2 pl-1">
                    <ul>
                        <li className={filesStyle}>awesomeImg</li>
                        <li className={filesStyle}>history</li>
                        <li className={filesStyle}>planet earth</li>
                    </ul>
                </div>
                </main>
            </Draggable>
        )
    );
}

export default Folder;