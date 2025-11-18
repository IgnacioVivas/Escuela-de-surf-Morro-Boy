import { Facebook, Instagram, MapPin, Send, Smartphone } from 'lucide-react';

const SocialBar = () => {
	return (
		<div className="hidden bg-white h-[6vh] px-5 md:px-10 border-b-2 border-b-[#F4F4F4] md:flex justify-between items-center">
			<div className="flex items-center gap-3 font-semibold text-negro">
				<span className="text-xs cursor-default">NOS SIGA:</span>
				<div className="flex items-center gap-2">
					<a href="">
						<Instagram size={14} className="hover:text-celeste" />
					</a>

					<a href="">
						<Facebook size={14} className="hover:text-celeste" />
					</a>
				</div>
			</div>
			<div className="flex items-center gap-4 font-source text-negro text-sm">
				<span className="flex items-center justify-center gap-1 hover:text-celeste cursor-pointer">
					<Smartphone size={14} />
					<p>+54 9 3516229133</p>
				</span>
				<span className="flex items-center justify-center gap-1 hover:text-celeste cursor-pointer">
					<Send size={14} />
					<p>prueba@escuelasurf.com.br</p>
				</span>
				<span className="flex items-center justify-center gap-1 hover:text-celeste cursor-pointer">
					<MapPin size={14} />
					<p>184 Ubatuba Itamambuca 2577</p>
				</span>
			</div>
		</div>
	);
};

export default SocialBar;
