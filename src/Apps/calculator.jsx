import { useRef, useState } from "react";
import Draggable from "../Tools/draggableTop";
import Drag from "../Tools/dragTool";

function Calculator() {
    const keysStyle = "m-[2px] select-none cursor-pointer active:bg-gray-700 inline-block bg-gray-600 w-[70px] h-[70px] rounded-[50%] text-center items-center justify-center flex text-2xl";
    const [inputVal, setInputVal] = useState('');
    const [isShowing, setIsShowing] = useState(true);
    const [resultDisplayed, setResultDisplayed] = useState(false);

    const sectionRef = useRef(null);
    const handleRef = useRef(null);

    const handleButtonClick = (value) => {
        if (value === '=') {
            Calculate();
            setResultDisplayed(true);
        } else if (value === 'C') {
            setInputVal('');
            setResultDisplayed(false);
        } else if (value === 'X') {
            setInputVal((oldVal) => oldVal.slice(0, -1));
        } else {
            if (inputVal.slice(-1) === value && ['+', '-', 'x', '÷'].includes(value)) {
                // Prevent consecutive operator input
            } else {
                if (resultDisplayed && !isNaN(value)) {
                    setInputVal(value);
                    setResultDisplayed(false);
                } else {
                    setInputVal((prev) => prev + value);
                    setResultDisplayed(false);
                }
            }
        }
    };

    const Close = () => {
        setIsShowing(false);
    };

    const Calculate = () => {
        let finalResult;
        
        try {
            const result = eval(inputVal.replace(/x/g, '*').replace(/÷/g, '/'));
            finalResult = result.toString();
        } catch (error) {
            finalResult = 'Error';
        }
        setInputVal(finalResult);
    };

    return (
        isShowing && ( 
            <main 
                ref={sectionRef}
                className="absolute text-white bg-black w-[350px] h-[469px] rounded-xl items-center justify-center flex flex-wrap m-11"
                style={{ position: "absolute", top: "0", left: "0" }}
            >
                <Drag handleRef={handleRef} sectionRef={sectionRef} />
                <Draggable onClose={Close} ref={handleRef} />

                <input 
                    className="text-black text-center text-2xl w-[380px] rounded-xl p-2 m-2" 
                    value={inputVal}
                    placeholder="0" 
                    id="display" 
                    readOnly 
                />
                <ul className="items-center justify-center flex flex-wrap p-1">
                    <span className={`${keysStyle} bg-orange-400`} onClick={() => handleButtonClick('C')}>C</span>
                    <span className={`${keysStyle} bg-orange-400`} onClick={() => handleButtonClick('X')}>X</span>
                    <span className={`${keysStyle} bg-orange-400`} onClick={() => handleButtonClick('%')}>%</span>
                    <span className={`${keysStyle} bg-orange-400 text-3xl`} onClick={() => handleButtonClick('÷')}>÷</span>
                    
                    <span className={keysStyle} onClick={() => handleButtonClick('7')}>7</span>
                    <span className={keysStyle} onClick={() => handleButtonClick('8')}>8</span>
                    <span className={keysStyle} onClick={() => handleButtonClick('9')}>9</span>
                    <span className={`${keysStyle} bg-orange-400`} onClick={() => handleButtonClick('x')}>x</span>
                    
                    <span className={keysStyle} onClick={() => handleButtonClick('4')}>4</span>
                    <span className={keysStyle} onClick={() => handleButtonClick('5')}>5</span>
                    <span className={keysStyle} onClick={() => handleButtonClick('6')}>6</span>
                    <span className={`${keysStyle} bg-orange-400`} onClick={() => handleButtonClick('-')}>-</span>
                    
                    <span className={keysStyle} onClick={() => handleButtonClick('1')}>1</span>
                    <span className={keysStyle} onClick={() => handleButtonClick('2')}>2</span>
                    <span className={keysStyle} onClick={() => handleButtonClick('3')}>3</span>
                    <span className={`${keysStyle} bg-orange-400`} onClick={() => handleButtonClick('+')}>+</span>
                    
                    <span className={keysStyle} onClick={() => handleButtonClick('0')}>0</span>
                    <span className={keysStyle} onClick={() => handleButtonClick('=')}>=</span>
                </ul>
            </main>
        )
    );
}

export default Calculator;
