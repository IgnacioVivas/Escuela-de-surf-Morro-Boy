import { useTranslation } from 'react-i18next';
import imgBrasil from '@/assets/flag-brasil.png';
import imgEspaña from '@/assets/flag-españa.png';
import imgEeuu from '@/assets/flag-eeuu.png';
import { useState, useRef, useEffect } from 'react';

const LanguageSwitcher = () => {
	const { i18n } = useTranslation();
	const [showFlags, setShowFlags] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	// Cerrar dropdown al hacer click fuera
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setShowFlags(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	const languages = [
		{ code: 'pt', name: 'Português', flag: imgBrasil },
		{ code: 'es', name: 'Español', flag: imgEspaña },
		{ code: 'en', name: 'English', flag: imgEeuu },
	];

	const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

	const handleLanguageChange = (languageCode: string) => {
		i18n.changeLanguage(languageCode);
		setShowFlags(false);
	};

	return (
		<div className="relative" ref={dropdownRef}>
			{/* Bandera actual */}
			<div className="cursor-pointer transition-transform hover:scale-110" onClick={() => setShowFlags(!showFlags)}>
				<img src={currentLanguage.flag} alt={currentLanguage.name} className="w-10 h-10 object-cover" />
			</div>

			{/* Dropdown de banderas */}
			<div
				className={`absolute top-14 lg:top-12 lg:right-0 flex flex-col gap-3 w-16 z-100 p-3 bg-white border border-negro shadow-lg transition-all duration-200 ${
					showFlags ? 'opacity-100 visible' : 'opacity-0 invisible'
				}`}
			>
				{languages
					.filter((lang) => lang.code !== currentLanguage.code)
					.map((language) => (
						<img
							key={language.code}
							src={language.flag}
							alt={language.name}
							className="w-10 h-10 cursor-pointer object-cover transition-all hover:scale-110"
							onClick={() => handleLanguageChange(language.code)}
							title={language.name}
						/>
					))}
			</div>
		</div>
	);
};

export default LanguageSwitcher;
