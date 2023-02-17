import Highlights from '../Highlights';

function WeatherHighlights() {
	return (
		<>
			<h1 className="text-white text-center font-bold text-5xl bg-weeklyBg px-[7%] pt-5">
				HighLights
			</h1>
			<div className="bg-weeklyBg max-h-fit sm:max-h-[70vh] h-screen sm:py-10 sm:px-[20%] p-10 sm:grid sm:grid-cols-2 sm:items-start sm:justify-center sm:gap-0 flex flex-col  items-center justify-center w-full">
				<Highlights />
				<Highlights />
				<Highlights />
				<Highlights />
			</div>
		</>
	);
}

export default WeatherHighlights;
