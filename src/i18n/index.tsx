import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
	pt: {
		translation: {
			calendar: {
				selectDays: 'Selecione os dias (máx. 5)',
				timeSlots: 'Horários disponíveis',
				continueButton: 'FAZER RESERVA',
				selected: 'selecionados',
				limitReached: ' - Limite alcançado',
				noSelection: 'Selecione pelo menos um dia e um horário.',
				reservationSelected: 'Reserva selecionada:',
				days: 'dia(s)',
			},

			backToTop: {
				text: 'Voltar ao topo',
			},

			menuMobile: {
				reserveButton: 'RESERVE HOJE',
			},

			menuDesktop: {
				title: 'Surf em Ubatuba',
				description1: 'Aulas profissionais para todos os níveis',
				description2: 'do iniciante ao avançado.',
				phone: '+55 12 996049078',
				email: 'prueba@escuelasurf.com.br',
				address: 'Praia do Itamambuca, Ubatuba - SP',
				follow_us: 'NOS SIGA:',
			},

			booking: {
				title: 'Agende sua aula de surf',
				paragraph1:
					'Ubatuba oferece ondas para todos os níveis — desde quem vai subir na prancha pela primeira vez até quem já sente o chamado do mar há anos. Escolha o dia e o horário que melhor combinam com você e venha viver uma experiência inesquecível no paraíso dos surfistas.',
				paragraph2:
					'Nossas aulas são personalizadas, seguras e conduzidas por instrutores experientes que conhecem cada detalhe da praia.',
				callToAction: 'O mar te espera. Só falta você.',
			},

			paradise: {
				location: 'Praia do Itamambuca, Ubatuba - SP',
				titleParadise: 'Paraíso dos surfistas',
				textParadise:
					'Ubatuba é um pedacinho de paraíso no litoral de São Paulo — um lugar onde a mata atlântica abraça o mar e as ondas parecem feitas sob medida para quem vive a paixão pelo surf. Aqui, cada praia tem sua própria energia: algumas perfeitas para iniciantes, outras desafiadoras para quem busca emoção e evolução na prancha.',
			},

			// SOCIAL BAR
			social: {
				follow_us: 'Nos siga:',
				location: 'Praia do Itamambuca, Ubatuba - SP',
			},

			// NAVBAR
			menu: {
				paradise: 'Paraíso',
				booking: 'Agendar',
				levels: 'Níveis',
				spots: 'Locais',
				experience: 'Experiência',
				families: 'Famílias',
				reserve_today: 'Reserve hoje',
			},

			// SERVICES
			services: {
				lessons_title: 'Aulas personalizadas de surf',
				rental_title: 'Aluguel de pranchas de surf',
				photos_title: 'Fotos e vídeos',
				yoga_title: 'Aulas de SupYoga',

				rental_extra: 'Por hora ou por diária',
				photos_extra: 'Consulta por vídeo análise para maximizar a sua evolução',
				yoga_extra: '2HS',
			},

			// LEVELS
			levels: {
				title: 'Surf para todos os níveis',
				description:
					'Do primeiro contato com o mar às manobras avançadas, nossas aulas são pensadas para cada etapa da sua evolução no surf — com segurança, técnica e muita diversão.',

				beginner_title: 'Novo no mar?',
				beginner_text:
					'Aprenda do zero com segurança. Técnicas básicas, postura, primeira onda e leitura do mar explicados de forma simples e acolhedora.',

				intermediate_title: 'Surfista intermediário',
				intermediate_text:
					'Aprenda a virar, remar melhor e escolher as ondas certas. Evolução consistente com correções personalizadas e prática guiada.',

				advanced_title: 'Nível avançado',
				advanced_text: 'Treinos focados em performance e leitura avançada das condições.',
				advanced_extra: 'Consulte por aula individual ou em grupo (até 5 pessoas).',

				pro_title: 'Surf em nível profissional',
				pro_text:
					'Treinamento técnico e estratégico para quem busca alta performance. Aulas intensivas, análise detalhada e foco total na progressão.',
			},

			// LOCATIONS
			locations: {
				title: 'Locais incríveis',
				text: 'Descubra as praias mais especiais de Ubatuba — cada uma com sua própria energia, ondas únicas e cenários que parecem saídos de um cartão-postal.',
				list: ['Itamambuca', 'Vermelha do Norte', 'Perequê-Açu', 'Praia Grande', 'Fazenda'],
			},

			// TOUR / EXPERIÊNCIA DE SURF
			tour: {
				title1: 'Experiência de Surf',
				title2: 'em Locais Exclusivos',
				text: 'Viva uma jornada de surf completa, explorando diferentes picos de surfing e praias mais virgens da região. Às vezes organizamos grupos para fazer um tour de surf, visitando ilhas e outros picos especiais, perfeitos para quem quer conhecer novos lugares e evoluir no surf.',
				button: 'Quero saber mais',
			},

			// EXPERIENCE (20 ANOS)
			experience: {
				title: 'Mais de vinte anos dentro d’água',
				p1: 'Há mais de duas décadas, vivemos e ensinamos o surf nas praias de Ubatuba. Nossa história começou com uma simples paixão: o amor pelo mar.',
				p2: 'Desde então, formamos surfistas de todos os níveis, sempre com segurança, atenção e técnica. Aqui, você não aprende só a ficar em pé na prancha — aprende a sentir o mar e transformar cada onda em um momento inesquecível.',
			},

			// REASONS (SUPYOGA / ALEGRIA DO SURF)
			reasons: {
				yoga_sub: 'SupYoga',
				yoga_desc: 'Uma atividade que integra movimentos e princípios do yoga, sobre uma prancha de stand up paddle.',
				yoga_sessions: 'Aulas individuais e grupais',
				yoga_button: 'RESERVE',

				joy_sub: 'Alegria do surf',
				joy_title: 'Sorrisos que o mar cria',
				joy_desc: 'A cada aula, novas conquistas. A cada onda, uma história para contar.',
				joy_signature: 'Surf é felicidade',

				essence_sub: 'Essência de Itamambuca',
				essence_title: 'Caminho das ondas',
				essence_desc: 'A energia muda quando você pisa nesta praia. É liberdade, natureza e aquele chamado do mar.',
				essence_signature: 'Viva o momento',
			},

			// FAMILIES / ALL AGES
			ages: {
				title: 'Surf para todas as idades',
				p1: 'A partir dos 4 anos, todos podem entrar no mar.',
				p2: 'Na nossa escola, o surf é para todo mundo — crianças, adolescentes, adultos iniciantes e famílias inteiras.',
				tagline: 'Surf é conexão, alegria e memória para a vida toda.',
				button1: 'Quero desconto',
				button2: 'familiar',
			},

			// HERO / BANNER
			hero: {
				title1: 'Quer começar a',
				title2: 'surfar agora?',
				text: 'Entre nas águas de Itamambuca! Aproveite um lugar com condições perfeitas para o surf e instrutores profissionais.',
				button: 'Começar agora',
			},

			// FOOTER
			footer: {
				about_title: 'Escola de surf Morro Boy',
				about_text:
					'O lugar onde a paixão pelo surf encontra o espírito de Itamambuca. A Morro Boy oferece aulas seguras, personalizadas e cheias de energia — para que você viva a verdadeira essência do surf em Ubatuba.',

				social_title: 'Redes sociais',
				contact_title: 'Entre em contato',

				made_by_mobile1: 'Feito com 🌊 e ☀️ em Itamambuca',
				made_by_mobile2: 'Desenvolvido por Ignacio Vivas',
				made_by: 'Feito com 🌊 e ☀️ em Itamambuca — Desenvolvido por Ignacio Vivas',
			},
		},
	},

	// -------------------
	// 🇺🇸 ENGLISH
	// -------------------
	en: {
		translation: {
			calendar: {
				selectDays: 'Select days (max. 5)',
				timeSlots: 'Available times',
				continueButton: 'MAKE RESERVATION',
				selected: 'selected',
				limitReached: ' - Limit reached',
				noSelection: 'Select at least one day and one time.',
				reservationSelected: 'Selected reservation:',
				days: 'day(s)',
			},

			backToTop: {
				text: 'Back to top',
			},

			menuMobile: {
				reserveButton: 'RESERVE TODAY',
			},

			menuDesktop: {
				title: 'Surf in Ubatuba',
				description1: 'Professional lessons for all levels',
				description2: 'from beginner to advanced.',
				phone: '+55 12 996049078',
				email: 'prueba@escuelasurf.com.br',
				address: 'Itamambuca Beach, Ubatuba - SP',
				follow_us: 'FOLLOW US:',
			},

			booking: {
				title: 'Book your surf lesson',
				paragraph1:
					"Ubatuba offers waves for all levels — from those stepping on a board for the first time to those who have felt the call of the ocean for years. Choose the date and time that works best for you and come live an unforgettable experience in this surfers' paradise.",
				paragraph2:
					'Our lessons are personalized, safe, and taught by experienced instructors who know every detail of the beach.',
				callToAction: "The ocean awaits. All that's missing is you.",
			},

			paradise: {
				location: 'Itamambuca Beach, Ubatuba - SP',
				titleParadise: 'Surfers’ Paradise',
				textParadise:
					'Ubatuba is a little slice of paradise where the Atlantic Forest meets the sea. Each beach has its own vibe — from mellow beginner spots to challenging waves for surfers chasing progression.',
			},

			social: {
				follow_us: 'Follow us:',
				location: 'Itamambuca Beach, Ubatuba - SP',
			},

			menu: {
				paradise: 'Paradise',
				booking: 'Book',
				levels: 'Levels',
				spots: 'Spots',
				experience: 'Experience',
				families: 'Families',
				reserve_today: 'Reserve today',
			},

			services: {
				lessons_title: 'Personalized surf lessons',
				rental_title: 'Surfboard rentals',
				photos_title: 'Photos & videos',
				yoga_title: 'SupYoga sessions',
				rental_extra: 'Hourly or daily',
				photos_extra: 'Ask about video analysis to boost your progress',
				yoga_extra: '2H',
			},

			levels: {
				title: 'Surf for all levels',
				description:
					'From your first contact with the ocean to advanced maneuvers, our lessons guide every step of your surf evolution — safely, technically, and with lots of stoke.',
				beginner_title: 'New to the ocean?',
				beginner_text:
					'Learn the basics safely — posture, first wave, reading the sea — taught in a friendly and simple approach.',
				intermediate_title: 'Intermediate surfer',
				intermediate_text:
					'Improve turns, paddling, and wave selection. Progress faster with personalized corrections and guided sessions.',
				advanced_title: 'Advanced level',
				advanced_text: 'Training focused on performance and advanced ocean reading.',
				advanced_extra: 'Ask about private or group lessons (up to 5 people).',
				pro_title: 'Professional level surf',
				pro_text:
					'Technical and strategic training for surfers chasing high performance. Intensive lessons, detailed analysis, total evolution focus.',
			},

			locations: {
				title: 'Amazing surf spots',
				text: 'Discover the most iconic beaches of Ubatuba — each with its own energy, unique waves, and postcard-worthy landscapes.',
				list: ['Itamambuca', 'Vermelha do Norte', 'Perequê-Açu', 'Praia Grande', 'Fazenda'],
			},

			tour: {
				title1: 'Surf Experience',
				title2: 'in Exclusive Spots',
				text: 'Live a complete surf journey exploring different peaks and untouched beaches. Sometimes we organize surf tours to islands and special breaks — perfect for surfers seeking new places and evolution.',
				button: 'Learn more',
			},

			experience: {
				title: 'More than twenty years in the water',
				p1: "For over two decades, we've lived and taught surf in Ubatuba. Our story began with one simple thing: love for the ocean.",
				p2: 'We’ve formed surfers of all levels with safety, connection, and experience. You don’t just stand on a board — you learn to feel the ocean and turn each wave into an unforgettable moment.',
			},

			reasons: {
				yoga_sub: 'SupYoga',
				yoga_desc: 'A practice that blends yoga movements and principles over a stand-up paddle board.',
				yoga_sessions: 'Private and group classes',
				yoga_button: 'RESERVE',
				joy_sub: 'Surf joy',
				joy_title: 'Smiles shaped by the sea',
				joy_desc: 'Every lesson brings new achievements. Every wave becomes a story.',
				joy_signature: 'Surf is happiness',
				essence_sub: 'Essence of Itamambuca',
				essence_title: 'Path of the waves',
				essence_desc: 'The energy shifts when you step on this beach — freedom, nature, and the ocean calling you.',
				essence_signature: 'Live the moment',
			},

			ages: {
				title: 'Surf for all ages',
				p1: 'From age 4 and up — everyone can enter the ocean.',
				p2: 'Here, surf is for everyone — kids, teens, adults, beginners, and whole families.',
				tagline: 'Surf is connection, joy, and lifelong memory.',
				button1: 'Family',
				button2: 'discount',
			},

			hero: {
				title1: 'Ready to start',
				title2: 'surfing?',
				text: 'Jump into the waters of Itamambuca — the perfect place for surf progression with professional instructors.',
				button: 'Start now',
			},

			footer: {
				about_title: 'Morro Boy Surf School',
				about_text:
					'Where passion for surfing meets the spirit of Itamambuca. Morro Boy offers safe, personalized, high-energy lessons so you can experience the true essence of surf in Ubatuba.',
				social_title: 'Social media',
				contact_title: 'Get in touch',
				made_by_mobile1: 'Made with 🌊 and ☀️ in Itamambuca',
				made_by_mobile2: 'Developed by Ignacio Vivas',
				made_by: 'Made with 🌊 and ☀️ in Itamambuca — Developed by Ignacio Vivas',
			},
		},
	},

	// -------------------
	// 🇪🇸 ESPAÑOL LATINO
	// -------------------
	es: {
		translation: {
			calendar: {
				selectDays: 'Seleccioná días (máx. 5)',
				timeSlots: 'Horarios disponibles',
				continueButton: 'HACER RESERVA',
				selected: 'seleccionados',
				limitReached: ' - Límite alcanzado',
				noSelection: 'Seleccioná al menos un día y un horario.',
				reservationSelected: 'Reserva seleccionada:',
				days: 'día(s)',
			},

			backToTop: {
				text: 'Volver arriba',
			},

			menuMobile: {
				reserveButton: 'RESERVÁ HOY',
			},

			menuDesktop: {
				title: 'Surf en Ubatuba',
				description1: 'Clases profesionales para todos los niveles',
				description2: 'del principiante al avanzado.',
				phone: '+55 12 996049078',
				email: 'prueba@escuelasurf.com.br',
				address: 'Playa de Itamambuca, Ubatuba - SP',
				follow_us: 'SEGUINOS:',
			},
			booking: {
				title: 'Agendá tu clase de surf',
				paragraph1:
					'Ubatuba ofrece olas para todos los niveles — desde quienes suben a la tabla por primera vez hasta quienes sienten el llamado del mar hace años. Elegí el día y horario que mejor te convenga y vení a vivir una experiencia inolvidable en el paraíso de los surfistas.',
				paragraph2:
					'Nuestras clases son personalizadas, seguras y guiadas por instructores experimentados que conocen cada detalle de la playa.',
				callToAction: 'El mar te espera. Solo faltás vos.',
			},

			paradise: {
				location: 'Playa de Itamambuca, Ubatuba - SP',
				titleParadise: 'Paraíso de los surfistas',
				textParadise:
					'Ubatuba es un pedacito de paraíso donde la Mata Atlántica abraza el mar. Cada playa tiene su propia vibra — desde olas suaves para principiantes hasta desafíos para quienes buscan progresar.',
			},

			social: {
				follow_us: 'Seguinos:',
				location: 'Playa de Itamambuca, Ubatuba - SP',
			},

			menu: {
				paradise: 'Paraíso',
				booking: 'Agendar',
				levels: 'Niveles',
				spots: 'Spots',
				experience: 'Experiencia',
				families: 'Familias',
				reserve_today: 'Reservá hoy',
			},

			services: {
				lessons_title: 'Clases personalizadas de surf',
				rental_title: 'Alquiler de tablas de surf',
				photos_title: 'Fotos y videos',
				yoga_title: 'Clases de SupYoga',
				rental_extra: 'Por hora o por día',
				photos_extra: 'Consultá por análisis en video para mejorar tu evolución',
				yoga_extra: '2HS',
			},

			levels: {
				title: 'Surf para todos los niveles',
				description:
					'Desde tu primer contacto con el mar hasta maniobras avanzadas, nuestras clases acompañan cada etapa de tu evolución en el surf — con seguridad, técnica y mucha diversión.',
				beginner_title: '¿Nuevo en el mar?',
				beginner_text:
					'Aprendé desde cero y con seguridad — postura, primera ola y lectura del mar explicados de forma simple y amigable.',
				intermediate_title: 'Surfista intermedio',
				intermediate_text:
					'Aprendé a girar mejor, remar más fuerte y elegir las olas correctas. Evolución constante con correcciones personalizadas.',
				advanced_title: 'Nivel avanzado',
				advanced_text: 'Entrenamientos enfocados en performance y lectura avanzada del mar.',
				advanced_extra: 'Consultá por clases individuales o grupales (hasta 5 personas).',
				pro_title: 'Surf en nivel profesional',
				pro_text:
					'Entrenamiento técnico y estratégico para quienes buscan alta performance. Clases intensivas, análisis detallado y foco total en tu progreso.',
			},

			locations: {
				title: 'Spots increíbles',
				text: 'Descubrí las playas más especiales de Ubatuba — cada una con su vibra única, olas distintas y paisajes de postal.',
				list: ['Itamambuca', 'Vermelha do Norte', 'Perequê-Açu', 'Praia Grande', 'Fazenda'],
			},

			tour: {
				title1: 'Experiencia de surf',
				title2: 'en lugares exclusivos',
				text: 'Viví una jornada completa de surf explorando diferentes picos y playas vírgenes. A veces armamos tours especiales para conocer islas y nuevos lugares, perfectos para seguir evolucionando.',
				button: 'Quiero saber más',
			},

			experience: {
				title: 'Más de veinte años dentro del agua',
				p1: 'Hace más de dos décadas vivimos y enseñamos surf en las playas de Ubatuba. Todo empezó con una pasión simple: el amor por el mar.',
				p2: 'Formamos surfistas de todos los niveles con seguridad, técnica y dedicación. Acá no solo aprendés a pararte en la tabla — aprendés a sentir el mar y transformar cada ola en un recuerdo inolvidable.',
			},

			reasons: {
				yoga_sub: 'SupYoga',
				yoga_desc: 'Una actividad que combina movimientos y principios del yoga sobre una tabla de stand up paddle.',
				yoga_sessions: 'Clases individuales y grupales',
				yoga_button: 'RESERVAR',
				joy_sub: 'Alegría del surf',
				joy_title: 'Sonrisas que el mar crea',
				joy_desc: 'En cada clase, un avance. En cada ola, una historia nueva.',
				joy_signature: 'Surf es felicidad',
				essence_sub: 'Esencia de Itamambuca',
				essence_title: 'Camino de las olas',
				essence_desc: 'La energía cambia cuando pisás esta playa — es libertad, naturaleza y ese llamado del mar.',
				essence_signature: 'Viví el momento',
			},

			ages: {
				title: 'Surf para todas las edades',
				p1: 'Desde los 4 años, todos pueden entrar al mar.',
				p2: 'En nuestra escuela, el surf es para todos — niños, adolescentes, adultos principiantes y familias enteras.',
				tagline: 'Surf es conexión, alegría y memoria para toda la vida.',
				button1: 'Quiero descuento',
				button2: 'familiar',
			},

			hero: {
				title1: '¿Querés empezar a',
				title2: 'surfear ahora?',
				text: 'Entrá al mar de Itamambuca — olas perfectas para progresar y aprender con instructores profesionales.',
				button: 'Empezar ahora',
			},

			footer: {
				about_title: 'Escuela de surf Morro Boy',
				about_text:
					'El lugar donde la pasión por el surf se encuentra con el espíritu de Itamambuca. Morro Boy ofrece clases seguras, personalizadas y llenas de energía para que vivas la esencia del surf en Ubatuba.',
				social_title: 'Redes sociales',
				contact_title: 'Contacto',
				made_by_mobile1: 'Hecho con 🌊 y ☀️ en Itamambuca',
				made_by_mobile2: 'Desarrollado por Ignacio Vivas',
				made_by: 'Hecho con 🌊 y ☀️ en Itamambuca — Desarrollado por Ignacio Vivas',
			},
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
		interpolation: { escapeValue: false },
	});

export default i18n;
