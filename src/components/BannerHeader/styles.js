import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { IoMdMenu, IoIosClose } from 'react-icons/io';

export const Contianer = styled.div`
    width: 100%;
    padding: 2em;
    padding-top: 0px;
`;

export const PanelWrapper = styled.div`
    background: linear-gradient(#7f00ff, #e100ff);
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    height: 100%;
	position: relative;
    /* border: 1px solid blue;	 */
`;

export const Wrapper = styled.div`
    display: flex;
    padding: 1rem 2rem;
    height: 300px;
    overflow: auto;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
`;

export const TitleWrapper = styled.div`
    text-align: right;
    font-size: ${props => props.size}rem;
    font-weight: 700;
    color: white;

    ${props =>
        props.small &&
        `
		font-weight: 350;
	`};
`;

export const SliderImage = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;



export const NavContianer = styled.div`
    display: flex;
    width: 100%;
    height: 150px;
    flex-direction: row;
    padding: 0 2rem;
    /* position: absolute; */
    /* border: 1px solid green;	 */

	@media screen and (max-width: ${props => props.theme.mobileWidth}px) {
		padding: 0 1em;
	}
`;

export const RowWrapper = styled.div`
    flex: 1;
`;

export const LogoWrapper = styled.div`
	font-size: 2rem;
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

export const HambergerWrapper = styled.div`
	display: flex;
    height: 100%;
    /* border: 1px solid red; */
    justify-content: flex-end;
    align-items: center;

	@media screen and (min-width: ${props => props.theme.mobileWidth}px) {
        display: none;
    }
`;

export const HambergerButton = styled.div`
	width: 50px;
	height: 50px;
	/* background: red; */
`;

export const HambergerIcon = styled(IoMdMenu)`
	color: white;
	width: 100%;
	height: 100%;
`;

export const LinkButton = styled(AnchorLink)`
	margin-left: 100px;
	height: 30%;
	/* width: 200px; */
	text-decoration: none;
	justify-content: center;
	align-items: center;
	display: flex;
	border-radius: 50px;
	padding: 0px 30px;
	color: white;
	transition: background 200ms, color 200ms;

	&:hover {
		/* border: 2px solid ${props => props.theme.primary};; */
		background: white;
		color: black;
	}
`;

export const LinkText = styled.div`
    font-size: 18px;
    font-weight: 100;
    border-bottom-width: 0px;
    text-align: center;
    color: inherit;
`;

export const MenuPanelWrapper = styled.div`
	position: absolute;
	background: black;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    width: 100%;
	top: 0px; 
    bottom: 0px;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-direction: column;
	clip-path: circle(141.2% at 100% 0);
    transition: clip-path 0.5s;

	${props => props.isOpen && `
		clip-path: circle(0.0% at 100% 0);
	`};
`;

export const MenuPanelButton = styled(AnchorLink)`
	width: 200px;
	height: 50px;
	background: white;
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	border-radius: 30px;
`;

export const MenuPanelText = styled.a`
	font-size: 32px;
	font-weight: 700;
	color: black;
`;

export const MenuPanelExit = styled(IoIosClose)`
	width:60px;
	height: 60px;
	color: white;
	position:absolute;
	right: 0px;
	top: 20px;
	margin: 10px 10px 0 0px;
	transform: scale(1);
	transition: transform 0.3s;

	&:hover {
		transform: scale(1.2);
	}
`;