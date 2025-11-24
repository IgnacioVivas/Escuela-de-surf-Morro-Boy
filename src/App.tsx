import BackToTop from './components/miUi/BackToTop';
import Footer from './components/miUi/Footer';
import Header from './components/miUi/Header';
import { SunSpinner } from './components/miUi/SunSpinner';
import WhatssAppButton from './components/miUi/WhatssAppButton';
import AllAges from './components/sections/AllAges';
import Banner from './components/sections/Banner';
import Booking from './components/sections/Booking';
import Experience from './components/sections/Experience';
import Levels from './components/sections/Levels';
import Location from './components/sections/Location';
import Paradise from './components/sections/Paradise';
import Reasons from './components/sections/Reasons';
import Servicios from './components/sections/Services';
import { usePageLoad } from './hooks/usePageLoad';
import './i18n';

function App() {
	const isLoading = usePageLoad();

	if (isLoading) {
		return <SunSpinner />;
	}

	return (
		<div className="bg-white">
			<Header />
			<Servicios />

			<div className="px-15 pt-30 md:px-10 xl:px-32 flex flex-col gap-[105px]">
				<Paradise />
				<Booking />
				<Levels />
				<Location />
				<Experience />
			</div>

			<div className="py-30">
				<Reasons />
			</div>

			<div className="px-15 pb-28 md:px-10 xl:px-32 flex flex-col gap-[105px]">
				<AllAges />
			</div>
			<Banner />
			<Footer />
			<BackToTop />
			<WhatssAppButton />
		</div>
	);
}

export default App;
