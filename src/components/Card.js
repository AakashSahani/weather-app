import Image from 'next/image';
import Shower from '@public/images/Shower.png';
import HeavyRain from '@public/images/HeavyRain.png';
import LightRain from '@public/images/LightRain.png';
import HeavyCloud from '@public/images/HeavyCloud.png';
import LightCloud from '@public/images/LightCloud.png';
function Card({ children }) {
	return (
		<div className="weekly-card lg:h-36 lg:w-28">
			<span>Tomorrow</span>
			<Image src={Shower} alt="Shower" className="p-4 w-28 lg:w-auto" />
			<span>16C . 11C</span>
		</div>
	);
}

export default Card;
