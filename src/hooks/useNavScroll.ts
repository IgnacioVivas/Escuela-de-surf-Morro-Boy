'use client';

import { useEffect, useState } from 'react';

export function useNavScroll(heroHeight = window.innerHeight) {
	const [isFixed, setIsFixed] = useState(false);
	const [showMobile, setShowMobile] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const current = window.scrollY;

			// DESKTOP → se vuelve fixed al salir del HERO
			setIsFixed(current > heroHeight);

			// MOBILE → mostrar solo cuando subís
			if (window.innerWidth < 768) {
				if (current < 10) {
					setShowMobile(true);
				} else if (current > lastScrollY) {
					setShowMobile(false); // bajando → esconder
				} else {
					setShowMobile(true); // subiendo → mostrar
				}
			} else {
				setShowMobile(true); // desktop siempre visible
			}

			setLastScrollY(current);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [heroHeight, lastScrollY]);

	return { isFixed, showMobile };
}
