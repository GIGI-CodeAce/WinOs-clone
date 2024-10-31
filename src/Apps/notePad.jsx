import { useRef, useState } from 'react';
import Drag from "../Tools/draggableTop";
import Draggable from '../Tools/draggableTop';

function Notes() {
    const sectionRef = useRef(null);
    const handleRef = useRef(null);
    const [isShowing, setIsShowing] = useState(true);


    const Close = () => {
        setIsShowing(false);
    };

    return (
        isShowing && (
        <main
            ref={sectionRef}
            className="absolute w-[400px] h-[350px] bg-slate-300 rounded-xl mt-11 ml-[444px]"
            style={{ position: "absolute", top: "0", left: "0" }}
        >
            <Draggable onClose={Close} ref={handleRef} />
            <div ref={handleRef} className="cursor-pointer text-gray-600 pl-2 select-none">
                Untitled(1) • Untitled •
            </div>
            <textarea
                placeholder="Type here"
                className="w-full p-2 min-h-[350px] max-h-[500px] h-[320px] rounded-b-xl"
            ></textarea>
        </main>)
    );
}

export default Notes;