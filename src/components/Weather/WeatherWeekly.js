import Card from '../Card';
import { useEffect, useState } from 'react';
import { get } from 'lodash';

function WeatherWeekly() {
	const [unit, setUnit] = useState(false);
	const [weeklyWeather, setWeeklyWeather] = useState();
	const [days, setDays] = useState([0, 1, 2, 3, 4]);

	const handleClick = () => {
		setUnit((unit) => !unit);
	};

	useEffect(() => {
		getWeeklyWeather();
		console.log(weeklyWeather);
	}, []);

	// getWeeklyWeather();
	const getWeeklyWeather = async () => {
		const res = await fetch('/api/weather/weekly');
		const data = await res.json();
		setWeeklyWeather((weeklyWeather) => data.data);
	};

	return (
		<>
			<div className="hidden lg:flex justify-end h-[5vh] bg-weeklyBg px-10 items-center pt-6 text-2xl">
				<div className="border rounded-full flex gap-2 px-2 justify-center items-center">
					<button className="opacity-50" onClick={handleClick}>
						°C
					</button>
					<button className="opacity-50" onClick={handleClick}>
						°F
					</button>
				</div>
			</div>
			{weeklyWeather != undefined ? (
				<div className="bg-weeklyBg min-h-screen lg:max-h-fit lg:min-h-fit p-8 gap-7 grid grid-cols-2 lg:grid-cols-5 items-center justify-center w-full">
					{days.map((day, index) => (
						<Card key={index} weeklyWeather={weeklyWeather} index={index} />
					))}
				</div>
			) : (
				<div className="text-white bg-mainBg text-center">
					Data is Loading...
				</div>
			)}
		</>
	);
}

export default WeatherWeekly;
