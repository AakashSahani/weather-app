import Image from 'next/image';
import Shower from '@public/images/Shower.png';
import HeavyRain from '@public/images/HeavyRain.png';
import LightRain from '@public/images/LightRain.png';
import HeavyCloud from '@public/images/HeavyCloud.png';
import LightCloud from '@public/images/LightCloud.png';
function Card({ children, index, weeklyWeather }) {
	// console.log(weeklyWeather.daily.temperature_2m_min[index]);
	return (
		<div className="weekly-card lg:h-fit lg:w-fit">
			<span>{index === 0 ? 'Tomorrow' : weeklyWeather.daily.time[index]}</span>
			<Image src={Shower} alt="Shower" className="p-4 w-28 lg:w-auto" />
			<span>
				{weeklyWeather.daily.temperature_2m_min[index]}C{' '}
				{weeklyWeather.daily.temperature_2m_max[index]}C
			</span>
		</div>
	);
}

export default Card;
