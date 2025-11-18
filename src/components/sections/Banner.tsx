import banner from '@/assets/playa.png';
import ButtonUno from '../miUi/ButtonUno';

function Banner() {
	return (
		<div className="relative">
			<img src={banner} alt="" />
			<div className="absolute">
				<h2>Do you want to start surfing now?</h2>
				<p>Get on Miami Beach waters! Enjoy a place with perfect surfing conditions and our professional trainers.</p>
				<ButtonUno>STart now</ButtonUno>
			</div>
		</div>
	);
}

export default Banner;
