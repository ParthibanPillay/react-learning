import { useState } from "react"

export default function VisibilityToggle() {

    const [visible, setVisible ] = useState(true);

    function handleVisible() {
            setVisible(!visible);
    }

    return (
        <div className="flex gap-4">
            {visible ? <h1>this text is visible</h1> : null}
            <button onClick={handleVisible}>{visible ? "hide" : "show"} text</button>
        </div>
    );
};