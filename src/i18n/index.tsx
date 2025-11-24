// src/i18n/index.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Recursos de traducción
const resources = {
	pt: {
		translation: {
			location: 'Praia do Itamambuca, Ubatuba - SP',
			titleParadise: 'Paraíso dos surfistas',
			textParadise:
				'Ubatuba é um pedacinho de paraíso no litoral de São Paulo — um lugar onde a mata atlântica abraça o mar e as ondas parecem feitas sob medida para quem vive a paixão pelo surf. Aqui, cada praia tem sua própria energia: algumas perfeitas para iniciantes, outras desafiadoras para quem busca emoção e evolução na prancha.',
			welcome: 'Surf para todos os níveis',
			book_now: 'Reservar Agora',
			about: 'Sobre Nós',
			contact: 'Contato',
			surf_lessons: 'Aulas de Surf',
			beach_rental: 'Aluguel na Praia',
			// Agrega más traducciones aquí...
		},
	},
	en: {
		translation: {
			location: 'Itamambuca Beach, Ubatuba - SP',
			titleParadise: 'Surfers’ Paradise',
			textParadise:
				'Ubatuba is a little slice of paradise on the coast of São Paulo — a place where the Atlantic Forest embraces the sea, and the waves feel tailor-made for those who live and breathe surfing. Here, every beach has its own vibe: some perfect for beginners, others offering challenges for surfers seeking excitement and progress on the board.',
			welcome: 'Welcome to Surf Paradise',
			book_now: 'Book Now',
			about: 'About Us',
			contact: 'Contact',
			surf_lessons: 'Surf Lessons',
			beach_rental: 'Beach Rental',
			// Agrega más traducciones aquí...
		},
	},
	es: {
		translation: {
			location: 'Playa de Itamambuca, Ubatuba - SP',
			titleParadise: 'Paraíso de los surfistas',
			textParadise:
				'Ubatuba es un pedacito de paraíso en el litoral de São Paulo — un lugar donde la Mata Atlántica abraza el mar y las olas parecen hechas a medida para quienes viven la pasión por el surf. Aquí, cada playa tiene su propia energía: algunas perfectas para principiantes, otras desafiantes para quienes buscan emoción y evolución en la tabla.',
			welcome: 'Bienvenido a Surf Paradise',
			book_now: 'Reservar Ahora',
			about: 'Nosotros',
			contact: 'Contacto',
			surf_lessons: 'Clases de Surf',
			beach_rental: 'Alquiler en la Playa',
			// Agrega más traducciones aquí...
		},
	},
};

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: 'en',
		debug: import.meta.env.DEV,
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
