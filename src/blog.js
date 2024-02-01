// import styles from './app.module.css';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';

import styled from 'styled-components';

const AppColumn = styled.div`
	display: flex; // на блоки делит
	flex-direction: column; // в линию
	justify-content: space-between; // распределяет

	width: 1000px;
	min-height: 100%;
	margin: 0px auto; // центруем
	background-color: #fff;

	// position: fixed;
	// top: 0;
	// margin-top: 80px;
	box-shadow: 0 0 30px #000;
`;

// Чтобы начать работать с CSS Flexbox, нужно сделать контейнер flex контейнером
// flex-direction позволяет вращать главную ось.

const Content = styled.div`
	padding: 120px 0;
`;

const H2 = styled.h2`
	text-align: center;
	height: 1000px;
`;

// const Footer = () => <div>Футер</div>; // пока заглушка

export const Blog = () => {
	return (
		<AppColumn>
			<Header />
			<Content>
				<H2>Контент страницы</H2>
				<Routes>
					<Route path="/" element={<div>Главная страница</div>} />
					<Route path="/login" element={<div>Авторизация</div>} />
					<Route path="/register" element={<div>Регистрация</div>} />
					<Route path="/users" element={<div>Пользователи</div>} />
					<Route path="/post" element={<div>Новая статья</div>} />
					<Route path="/post/postId" element={<div>Статья</div>} />
					<Route path="*" element={<div>Ошибка</div>} />
				</Routes>
			</Content>
			<Footer />
		</AppColumn>
	);
};
