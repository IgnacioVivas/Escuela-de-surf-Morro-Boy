'use client';

import { Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

function BackToTop() {
	const [show, setShow] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			// Cambiá 300 por lo que dure tu Hero
			if (window.scrollY > 300) setShow(true);
			else setShow(false);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<button
			onClick={scrollToTop}
			className="fixed flex items-center gap-1.5 right-[-50px] bottom-20 text-negro font-semibold tracking-widest transition-all duration-300 -rotate-90 cursor-pointer z-50 origin-center  ${show ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}"
		>
			Voltar ao topo
			<Sun size={16} />
		</button>
	);
}

export default BackToTop;
