import { useState } from 'react';

function WeatherForm() {
	const [text, setText] = useState('');
	const [search, setSearch] = useState(false);

	const handleClick = (e) => {
		setText(e.currentTarget.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (text === '') {
			setSearch(false);
			alert('please enter something');
		} else {
			setSearch(true);
		}
	};
	return (
		<>
			<form
				className="w-full p-10 flex flex-1 gap-4 z-30 "
				onSubmit={handleSubmit}
			>
				<input
					type="text"
					name="location"
					id="location"
					placeholder="Search for places"
					className="bg-formInputBg p-2 text-white rounded flex-1"
					value={text}
					onChange={handleClick}
				/>
				<button type="submit" className="text-3xl">
					{search ? '✖️' : '👺'}
				</button>
			</form>
			<ul
				className={
					search ? 'z-20 absolute bg-mainBg h-screen w-full lg:w-1/3' : 'hidden'
				}
			>
				<li className="w-full p-4">
					<button
						type="submit"
						className="border p-3 w-full rounded-md"
						onClick={handleClick}
						value="Toronto"
					>
						Toronto
					</button>
				</li>
			</ul>
		</>
	);
}

export default WeatherForm;
