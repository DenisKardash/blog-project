import styled from 'styled-components';

const IconContainer = ({ className, id }) => (
	<div className={className}>
		<i className={`fa ${id}`} aria-hidden="true"></i>
	</div>
);

export const Icon = styled(IconContainer)`
	font-size: ${({ size = '24px' }) => size}; // ПЕРЕДАЕМ ПРОПСЫ
	margin: ${({ margin = '0' }) => margin}; // если не задавать будет стандарт ?????
	color: ${({ color }) => color};

	// font-size: 70px;
	// margin: 0 10px 0 15px;
	// color: darkorange;
`;

// id - передаем тип иконки
// size - размер
// margin - отступы
