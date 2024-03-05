import styled from 'styled-components';

const TableRowContiner = ({ className, children }) => (
	<div className={className}>{children}</div>
);

export const TableRow = styled(TableRowContiner)`
	display: flex;
	align-items: center;


	align-items: center;

	& > div {
		padding: 0 10px;
	}

	& .login-column {
		width: 172px;
	}

	& .registered-at-column {
		width: 213px;
	}

	& .role-column {
		width: auto;
	}
`;
