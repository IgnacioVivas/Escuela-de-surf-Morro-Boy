import { Facebook, Instagram, MapPin, Smartphone, Waves } from 'lucide-react';
import surfer from '@/assets/surfer.png';
import { useTranslation } from 'react-i18next';

function Footer() {
	const { t } = useTranslation();
	const phone = '5512996049078';
	const message = 'Olá! Quero começar as aulas de surf. Pode me passar mais informações?';

	const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

	return (
		<div className="bg-[#0C0C0C]">
			<div className="px-10 xl:px-30 py-28 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
				<div className="flex flex-col gap-4">
					<h1 className="text-white text-3xl font-dafoe tracking-widest font-bold uppercase">
						{t('footer.about_title')}
					</h1>
					<span className="text-[17px] text-[#adadad]">{t('footer.about_text')}</span>
				</div>

				<div className="flex flex-col gap-4 md:col-start-1 md:row-start-2 xl:col-start-2 xl:row-start-1">
					<h3 className="text-white text-lg tracking-widest font-semibold uppercase flex items-center gap-2">
						<Waves className="text-celeste" /> {t('footer.social_title')}
					</h3>
					<div className="flex gap-2">
						<a
							href="https://www.instagram.com/morroboyescoladesurf/"
							target="_blank"
							className="bg-naranja size-10 flex justify-center items-center rounded-full"
						>
							<Instagram color="white" size={25} />
						</a>
						<a
							href="https://www.facebook.com/p/Morro-Boy-Escola-de-Surf-100070004620773/"
							target="_blank"
							className="bg-naranja size-10 flex justify-center items-center rounded-full"
						>
							<Facebook color="white" size={25} />
						</a>
					</div>
				</div>

				<div className="flex flex-col gap-4">
					<h3 className="text-white text-lg tracking-widest font-semibold uppercase flex items-center gap-2">
						<Waves className="text-celeste" /> {t('footer.contact_title')}
					</h3>
					<div className="flex flex-col items-start gap-2 font-source text-[#adadad] text-base">
						<a
							href={url}
							target="_blank"
							className="flex items-center justify-center gap-1 hover:text-celeste cursor-pointer"
						>
							<Smartphone color="white" size={14} />
							<p>+55 12 996049078</p>
						</a>

						<a
							href="https://maps.app.goo.gl/MHGEskEDKTHYR6GBA"
							target="_blank"
							className="flex items-center justify-center gap-1 hover:text-celeste cursor-pointer"
						>
							<MapPin color="white" size={14} />
							<p>{t('social.location')}</p>
						</a>
					</div>
				</div>

				<div>
					<img src={surfer} alt="calavera surfeando" />
				</div>
			</div>

			<div className="w-full flex flex-col items-center justify-center py-4 px-2 bg-black">
				<a
					href="https://www.linkedin.com/in/ignacio-vivas-viscarra/"
					target="_blank"
					className="sm:hidden text-gris-secundario text-xs text-center hover:text-celeste"
				>
					{t('footer.made_by_mobile1')}
				</a>
				<a
					href="https://www.linkedin.com/in/ignacio-vivas-viscarra/"
					target="_blank"
					className="sm:hidden text-gris-secundario text-xs text-center hover:text-celeste"
				>
					{t('footer.made_by_mobile2')}
				</a>
				<a
					href="https://www.linkedin.com/in/ignacio-vivas-viscarra/"
					target="_blank"
					className="hidden sm:block text-gris-secundario text-xs text-center hover:text-celeste"
				>
					{t('footer.made_by')}
				</a>
			</div>
		</div>
	);
}

export default Footer;
