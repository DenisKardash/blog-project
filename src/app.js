// import styles from './app.module.css';
import styled from 'styled-components';

const Div = styled.div`
	text-align: center;
`;

export const App = () => {
	return (
		<Div>
			<i className="fa fa-camera-retro"></i>
			<i className="fa fa-suitcase"></i>
			<Div>123</Div>
		</Div>
	);
};
