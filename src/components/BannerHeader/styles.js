import styled from 'styled-components';

export const Contianer = styled.div`
	display: flex;
	width: 100%;
	height: 600px;
	flex-direction: column;
	overflow: hidden;
	position: relative;

	background-image: url('../../Images/HOSIER-LANE-2.jpg');

	@media screen and (max-width: ${props => props.theme.mobileWidth}px) {
		height: 300px;
		back
	}
`;

export const Wrapper = styled.div`
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-end;
	padding: 30px;
`;

export const BgImage = styled.img`
	position: absolute;
	width: 100%;
	z-index: -3;
	height: 100%;

`;

export const TitleWrapper = styled.div`
	text-align: right;
	font-size: ${props => props.size}px;
	font-weight: 700;
	width: 100%;
	color:white;

	@media screen and (max-width: ${props => props.theme.mobileWidth}px) {
		font-size: 20px;
	}
`;

export const SliderImage = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
`;