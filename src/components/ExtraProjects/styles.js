import styled from 'styled-components';
import {useSpring, animated} from 'react-spring'

export const Contianer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
	height: auto;
	/* align-items: center; */

	/* padding: 30px 50px; */

	@media screen and (max-width: ${props => props.theme.mobileWidth}px) {
		border-radius: 0;
		flex-direction: column;
	}
`;

export const ColumnWrapper = styled.div`
	width: 100%;
	/* height: 900px; */
	padding: 3em;

	${props => props.double && `
		width: 200%;
	`};


	@media screen and (max-width: ${props => props.theme.mobileWidth}px) {
		/* height: 800px; */
		width: 100%;
	}

	/* border: 1px solid; */

`;

export const InfoWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	margin: auto;
	padding: 50px;
	border-radius: 30px;
	background: linear-gradient(#FF512F, #DD2476);
	
	${props => props.titlePort && `
		margin-top: 20px;
	`};

	${props => props.second && `
		background: linear-gradient(#ABFF00, #00EF60);
	`};
	
	@media screen and (max-width: ${props => props.theme.mobileWidth}px) {
		padding: 50px;
	}
`;

export const TitleWrapper = styled.div`
	font-size: 44px;
	font-weight: 700;
	color: white;
`;

export const MiniDescription = styled.div`
	font-size: 18px;
	color: ${props => props.theme.midGray};
	margin-bottom: 50px;
	color: white;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	height: 100%;
	flex-direction: row;
	margin-top: 100px;
	align-items: flex-end;
	justify-content: flex-end;
`;