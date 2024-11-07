import Draggable from "../Tools/draggableTop";
import React, {useState} from "react";

function Chrome(){

    const [isShowing, setIsShowing] = useState(true);

    const close = () => {
        setIsShowing(false);
    };

    return(
        isShowing && (
<Draggable onClose={close}>
    <main className="w-[650px] h-[450px] bg-zinc-800 rounded-b-xl flex items-center justify-center">
        <div className="w-[400px] flex flex-col items-center justify-center space-y-4">
            <h1 className="text-center text-5xl text-white font-bold tracking-widest">
                Google
            </h1>
            <input
                className="w-full p-2 text-black rounded-3xl"
                type="text"
                placeholder="Search"
            />
        </div>
    </main>
</Draggable>

        )
    )
}

export default Chrome;