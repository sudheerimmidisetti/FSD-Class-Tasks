import React from "react";
import { useState, useEffect } from "react";

const Login = () => {
    const data = [
        {
            "name": "Sudheer",
            "password": "2640"
        },
        {
            "name": "Prathap",
            "password": "2080"
        }
    ]

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setisLogin] = useState(false);

    const change = () => {
        data.map(ele => {
            if (ele.name === username && ele.password === password) {
                setisLogin(true);
                // console.log("Login Successful");
            }
        })
    }
    if (isLogin)
        window.location.href = "/home";
    
    return (
        <>
            <input type="text" onChange={(event) => { setUsername(event.target.value) }} />
            <input type="text" onChange={(event) => { setPassword(event.target.value) }} />
            <h1 onChange={change}>Login</h1>
        </>
    )
}