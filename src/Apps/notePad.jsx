import { useState } from 'react';
import Draggable from '../Tools/draggableTop';

function Notes() {
    const [isShowing, setIsShowing] = useState(true);

    const close = () => {
        setIsShowing(false);
    };

    return (
        isShowing && (
                <Draggable onClose={close}>
                    <main className="w-[400px] h-[400px] bg-zinc-800 rounded-b-xl">
                        <div className="cursor-pointer text-gray-600 pl-2 select-none">
                            Untitled(1) • Untitled •
                        </div>
                        <textarea
                            placeholder="Type here"
                            className="w-full bg-zinc-900 text-white p-2 min-h-[400px] max-h-[500px] h-[320px] rounded-b-xl"
                        ></textarea>
                    </main>
                </Draggable>
        )
    );
}

export default Notes;
