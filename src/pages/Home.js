import React from 'react';
/*import Navbar from './../components/Navbar';*/
import { Link } from 'react-router-dom';
import './defalt.css';
import './home.css'
import logo from "./../components/logo_transparent.png"
const Home = () => {
    return (
        <div>
            <div className="background">
                <p className='text'>
                    <img src={logo} alt="Logo" />
                    <p>Gerenciar sua equipe está se tornando complexo?</p>
                    <p>Conte conosco.</p>
                    <div className='group_link'>
                        <Link className='link' to="/SingUp">Cadastrar</Link>
                        <Link className='link' to="/Login">Entrar</Link>

                    </div>
                </p>
            </div>
        </div>
    )

}

export default Home;
