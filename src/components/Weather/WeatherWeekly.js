import Card from '../Card';
import Image from 'next/image';
import Shower from '@public/images/Shower.png';
import HeavyRain from '@public/images/HeavyRain.png';
import LightRain from '@public/images/LightRain.png';
import HeavyCloud from '@public/images/HeavyCloud.png';
import LightCloud from '@public/images/LightCloud.png';
function WeatherWeekly() {
	return (
		<div className="bg-weeklyBg max-h-screen min-h-fit p-10 gap-7 grid grid-cols-2 items-center justify-center w-full">
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	);
}

export default WeatherWeekly;