import { useState } from "react";

export default function UserForm() {

    const [user, setUser] = useState({ name: '', age: '', email: '' });

    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    }

    function handleReset() {
        setUser({name : "",age : "", email : ""});
    }

    return (
        <div>
            <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="enter name..."
            />
            <input
                type="number"
                name="age"
                value={user.age}
                onChange={handleChange}
                placeholder="enter age..."
            />
            <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="enter your mail..."
            />
            <h1>Name : {user.name}, Age : {user.age}</h1>
            <h1>email : {user.email}</h1>
            <button onClick={handleReset}>reset</button>
        </div>
    );

}