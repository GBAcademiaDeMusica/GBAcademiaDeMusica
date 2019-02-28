import React from 'react';

import GBLogo from '../../Resources/gbacademia_logo.jpeg';
import GBPhoto1 from '../../Resources/gbfoto1.jpg';
import GBPhoto2 from '../../Resources/gbfoto2.jpg';
import GBPhoto3 from '../../Resources/gbfoto3.jpg';
import GBPhoto4 from '../../Resources/gbfoto4.jpg';

import './CarouselInfo.css';


const CarouselInfo = () => {
	return(
		<div id='carouselInfo' className='carousel slide' data-ride='carousel'>
			<div className='carousel-inner'>
				<div className='carousel-item active'>
					<img src={GBLogo} alt='gblogo' className='d-block w-100 item'/>
					<div className='carousel-caption d-none d-md-block'>
						<h5>GB Academia de Música</h5>
						<p>Matricule-se já!</p>
					</div>
				</div>
				<div className='carousel-item'>
					<img src={GBPhoto1} className='d-block w-100 item' alt='photo'/>
				</div>
				<div className='carousel-item'>
					<img src={GBPhoto2} className='d-block w-100 item' alt='photo'/>
				</div>
				<div className='carousel-item'>
					<img src={GBPhoto3} className='d-block w-100 item' alt='photo'/>
				</div>
				<div className='carousel-item'>
					<img src={GBPhoto4} className='d-block w-100 item' alt='photo'/>
				</div>
			</div>
			<a className='carousel-control-prev' href='#carouselInfo' role='button' data-slide='prev'>
				<span className='carousel-control-prev-icon' aria-hidden='true'></span>
				<span className='sr-only'>Previous</span>
			</a>
			<a className='carousel-control-next' href='#carouselInfo' role='button' data-slide='next'>
				<span className='carousel-control-next-icon' aria-hidden='true'></span>
				<span className='sr-only'>Next</span>
			</a>
		</div>
	)
}

export default CarouselInfo;