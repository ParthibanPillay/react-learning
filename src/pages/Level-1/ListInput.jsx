import { useState } from "react"

export default function ListInput() {

    const [input, setInput] = useState("");

    const [todos, setTodo] = useState([]);

    const handleTodo = () => {
        if (!input.trim()) return;
        setTodo([...todos, input]);
        setInput("");
    }

    return (
        <div className="grid gap-5">
            <h1>to-do list input exercise</h1>
            <div className="flex items-center justify-center">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)} //learned from grok
                    type="text"
                    placeholder="enter todo..."
                />
                <button onClick={handleTodo}>add todo</button>
            </div>
            <ul>
                {todos.map((todo, index) => (       /**this is from grok */
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
};