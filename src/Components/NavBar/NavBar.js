import React from 'react';

import GBLogo from '../../Resources/gbacademia_logo.jpeg';

import './NavBar.css';

const NavBar = () => {
	return (
		<nav className='navbar navbar-expand-lg sticky-top' style={{ backgroundColor: 'black' }}>
			<a className='navbar-brand' href='#'>
				<img src={GBLogo} alt='gb_logo' width='70' height='70' className='rounded-circle'/>
			</a>
			<button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbrSupportedContent' 
					aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
				<span className='navbar-toggler-icon'></span>
			</button>

			<div className='collapse navbar-collapse' id='navbarSupportedContent'>
				<ul className='navbar-nav mr-auto ml-auto'>
					<li className='nav-item'><a className='nav-link main-navigation' href='#'>Sobre</a></li>
					<li className='nav-item'><a className='nav-link main-navigation' href='#'>Cursos</a></li>
					<li className='nav-item'><a className='nav-link main-navigation' href='#'>Eventos</a></li>
					<li className='nav-item'><a className='nav-link main-navigation' href='#'>Depoimentos</a></li>
					<li className='nav-item'><a className='nav-link main-navigation' href='#'>Contato</a></li>
					<li className='nav-item'><a className='nav-link main-navigation' href='#'>Localização</a></li>
					<li className='nav-item'><a className='nav-link main-navigation' href='#'>Galeria</a></li>
				</ul>

				<ul className='navbar-nav ml-3'>
					<li className='nav-item pt-2'>
						<span>Telefone</span>
					</li>
					<li className='nav-item mr-4 ml-4 socialIcon'>
						<a href='https://www.facebook.com/gbacademiademusica/'>
							<i className='fab fa-facebook' style={{ color: 'white' }}></i>
						</a>
					</li>
					<li className='nav-item socialIcon'>
						<a href='https://www.instagram.com/explore/locations/1649174931789574/brazil/sao-paulo-brazil/gb-academia-de-musica/'>
							<i className='fab fa-instagram' style={{ color: 'white' }}></i>
						</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default NavBar;
