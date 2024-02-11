import { useEffect, useState } from 'react';

import styled from 'styled-components'; // положит в пропсы className

const FooterContainer = ({ className }) => {
	const [city, setSity] = useState('');
	const [temperature, setTemperature] = useState('');
	const [weather, setWeather] = useState('');
	const [weatherIcon, setWeatherIcon] = useState(''); // для иконок

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
				setWeatherIcon(weather[0].icon);
			});
	}, []);

	// const weatherIcomPuth = `http://openweathermap.org/img/w/${weatherIcon}.png`;

	return (
		<div className={className}>
			<div>
				<div>Блог веб-разработчика</div>
				<div>dzianis.kardash@gmail.com</div>
			</div>
			<div style={{ marginRight: 420 }}></div>
			<img
				style={{ marginTop: 5 }}
				src={`http://openweathermap.org/img/w/${weatherIcon}.png`}
				alt="Icon depicting current weather."
			></img>
			<div>{temperature} °C</div>
			<div>
				<div>
					{city}, {new Date().toLocaleString('ru', { day: 'numeric', month: 'long' })}
				</div>
				<div style={{ marginTop: 5, fontSize: 12 }}>{weather}</div>
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
