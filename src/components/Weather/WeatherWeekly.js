import Image from 'next/image';
import Shower from '@public/images/Shower.png';
import HeavyRain from '@public/images/HeavyRain.png';
import LightRain from '@public/images/LightRain.png';
import HeavyCloud from '@public/images/HeavyCloud.png';
import LightCloud from '@public/images/LightCloud.png';
function WeatherWeekly() {
	return (
		<div className="bg-weeklyBg max-h-screen min-h-fit p-10 gap-7 grid grid-cols-2 items-center justify-center w-full">
			<div className="flex flex-col justify-evenly items-center p-5 h-48 w-fit rounded-md shadow-lg bg-mainBg mx-auto">
				<span>Tomorrow</span>
				<Image src={Shower} alt="Shower" className="p-4" />
				<span>16C . 11C</span>
			</div>
			<div className="flex flex-col justify-evenly items-center p-5 h-48 w-fit rounded-md shadow-lg bg-mainBg mx-auto">
				<span>Tomorrow</span>
				<Image src={Shower} alt="Shower" className="p-4" />
				<span>16C . 11C</span>
			</div>
			<div className="flex flex-col justify-evenly items-center p-5 h-48 w-fit rounded-md shadow-lg bg-mainBg mx-auto">
				<span>Tomorrow</span>
				<Image src={Shower} alt="Shower" className="p-4" />
				<span>16C . 11C</span>
			</div>
			<div className="flex flex-col justify-evenly items-center p-5 h-48 w-fit rounded-md shadow-lg bg-mainBg mx-auto">
				<span>Tomorrow</span>
				<Image src={Shower} alt="Shower" className="p-4" />
				<span>16C . 11C</span>
			</div>
			<div className="flex flex-col justify-evenly items-center p-5 h-48 w-fit rounded-md shadow-lg bg-mainBg mx-auto">
				<span>Tomorrow</span>
				<Image src={Shower} alt="Shower" className="p-4" />
				<span>16C . 11C</span>
			</div>
		</div>
	);
}

export default WeatherWeekly;
