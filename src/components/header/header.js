import { ControlPanel, Logo } from './components';
import styled from 'styled-components';

const Discription = styled.div`
	font-style: italic;
	font-size: 16px;
	font-weight: 500;

	margin-left: -100px;
	color: #405060;
`;

const HeaderContainer = ({ className }) => (
	<header className={className}>
		<Logo />
		<Discription>
			Вэб-технологии
			<br />
			Написание кода
			<br />
			Разбор ошибок
		</Discription>
		<ControlPanel />
	</header>
);

export const Header = styled(HeaderContainer)`
	display: flex;
	justify-content: space-between;
	position: fixed;
	top: 0;
	width: 1000px;
	height: 120px;
	padding: 25px 40px;

	box-shadow: 0px 0px 15px #000;
	background-color: rgb(230, 254, 255);

	color: #405060;
	// margin-top: 80px;
`;
