import imgDos from '@/assets/trayectoria-2.jpg';
import imgUno from '@/assets/morro-1.webp';
import { useTranslation } from 'react-i18next';

function Experience() {
	const { t } = useTranslation();
	return (
		<div className="flex flex-col-reverse md:flex-row justify-center items-center gap-16 lg:gap-20">
			<div id="experiencia" className="md:w-1/2 scroll-mt-[15vh]">
				<h2 className="text-3xl text-negro md:text-[40px] uppercase tracking-widest mb-4">{t('experience.title')}</h2>

				<p className="text-[19px] text-gris leading-relaxed mb-3.5">{t('experience.p1')}</p>

				<p className="text-[17px] font-source text-gris leading-relaxed">{t('experience.p2')}</p>
			</div>
			<div className="flex flex-col gap-3 w-full lg:flex-row md:w-1/2">
				<img src={imgUno} alt="morro surfeando" className="w-full lg:w-[40%] object-cover" />
				<img src={imgDos} alt="morro surfeando" className="w-full lg:w-[60%] object-cover" />
			</div>
		</div>
	);
}

export default Experience;
