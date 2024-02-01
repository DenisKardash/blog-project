import { Icon } from '../../../../components';
import styled from 'styled-components';

// для выравнивания по правому краю
const RightAligned = styled.div`
	display: flex; // на блоки делит
	justify-content: flex-end; // поместит в конце (справа)
`;

// Кнопку пока сделаем тут
const Button = styled.button`
	font-size: 16px;
	width: 100px;
	height: 25px;
	margin-top: 5px;

	// border-radius: 5px;

	// // font-style: bold;
	// color: white;
	// // color: darkorange;
	// background-color: #405060;
`;

const ControlPanelContainer = ({ className }) => {
	return (
		<div className={className}>
			<RightAligned>
				<Button>Войти</Button>
			</RightAligned>
			<RightAligned>
				<Icon id="fa-backward" color="#405060" margin="10px 0 0 0" />
				<Icon id="fa-file-text" color="#405060" margin="10px 0 0 16px" />
				<Icon id="fa-users" color="#405060" margin="10px 0 0 16px" />
			</RightAligned>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)``;
