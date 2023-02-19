export async function getWeeklyWeather() {
	const res = await fetch(
		'https://api.open-meteo.com/v1/forecast?latitude=43.70&longitude=-79.42&daily=weathercode,temperature_2m_min,temperature_2m_max&timezone=GMT'
	);
	const data = await res.json();
	return data;
}
