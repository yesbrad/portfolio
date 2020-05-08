import styled from "styled-components";

export const Contianer = styled.div`
    display: flex;
	width: 100%;
	height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: linear-gradient(#ff512f, #dd2476);
    border-radius: 30px;
    padding: 2rem;

    @media screen and (max-width: ${props => props.theme.padWidth}px) {
        flex-direction: column;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    min-width: 50%;
    height: 100%;
    flex-direction: column;
    padding: 20px 80px;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: ${props => props.theme.padWidth}px) {
		min-width: 100%;
    }

    @media screen and (max-width: ${props => props.theme.mobileWidth}px) {
        padding: 20px 5px;
    }
`;

export const TitleWrapper = styled.div`
    font-size: 2rem;
    font-weight: 700;
    color: white;
	white-space: nowrap;
	overflow: hidden;
`;

export const EmailWrapper = styled.div`
    font-size: 1rem;
    font-weight: 200;
    color: white;
	white-space: nowrap;
	overflow: hidden;
	cursor: pointer;
`;

export const InfoText = styled.div``;

export const InputTitle = styled.div`
	width: 100%;
	margin-bottom: 5px;
	color: white;
	font-size: 18px;
	font-weight: 600;	

	/* ${props =>
        props.red &&
        `
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
    display: flex;
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
