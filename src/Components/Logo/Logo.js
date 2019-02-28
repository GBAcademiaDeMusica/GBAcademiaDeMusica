import React from 'react';
import GBLogo from './gbacademia_logo.jpeg';

import './Logo.css';

const Logo = () => {
	return(
		<div className='logoDiv'>
			<img className='logo' src={GBLogo} alt='gblogo' width='400' height='auto'/>
		</div>
	)
}

export default Logo;