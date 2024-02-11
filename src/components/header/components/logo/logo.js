import { Link } from 'react-router-dom';
import { Icon } from '../../../../components';
import styled from 'styled-components';


const LargeText = styled.div`
	font-size: 48px;
	font-weight: 500;
	line-height: 48px;
	margin-top: 13px;
	// margin-left: 15px;
`;

const SmallText = styled.div`
	font-size: 16px;
	font-weight: 400;
`;

const LogoConttainer = ({ className }) => (
	<Link className={className} to="/">
		<Icon id="fa-address-card" size="70px" margin="0 10px 0 15px" color="darkorange" />

		<div>
			<LargeText>Блог</LargeText>
			<SmallText>веб-разработчика</SmallText>
		</div>
	</Link>
);

export const Logo = styled(LogoConttainer)`
	display: flex;
	margin-top: -18px;
	text-decoration: none;
	color: #405060;
`;
