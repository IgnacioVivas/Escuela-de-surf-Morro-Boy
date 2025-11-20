'use client';

import sun from '@/assets/sun-sonriente.svg';

export const SunSpinner = () => {
	return (
		<div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
			<div className="relative w-64 h-64">
				{/* Sol girando en el centro */}
				<div className="absolute inset-0 flex items-center justify-center">
					<div className="animate-spin-slow">
						<img
							src={sun}
							alt=""
							className="w-24 h-24 drop-shadow-lg filter brightness-110" // 👈 Mejor visibilidad
						/>
					</div>
				</div>

				{/* Texto girando alrededor */}
				<div className="absolute inset-0 animate-spin-slow-reverse">
					<div className="relative w-full h-full">
						<svg width="100%" height="100%" viewBox="0 0 200 200">
							<defs>
								<path id="textPath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
							</defs>
							<text className="text-lg font-bold text-negro">
								<textPath href="#textPath" startOffset="0%" className="fill-current">
									{/* 🌊 Escola de Surf Morro Boy • Carregando • */}
									Sua aventura começa aqui • Escola de Surf Morro Boy •
								</textPath>
							</text>
						</svg>
					</div>
				</div>

				{/* Texto adicional debajo (opcional) */}
				{/* <div className="absolute -bottom-12 left-0 right-0 text-center">
					<p className="text-negro text-sm font-semibold animate-pulse">Preparando ondas incríveis...</p>
				</div> */}
			</div>
		</div>
	);
};
