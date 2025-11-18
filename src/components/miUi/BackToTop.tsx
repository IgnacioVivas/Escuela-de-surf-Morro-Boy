'use client';

import { Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

function BackToTop() {
	const [show, setShow] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const visible = window.scrollY > 300;
			setShow(visible);

			// 🔊 enviamos el estado al resto de la app
			window.dispatchEvent(new CustomEvent('backToTopVisibility', { detail: visible }));
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
			className={cn(
				`fixed flex items-center gap-1.5 
         right-[-50px] bottom-20 
         text-negro font-semibold tracking-widest
         transition-all duration-300
         cursor-pointer z-50 origin-center
         -rotate-90`,
				show ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
			)}
		>
			Voltar ao topo
			<Sun size={16} />
		</button>
	);
}

export default BackToTop;
