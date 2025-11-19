import { Facebook, Instagram, MapPin, Send, Smartphone, Waves } from 'lucide-react';
import surfer from '@/assets/surfer.png';

function Footer() {
	return (
		<div className="bg-[#0C0C0C]">
			<div className="px-10 xl:px-30 py-28 grid grid-cols-1 xl:grid-cols-4 gap-10">
				<div className="flex flex-col gap-4">
					<h1 className="text-white text-3xl font-dafoe tracking-widest font-bold uppercase">
						Escola de surf Morro Boy
					</h1>
					<span className="text-[17px] text-[#adadad]">
						O lugar onde a paixão pelo surf encontra o espírito de Itamambuca. A Morro Boy oferece aulas seguras,
						personalizadas e cheias de energia — para que você viva a verdadeira essência do surf em Ubatuba.
					</span>
				</div>

				<div className="flex flex-col gap-4">
					<h3 className="text-white text-lg tracking-widest font-semibold uppercase flex items-center gap-2">
						<Waves className="text-celeste" /> Redes sociais
					</h3>
					<div className="flex gap-2">
						<a href="">
							<span className="bg-naranja size-10 flex justify-center items-center rounded-full">
								<Facebook color="white" size={25} />
							</span>
						</a>

						<a href="">
							<span className="bg-naranja size-10 flex justify-center items-center rounded-full">
								<Instagram color="white" size={25} />
							</span>
						</a>
					</div>
				</div>

				<div className="flex flex-col gap-4">
					<h3 className="text-white text-lg tracking-widest font-semibold uppercase flex items-center gap-2">
						<Waves className="text-celeste" /> Entre em contato
					</h3>
					<div className="flex flex-col items-start gap-2 font-source text-[#adadad] text-base">
						<span className="flex items-center justify-center gap-1 hover:text-celeste cursor-pointer">
							<Smartphone color="white" size={14} />
							<p>+55 12 XXXX-XXXX</p>
						</span>
						<span className="flex items-center justify-center gap-1 hover:text-celeste cursor-pointer">
							<Send color="white" size={14} />
							<p>prueba@escuelasurf.com.br</p>
						</span>
						<span className="flex items-center justify-center gap-1 hover:text-celeste cursor-pointer">
							<MapPin color="white" size={14} />
							<p>Itamambuca – Ubatuba, SP</p>
						</span>
					</div>
				</div>

				<div>
					<img src={surfer} alt="calavera surfeando" />
				</div>
			</div>

			<div className="hidden w-full md:flex items-center justify-center py-4 px-2 bg-black">
				<a href="">
					<span className="text-gris-secundario text-xs text-center">
						Feito com 🌊 e ☀️ em Itamambuca — Desenvolvido por Ignacio Vivas
					</span>
				</a>
			</div>

			<div className="w-full flex flex-col items-center justify-center py-4 px-2 bg-black md:hidden">
				<a href="">
					<span className="text-gris-secundario text-xs text-center">Feito com 🌊 e ☀️ em Itamambuca</span>

					<span className="text-gris-secundario text-xs text-center">Desenvolvido por Ignacio Vivas</span>
				</a>
			</div>
		</div>
	);
}

export default Footer;
