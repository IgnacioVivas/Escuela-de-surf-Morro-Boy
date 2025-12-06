import uno from '@/assets/h1-img-33.png';
import dos from '@/assets/h1-img-34.png';
import tres from '@/assets/h1-img-37.png';
import cuatro from '@/assets/h1-img-36.png';
// import { useTranslation } from 'react-i18next';

const info = [
	{
		titulo: 'Novo no mar?',
		text: 'Aprenda do zero com segurança. Técnicas básicas, postura, primeira onda e leitura do mar explicados de forma simples e acolhedora.',
		img: uno,
	},
	{
		titulo: 'Surfista intermediário',
		text: 'Aprenda a virar, remar melhor e escolher as ondas certas. Evolução consistente com correções personalizadas e prática guiada.',
		img: dos,
	},
	{
		titulo: 'Nível avançado',
		text: 'Treinos focados en performance e leitura avançada das condiçones.',
		additionalText: 'Consulte por aula individual ou em grupo (até 5 pessoas).',
		img: tres,
	},
	{
		titulo: 'Surf em nível profissional',
		text: 'Treinamento técnico e estratégico para quem busca alta performance. Aulas intensivas, análise detalhada e foco total na progressão.',
		img: cuatro,
	},
];

function Levels() {
	const phone = '5512996049078';
	const message =
		'Olá! Estou interessado(a) nas aulas de surf avançado. Pode me informar sobre horários e valores para aulas individuais ou em grupo?';
	const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

	// const { t } = useTranslation();

	return (
		<div id="niveis" className="scroll-mt-[15vh] flex flex-col justify-center items-center gap-4">
			<h2 className="text-3xl text-center text-negro md:text-[40px] uppercase tracking-[.08em]">
				Surf para todos os níveis
			</h2>

			<p className="text-center text-[19px] text-gris leading-relaxed">
				Do primeiro contato com o mar às manobras avançadas, nossas aulas são pensadas para cada etapa da sua evolução
				no surf — com segurança, técnica e muita diversão.
			</p>

			<div className="w-full mt-8 grid justify-center items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-16">
				{info.map((x, index) => (
					<div key={index} className="flex flex-col justify-center items-center">
						<img
							className={index === 2 ? 'w-4/5 max-w-[250px]' : ''}
							src={x.img}
							alt="Surf lessons for beginners in Itamambuca, Ubatuba"
						/>
						<h4 className="text-negro mt-3 font-semibold uppercase text-base text-center tracking-widest">
							{x.titulo}
						</h4>
						<span className="text-center text-gris font-source mt-2">{x.text}</span>
						{index === 2 && x.additionalText && (
							<>
								{' '}
								<a
									href={whatsappUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="underline-offset-3 text-center text-naranja hover:text-celeste underline transition-colors duration-300"
								>
									{x.additionalText}
								</a>
							</>
						)}
					</div>
				))}
			</div>
		</div>
	);
}

export default Levels;
