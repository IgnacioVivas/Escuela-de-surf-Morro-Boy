import Hero from './Hero';
import Navigation from './Navigation';
import SocialBar from './SocialBar';

function Header() {
	return (
		<div className="h-screen bg-celeste-fondo flex flex-col">
			<SocialBar />
			<Navigation />
			<Hero />
		</div>
	);
}

export default Header;
