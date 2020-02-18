import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'

export const Contianer = styled.div`
	display: flex;
	width: 100%;
	height: 150px;
	flex-direction: row;
	padding: 0 30px;
	/* position: absolute; */
	/* border: 1px solid green;	 */
`;

export const RowWrapper = styled.div`
	flex: 1;
`;

export const LogoWrapper = styled.div`
	font-size: 42px;
	font-weight: 900;
	display:flex;
	height: 100%;
	align-items: center;
	color: white;

	/* @media screen and (max-width: ${props => props.theme.mobileWidth}px) {
		font-size: 60px;
	} */
`;

export const NavWrapper = styled.div`
	display: flex;
	height: 100%;
	/* border: 1px solid red; */
	justify-content: flex-end;
	align-items: center;

	@media screen and (max-width: ${props => props.theme.mobileWidth}px) {
		display: none;
	}
`;

export const LinkButton = styled(AnchorLink)`
	margin-left: 20px;
	height: 50%;
	width: 200px;
	text-decoration: none;
	justify-content: center;
	align-items: center;
	display: flex;
	/* border-radius: 50px; */

	&:hover {
		border: 2px solid ${props => props.theme.primary};;
	}
`;

export const LinkText = styled.div`
	font-size: 18px;
	font-weight: 100;
	color: white;
	border-bottom-width: 0px;
	text-align: center;
`;

