import styled from 'styled-components';

export const Contianer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
	padding: 40px;
	align-items: center;
	justify-content: center;
	/* height: 500px; */
	/* border: 1px solid; */
	@media screen and (max-width: ${props => props.theme.padWidth}px) {
		flex-direction: column;
		/* height: 800px; */
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

	@media screen and (max-width: ${props => props.theme.mobileWidth}px) {
		padding: 20px 40px;
	}
`;

export const TitleWrapper = styled.div`
	font-size: 54px;
	font-weight: 700;
	color: white;
`;

export const InfoText = styled.div`
	
`;

export const InputTitle = styled.div`
	width: 100%;
	margin-bottom: 5px;
	color: white;
	font-size: 18px;
	font-weight: 600;	

	/* ${props => props.red && `
		color: red;
	`}; */
`;

export const Input = styled.input`
	width: 100%;
	height: 40px;
	margin-bottom: 10px;
	background: white;
	border-radius: 20px;
	padding: 0px 20px;
`;

export const TextArea = styled.textarea`
	/* border: 1px solid ${props => props.theme.midGray};; */
	background: white;
	width: 100%;
	height: 150px;
	margin-bottom: 20px;
	border-radius: 20px;
	padding: 20px;
	resize: none;
`;

export const ButtonWrapper = styled.div`
		width: 100%;
		display:flex;
		justify-content: flex-end;
`;	

export const Error = styled.div`
	margin-top: 20px;
	color: white;
	align-self: flex-start;
`;

export const Success = styled.div`
	color: white;
	align-self: flex-start;
`;