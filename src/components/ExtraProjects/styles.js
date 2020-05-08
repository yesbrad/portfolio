import styled from "styled-components";

export const Contianer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    height: auto;

    @media screen and (max-width: ${props => props.theme.mobileWidth}px) {
        flex-direction: column;
    }
`;

export const ColumnWrapper = styled.div`
    width: 100%;
    padding: 2rem;

    ${props =>
        props.double &&
        `
		width: 200%;
	`};

    @media screen and (max-width: ${props => props.theme.mobileWidth}px) {
        width: 100%;
    }

`;

export const InfoWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 2rem;
    border-radius: 30px;
    background: linear-gradient(#ff512f, #dd2476);
`;

export const TitleWrapper = styled.div`
    font-size: 2rem;
    font-weight: 700;
    color: white;
	white-space: nowrap;
`;

export const MiniDescription = styled.div`
    font-size: 1rem;
    color: ${props => props.theme.midGray};
    margin-bottom: 50px;
    color: white;
	font-weight: 300;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    height: 100%;
    flex-direction: row;
    margin-top: 100px;
    align-items: flex-end;
    justify-content: flex-end;
`;
