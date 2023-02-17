import Card from '../Card';
import Image from 'next/image';
import Shower from '@public/images/Shower.png';
import HeavyRain from '@public/images/HeavyRain.png';
import LightRain from '@public/images/LightRain.png';
import HeavyCloud from '@public/images/HeavyCloud.png';
import LightCloud from '@public/images/LightCloud.png';
function WeatherWeekly() {
	return (
		<>
			<div className="hidden sm:flex justify-end h-[5vh] bg-weeklyBg px-10 items-center pt-2 text-2xl">
				<button>🌞</button>
				<button>🌛</button>
			</div>
			<div className="bg-weeklyBg max-h-screen sm:max-h-[30vh] sm:h-[25vh] min-h-fit p-8 gap-7 grid grid-cols-2 sm:grid-cols-5 items-center justify-center w-full">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</>
	);
}

export default WeatherWeekly;
