'use client';

import { Waves } from 'lucide-react';
import logo from '@/assets/logo-negro.png';
import ButtonUno from './ButtonUno';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useNavScroll } from '@/hooks/useNavScroll';
import { cn } from '@/lib/utils';
import MenuDesktop from './MenuDesktop';
import { useState } from 'react';
import MenuMobile from './MenuMobile';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
	const { t } = useTranslation();

	const sections = ['paraiso', 'agendar', 'niveis', 'locais', 'experiencia', 'familias'];
	const active = useActiveSection(sections);

	const { isFixed, showMobile } = useNavScroll();

	const [openMenuDesktop, setOpenMenuDesktop] = useState(false);
	const [openMenuMobile, setOpenMenuMobile] = useState(false);

	const phone = '5512996049078';
	const message = 'Olá! Quero começar as aulas de surf. Pode me passar mais informações?';

	const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

	return (
		<div
			className={cn(
				'px-5 md:px-10 h-[12vh] w-full flex items-center justify-between bg-white z-50 transition-all duration-300',
				isFixed ? 'fixed top-0' : 'relative',
				!showMobile && '-translate-y-full md:translate-y-0',
			)}
		>
			{/* BUTTON IZQUIERDA */}
			<div className="hidden lg:block">
				<ButtonUno>
					<a href={url} target="_blank">
						{t('menu.reserve_today')}
					</a>
				</ButtonUno>
			</div>

			{/* BUTTON CAMBIAR LENGUAJE - SOLO MOBILE */}
			<div className="block lg:hidden">
				<LanguageSwitcher />
			</div>

			<div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-8">
				<nav className="hidden lg:flex gap-6 lg:gap-4 xl:gap-6">
					<a
						href="#paraiso"
						className={cn(
							'uppercase font-bold text-negro text-xs hover:text-celeste-secundario tracking-widest cursor-pointer',
							active === 'paraiso' && 'text-celeste-secundario',
						)}
					>
						{t('menu.paradise')}
					</a>

					<a
						href="#agendar"
						className={cn(
							'uppercase font-bold text-negro text-xs hover:text-celeste-secundario tracking-widest cursor-pointer',
							active === 'agendar' && 'text-celeste-secundario',
						)}
					>
						{t('menu.booking')}
					</a>

					<a
						href="#niveis"
						className={cn(
							'uppercase font-bold text-negro text-xs hover:text-celeste-secundario tracking-widest cursor-pointer',
							active === 'niveis' && 'text-celeste-secundario',
						)}
					>
						{t('menu.levels')}
					</a>
				</nav>

				<img src={logo} alt="Logo Morro Boy" className="w-20" />

				<nav className="hidden lg:flex gap-6 lg:gap-4 xl:gap-6">
					<a
						href="#locais"
						className={cn(
							'uppercase font-bold text-negro text-xs hover:text-celeste-secundario tracking-widest cursor-pointer',
							active === 'locais' && 'text-celeste-secundario',
						)}
					>
						{t('menu.spots')}
					</a>

					<a
						href="#experiencia"
						className={cn(
							'uppercase font-bold text-negro text-xs hover:text-celeste-secundario tracking-widest cursor-pointer',
							active === 'experiencia' && 'text-celeste-secundario',
						)}
					>
						{t('menu.experience')}
					</a>

					<a
						href="#familias"
						className={cn(
							'uppercase font-bold text-negro text-xs hover:text-celeste-secundario tracking-widest cursor-pointer',
							active === 'familias' && 'text-celeste-secundario',
						)}
					>
						{t('menu.families')}
					</a>
				</nav>
			</div>

			{/* MOBILE */}
			<div
				onClick={() => setOpenMenuMobile(true)}
				className={cn(
					'ml-auto lg:hidden w-14 h-14 rounded-full bg-celeste flex justify-center items-center cursor-pointer transition-all',
					!showMobile && 'opacity-0 pointer-events-none',
				)}
			>
				<Waves color="white" size={32} />
			</div>

			{/* DESKTOP */}
			<div
				onClick={() => setOpenMenuDesktop(true)}
				className="hidden lg:flex w-14 h-14 rounded-full bg-celeste justify-center items-center ml-auto cursor-pointer"
			>
				<Waves color="white" size={32} />
			</div>

			<MenuDesktop open={openMenuDesktop} onOpenChange={setOpenMenuDesktop} />

			<MenuMobile isOpen={openMenuMobile} onClose={() => setOpenMenuMobile(false)} />
		</div>
	);
};

export default Navigation;
