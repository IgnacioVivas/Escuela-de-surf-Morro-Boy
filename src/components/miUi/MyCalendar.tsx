// 'use client';

// import * as React from 'react';
// import { ptBR } from 'date-fns/locale';
// import { Button } from '@/components/ui/button';
// import { Calendar } from '@/components/ui/calendar';
// import { Card, CardContent, CardFooter } from '@/components/ui/card';
// import ButtonDos from './ButtonDos';

// export default function MyCalendar() {
// 	const [dates, setDates] = React.useState<Date[]>([]);
// 	const [selectedTime, setSelectedTime] = React.useState<string | null>(null);
// 	const phone = '5512996049078';

// 	// Generar horarios de 7:00 a 16:00 (de hora en hora)
// 	const timeSlots = Array.from({ length: 10 }, (_, i) => {
// 		const hour = i + 7;
// 		return `${hour.toString().padStart(2, '0')}:00`;
// 	});

// 	// Deshabilitar días anteriores al día de hoy
// 	const today = new Date();
// 	today.setHours(0, 0, 0, 0);

// 	const isDateDisabled = (date: Date) => {
// 		return date < today;
// 	};

// 	// Manejar selección de días (máximo 5)
// 	const handleSelect = (selectedDates: Date[] | undefined) => {
// 		if (!selectedDates) {
// 			setDates([]);
// 			return;
// 		}

// 		// Para el modo "multiple", selectedDates contiene TODAS las fechas seleccionadas
// 		// Incluyendo la que acabas de hacer clic
// 		let newDates = selectedDates;

// 		// Si ya tenemos 5 fechas y el usuario hace clic en una nueva, no hacer nada
// 		if (selectedDates.length > 5) {
// 			return; // No permitir más de 5
// 		}

// 		setDates(newDates);
// 	};

// 	// Función para manejar el botón continuar
// 	const handleContinue = () => {
// 		if (dates.length === 0 || !selectedTime) {
// 			alert('Por favor selecciona al menos um dia e um horário.');
// 			return;
// 		}

// 		// Formatear las fechas en portugués
// 		const selectedDatesFormatted = dates
// 			.sort((a, b) => a.getTime() - b.getTime())
// 			.map((date) =>
// 				date.toLocaleDateString('pt-BR', {
// 					weekday: 'long',
// 					day: 'numeric',
// 					month: 'long',
// 					year: 'numeric',
// 				}),
// 			)
// 			.join('\n• ');

// 		// Crear mensaje hermoso en portugués
// 		const message = ` *Olá Morro Boy Surf School!*

// Gostaria de fazer uma reserva para aulas de surf!

//  DATAS ESCOLHIDAS:
// • ${selectedDatesFormatted}

//  HORÁRIO: ${selectedTime}

//  TOTAL DE DIAS: ${dates.length} dia(s)

// Mal posso esperar para pegar ondas incríveis com vocês!

// Conseguem confirmar essas datas para mim?

// Muito obrigado(a)!`;

// 		// Codificar el mensaje para URL
// 		const encodedMessage = encodeURIComponent(message);

// 		// Crear URL de WhatsApp
// 		const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

// 		// Abrir WhatsApp en nueva pestaña
// 		window.open(whatsappUrl, '_blank');
// 	};

// 	// Formateadores en portugués
// 	const formatters = {
// 		formatWeekdayName: (date: Date) => {
// 			return date.toLocaleDateString('pt-BR', { weekday: 'short' });
// 		},
// 		formatMonth: (date: Date) => {
// 			return date.toLocaleDateString('pt-BR', { month: 'long' });
// 		},
// 		formatCaption: (date: Date) => {
// 			return date.toLocaleDateString('pt-BR', {
// 				month: 'long',
// 				year: 'numeric',
// 			});
// 		},
// 	};

// 	return (
// 		<Card className="gap-0 p-0">
// 			<CardContent className="relative p-0 md:pr-48">
// 				<div className="py-6 px-3">
// 					<Calendar
// 						mode="multiple"
// 						selected={dates}
// 						onSelect={handleSelect}
// 						defaultMonth={new Date()}
// 						disabled={isDateDisabled}
// 						showOutsideDays={false}
// 						locale={ptBR}
// 						className="bg-transparent p-0 [--cell-size:--spacing(10)] md:[--cell-size:--spacing(12)]"
// 						formatters={formatters}
// 						modifiers={{
// 							selected: dates,
// 						}}
// 						modifiersClassNames={{
// 							selected:
// 								'bg-celeste-fondo text-celeste-secundario border border-celeste-secundario rounded-md hover:bg-celeste hover:text-white',
// 						}}
// 						classNames={{
// 							day: 'rounded-md transition-colors hover:bg-celeste hover:text-white',
// 							day_selected: 'bg-blue-500 text-white hover:bg-blue-600',
// 							day_today: 'bg-gray-100 border border-gray-300',
// 						}}
// 					/>
// 					<div className="mt-4 text-sm text-muted-foreground">
// 						<p>
// 							{dates.length} de 5 dias selecionados
// 							{dates.length >= 5 && <span className="text-red-500"> - Limite alcançado</span>}
// 						</p>
// 					</div>
// 				</div>

// 				<div className="no-scrollbar inset-y-0 right-0 flex max-h-72 w-full scroll-pb-6 flex-col gap-4 overflow-y-auto border-t p-3 md:absolute md:max-h-none md:w-48 md:border-t-0 md:border-l">
// 					<h3 className="font-semibold text-center">Horários </h3>
// 					<div className="grid gap-2">
// 						{timeSlots.map((time) => (
// 							<Button
// 								key={time}
// 								// variant={selectedTime === time ? 'default' : 'outline'}
// 								variant="outline"
// 								onClick={() => setSelectedTime(time)}
// 								className={`w-full shadow-none cursor-pointer ${
// 									selectedTime === time && 'bg-naranja hover:bg-naranja'
// 								}`}
// 							>
// 								{time}
// 							</Button>
// 						))}
// 					</div>
// 				</div>
// 			</CardContent>

// 			<CardFooter className="flex flex-col gap-4 border-t px-6 py-5! md:flex-row">
// 				<div className="text-sm flex-1">
// 					{dates.length > 0 && selectedTime ? (
// 						<div>
// 							<p className="font-medium">Reserva selecionada:</p>
// 							<p className="text-muted-foreground">
// 								{dates.length} dia(s) - {selectedTime}
// 							</p>
// 							<div className="mt-2 text-xs text-muted-foreground">
// 								{dates
// 									.sort((a, b) => a.getTime() - b.getTime())
// 									.map((date, index) => (
// 										<span key={date.toISOString()}>
// 											{date.toLocaleDateString('pt-BR', {
// 												day: 'numeric',
// 												month: 'short',
// 											})}
// 											{index < dates.length - 1 ? ', ' : ''}
// 										</span>
// 									))}
// 							</div>
// 						</div>
// 					) : (
// 						<p>Selecione pelo menos um dia e um horário.</p>
// 					)}
// 				</div>

// 				<ButtonDos
// 					disabled={dates.length === 0 || !selectedTime}
// 					className="w-full md:ml-auto md:w-auto"
// 					onClick={handleContinue}
// 				>
// 					FAZER RESERVA
// 				</ButtonDos>
// 			</CardFooter>
// 		</Card>
// 	);
// }

'use client';

import * as React from 'react';
import { ptBR, enUS, es } from 'date-fns/locale';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import ButtonDos from './ButtonDos';
import { useTranslation } from 'react-i18next';

export default function MyCalendar() {
	const { t, i18n } = useTranslation();
	const [dates, setDates] = React.useState<Date[]>([]);
	const [selectedTime, setSelectedTime] = React.useState<string | null>(null);
	const phone = '5512996049078';

	// Configurar locale según idioma actual
	const getLocale = () => {
		switch (i18n.language) {
			case 'pt':
				return ptBR;
			case 'en':
				return enUS;
			case 'es':
				return es;
			default:
				return ptBR;
		}
	};

	// Configurar formato de fecha según idioma
	const getDateFormat = () => {
		switch (i18n.language) {
			case 'pt':
				return 'pt-BR';
			case 'en':
				return 'en-US';
			case 'es':
				return 'es-ES';
			default:
				return 'pt-BR';
		}
	};

	// Generar horarios de 7:00 a 16:00 (de hora en hora)
	const timeSlots = Array.from({ length: 10 }, (_, i) => {
		const hour = i + 7;
		return `${hour.toString().padStart(2, '0')}:00`;
	});

	// Deshabilitar días anteriores al día de hoy
	const today = new Date();
	today.setHours(0, 0, 0, 0);

	const isDateDisabled = (date: Date) => {
		return date < today;
	};

	// Manejar selección de días (máximo 5)
	const handleSelect = (selectedDates: Date[] | undefined) => {
		if (!selectedDates) {
			setDates([]);
			return;
		}

		// Para el modo "multiple", selectedDates contiene TODAS las fechas seleccionadas
		// Incluyendo la que acabas de hacer clic
		let newDates = selectedDates;

		// Si ya tenemos 5 fechas y el usuario hace clic en una nueva, no hacer nada
		if (selectedDates.length > 5) {
			return; // No permitir más de 5
		}

		setDates(newDates);
	};

	// Función para manejar el botón continuar
	const handleContinue = () => {
		if (dates.length === 0 || !selectedTime) {
			alert(t('calendar.noSelection'));
			return;
		}

		// Formatear las fechas según el idioma actual
		const selectedDatesFormatted = dates
			.sort((a, b) => a.getTime() - b.getTime())
			.map((date) => {
				if (i18n.language === 'pt') {
					return date.toLocaleDateString('pt-BR', {
						weekday: 'long',
						day: 'numeric',
						month: 'long',
						year: 'numeric',
					});
				} else if (i18n.language === 'en') {
					return date.toLocaleDateString('en-US', {
						weekday: 'long',
						day: 'numeric',
						month: 'long',
						year: 'numeric',
					});
				} else {
					return date.toLocaleDateString('es-ES', {
						weekday: 'long',
						day: 'numeric',
						month: 'long',
						year: 'numeric',
					});
				}
			})
			.join('\n• ');

		// Siempre enviar el mensaje en portugués (como solicitaste)
		const message = `Olá Morro Boy Surf School! 

Gostaria de fazer uma reserva para aulas de surf! 

DATAS ESCOLHIDAS:
• ${selectedDatesFormatted}

HORÁRIO: ${selectedTime}

TOTAL DE DIAS: ${dates.length} dia(s)

Mal posso esperar para pegar ondas incríveis com vocês! 

Conseguem confirmar essas datas para mim? 

Muito obrigado(a)!`;

		// Codificar el mensaje para URL
		const encodedMessage = encodeURIComponent(message);

		// Crear URL de WhatsApp
		const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

		// Abrir WhatsApp en nueva pestaña
		window.open(whatsappUrl, '_blank');
	};

	// Formateadores según idioma
	const getFormatters = () => {
		const locale = getDateFormat();

		return {
			formatWeekdayName: (date: Date) => {
				return date.toLocaleDateString(locale, { weekday: 'short' });
			},
			formatMonth: (date: Date) => {
				return date.toLocaleDateString(locale, { month: 'long' });
			},
			formatCaption: (date: Date) => {
				return date.toLocaleDateString(locale, {
					month: 'long',
					year: 'numeric',
				});
			},
		};
	};

	// Formatear fechas para mostrar en la interfaz
	const formatDateForDisplay = (date: Date) => {
		const locale = getDateFormat();
		return date.toLocaleDateString(locale, {
			day: 'numeric',
			month: 'short',
		});
	};

	return (
		<Card className="gap-0 p-0">
			<CardContent className="relative p-0 md:pr-48">
				<div className="py-6 px-3">
					<Calendar
						mode="multiple"
						selected={dates}
						onSelect={handleSelect}
						defaultMonth={new Date()}
						disabled={isDateDisabled}
						showOutsideDays={false}
						locale={getLocale()}
						className="bg-transparent p-0 [--cell-size:--spacing(10)] md:[--cell-size:--spacing(12)]"
						formatters={getFormatters()}
						modifiers={{
							selected: dates,
						}}
						modifiersClassNames={{
							selected:
								'bg-celeste-fondo text-celeste-secundario border border-celeste-secundario rounded-md hover:bg-celeste hover:text-white',
						}}
						classNames={{
							day: 'rounded-md transition-colors hover:bg-celeste hover:text-white',
							day_selected: 'bg-blue-500 text-white hover:bg-blue-600',
							day_today: 'bg-gray-100 border border-gray-300',
						}}
					/>
					<div className="mt-4 text-sm text-muted-foreground">
						<p>
							{dates.length} de 5 {t('calendar.selected')}
							{dates.length >= 5 && <span className="text-red-500"> {t('calendar.limitReached')}</span>}
						</p>
					</div>
				</div>

				<div className="no-scrollbar inset-y-0 right-0 flex max-h-72 w-full scroll-pb-6 flex-col gap-4 overflow-y-auto border-t p-3 md:absolute md:max-h-none md:w-48 md:border-t-0 md:border-l">
					<h3 className="font-semibold text-center">{t('calendar.timeSlots')}</h3>
					<div className="grid gap-2">
						{timeSlots.map((time) => (
							<Button
								key={time}
								variant="outline"
								onClick={() => setSelectedTime(time)}
								className={`w-full shadow-none cursor-pointer ${
									selectedTime === time && 'bg-naranja hover:bg-naranja'
								}`}
							>
								{time}
							</Button>
						))}
					</div>
				</div>
			</CardContent>

			<CardFooter className="flex flex-col gap-4 border-t px-6 py-5! md:flex-row">
				<div className="text-sm flex-1">
					{dates.length > 0 && selectedTime ? (
						<div>
							<p className="font-medium">{t('calendar.reservationSelected')}</p>
							<p className="text-muted-foreground">
								{dates.length} {t('calendar.days')} - {selectedTime}
							</p>
							<div className="mt-2 text-xs text-muted-foreground">
								{dates
									.sort((a, b) => a.getTime() - b.getTime())
									.map((date, index) => (
										<span key={date.toISOString()}>
											{formatDateForDisplay(date)}
											{index < dates.length - 1 ? ', ' : ''}
										</span>
									))}
							</div>
						</div>
					) : (
						<p>{t('calendar.noSelection')}</p>
					)}
				</div>

				<ButtonDos
					disabled={dates.length === 0 || !selectedTime}
					className="w-full md:ml-auto md:w-auto"
					onClick={handleContinue}
				>
					{t('calendar.continueButton')}
				</ButtonDos>
			</CardFooter>
		</Card>
	);
}
