import { Facebook, Instagram, MapPin, Smartphone } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const SocialBar = () => {
	const { t } = useTranslation();
	const phone = '5512996049078';
	const message = 'Olá! Quero começar as aulas de surf. Pode me passar mais informações?';
	const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

	return (
		<div className="hidden bg-white h-[6vh] px-5 md:px-10 border-b-2 border-b-[#F4F4F4] lg:flex justify-between items-center">
			<div className="flex items-center gap-3 font-semibold text-negro">
				<span className="text-xs cursor-default">{t('social.follow_us')}</span>
				<div className="flex items-center gap-2">
					<a href="https://www.instagram.com/morroboyescoladesurf/" target="_blank">
						<Instagram size={14} className="hover:text-celeste" />
					</a>

					<a href="https://www.facebook.com/p/Morro-Boy-Escola-de-Surf-100070004620773/" target="_blank">
						<Facebook size={14} className="hover:text-celeste" />
					</a>
				</div>
			</div>
			<div className="flex items-center gap-4 font-source text-negro text-sm">
				<a
					href={url}
					target="_blank"
					className="flex items-center justify-center gap-1 hover:text-celeste cursor-pointer"
				>
					<Smartphone size={14} />
					<p>+55 12 996049078</p>
				</a>

				<a
					href="https://maps.app.goo.gl/MHGEskEDKTHYR6GBA"
					target="_blank"
					className="flex items-center justify-center gap-1 hover:text-celeste cursor-pointer"
				>
					<MapPin size={14} />
					<p>{t('social.location')}</p>
				</a>

				{/* BUTTON CAMBIAR LENGUAJE - SOLO DESKTOP */}
				<LanguageSwitcher />
			</div>
		</div>
	);
};

export default SocialBar;
