import { Waves } from 'lucide-react';
import logo from '@/assets/logo-negro.png';

import ButtonUno from './ButtonUno';
// h-[70px] md:h-20
const Navigation = () => {
	return (
		<div className="relative px-5 md:px-10 h-[12vh] bg-white flex items-center justify-between">
			<div className="hidden md:block">
				<ButtonUno>RESERVE HOJE</ButtonUno>
			</div>

			<div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-4">
				<nav className="hidden md:flex gap-4">
					<span>1</span>
					<span>2</span>
				</nav>

				<img src={logo} alt="Logo Morro Boy" className="w-20" />

				<nav className="hidden md:flex gap-4">
					<span>3</span>
					<span>4</span>
				</nav>
			</div>

			{/* MOBILE */}
			<div className="ml-auto md:hidden w-14 h-14 rounded-full bg-celeste flex justify-center items-center cursor-pointer">
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
