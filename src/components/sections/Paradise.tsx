import paradise from '@/assets/paraiso.jpg';
import { MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function Paradise() {
	const { t } = useTranslation();

	return (
		<div
			id="paraiso"
			className="scroll-mt-[15vh] flex flex-col md:flex-row items-center justify-center gap-16 lg:gap-20"
		>
			<div>
				<img src={paradise} alt="" />
			</div>
			<div>
				<h2 className="text-3xl text-negro md:text-[40px] uppercase tracking-[.08em] mb-1">
					{t('paradise.titleParadise')}
				</h2>
				<a
					className="flex items-center gap-1 text-naranja mb-4 hover:text-amarillo"
					href="https://maps.app.goo.gl/MHGEskEDKTHYR6GBA"
					target="_blank"
				>
					<MapPin size={14} /> <span className="text-sm">{t('paradise.location')}</span>
				</a>
				<p className="text-[19px] text-gris leading-relaxed">{t('paradise.textParadise')}</p>
			</div>
		</div>
	);
}

export default Paradise;
