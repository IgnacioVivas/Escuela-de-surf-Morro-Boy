import bannerMobile from '@/assets/tour/b-sexto.jpg';
import bannerDesktop from '@/assets/tour/b-cuatro.jpg';

import ButtonUno from '../miUi/ButtonUno';
import waves from '@/assets/waves-small.png';

function Tour() {
	const phone = '5512996049078';
	const message =
		'Olá! Tenho interesse na experiência de surf e nos tours para diferentes picos e praias virgens. Pode me enviar mais informações, por favor?';

	const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

	return (
		<div className="relative flex justify-center items-center">
			{/* Mobile */}
			<img className="lg:hidden brightness-50 object-cover" src={bannerMobile} alt="playa" />

			{/* Desktop con PARALLAX */}
			<div
				className="hidden lg:block brightness-50 bg-fixed bg-center bg-cover h-[500px] w-full"
				style={{ backgroundImage: `url(${bannerDesktop})` }}
			></div>

			<div className="px-12 md:px-[60px] absolute text-white flex flex-col justify-center items-center gap-6 xl:gap-10">
				<img className="w-20" src={waves} alt="waves" />
				<h2 className="text-3xl text-center font-bold md:text-[40px] uppercase tracking-widest">
					Experiência de Surf <br /> em Locais Exclusivos
				</h2>
				<p className="text-[19px] text-center leading-relaxed">
					Viva uma jornada de surf completa, explorando diferentes picos de surfing e praias mais virgens da região. Às
					vezes organizamos grupos para fazer um tour de surf, visitando ilhas e outros picos especiais, perfeitos para
					quem quer conhecer novos lugares e evoluir no surf.
				</p>

				<ButtonUno>
					<a href={url} target="_blank">
						Quero saber mais
					</a>
				</ButtonUno>
			</div>
		</div>
	);
}

export default Tour;
