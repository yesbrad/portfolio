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
	background-image: url(${props => props.image});
	border-top-left-radius: 50px;
	border-bottom-left-radius: 50px;

	@media screen and (max-width: ${props => props.theme.mobileWidth}px) {
		border-radius: 0;
	}
`;

export const ButtonWrapper = styled.div`
	width: 25%;
	height: 100px;
`;