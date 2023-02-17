import { useState } from 'react';

function WeatherForm() {
	const [text, setText] = useState('');
	const [search, setSearch] = useState(false);

	const handleClick = (e) => {
		e.preventDefault();
		setSearch((search) => !search);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('I was clicked');
	};
	return (
		<form
			className="w-full z-0 p-3 flex flex-1 justify-between"
			onSubmit={handleSubmit}
		>
			<input
				type="text"
				name="location"
				id="location"
				placeholder="Search for places"
				className="bg-formInputBg p-2 text-white rounded"
				onClick={handleClick}
			/>
			<button type="button" className="text-3xl">
				👺
			</button>
		</form>
	);
}

export default WeatherForm;
