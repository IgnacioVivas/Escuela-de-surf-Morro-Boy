import bloqueUno from '@/assets/bloques/bloques1.jpg';
import bloqueDos from '@/assets/bloques/bloques4.jpg';
import bloqueTres from '@/assets/bloques/bloques5.jpg';
import bloqueCuatro from '@/assets/bloques/bloques7.jpg';

function Reasons() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center justify-center">
			{/* Imagen 1 */}
			<div className="h-full relative overflow-hidden">
				<img
					className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-110"
					src={bloqueUno}
					alt="supyoga"
				/>
			</div>

			{/* Bloque de texto */}
			<div className="h-full wrap-anywhere bg-[#29282D] py-8 px-12 md:py-[45px] md:px-[60px] md:col-start-1 md:row-start-1">
				<span className="uppercase text-celeste text-sm font-source font-light">Conexão com o mar</span>
				<h6 className="mt-2.5 text-white uppercase tracking-widest text-xl font-medium">Equilíbrio e energia</h6>
				<h6 className="text-gris-secundario mt-2 mb-8 uppercase tracking-widest text-xl font-medium">
					Respire fundo, sinta a brisa e deixe o corpo fluir sobre o mar
				</h6>
				<span className="tracking-widest font-dafoe font-semibold text-sm text-white">Momento só seu</span>
			</div>

			{/* Imagen 2 */}
			<div className="h-full relative overflow-hidden">
				<img
					className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-110"
					src={bloqueDos}
					alt="mujer acostada sobre tabla de surf"
				/>
			</div>

			{/* Bloque de texto */}
			<div className="h-full wrap-anywhere bg-naranja py-8 px-12 md:py-[45px] md:px-[60px] xl:col-start-3 xl:row-start-1">
				<span className="uppercase text-celeste text-sm font-source font-light">Vibe de praia</span>
				<h6 className="mt-2.5 text-white uppercase tracking-widest text-xl font-medium">Descanso que renova</h6>
				<h6 className="text-white mt-2 mb-8 uppercase tracking-widest text-xl font-medium">
					Entre uma onda e outra, existe um lugar perfeito: a areia quente, o sol suave e você
				</h6>
				<span className="tracking-widest font-dafoe font-semibold text-sm text-white">Respira e sente</span>
			</div>

			{/* Imagen 3 */}
			<div className="h-full relative overflow-hidden">
				<img
					className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-110"
					src={bloqueTres}
					alt="mujer feliz por surfear"
				/>
			</div>

			{/* Bloque de texto */}
			<div className="h-full wrap-anywhere bg-celeste py-8 px-12 md:py-[45px] md:px-[60px] md:col-start-1 md:row-start-3 xl:col-start-2 xl:row-start-2">
				<span className="uppercase text-white text-sm font-source font-light">Alegria do surf</span>
				<h6 className="mt-2.5 text-white uppercase tracking-widest text-xl font-medium">Sorrisos que o mar cria</h6>
				<h6 className="text-white mt-2 mb-8 uppercase tracking-widest text-xl font-medium">
					A cada aula, novas conquistas. A cada onda, uma história para contar
				</h6>
				<span className="tracking-widest font-dafoe font-semibold text-sm text-white">Surf é felicidade</span>
			</div>

			{/* Imagen 4 */}
			<div className="h-full relative overflow-hidden">
				<img
					className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-110"
					src={bloqueCuatro}
					alt="surfistas en la playa"
				/>
			</div>

			{/* Bloque final */}
			<div className="h-full wrap-anywhere bg-[#29282D] py-8 px-12 md:py-[45px] md:px-[60px]">
				<span className="uppercase text-celeste text-sm font-source font-light">Essência de Itamambuca</span>
				<h6 className="mt-2.5 text-white uppercase tracking-widest text-xl font-medium">Caminho das ondas</h6>
				<h6 className="text-gris-secundario mt-2 mb-8 uppercase tracking-widest text-xl font-medium">
					A energia muda quando você pisa nesta praia. É liberdade, natureza e aquele chamado do mar
				</h6>
				<span className="tracking-widest font-dafoe font-semibold text-sm text-white">Viva o momento</span>
			</div>
		</div>
	);
}

export default Reasons;
