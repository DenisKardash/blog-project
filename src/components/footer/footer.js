import { useEffect, useState } from 'react';

import styled from 'styled-components'; // положит в пропсы className

const FooterContainer = ({ className }) => {
	const [city, setSity] = useState('');
	const [temperature, setTemperature] = useState('');
	const [weather, setWeather] = useState('');

	useEffect(() => {
		fetch(
			'https://api.openweathermap.org/data/2.5/weather?q=Варшава&units=metric&lang=ru&appid=fc8f3da7e943a0a91a1ce627de5223ce',
		)
			.then((res) => res.json()) // res = response
			.then(({ name, main, weather }) => {
				// Обработаем полученные данные - наш массив о погоде
				setSity(name);
				setTemperature(Math.round(main.temp)); // ОКРУГЛИМ
				setWeather(weather[0].description);
			});
	}, []);

	return (
		<div className={className}>
			<div>
				<div>Блог веб-разработчика</div>
				<div>dzianis.kardash@gmail.com</div>
			</div>
			<div>
				<div>
					{city}, {new Date().toLocaleString('ru', { day: 'numeric', month: 'long' })}
				</div>
				<div>
					{temperature} °C - {weather}
				</div>
				{/* <div>{weather}</div> */}
			</div>
		</div>
	);
};

export const Footer = styled(FooterContainer)`
	display: flex;
	justify-content: space-between;
	align-items: center;

	height: 120px;
	width: 1000px;
	padding: 20px 40px;
	box-shadow: 0px 0px 15px #000;
	background-color: rgb(230, 254, 255);

	font-weight: bold;
	color: #405060;
`;
