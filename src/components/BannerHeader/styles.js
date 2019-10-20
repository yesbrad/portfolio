import styled from 'styled-components';

export const Contianer = styled.div`
	display: flex;
	width: 100%;
	height: 600px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const ContianerBackSkew = styled.div`
	position: absolute;
	width: 100%;
	height: 600px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: ${props => props.theme.retroBlack};
	/* transform: skewY(-1deg); */
	z-index: -1;
`;

export const TitleWrapper = styled.div`
	text-align: center;
	font-size: 54px;
	font-weight: 700;
	width: 40%;
	color:white;
`;

export const SliderImage = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
`;