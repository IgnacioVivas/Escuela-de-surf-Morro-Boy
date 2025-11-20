import { useState, useEffect } from 'react';

export const usePageLoad = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const handleLoad = () => {
			console.log('✅ Página completamente cargada');
			setIsLoading(false);
		};

		// Verificar si ya está cargado
		if (document.readyState === 'complete') {
			console.log('📄 Página ya estaba cargada');
			setIsLoading(false);
		} else {
			console.log('🔄 Esperando carga completa...');
			window.addEventListener('load', handleLoad);

			// Cleanup: remover el event listener
			return () => window.removeEventListener('load', handleLoad);
		}
	}, []);

	return isLoading;
};
