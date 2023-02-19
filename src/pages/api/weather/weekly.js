import { getWeeklyWeather } from '@/utils/getWeeklyWeather';

const weather = getWeeklyWeather();
const data = weather.then((data) => data);

export default function handler(req, res) {
	weather.then((data) => {
		res.status(200).json({ data });
	});
	// res.status(200).json({ name: data });
}
