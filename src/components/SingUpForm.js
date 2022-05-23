import React from 'react';
import './loginForm.css'
import logo from "./logo.png"
const SingUpForm = () => {
    return (
        <div class="container">
            <div class="box">
                <img src={logo} alt="Logo" />
                <input type="text" class="input-text" placeholder="E-mail"></input>
                <input type="text" class="input-text" placeholder="Senha"></input>
                <input type="text" class="input-text" placeholder="Repita sua Senha"></input>
                <input type="text" class="input-text" placeholder="Nome de Usuário"></input>
                <div className='botoes'>
                    <button type="button" onclick="window.location.href = 'areadetrabalho.html'">Cancel</button>
                    <button type="button" onclick="window.location.href = 'singup.html'">Register</button>
                </div>
            </div>
        </div>
    );
};

export default SingUpForm;
