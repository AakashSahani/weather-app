import { useEffect, useState } from 'react';

function WeatherForm({ todayWeather, setTodayWeather }) {
	const [text, setText] = useState('');
	const [search, setSearch] = useState(false);

	useEffect(() => {
		getTodayWeather();
	}, []);

	const getTodayWeather = async () => {
		const res = await fetch('/api/weather');
		const data = await res.json();
		setTodayWeather((todayWeather) => data.data);
	};

	const handleClick = (e) => {
		setText(e.currentTarget.value);
	};

	const handleSubmit = (e) => {
		if (text === '') {
			alert('please enter something');
		} else {
			e.preventDefault();
			getTodayWeather();
		}
	};
	return (
		<form
			className="w-full z-0 p-10 flex flex-1 justify-between"
			onSubmit={handleSubmit}
		>
			<input
				type="text"
				name="location"
				id="location"
				placeholder="Search for places"
				className="bg-formInputBg p-2 text-white rounded"
				onChange={handleClick}
			/>
			<button type="button" className="text-3xl">
				👺
			</button>
		</form>
	);
}

export default WeatherForm;
