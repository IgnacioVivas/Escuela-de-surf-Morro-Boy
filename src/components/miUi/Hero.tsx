import banner from '@/assets/banner-uno.jpg';
import logo from '@/assets/logo.png';

const Hero = () => {
	return (
		<div className="flex-1 bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }}>
			<div className="h-full w-full flex flex-col justify-center items-center">
				<img src={logo} alt="Logo Morro Boy" className="w-sm md:w-md" />
			</div>
		</div>
	);
};

export default Hero;
