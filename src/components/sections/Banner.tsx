import banner from '@/assets/playa.png';
import ButtonUno from '../miUi/ButtonUno';
import waves from '@/assets/waves-small.png';
import { useTranslation } from 'react-i18next';

function Banner() {
	const { t } = useTranslation();
	const phone = '5512996049078';
	const message = 'Olá! Quero começar as aulas de surf. Pode me passar mais informações?';

	const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

	return (
		<div className="relative flex justify-center items-center ">
			<img className="brightness-50 min-h-[500px] object-cover" src={banner} alt="playa" />
			<div className="px-12 md:px-[60px] absolute text-white flex flex-col justify-center items-center gap-6 xl:gap-10">
				<img className="w-20" src={waves} alt="waves" />
				<h2 className="text-3xl text-center font-bold md:text-[40px] uppercase tracking-widest">
					{t('hero.title1')} <br /> {t('hero.title2')}
				</h2>
				<p className="text-[19px] text-center leading-relaxed">{t('hero.text')}</p>
				<ButtonUno>
					<a href={url} target="_blank">
						{t('hero.button')}
					</a>
				</ButtonUno>
			</div>
		</div>
	);
}

export default Banner;
