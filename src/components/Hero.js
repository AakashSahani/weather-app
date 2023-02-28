import WeatherForm from './Weather/WeatherForm';
import WeatherToday from './Weather/WeatherToday';

function Hero({ todayWeather }) {
	return (
		<div className="bg-mainBg h-full lg:h-[inherit] lg:w-1/3 z-0">
			<WeatherForm />
			<WeatherToday todayWeather={todayWeather} />
		</div>
	);
}

export default Hero;
