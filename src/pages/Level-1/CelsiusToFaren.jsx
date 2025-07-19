import { useState } from "react"

export default function CelsiusToFaren() {

    // celsius to farenheit formula : (c*9/5) + 32

    const [input, setInput] = useState("");

    const [celsius, setCelsius] = useState(null);

    return (
        <div className="grid gap-5">
            <h1>celsius to farenheit converter</h1>
            <div className="flex items-center justify-center gap-3">
                <input
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value),
                        setCelsius((e.target.value * 9 / 5) + 32)
                    }}
                    type="text"
                    placeholder="enter celsius..."
                    className="p-4 border-white"
                />
            </div>
            <p>celsius : ({input} x 9/5) + 32 = {celsius}</p>
        </div>
    )
}