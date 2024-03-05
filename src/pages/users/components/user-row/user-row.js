import { useDispatch } from 'react-redux';
import { Icon } from '../../../../components';
import { TableRow } from '../table-row/table-row'; // !!! НАПРЯМУЮ из компонента (см)

// import { ROLE } from '../../../../constants';

import styled from 'styled-components';

const UserRowContainer = ({ className, login, registeredAt, roleId: userRoleId }) => {
	const dispatch = useDispatch();

	const roles = []; // запросить с сервера

	const onRoleChange = () => {};

	return (
		<div className={className}>
			<TableRow>
				<div className="login-column">{login}</div>
				<div className="registered-at-column">{registeredAt}</div>
				<div className="role-column">
					<select value={userRoleId} onChange={onRoleChange}>
						{roles.map(({ id: roleId, name: roleName }) => (
							<option value={roleId}>{roleName}</option>
						))}
					</select>
					<Icon
						id="fa fa-floppy-o"
						title="Save"
						color="#405060"
						margin="0 0 0 10px"
						onClick={() => dispatch(/* TODO */)}
					></Icon>
				</div>
			</TableRow>
			<Icon
				id="fa fa-trash-o"
				title="LogOut"
				color="#405060"
				margin="0 0 0 10px"
				onClick={() => dispatch(/* TODO */)}
			></Icon>
		</div>
	);
};

export const UserRow = styled(UserRowContainer)``;
