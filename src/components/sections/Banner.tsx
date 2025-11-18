import banner from '@/assets/playa.png';
import ButtonUno from '../miUi/ButtonUno';

function Banner() {
	return (
		<div className="relative flex justify-center items-center ">
			<img src={banner} alt="playa" />
			<div className="absolute text-white flex flex-col justify-center items-center">
				<h2 className="text-3xl text-center font-bold md:text-[40px] uppercase tracking-widest mb-4">
					Do you want to <br /> start surfing now?
				</h2>
				<p className="text-[19px] text-center leading-relaxed">
					Get on Miami Beach waters! Enjoy a place with perfect surfing conditions and our professional trainers.
				</p>
				<ButtonUno>STart now</ButtonUno>
			</div>
		</div>
	);
}

export default Banner;
