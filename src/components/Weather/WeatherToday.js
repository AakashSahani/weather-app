import Image from 'next/image';
import { useEffect, useState } from 'react';
import Snow from '@public/images/Snow.png';
import Hail from '@public/images/Hail.png';
import Clear from '@public/images/Clear.png';
import Sleet from '@public/images/Sleet.png';
import Shower from '@public/images/Shower.png';
import LightRain from '@public/images/LightRain.png';
import HeavyRain from '@public/images/HeavyRain.png';
import HeavyCloud from '@public/images/HeavyCloud.png';
import LightCloud from '@public/images/LightCloud.png';
import Thunderstorm from '@public/images/Thunderstorm.png';

function WeatherToday({ todayWeather }) {
	const date = new Date();
	const [weather, setWeather] = useState([]);
	const code = todayWeather && todayWeather.current_weather.weathercode;
	useEffect(() => {
		// weatherImg(1);
		code && weatherImg(0);
		// console.log(weather[0].weather.src);
		console.log(todayWeather);
		console.log(weather);
	}, [todayWeather]);
	const weatherImg = () => {
		(code === 0 || 1) && setWeather((weather) => [{ weather: Clear }]);
		code === 2 && setWeather((weather) => [{ weather: LightCloud }]);
		code === 3 && setWeather((weather) => [{ weather: HeavyCloud }]);
		// code === 51 ||
		// 	53 ||
		// 	55 ||
		// 	56 ||
		// 	(57 && setWeather((weather) => [{ weather: LightRain }]));
		// code === 61 ||
		// 	63 ||
		// 	65 ||
		// 	66 ||
		// 	(67 && setWeather((weather) => [{ weather: HeavyRain }]));
		// code === 71 ||
		// 	73 ||
		// 	75 ||
		// 	(77 && setWeather((weather) => [{ weather: Snow }]));
		// code === 80 || 81 || (82 && setWeather((weather) => [{ weather: Shower }]));
		// code === 99 && setWeather((weather) => [{ weather: Hail }]);
		// code === 95 || (96 && setWeather((weather) => [{ weather: Thunderstorm }]));
	};
	return todayWeather === undefined ? (
		<div>Waiting on Data</div>
	) : (
		<div className="flex flex-col h-fit p-10 gap-10 bg-mainBg items-center justify-around">
			<Image
				src={weather.length === 1 ? weather[0].weather : LightCloud}
				alt="Light Cloud"
			/>
			<h1 className="text-5xl my-10 font-bold flex justify-center items-center gap-2">
				{todayWeather.current_weather.temperature}
				<span className="text-3xl font-normal">°C</span>
			</h1>
			<span className="text-3xl text-formInputBg font-medium">Shower</span>
			<span>Today . {date.toDateString()}</span>
			<span>🤖 Toronto</span>
		</div>
	);
}

export default WeatherToday;
