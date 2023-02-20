import React from 'react';

function Highlights({ title, highlight }) {
	return (
		<div className=" bg-mainBg gap-5 shadow-lg rounded-md w-full lg:w-72 lg:mx-auto min-h-fit lg:h-48 lg:p-2 p-5  my-3 flex flex-col justify-evenly items-center">
			<span>{title}</span>
			<span>{highlight && highlight[0]}</span>
		</div>
	);
}

export default Highlights;
