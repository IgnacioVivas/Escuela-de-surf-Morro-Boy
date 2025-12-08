import { useTranslation } from 'react-i18next';
import ButtonDos from '../miUi/ButtonDos';
import imgCollage from '@/assets/collage.png';

function AllAges() {
	const { t } = useTranslation();
	const phone = '5512996049078';
	const message = 'Olá! Gostaria de saber sobre o desconto familiar para aulas de surf.';

	const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

	return (
		<div className="flex flex-col md:flex-row items-center gap-16">
			<div className="relative w-full lg:w-1/2 flex justify-center">
				<img src={imgCollage} alt="collage de fotos" />
			</div>

			<div id="familias" className="scroll-mt-[15vh] w-full lg:w-1/2 flex flex-col gap-4">
				<h2 className="text-3xl text-negro md:text-[40px] uppercase tracking-widest">{t('ages.title')}</h2>

				<p className="text-gris text-[19px] leading-relaxed">{t('ages.p1')}</p>

				<p className="text-[17px] font-source text-gris leading-relaxed">{t('ages.p2')}</p>

				<span className="text-negro font-semibold text-base">{t('ages.tagline')}</span>

				<ButtonDos className="w-full py-6 md:py-5 md:w-fit">
					<a href={url} target="_blank">
						{t('ages.button1')} <br className="md:hidden" />
						{t('ages.button2')}
					</a>
				</ButtonDos>
			</div>
		</div>
	);
}

export default AllAges;
