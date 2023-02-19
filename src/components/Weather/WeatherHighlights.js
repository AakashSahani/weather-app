import Highlights from '../Highlights';

function WeatherHighlights() {
	return (
		<>
			<h1 className="text-white text-center font-bold text-5xl bg-weeklyBg px-[7%] pt-5">
				HighLights
			</h1>
			<div className="bg-weeklyBg max-h-fit min-h-screen lg:py-[5%] lg:px-[5%] p-10 lg:grid lg:grid-cols-2 lg:items-start lg:justify-center lg:gap-5 flex flex-col  items-center justify-center w-full">
				<Highlights />
				<Highlights />
				<Highlights />
				<Highlights />
			</div>
		</>
	);
}

export default WeatherHighlights;
