import React from 'react';
import './loginForm.css'
import logo from "./logo.png"
const LoginForm = () => {
    return (
        <div class="container">
            <div class="box">
                <img src={logo} alt="Logo" />
                <input type="text" class="input-text" placeholder="E-mail"></input>
                <input type="text" class="input-text" placeholder="Senha"></input>
                <div className='botoes'>
                    <button type="button" onclick="window.location.href = 'areadetrabalho.html'">Login</button>
                    <button type="button">Help</button>
                    <button type="button" onclick="window.location.href = 'singup.html'">SingUp</button>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
