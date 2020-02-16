import styled from 'styled-components';

export const Contianer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	height: 500px;
	background: ${props => props.theme.retroBlack};

	@media screen and (max-width: ${props => props.theme.mobileWidth}px) {
		flex-direction: column;
		height: 800px;
	}
`;

export const Wrapper = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	/* border: 1px solid; */
	flex-direction: column;
	padding: 20px 80px;

	align-items: center;
	justify-content: center;
`;

export const Image = styled.img`
	width: 300px;
	height: 300px;
	border-radius: 200px;
	border: 20px solid white;
`;

export const TitleWrapper = styled.div`
	font-size: 54px;
	font-weight: 700;
	width: 100%;
	color: white;
	max-width: 400px;
`;

export const InfoText = styled.div`
		color: white;
		max-width: 400px;
		/* border: 1px solid; */
`;