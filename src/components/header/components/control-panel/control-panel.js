import { Link, useNavigate } from 'react-router-dom';
import { Button, Icon } from '../../../../components';
import styled from 'styled-components';

import { ROLE } from '../../../../constants';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectUserLogin,
	selectUserRole,
	selectUserSession,
} from '../../../../selectors';
import { logout } from '../../../../actions';

// для выравнивания по правому краю
const RightAligned = styled.div`
	display: flex; // на блоки делит
	justify-content: flex-end; // поместит в конце (справа)
	align-items: center; //
`;

const StyledIcon = styled.div`
	&:hover {
		cursor: pointer;
	}
`;

const UserName = styled.div`
	font-size: 18px;
	font-weight: 600;
`;

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();

	const dispatch = useDispatch();
	
	const roleId = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);
	const session = useSelector(selectUserSession);

	return (
		<div className={className}>
			<RightAligned>
				{roleId === ROLE.GUEST ? (
					<Button height="30px">
						<Link to="/login" style={{ color: '#fff' }}>
							Войти
						</Link>
					</Button>
				) : (
					<>
						<UserName>{login}</UserName>
						<StyledIcon>
							<Icon
								id="fa fa-sign-out"
								color="#405060"
								margin="0 0 0 20px"
								onClick={() => dispatch(logout(session))}
							/>
						</StyledIcon>
					</>
				)}
			</RightAligned>
			<RightAligned>
				<StyledIcon onClick={() => navigate(-1)}>
					<Icon id="fa-backward" color="#405060" margin="10px 0 0 0" />
				</StyledIcon>
				<Link to="/post">
					<Icon id="fa-file-text" color="#405060" margin="10px 0 0 16px" />
				</Link>
				<Link to="/users">
					<Icon id="fa-users" color="#405060" margin="10px 0 0 16px" />
				</Link>
			</RightAligned>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)`
	margin-top: 3px;
`;
