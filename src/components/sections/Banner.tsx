import banner from '@/assets/playa.png';
import ButtonUno from '../miUi/ButtonUno';
import waves from '@/assets/waves-small.png';

function Banner() {
	const phone = '5512996049078';
	const message = 'Olá! Quero começar as aulas de surf. Pode me passar mais informações?';

	const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

	return (
		<div className="relative flex justify-center items-center ">
			<img className="brightness-50 min-h-[500px] object-cover" src={banner} alt="playa" />
			<div className="px-12 md:px-[60px] absolute text-white flex flex-col justify-center items-center gap-6 xl:gap-10">
				<img className="w-20" src={waves} alt="waves" />
				<h2 className="text-3xl text-center font-bold md:text-[40px] uppercase tracking-widest">
					Quer começar a <br /> surfar agora?
				</h2>
				<p className="text-[19px] text-center leading-relaxed">
					Entre nas águas de Itamambuca! Aproveite um lugar com condições <br /> perfeitas para o surf e instrutores
					profissionais.
				</p>
				<ButtonUno>
					<a href={url} target="_blank">
						Começar agora
					</a>
				</ButtonUno>
			</div>
		</div>
	);
}

export default Banner;
