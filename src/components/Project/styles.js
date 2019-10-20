import styled from 'styled-components';

export const Contianer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
	height: auto;
	/* align-items: center; */

	@media screen and (max-width: ${props => props.theme.mobileWidth}px) {
		border-radius: 0;
		flex-direction: column;
	}
`;

export const ColumnWrapper = styled.div`
	width: 100%;
	height: 700px;
	padding: 20px 0;
	/* border: 1px solid; */

`;

export const InfoWrapper = styled.div`
	width: 100%;
	height: 100%;
	padding: 100px;
`;

export const TitleWrapper = styled.div`
	font-size: 44px;
	font-weight: 700;
	color: ${props => props.theme.retroBlack};;
`;

export const MiniDescription = styled.div`
	font-size: 18px;
	color: ${props => props.theme.midGray};
	margin-bottom: 50px;
`;

export const BannerImage = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	background-size: 90%;	
	background-image: url(${props => props.image});
		/* border-top-left-radius: 50px;
	border-bottom-left-radius: 50px; */

	@media screen and (max-width: ${props => props.theme.mobileWidth}px) {
		border-radius: 0;
	}
`;

export const ButtonWrapper = styled.div`
display: flex;
	width: 50%;
	height: 50px;
	flex-direction: row;
	/* border: 1px solid; */
	justify-content: space-between;
`;

export const ProjectInfo = styled.div`
		color: ${props => props.theme.retroBlack};;
margin-top: 15px;
`;