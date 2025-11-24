import imgDos from '@/assets/trayectoria-2.jpg';
import imgUno from '@/assets/morro-1.webp';

function Experience() {
	return (
		<div
			id="experiencia"
			className="scroll-mt-[15vh] flex flex-col-reverse md:flex-row justify-center items-center gap-16 lg:gap-20"
		>
			<div className="md:w-1/2">
				<h2 className="text-3xl text-negro md:text-[40px] uppercase tracking-widest mb-4">
					Mais de vinte anos dentro d’água
				</h2>

				<p className="text-[19px] text-gris leading-relaxed mb-3.5">
					Há mais de duas décadas, vivemos e ensinamos o surf nas praias de Ubatuba. Nossa história começou com uma
					simples paixão: o amor pelo mar.
				</p>

				<p className="text-[17px] font-source text-gris leading-relaxed">
					Desde então, formamos surfistas de todos os níveis, sempre com segurança, atenção e técnica. Cada aula é
					guiada com experiência e carinho, respeitando o ritmo de cada aluno. Aqui, você não aprende só a ficar em pé
					na prancha — aprende a sentir o mar, a entender seu movimento e a transformar cada onda em um momento
					inesquecível.
				</p>
			</div>
			<div className="flex flex-col gap-3 w-full lg:flex-row md:w-1/2">
				<img src={imgUno} alt="morro surfeando" className="w-full lg:w-[40%] object-cover" />
				<img src={imgDos} alt="morro surfeando" className="w-full lg:w-[60%] object-cover" />
			</div>
		</div>
	);
}

export default Experience;
