import Card from '../Card';
import { useState } from 'react';
import { API_URL } from 'config';

function WeatherWeekly({ weeklyWeather }) {
	const [unit, setUnit] = useState(false);
	const [days, setDays] = useState([0, 1, 2, 3, 4]);

	const handleClick = () => {
		setUnit((unit) => !unit);
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
			{weeklyWeather === undefined ? (
				<div className="text-white bg-mainBg text-center lg:h-1/3">
					Data is Loading...
				</div>
			) : (
				<div className="bg-weeklyBg min-h-screen lg:max-h-fit lg:min-h-fit p-8 gap-7 grid grid-cols-2 lg:grid-cols-5 items-center justify-center w-full">
					{days.map((day, index) => (
						<Card key={index} weeklyWeather={weeklyWeather} index={index} />
					))}
				</div>
			)}
		</>
	);
}
export default WeatherWeekly;
