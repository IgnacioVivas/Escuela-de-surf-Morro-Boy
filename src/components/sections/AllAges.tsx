import img1 from '@/assets/allAges-1.png';
import img2 from '@/assets/allAges-2.png';
import img3 from '@/assets/allAges-3.jpg';
import img4 from '@/assets/allAges-4.png';
import img5 from '@/assets/allAges-5.png';
import ButtonDos from '../miUi/ButtonDos';

function AllAges() {
	return (
		<section id="familias" className="flex flex-col md:flex-row items-center gap-16">
			{/* Collage de imágenes superpuestas */}
			<div className="relative w-full md:w-1/2 flex justify-center">
				{/* Imagen principal de fondo */}
				<div className="relative">
					<img src={img4} className="object-cover w-full md:w-[500px]" />
				</div>

				{/* Imagen flotante arriba a la izquirda */}
				<img
					src={img1}
					className="
            absolute -top-6 left-3 
            w-40 md:w-56 
            rounded-xl object-cover
            shadow-xl 
            rotate-3
          "
				/>

				{/* Imagen flotante arriba a la derecha */}
				<img
					src={img5}
					className="
            absolute -top-6 -right-2 
            w-30 md:w-48 
            rounded-xl object-cover
            shadow-xl 
            rotate-3
          "
				/>

				{/* Imagen flotante abajo a la derecha */}
				<img
					src={img2}
					className="
            absolute bottom-2 -right-10 
            w-30 md:w-48 
            rounded-xl object-cover
            shadow-xl 
            rotate-3
          "
				/>

				{/* Imagen flotante abajo a la izquierda */}
				<img
					src={img3}
					className="
            absolute bottom-0 -left-12 
            w-40 md:w-80 
            object-cover
            shadow-lg
            -rotate-6
          "
				/>
			</div>

			<div className="w-full md:w-1/2 flex flex-col gap-4">
				<h2 className="text-3xl md:text-4xl uppercase tracking-[.08em] text-negro">Surf para todas as idades</h2>

				<p className="text-gris text-[19px] leading-relaxed">A partir dos 4 anos, todos podem entrar no mar.</p>

				<p className="text-gris text-[18px] leading-relaxed">
					Na nossa escola, o surf é para todo mundo — crianças, adolescentes, adultos iniciantes e famílias inteiras. As
					aulas são divertidas, seguras e adaptadas ao ritmo e à confiança de cada aluno.
				</p>

				<span className="text-negro font-semibold text-lg">Surf é conexão, alegria e memória para a vida toda.</span>

				<ButtonDos>Quero desconto familiar</ButtonDos>
			</div>
		</section>
	);
}

export default AllAges;
