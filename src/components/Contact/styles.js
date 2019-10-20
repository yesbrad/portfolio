import styled from 'styled-components';

export const Contianer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
	padding: 40px;
	align-items: center;
	justify-content: center;
	height: 500px;
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

export const TitleWrapper = styled.div`
	font-size: 54px;
	font-weight: 700;
	color: ${props => props.theme.retroBlack};;
`;

export const InfoText = styled.div`
	
`;

export const InputTitle = styled.div`
	width: 100%;
	margin-bottom: 5px;
	color: ${props => props.theme.retroBlack};
	font-size: 18px;
	font-weight: 600;	

	${props => props.red && `
		color: red;
	`};
`;

export const Input = styled.input`
	border: 1px solid ${props => props.theme.midGray};;
	width: 100%;
	height: 40px;
	margin-bottom: 10px;
`;

export const TextArea = styled.textarea`
	border: 1px solid ${props => props.theme.midGray};;
	width: 100%;
	height: 150px;
	margin-bottom: 20px;
`;

export const ButtonWrapper = styled.div`
		width: 100%;
		display:flex;
		justify-content: flex-end;
`;	

export const Error = styled.div`
	color: red;
	align-self: flex-start;
`;

export const Success = styled.div`
	color: green;
	align-self: flex-start;
`;