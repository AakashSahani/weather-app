import WeatherForm from './Weather/WeatherForm';
import WeatherToday from './Weather/WeatherToday';

function Hero() {
	return (
		<div className="bg-mainBg min-h-screen">
			<WeatherForm />
			<WeatherToday />
		</div>
	);
}

export default Hero;
