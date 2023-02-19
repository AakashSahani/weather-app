import { getDailyWeather } from '@/utils/getDailyWeather';

const weather = getDailyWeather();
const data = weather.then((data) => data);

export default function handler(req, res) {
	weather.then((data) => {
		res.status(200).json({ data });
	});
	// res.status(200).json({ name: data });
}
