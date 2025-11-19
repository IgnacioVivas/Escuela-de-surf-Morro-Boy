import Calendar20 from '../miUi/MyCalendar';
import ButtonDos from '../miUi/ButtonDos';

function Booking() {
	return (
		<div id="agendar" className="flex flex-col lg:flex-row items-start gap-10 lg:gap-20">
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

				{/*  MOBILE → botón va después del calendario
             DESKTOP → botón va acá debajo del texto */}
				<div className="hidden lg:block">
					<ButtonDos>Fazer reserva</ButtonDos>
				</div>
			</div>

			{/* CALENDARIO */}
			<div className="w-full lg:w-1/2 flex flex-col items-center gap-4 order-2 lg:order-2">
				<Calendar20 />

				{/* MOBILE → botón debajo del calendario */}
				<div className="lg:hidden w-full">
					<ButtonDos className="w-full">Fazer reserva</ButtonDos>
				</div>
			</div>
		</div>
	);
}

export default Booking;
