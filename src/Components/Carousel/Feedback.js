import React from 'react';

import FeedbackPhoto1 from '../../Resources/feedbackfoto1.jpg';
import FeedbackPhoto2 from '../../Resources/feedbackfoto2.jpg';
import FeedbackPhoto3 from '../../Resources/feedbackfoto3.jpg';
import FeedbackPhoto4 from '../../Resources/feedbackfoto4.jpg';
import FeedbackPhoto5 from '../../Resources/feedbackfoto5.jpg';

const Feedback = () => {
	return(
		<div id='carouselFeedback' className='carousel slide border border-dark bg-dark text-white' data-ride='carousel'>
			<div className='carousel-inner'>
				<div className='carousel-item active'>
					<div className='container'>
						<div className='row justify-content-between'>
							<div className='col-2 p-4'>
								<img className='border rounded-circle' src={FeedbackPhoto1} alt='name' width='200' height='200'/>
							</div>
							<div className='col-8 pt-3'>
								<h4>Arthur Gomes</h4>
								<ul className='list-unstyled'>
									<li><em>Aluno/Desenvolvedor Web</em></li>
									<li>Muito doido esse site aqui, rapaz do céu</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className='carousel-item'>
					<div className='container'>
						<div className='row justify-content-between'>
							<div className='col-2 p-4'>
								<img className='border rounded-circle' src={FeedbackPhoto3} alt='name' width='200' height='200'/>
							</div>
							<div className='col-8 pt-3'>
								<h4>Carlos Augusto de Souza</h4>
								<ul className='list-unstyled'>
									<li><em>Aluno</em></li>
									<li>Esse é o lugar onde consegui evoluir na guitarra🎸, metodologia, ambiente agradável, professores atenciosos e com uma excelente didática! Podem ir na fé, pois aqui se aprende música!</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className='carousel-item'>
					<div className='container'>
						<div className='row justify-content-between'>
							<div className='col-2 p-4'>
								<img className='border rounded-circle' src={FeedbackPhoto2} alt='name' width='200' height='200'/>
							</div>
							<div className='col-8 pt-3'>
								<h4>Vanessa Castro</h4>
								<ul className='list-unstyled'>
									<li><em>Aluna</em></li>
									<li>Feliz em fazer parte da GB Academia, só tenho que agradecer, toda paciência e dedicação de todos. ❤</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className='carousel-item'>
					<div className='container'>
						<div className='row justify-content-between'>
							<div className='col-2 p-4'>
								<img className='border rounded-circle' src={FeedbackPhoto4} alt='name' width='200' height='200'/>
							</div>
							<div className='col-8 pt-3'>
								<h4>Lela Metzner</h4>
								<ul className='list-unstyled'>
									<li><em>Aluna</em></li>
									<li>Ótimo professor! Didático, paciente, dedicado à profissão que escolheu.</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className='carousel-item'>
					<div className='container'>
						<div className='row justify-content-between'>
							<div className='col-2 p-4'>
								<img className='border rounded-circle' src={FeedbackPhoto5} alt='name' width='200' height='200'/>
							</div>
							<div className='col-8 pt-3'>
								<h4>Luciano Barbosa</h4>
								<ul className='list-unstyled'>
									<li><em>Aluno</em></li>
									<li>O melhor professor da região! Tenho orgulho em sempre dizer que fui e sou seu aluno pra sempre Glauber! Sucesso!</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<a className='carousel-control-prev' href='#carouselFeedback' role='button' data-slide='prev'>
				<span className='carousel-control-prev-icon' aria-hidden='true'></span>
				<span className='sr-only'>Previous</span>
			</a>
			<a className='carousel-control-next' href='#carouselFeedback' role='button' data-slide='next'>
				<span className='carousel-control-next-icon' aria-hidden='true'></span>
				<span className='sr-only'>Next</span>
			</a>
		</div>
	)
}

export default Feedback;