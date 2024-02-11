import styled from 'styled-components';

const ButtonContainer = ({ children, className, width, height, ...props }) => {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
};

export const Button = styled(ButtonContainer)`
	display: flex;
	justify-content: center;
	align-items: center; // убрали так как текст ниже становится
	width: ${({ width = '100%' }) => width};
	height: ${({ height = '100%' }) => height};
	// width: 100px;
	// height: 32px;

	font-size: 16px;
	color: #fff;

	background-color: #405060;
	border: 1px solid #6959CD;
	border-radius: 3px;

	// box-shadow: 0 0 5px gray;

	&:disabled {
		background-color: gray;
		color: darkgray;
	}

	&:hover {
		cursor: pointer;
		background-color: darkorange;
		box-shadow: 0 0 5px darkorange;

		// border: 2px solid #EE7600;
		border: 1px solid #cd6600;

		&:disabled {
			background-color: gray;
			box-shadow: 0 0 5px gray;
			border: 2px solid #696969;
		}
	}
`;
