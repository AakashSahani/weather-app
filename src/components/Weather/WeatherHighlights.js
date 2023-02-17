import Highlights from '../Highlights';

function WeatherHighlights() {
	return (
		<>
			<div className="bg-weeklyBg max-h-fit sm:min-h-fit min-h-screen sm:p-4  p-10 flex sm:grid sm:grid-cols-2 sm:gap-2 flex-col items-center justify-center w-full">
				<Highlights />
				<Highlights />
				<Highlights />
				<Highlights />
			</div>
		</>
	);
}

export default WeatherHighlights;
