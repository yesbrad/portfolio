import styled from 'styled-components';

export const Contianer = styled.div`
	display: flex;
	width: 100%;
	height: 600px;
	flex-direction: column;
	overflow: hidden;
	position: relative;
`;

export const Wrapper = styled.div`
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const BgImage = styled.img`
	position: absolute;
	width: 100%;
	z-index: -3;
`;

export const TitleWrapper = styled.div`
	text-align: center;
	font-size: 40px;
	font-weight: 700;
	width: 40%;
	color:white;
`;

export const SliderImage = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
`;