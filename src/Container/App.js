import React, { Component } from 'react';

import NavBar from '../Components/NavBar/NavBar';
import CarouselInfo from '../Components/Carousel/CarouselInfo';
import Instruments from '../Components/Instruments/Instruments';
import Feedback from '../Components/Carousel/Feedback';
import Footer from '../Components/Footer/Footer';
import Localization from '../Components/Localization/Localization';

import './App.css';

class App extends Component {

	constructor() {
		super();
		this.state = {
			route: 'home',
			carousel: 'first'
		}
	}

	onRouteChange = (route) => {
		this.setState({ route: route });
	}

	render() {
		const { route } = this.state;

		return(
			<div>
				<NavBar/>
				<div className='container-fluid'>
					<div className='row'>
						<div className='col'>
							<CarouselInfo />
						</div>
					</div>
					<div className='row mt-5 p-3'>
						<div className='col'>
							<h1 className='mb-3 mt-5'><strong>Cursos</strong></h1>
							<Instruments />
						</div>
					</div>
					<div className='row mt-5 p-3'>
						<div className='col'>
							<h1 className='mb-3 mt-5'><strong>Depoimentos</strong></h1>
							<Feedback />
						</div>
					</div>
					<div className='row mt-5 p-3'>
						<div className='col'>
							<h1 className='mb-3 mt-5'><strong>Localização</strong></h1>
							<p><em>Rua Guira, n. 327</em></p>
							<Localization />
						</div>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}

export default App;