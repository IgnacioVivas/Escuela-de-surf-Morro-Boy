import ButtonDos from '../miUi/ButtonDos';
import imgCollage from '@/assets/collage.png';

function AllAges() {
	const phone = '5512996049078';
	const message = 'Olá! Gostaria de saber sobre o desconto familiar para aulas de surf.';

	const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

	return (
		<div id="familias" className="scroll-mt-[15vh] flex flex-col md:flex-row items-center gap-16">
			<div className="relative w-full lg:w-1/2 flex justify-center">
				<img src={imgCollage} alt="collage de fotos" />
			</div>

			<div className="w-full lg:w-1/2 flex flex-col gap-4">
				<h2 className="text-3xl text-negro md:text-[40px] uppercase tracking-widest">Surf para todas as idades</h2>

				<p className="text-gris text-[19px] leading-relaxed">A partir dos 4 anos, todos podem entrar no mar.</p>

				<p className="text-[17px] font-source text-gris leading-relaxed">
					Na nossa escola, o surf é para todo mundo — crianças, adolescentes, adultos iniciantes e famílias inteiras. As
					aulas são divertidas, seguras e adaptadas ao ritmo e à confiança de cada aluno.
				</p>

				<span className="text-negro font-semibold text-base">Surf é conexão, alegria e memória para a vida toda.</span>

				<ButtonDos className="w-full py-6 md:py-5 md:w-fit">
					<a href={url} target="_blank">
						Quero desconto <br className="md:hidden" />
						familiar
					</a>
				</ButtonDos>
			</div>
		</div>
	);
}

export default AllAges;
