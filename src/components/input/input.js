import { forwardRef } from 'react';
import styled from 'styled-components';

const InputContainer = forwardRef(({ className, width, height, ...props }, ref) => {
	return <input className={className} {...props} ref={ref}/>;
});

export const Input = styled(InputContainer)`
	width: ${({ width = '100%' }) => width};
	// height: 35px;
	height: ${({ height = '100%' }) => height};
	margin: 0 0 10px 0;
	padding: 10px;

	font-size: 16px;

	border: 1px solid #405060;
	border-radius: 3px;

	// box-shadow: 0 0 5px gray;
`;
