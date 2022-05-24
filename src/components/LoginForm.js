import React from 'react';
import { useState } from "react";
import './loginForm.css'
import logo from "./logo.png"
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { auth } from "./firebase-config";

const LoginForm = () => {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <div class="container">
            <div class="box">
                <img src={logo} alt="Logo" />
                <input type="text" class="input-text" placeholder="E-mail" onChange={(event) => {
                    setLoginEmail(event.target.value);
                }} />
                <input type="text" class="input-text" placeholder="Senha" onChange={(event) => {
                    setLoginPassword(event.target.value);
                }} />
                <div className='botoes'>
                    <button type="button" onClick={login}>Login</button>
                    <button type="button">Help</button>
                    <button type="button" onclick="window.location.href = 'singup.html'">SingUp</button>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
