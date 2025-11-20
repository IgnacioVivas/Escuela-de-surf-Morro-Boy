import paradise from '@/assets/paraiso.jpg';
import { MapPin } from 'lucide-react';

function Paradise() {
	return (
		<div
			id="paraiso"
			className="scroll-mt-[12vh] flex flex-col md:flex-row items-center justify-center gap-16 lg:gap-20"
		>
			<div>
				<img src={paradise} alt="" />
			</div>
			<div>
				<h2 className="text-3xl text-negro md:text-[40px] uppercase tracking-[.08em] mb-1">Paraíso dos surfistas</h2>
				<a
					className="flex items-center gap-1 text-naranja mb-4 hover:text-amarillo"
					href="https://maps.app.goo.gl/MHGEskEDKTHYR6GBA"
					target="_blank"
				>
					<MapPin size={14} /> <span className="text-sm">Praia do Itamambuca, Ubatuba - SP</span>
				</a>
				<p className="text-[19px] text-gris leading-relaxed">
					Ubatuba é um pedacinho de paraíso no litoral de São Paulo — um lugar onde a mata atlântica abraça o mar e as
					ondas parecem feitas sob medida para quem vive a paixão pelo surf. Aqui, cada praia tem sua própria energia:
					algumas perfeitas para iniciantes, outras desafiadoras para quem busca emoção e evolução na prancha.
				</p>
			</div>
		</div>
	);
}

export default Paradise;
