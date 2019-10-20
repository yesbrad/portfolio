import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'

export const Contianer = styled.div`
	display: flex;
	width: 100%;
	height: 150px;
	flex-direction: row;
	padding: 0 20px;
	/* border: 1px solid blue;	 */
`;

export const RowWrapper = styled.div`
	flex: 1;
`;

export const LogoWrapper = styled.div`
	font-size: 32px;
	font-weight: 900;
	display:flex;
	height: 100%;
	align-items: center;
	color: ${props => props.theme.retroBlack};
`;

export const NavWrapper = styled.div`
	display: flex;
	height: 100%;
	/* border: 1px solid red; */
	justify-content: flex-end;
	align-items: center;
`;

export const LinkButton = styled(AnchorLink)`
	margin-left: 20px;
	height: 50%;
	width: 200px;
	text-decoration: none;
	justify-content: center;
	align-items: center;
	display: flex;
	border-radius: 50px;

	&:hover {
		background: ${props => props.theme.primary};;
	}
`;

export const LinkText = styled.div`
	font-size: 18px;
	font-weight: 100;
	color: ${props => props.theme.retroBlack};
	border-bottom-width: 0px;
	text-align: center;
`;

