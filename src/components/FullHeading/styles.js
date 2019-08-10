import styled from 'styled-components';

export const Contianer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	padding: 40px;
	/* align-items: center; */
`;

export const TitleWrapper = styled.div`
	font-size: 54px;
	font-weight: 700;
	color: ${props => props.theme.retroBlack};;
`;