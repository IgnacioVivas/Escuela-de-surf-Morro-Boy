import ButtonUno from '../miUi/ButtonUno';
import clases from '../../assets/clases-particulares.jpg';
import alquiler from '../../assets/alugel.jpg';
import fotos from '../../assets/fotos y videos.jpg';
import yoga from '../../assets/supyoga1.jpg';

const cards = [
	{ img: clases, title: 'Aulas personalizadas de surf', price: '', extra: '' },
	{ img: alquiler, title: 'Aluguel de pranchas de surf', price: '', extra: '(Por hora ou por diária)' },
	{
		img: fotos,
		title: 'Fotos e vídeos',
		price: '',
		extra: '(Consulta por vídeo análise para maximizar a sua evolução)',
	},
	{ img: yoga, title: 'Aulas de SupYoga', price: '+ Info', extra: '(2HS.)' },
];

function Services() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
			{cards.map((card, index) => (
				<div key={index} className="relative h-80 overflow-hidden group">
					{/* Background con zoom */}
					<div
						className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
						style={{ backgroundImage: `url(${card.img})` }}
					/>

					{/* Contenido */}
					<div className="h-80 relative z-10 p-[50px] md:p-6 xl:px-4 xl:py-9 flex flex-col items-start justify-center gap-6">
						<h2 className="text-white text-3xl md:text-4xl uppercase font-medium tracking-wider leading-[1.14em]">
							{card.title}
						</h2>

						{card.price && (
							<a href="#yoga">
								<ButtonUno className="text-[22px] font-bold tracking-widest">{card.price}</ButtonUno>
							</a>
						)}

						<span className="text-sm font-medium uppercase text-white">{card.extra}</span>
					</div>

					{/* Overlay oscuro */}
					<div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-500"></div>
				</div>
			))}
		</div>
	);
}

export default Services;
