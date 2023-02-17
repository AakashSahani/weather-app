import WeatherForm from './Weather/WeatherForm';
import WeatherToday from './Weather/WeatherToday';

function Hero() {
	return (
		<div className="bg-mainBg sm:max-h-screen  min-h-screen sm:w-1/3">
			<WeatherForm />
			<WeatherToday />
		</div>
	);
}

export default Hero;
