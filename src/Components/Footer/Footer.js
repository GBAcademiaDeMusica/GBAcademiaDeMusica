import React from 'react';

import './Footer.css';

const Footer = () => {
	return(
		<div className='footer'>
			<hr/>
			<p className='followUs'>Nos siga nas redes sociais!</p>
			
			<ul className='socialIcons'>
				<li className='facebook'>
					<a href='https://www.facebook.com/gbacademiademusica/'>
						<i className='fab fa-facebook'><span>www.facebook.com/gbacademiademusica</span></i>
					</a>
				</li>
				<li className='instagram'>
					<a href='https://www.instagram.com/explore/locations/1649174931789574/brazil/sao-paulo-brazil/gb-academia-de-musica/'>
						<i className='fab fa-instagram'><span>@gbacademiademusica</span></i>
					</a>
				</li>
			</ul>
		</div>
	)
}

export default Footer;