import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from "./logo.png"

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};

	return (
		<nav className="navbar">
			<Link to="/" className="nav-logo">
				<img src={logo} alt="Logo" />
			</Link>
			<div onClick={handleClick} className="nav-icon">
				{open ? <FiX /> : <FiMenu />}
			</div>
			<ul className={open ? 'nav-links active' : 'nav-links'}>
				<li className="nav-item">
					<Link to="/" className="nav-link" onClick={closeMenu}>
						Home
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/Area" className="nav-link" onClick={closeMenu}>
						Área de Trabalho
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/Projeto" className="nav-link" onClick={closeMenu}>
						Projeto
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/Notificações" className="nav-link" onClick={closeMenu}>
						Notificações
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
