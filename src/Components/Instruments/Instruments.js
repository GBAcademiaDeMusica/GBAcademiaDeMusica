import React from 'react';

import Drummer from './drummer.jpg';
import Guitarrist from './guitarrist.jpg';
import Pianist from './pianist.jpg';
import Vocalist from './vocalist.jpg';
import Acoustic from './acoustic.jpg';
import Bass from './bass.jpg';
import Keyboard from './keyboard.jpg';
import Kids from './kids.jpg';

import './Instruments.css';

const Instruments = () => {
	return (
		<div className='row border border-dark shadow p-3 mb-5 text-white rounded bg-dark'>
			<div className='col-3'>
				<div className='nav flex-column nav-pills' id='v-pills-tab' role='tablist' aria-orientation='vertical'>
					<a className='nav-link active' id='v-pills-drum-tab' data-toggle='pill' href='#v-pills-drum' role='tab' aria-controls='v-pills-drum' aria-selected='true'>Bateria</a>
					<a className='nav-link' id='v-pills-guitar-tab' data-toggle='pill' href='#v-pills-guitar' role='tab' aria-controls='v-pills-guitar' aria-selected='false'>Guitarra</a>
					<a className='nav-link' id='v-pills-piano-tab' data-toggle='pill' href='#v-pills-piano' role='tab' aria-controls='v-pills-piano' aria-selected='false'>Piano</a>
					<a className='nav-link' id='v-pills-vocal-tab' data-toggle='pill' href='#v-pills-vocal' role='tab' aria-controls='v-pills-vocal' aria-selected='false'>Canto</a>
					<a className='nav-link' id='v-pills-acoustic-tab' data-toggle='pill' href='#v-pills-acoustic' role='tab' aria-controls='v-pills-acoustic' aria-selected='true'>Violão</a>
					<a className='nav-link' id='v-pills-bass-tab' data-toggle='pill' href='#v-pills-bass' role='tab' aria-controls='v-pills-bass' aria-selected='false'>Contra Baixo</a>
					<a className='nav-link' id='v-pills-keyboard-tab' data-toggle='pill' href='#v-pills-keyboard' role='tab' aria-controls='v-pills-keyboard' aria-selected='false'>Teclado</a>
					<a className='nav-link' id='v-pills-kids-tab' data-toggle='pill' href='#v-pills-kids' role='tab' aria-controls='v-pills-kids' aria-selected='false'>Musicalização Infantil</a>
				</div>
			</div>
			<div className='col-9'>
				<div className='tab-content' id='v-pills-tabContent'>
					<div className='tab-pane fade show active' id='v-pills-drum' role='tabpanel' aria-labelledby='v-pills-drum-tab'>
						<div className='row'>
							<div className='col-6'>
								<img width='650' height='500' src={Drummer} alt='drum'/>
							</div>
							<div className='col-6'>
								Pequena intro de bateria
							</div>
						</div>
					</div>
					<div className='tab-pane fade' id='v-pills-guitar' role='tabpanel' aria-labelledby='v-pills-guitar-tab'>
						<div className='row'>	
							<div className='col-6'>
								<img width='650' height='500' src={Guitarrist} alt='drum'/>
							</div>
							<div className='col-6'>
								Pequena intro de guitarrista
							</div>
						</div>
					</div>
					<div className='tab-pane fade' id='v-pills-piano' role='tabpanel' aria-labelledby='v-pills-piano-tab'>
						<div className='row'>
							<div className='col-6'>
								<img width='650' height='500' src={Pianist} alt='drum'/>
							</div>
							<div className='col-6'>
								Pequena intro de pianista
							</div>
						</div>
					</div>
					<div className='tab-pane fade' id='v-pills-vocal' role='tabpanel' aria-labelledby='v-pills-vocal-tab'>
						<div className='row'>
							<div className='col-6'>
								<img width='650' height='500' src={Vocalist} alt='drum'/>
							</div>
							<div className='col-6'>
								Pequena intro de vocalista
							</div>
						</div>
					</div>
					<div className='tab-pane fade' id='v-pills-acoustic' role='tabpanel' aria-labelledby='v-pills-acoustic-tab'>
						<div className='row'>
							<div className='col-6'>
								<img width='650' height='500' src={Acoustic} alt='drum'/>
							</div>
							<div className='col-6'>
								Pequena intro de violão
							</div>
						</div>
					</div>
					<div className='tab-pane fade' id='v-pills-bass' role='tabpanel' aria-labelledby='v-pills-bass-tab'>
						<div className='row'>
							<div className='col-6'>
								<img width='650' height='500' src={Bass} alt='drum'/>
							</div>
							<div className='col-6'>
								Pequena intro de contrabaixo
							</div>
						</div>
					</div>
					<div className='tab-pane fade' id='v-pills-keyboard' role='tabpanel' aria-labelledby='v-pills-keyboard-tab'>
						<div className='row'>
							<div className='col-6'>
								<img width='650' height='500' src={Keyboard} alt='drum'/>
							</div>
							<div className='col-6'>
								Pequena intro de teclado
							</div>
						</div>
					</div>
					<div className='tab-pane fade' id='v-pills-kids' role='tabpanel' aria-labelledby='v-pills-kids-tab'>
						<div className='row'>
							<div className='col-6'>
								<img width='650' height='500' src={Kids} alt='drum'/>
							</div>
							<div className='col-6'>
								Pequena intro de musicalização infantil
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Instruments;