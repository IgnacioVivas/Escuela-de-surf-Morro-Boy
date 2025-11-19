import { Facebook, Instagram, MapPin, Send, Smartphone, X } from 'lucide-react';
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from '../ui/drawer';
import logo from '@/assets/logo-negro.png';

interface MenuDesktopProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

const MenuDesktop = ({ open, onOpenChange }: MenuDesktopProps) => {
	const phone = '5493517713933';
	const message = 'Olá! Quero começar as aulas de surf. Pode me passar mais informações?';

	const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

	return (
		<div>
			<Drawer open={open} onOpenChange={onOpenChange} direction="right">
				<DrawerContent className="bg-white">
					<div className="flex flex-col justify-center mx-20 h-full">
						<div className="absolute top-0 left-0 w-full flex items-center px-6 justify-between">
							<img className="w-28 mt-3" src={logo} alt="logo escuela de surf morro boy" />
							<DrawerClose asChild>
								<X />
							</DrawerClose>
						</div>

						<DrawerHeader className="px-0 mb-5">
							<DrawerTitle className="tracking-widest font-bold text-[22px] text-negro uppercase">
								Surf em Ubatuba
							</DrawerTitle>
							<DrawerDescription className="text-[17px] font-source text-gris">
								Aulas profissionais para todos os níveis <br /> do iniciante ao avançado.
							</DrawerDescription>
						</DrawerHeader>

						<div className="mb-5 flex flex-col items-start gap-2 font-source text-gris text-base">
							<a
								href={url}
								target="_blank"
								className="flex items-center justify-center gap-1 hover:text-celeste cursor-pointer"
							>
								<Smartphone color="black" size={14} />
								<p>+55 12 XXXX-XXXX</p>
							</a>
							<a target="_blank" className="flex items-center justify-center gap-1 hover:text-celeste cursor-pointer">
								<Send color="black" size={14} />
								<p>prueba@escuelasurf.com.br</p>
							</a>
							<a
								href="https://maps.app.goo.gl/MHGEskEDKTHYR6GBA"
								target="_blank"
								className="flex items-center justify-center gap-1 hover:text-celeste cursor-pointer"
							>
								<MapPin color="black" size={14} />
								<p>Praia do Itamambuca, Ubatuba - SP</p>
							</a>
						</div>

						<div className="flex items-center gap-3 font-semibold text-negro">
							<span className="text-xs cursor-default">NOS SIGA:</span>
							<div className="flex items-center gap-2">
								<a href="https://www.instagram.com/morroboyescoladesurf/" target="_blank">
									<Instagram size={14} className="hover:text-celeste" />
								</a>

								<a href="https://www.facebook.com/p/Morro-Boy-Escola-de-Surf-100070004620773/" target="_blank">
									<Facebook size={14} className="hover:text-celeste" />
								</a>
							</div>
						</div>
					</div>
				</DrawerContent>
			</Drawer>
		</div>
	);
};

export default MenuDesktop;
