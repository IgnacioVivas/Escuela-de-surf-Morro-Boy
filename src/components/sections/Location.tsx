import mapa from '@/assets/mapa.png';
import { useTranslation } from 'react-i18next';

function Location() {
	const { t } = useTranslation();
	return (
		<div className="flex flex-col md:flex-row items-center justify-center gap-16 lg:gap-20">
			<div className="w-full md:w-1/2 lg:w-fit">
				<img src={mapa} alt="mapa de las playas de ubatuba" className="w-full max-w-lg" />
			</div>
			<div id="locais" className="md:w-1/2 lg:w-fit scroll-mt-[15vh]">
				<h2 className="text-3xl text-negro md:text-[40px] uppercase tracking-widest mb-4">{t('locations.title')}</h2>

				<p className="text-[19px] text-gris leading-relaxed">{t('locations.text')}</p>

				<div className="hidden xl:flex flex-col gap-2 mt-4 text-sm text-negro font-medium uppercase">
					<span>Itamambuca</span>
					<span>Vermelha do Norte</span>
					<span>Pereque-Acu</span>
					<span>Prai Grande</span>
					<span>Fazenda</span>
				</div>
			</div>
		</div>
	);
}

export default Location;
