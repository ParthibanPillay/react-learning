import { useState } from "react"

export default function BgChanger() {

    const colors = ['bg-red-200', 'bg-blue-200', 'bg-green-200'];

    const [color, setColor] = useState("bg-purple-200");

    const changeColor = () => {
        const colorIndex = Math.floor(Math.random() * colors.length);
        console.log(colorIndex);
        setColor(colors[colorIndex]);
    };

    return (
        <div className={color}>
            <button onClick={changeColor}>change color</button>
        </div>
    );
};