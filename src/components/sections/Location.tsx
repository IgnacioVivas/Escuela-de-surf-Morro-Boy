import mapa from '@/assets/mapa.png';

function Location() {
	return (
		<div id="locais" className="flex flex-col md:flex-row items-center justify-center gap-16 lg:gap-20">
			<div className="w-full">
				<img src={mapa} alt="mapa de las playas de ubatuba" className="w-full max-w-lg" />
			</div>
			<div className="">
				<h2 className="text-3xl text-negro md:text-[40px] uppercase tracking-widest mb-4">Locais incríveis</h2>

				<p className="text-[19px] text-gris leading-relaxed">
					Descubra as praias mais especiais de Ubatuba — cada uma com sua própria energia, ondas únicas e cenários que
					parecem saídos de um cartão-postal. Itamambuca, Perequê-Açu, Vermelha do Norte e Praia Grande formam um
					verdadeiro paraíso para quem ama o mar, o surf e a natureza.
				</p>

				<div className="hidden xl:flex flex-col gap-2 mt-4 text-sm text-negro font-medium uppercase">
					<span>Itamambuca</span>
					<span>Vermelha do Norte</span>
					<span>Pereque-Acu</span>
					<span>Prai Grande</span>
				</div>
			</div>
		</div>
	);
}

export default Location;
