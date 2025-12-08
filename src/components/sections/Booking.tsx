import { useTranslation } from 'react-i18next';
import MyCalendar from '../miUi/MyCalendar';

function Booking() {
	const { t } = useTranslation();

	return (
		<div id="agendar" className="scroll-mt-[15vh] flex flex-col lg:flex-row items-start gap-16 lg:gap-20">
			<div className="w-full lg:w-1/2 flex flex-col items-start gap-4 order-1 lg:order-1">
				<h2 className="text-3xl text-negro md:text-[40px] uppercase tracking-[.08em]">{t('booking.title')}</h2>

				<p className="text-[19px] text-gris leading-relaxed">{t('booking.paragraph1')}</p>

				<p className="text-[19px] text-gris leading-relaxed">{t('booking.paragraph2')}</p>

				<span className="text-negro font-semibold text-base">{t('booking.callToAction')}</span>
			</div>

			{/* CALENDARIO */}
			<div className="w-full lg:w-1/2 flex flex-col items-center gap-4 order-2 lg:order-2">
				<MyCalendar />
			</div>
		</div>
	);
}

export default Booking;
