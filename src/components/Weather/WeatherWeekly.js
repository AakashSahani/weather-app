import Card from '../Card';
import { useState } from 'react';

function WeatherWeekly() {
	const [unit, setUnit] = useState(false);
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
			<div className="bg-weeklyBg min-h-screen lg:max-h-fit lg:min-h-fit p-8 gap-7 grid grid-cols-2 lg:grid-cols-5 items-center justify-center w-full">
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
