import Image from 'next/image';
import LightCloud from '@public/images/LightCloud.png';

function WeatherToday() {
	const date = new Date();
	return (
		<div className="flex flex-col h-[80vh] items-center justify-around">
			<Image src={LightCloud} alt="Light Cloud" />
			<h1 className="text-6xl my-10 font-bold">
				15<span className="text-3xl font-normal">°C</span>
			</h1>
			<span className="text-3xl text-formInputBg font-medium">Shower</span>
			<span>Today . {date.toDateString()}</span>
			<span>🤖 Toronto</span>
		</div>
	);
}

export default WeatherToday;
