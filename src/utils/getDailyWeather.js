export async function getDailyWeather() {
	const res = await fetch(
		'https://api.open-meteo.com/v1/forecast?latitude=43.70&longitude=-79.42&current_weather=true&hourly=temperature_2m,relativehumidity_2m,surface_pressure,visibility,windspeed_10m,winddirection_10m'
	);
	const data = await res.json();
	return data;
}
