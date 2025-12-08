import uno from '@/assets/h1-img-33.png';
import dos from '@/assets/h1-img-34.png';
import tres from '@/assets/h1-img-37.png';
import cuatro from '@/assets/h1-img-36.png';
import { useTranslation } from 'react-i18next';

function Levels() {
	const phone = '5512996049078';
	const message =
		'Olá! Estou interessado(a) nas aulas de surf avançado. Pode me informar sobre horários e valores para aulas individuais ou em grupo?';
	const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

	const { t } = useTranslation();

	const info = [
		{
			titulo: t('levels.beginner_title'),
			text: t('levels.beginner_text'),
			img: uno,
		},
		{
			titulo: t('levels.intermediate_title'),
			text: t('levels.intermediate_text'),
			img: dos,
		},
		{
			titulo: t('levels.advanced_title'),
			text: t('levels.advanced_text'),
			additionalText: t('levels.advanced_extra'),
			img: tres,
		},
		{
			titulo: t('levels.pro_title'),
			text: t('levels.pro_text'),
			img: cuatro,
		},
	];

	return (
		<div id="niveis" className="scroll-mt-[15vh] flex flex-col justify-center items-center gap-4">
			<h2 className="text-3xl text-center text-negro md:text-[40px] uppercase tracking-[.08em]">{t('levels.title')}</h2>

			<p className="text-center text-[19px] text-gris leading-relaxed">{t('levels.description')}</p>

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
