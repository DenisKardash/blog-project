import styled from 'styled-components';

const IconContainer = ({ className, id, title, ...props }) => (
	<div className={className} {...props}>
		<i className={`fa ${id}`} aria-hidden="true" title={`${title}`}></i>
	</div>
);

export const Icon = styled(IconContainer)`
	font-size: ${({ size = '22px' }) => size}; // ПЕРЕДАЕМ ПРОПСЫ
	margin: ${({ margin = '0' }) => margin}; // если не задавать будет стандарт ?????
	color: ${({ color }) => color};

	&:hover {
		cursor: pointer;
	}

	&:hover {
		color: darkorange;
	}
`;

// id - передаем тип иконки
// size - размер
// margin - отступы
