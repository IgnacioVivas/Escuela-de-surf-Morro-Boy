'use client';

import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds: string[]) {
	const [active, setActive] = useState<string | null>(null);

	useEffect(() => {
		const handleScroll = () => {
			let current: string | null = null;

			for (const id of sectionIds) {
				const element = document.getElementById(id);
				if (!element) continue;

				const rect = element.getBoundingClientRect();
				// La sección se considera activa si su parte superior está entre 0 y 40% de la pantalla
				if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= 0) {
					current = id;
					break;
				}
			}

			setActive(current);
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Ejecutar una vez al cargar
		return () => window.removeEventListener('scroll', handleScroll);
	}, [sectionIds]);

	return active;
}
