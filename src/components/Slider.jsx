import { SliderComponent } from "./SliderComponent";
import { useState } from "react";

export function Slider() {
    const [inputValue, setInputValue] = useState(0);

    const handelInputChange = (e) => {
        setInputValue(e.target.value);
    }

    let bgColor;
    let textColor;

    if (inputValue < 25) {
        bgColor = 'red';
        textColor = 'blue';
    }

    if (inputValue > 25 && inputValue < 50) {
        bgColor = 'green';
        textColor = 'white';
    }

    if (inputValue > 50) {
        bgColor = 'purple';
        textColor = 'red';
    }

    if (inputValue > 75) {
        bgColor = 'orange';
        textColor = 'black';
    }

    return (
        <>
            <SliderComponent inputValue={inputValue} handelInputChange={handelInputChange} bgColor={bgColor} textColor={textColor} />
        </>
    )
}