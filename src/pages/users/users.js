// import { useDispatch } from 'react-redux';
import { H2 } from '../../components';
import { TableRow, UserRow } from './components';
// import { ROLE } from '../../constants';

import styled from 'styled-components';

const UsersContainer = ({ className }) => {
	// const dispatch = useDispatch();

	// const roles = []; // запросить с сервера
	const users = []; // запросить с сервера

	return (
		<div className={className}>
			<H2>Пользователи</H2>
			<div>
				<TableRow>
					<div className="login-column">Логин</div>
					<div className="registered-at-column">Дата Регистрации</div>
					<div className="role-column">Роль</div>
				</TableRow>
				{users.map(({ id, login, registeredAt, roleId }) => (
					<UserRow key={id} login={login} registeredAt={registeredAt} roleId={roleId} />
				))}
			</div>
		</div>
	);
};

export const Users = styled(UsersContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	width: 570px;

	color: #405060;
`;
