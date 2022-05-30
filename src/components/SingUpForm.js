import React from 'react';
import { useRef } from 'react'
import './loginForm.css'
import logo from "./logo.png"
import { singup } from './firebase-config';
const SingUpForm = () => {
    const emailRef = useRef();
    const passwordRef = useRef();

    async function handleSingup() {
        try {
            await singup(emailRef.current.value, passwordRef.current.value);
            alert('registred')
        } catch {
            alert('Something wrong was happened')
        }
        window.location = "/login"
    }
    return (
        <div className="container">
            <div className="box">
                <img src={logo} alt="Logo" />
                <input ref={emailRef} type="text" className="input-text" placeholder="E-mail"></input>
                <input ref={passwordRef} type="password" className="input-text" placeholder="Senha"></input>
                <div className='botoes'>
                    <button type="button" onClick="window.location.href = './'">Cancel</button>
                    <button type="button" onClick={handleSingup}>Register</button>
                </div>
            </div>
        </div>
    );
};

export default SingUpForm;