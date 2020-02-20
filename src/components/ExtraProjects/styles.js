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
	/* height: 700px; */
	padding: 3em;

	${props => props.double && `
		width: 200%;
	`};


	@media screen and (max-width: ${props => props.theme.mobileWidth}px) {
		height: 500px;
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

export const BannerImage = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	/* background-size: 90%;	 */
	background-image: url(${props => props.image});	
	border-radius: 50px;
	overflow: hidden;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	height: 50px;
	flex-direction: row;
	margin-top: 100px;
	/* align-items: flex-end */
	justify-content: flex-end;
	/* border: 1px solid; */
`;

export const ProjectInfo = styled(animated.div)`
	color: ${props => props.theme.retroBlack};;
	margin-top: 15px;
	max-width: 500px;
`;

export const PortfolioHeading = styled.span`
	font-size: 65px;
	/* border: 1px solid; */
	font-weight: 900;
	color: #444;
`;