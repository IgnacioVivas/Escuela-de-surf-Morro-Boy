'use client';

import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

import { enUS, ptBR } from 'react-day-picker/locale';

const localizedStrings = {
	'pt-BR': {
		title: 'Agende sua aula',
		description: 'Selecione até 5 datas para sua aula',
	},
	'en-US': {
		title: 'Book your lesson',
		description: 'Select up to 5 dates for your lesson',
	},
} as const;

function MyCalendar() {
	const today = new Date();
	today.setHours(0, 0, 0, 0);

	// Día de hoy seleccionado por defecto
	const [dates, setDates] = React.useState<Date[]>([today]);
	const [locale, setLocale] = React.useState<keyof typeof localizedStrings>('pt-BR');
	const [selectedTime, setSelectedTime] = React.useState<string | null>('10:00');

	const timeSlots = Array.from({ length: 10 }, (_, i) => {
		const hour = i + 7;
		return `${hour.toString().padStart(2, '0')}:00`;
	});

	//  Función para selección múltiple
	const handleSelectDates = (selectedDates: Date[] | undefined) => {
		if (!selectedDates) {
			setDates([today]);
			return;
		}

		if (selectedDates.length > 5) {
			const limitedDates = selectedDates.slice(0, 5);
			setDates(limitedDates);
		} else {
			setDates(selectedDates);
		}
	};

	// Función para deshabilitar fechas pasadas
	const isDateDisabled = (date: Date) => {
		const today = new Date();
		today.setHours(0, 0, 0, 0);
		return date < today;
	};

	return (
		<Card className="gap-0 p-0">
			<CardHeader className="border-b">
				<CardTitle>{localizedStrings[locale].title}</CardTitle>
				<CardDescription>{localizedStrings[locale].description}</CardDescription>

				<CardAction>
					<Select value={locale} onValueChange={(value) => setLocale(value as keyof typeof localizedStrings)}>
						<SelectTrigger className="w-[150px]">
							<SelectValue placeholder="Idioma" />
						</SelectTrigger>
						<SelectContent align="end">
							<SelectItem value="pt-BR">Português</SelectItem>
							<SelectItem value="en-US">English</SelectItem>
						</SelectContent>
					</Select>
				</CardAction>
			</CardHeader>

			<CardContent className="relative p-0 md:pr-48">
				<div className="p-6">
					<Calendar
						mode="multiple"
						selected={dates}
						onSelect={handleSelectDates}
						defaultMonth={today}
						disabled={isDateDisabled}
						max={5}
						locale={locale === 'pt-BR' ? ptBR : enUS}
						className="bg-transparent p-0 [--cell-size:--spacing(10)] md:[--cell-size:--spacing(12)] **:aria-selected:bg-celeste **:aria-selected:text-white"
						// className="bg-transparent p-0 [--cell-size:--spacing(10)] md:[--cell-size:--spacing(12)] **:aria-selected:bg-celeste-fondo **:aria-selected:text-celeste-secundario"
					/>
				</div>

				<div className="no-scrollbar inset-y-0 right-0 flex max-h-72 w-full scroll-pb-6 flex-col gap-4 overflow-y-auto border-t p-6 md:absolute md:max-h-none md:w-48 md:border-t-0 md:border-l">
					<div className="grid gap-2">
						{timeSlots.map((time) => (
							<Button
								key={time}
								variant={selectedTime === time ? 'default' : 'outline'}
								onClick={() => setSelectedTime(time)}
								className="w-full shadow-none"
							>
								{time}
							</Button>
						))}
					</div>
				</div>
			</CardContent>
		</Card>
	);
}

export default MyCalendar;
