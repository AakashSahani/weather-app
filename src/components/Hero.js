import WeatherForm from './Weather/WeatherForm';
import { useState } from 'react';
import WeatherToday from './Weather/WeatherToday';

function Hero() {
	const [todayWeather, setTodayWeather] = useState();
	return (
		<div className="bg-mainBg h-full lg:h-[inherit] lg:w-1/3">
			<WeatherForm
				todayWeather={todayWeather}
				setTodayWeather={setTodayWeather}
			/>
			<WeatherToday todayWeather={todayWeather} />
		</div>
	);
}

export default Hero;
