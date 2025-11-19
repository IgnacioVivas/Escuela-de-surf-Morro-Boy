import { Waves } from 'lucide-react';
import logo from '@/assets/logo-negro.png';
import ButtonUno from './ButtonUno';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useNavScroll } from '@/hooks/useNavScroll';
import { cn } from '@/lib/utils';

const Navigation = () => {
	const sections = ['paraiso', 'agendar', 'niveis', 'locais', 'experiencia', 'familias'];
	const active = useActiveSection(sections);

	const { isFixed, showMobile } = useNavScroll();

	const phone = '5493517713933';
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
						RESERVE HOJE
					</a>
				</ButtonUno>
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
						Paraíso
					</a>

					<a
						href="#agendar"
						className={cn(
							'uppercase font-bold text-negro text-xs hover:text-celeste-secundario tracking-widest cursor-pointer',
							active === 'agendar' && 'text-celeste-secundario',
						)}
					>
						Agendar
					</a>

					<a
						href="#niveis"
						className={cn(
							'uppercase font-bold text-negro text-xs hover:text-celeste-secundario tracking-widest cursor-pointer',
							active === 'niveis' && 'text-celeste-secundario',
						)}
					>
						Níveis
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
						Locais
					</a>

					<a
						href="#experiencia"
						className={cn(
							'uppercase font-bold text-negro text-xs hover:text-celeste-secundario tracking-widest cursor-pointer',
							active === 'experiencia' && 'text-celeste-secundario',
						)}
					>
						Experiência
					</a>

					<a
						href="#familias"
						className={cn(
							'uppercase font-bold text-negro text-xs hover:text-celeste-secundario tracking-widest cursor-pointer',
							active === 'familias' && 'text-celeste-secundario',
						)}
					>
						Famílias
					</a>
				</nav>
			</div>

			{/* MOBILE */}
			<div
				className={cn(
					'ml-auto md:hidden w-14 h-14 rounded-full bg-celeste flex justify-center items-center cursor-pointer transition-all',
					!showMobile && 'opacity-0 pointer-events-none',
				)}
			>
				<Waves color="white" size={32} />
			</div>

			{/* DESKTOP */}
			<div className="hidden md:flex w-14 h-14 rounded-full bg-celeste justify-center items-center ml-auto cursor-pointer">
				<Waves color="white" size={32} />
			</div>
		</div>
	);
};

export default Navigation;
