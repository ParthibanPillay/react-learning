import { useState } from "react"

export default function OnOff() {

    const [isOn, setIsOn ] = useState(true);

    const handleOn = () => {
        setIsOn(!isOn);
    }

    return (
        <div className="flex gap-4">
            <button 
            onClick={handleOn}
            >{isOn ? "ON" : "OFF"}</button>
        </div>
    );
};