'use client';

import { X } from 'lucide-react';
import logo from '@/assets/logo-negro.png';
import ButtonUno from './ButtonUno';
import { useActiveSection } from '@/hooks/useActiveSection';
import { cn } from '@/lib/utils';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface MenuMobileProps {
	isOpen: boolean;
	onClose: () => void;
}

const MenuMobile = ({ isOpen, onClose }: MenuMobileProps) => {
	const { t } = useTranslation();
	const sections = ['paraiso', 'agendar', 'niveis', 'locais', 'experiencia', 'familias'];
	const active = useActiveSection(sections);

	const phone = '5512996049078';
	const message = 'Olá! Quero começar as aulas de surf. Pode me passar mais informações?';
	const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

	// Bloquear scroll cuando el menú está abierto
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}

		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpen]);

	const handleMenuClick = () => {
		onClose();
	};

	return (
		<>
			{/* Overlay con animación mejorada */}
			<div
				className={cn(
					'fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-all duration-500 ease-out',
					isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
				)}
				onClick={onClose}
			/>

			{/* Menú desplegable con efecto mejorado */}
			<div
				className={cn(
					'fixed top-0 left-0 right-0 bg-white z-50 lg:hidden shadow-xl transform transition-all duration-500 ease-out',
					isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none',
				)}
			>
				{/* Header del menú móvil */}
				<div className="h-[12vh] flex items-center justify-between px-5 border-b border-gray-100">
					<img src={logo} alt="Logo Morro Boy" className="w-16" />
					<div
						onClick={onClose}
						className="w-10 h-10 rounded-full bg-gray-100 flex justify-center items-center cursor-pointer hover:bg-gray-200 transition-colors"
					>
						<X size={20} className="text-gray-600" />
					</div>
				</div>

				<div className="px-5 py-8 bg-white max-h-[88vh] overflow-y-auto">
					<nav className="flex flex-col space-y-2">
						{[
							{ id: 'paraiso', emoji: '🏄‍♂️', label: t('menu.paradise') },
							{ id: 'agendar', emoji: '📅', label: t('menu.booking') },
							{ id: 'niveis', emoji: '⭐', label: t('menu.levels') },
							{ id: 'locais', emoji: '📍', label: t('menu.spots') },
							{ id: 'experiencia', emoji: '🌊', label: t('menu.experience') },
							{ id: 'familias', emoji: '👨‍👩‍👧‍👦', label: t('menu.families') },
						].map((item, index) => (
							<a
								key={item.id}
								href={`#${item.id}`}
								onClick={handleMenuClick}
								className={cn(
									'text-xs uppercase font-bold text-negro py-4 px-4 rounded-lg hover:bg-celeste hover:bg-opacity-10 hover:pl-6 border-l-4 border-transparent transform transition-transform duration-500',
									active === item.id
										? 'text-celeste-secundario border-celeste-secundario bg-celeste bg-opacity-5'
										: 'hover:text-celeste-secundario',
									isOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0',
								)}
								style={{
									transitionDelay: isOpen ? `${index * 100}ms` : '0ms',
								}}
							>
								{/* {item.emoji}  */}
								{item.label}
							</a>
						))}
					</nav>

					{/* Botón de acción con animación */}
					<div
						className={cn(
							'mt-8 pt-6 border-t border-gray-100 transform transition-all duration-500',
							isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
						)}
						style={{
							transitionDelay: isOpen ? '600ms' : '0ms',
						}}
					>
						<ButtonUno className="w-full justify-center py-4 text-lg">
							<a href={url} target="_blank" onClick={onClose}>
								{t('menuMobile.reserveButton')}
							</a>
						</ButtonUno>
					</div>
				</div>
			</div>
		</>
	);
};

export default MenuMobile;
