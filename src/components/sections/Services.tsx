import ButtonUno from '../miUi/ButtonUno';
import clases from '../../assets/clases-particulares.jpg';
import alquiler from '../../assets/alugel.jpg';
import fotos from '../../assets/fotos y videos.jpg';
import yoga from '../../assets/supyoga1.jpg';
import { useTranslation } from 'react-i18next';

function Services() {
	const { t } = useTranslation();

	const cards = [
		{ img: clases, title: t('services.lessons_title'), price: '', extra: '' },
		{ img: alquiler, title: t('services.rental_title'), price: '', extra: t('services.rental_extra') },
		{
			img: fotos,
			title: t('services.photos_title'),
			price: '',
			extra: t('services.photos_extra'),
		},
		{ img: yoga, title: t('services.yoga_title'), price: '+ Info', extra: t('services.yoga_extra') },
	];

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
