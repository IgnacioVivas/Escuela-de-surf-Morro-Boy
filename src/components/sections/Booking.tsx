import MyCalendar from '../miUi/MyCalendar';

function Booking() {
	return (
		<div id="agendar" className="flex flex-col lg:flex-row items-start gap-16 lg:gap-20">
			<div className="w-full lg:w-1/2 flex flex-col items-start gap-4 order-1 lg:order-1">
				<h2 className="text-3xl text-negro md:text-[40px] uppercase tracking-[.08em]">Agende sua aula de surf</h2>

				<p className="text-[19px] text-gris leading-relaxed">
					Ubatuba oferece ondas para todos os níveis — desde quem vai subir na prancha pela primeira vez até quem já
					sente o chamado do mar há anos. Escolha o dia e o horário que melhor combinam com você e venha viver uma
					experiência inesquecível no paraíso dos surfistas.
				</p>

				<p className="text-[19px] text-gris leading-relaxed">
					Nossas aulas são personalizadas, seguras e conduzidas por instrutores experientes que conhecem cada detalhe da
					praia.
				</p>

				<span className="text-negro font-semibold text-base">O mar te espera. Só falta você.</span>
			</div>

			{/* CALENDARIO */}
			<div className="w-full lg:w-1/2 flex flex-col items-center gap-4 order-2 lg:order-2">
				<MyCalendar />
			</div>
		</div>
	);
}

export default Booking;
