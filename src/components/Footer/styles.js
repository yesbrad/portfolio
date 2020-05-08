import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Contianer = styled.div`
    height: 450px;

    @media screen and (max-width: ${props => props.theme.mobileWidth}px) {
        flex-direction: column;
        height: 650px;
    }

    padding: 2em;
    padding-bottom: 0px;
`;

export const InnerContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    background: ${props => props.theme.retroBlack};
    height: 100%;
    width: 100%;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
	padding: 50px;

	@media screen and (max-width: ${props => props.theme.mobileWidth}px) {
		flex-direction: column;
    }
`;

export const RowWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`;

export const ColumnWrapper = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;

    ${props =>
        props.end &&
        `
		justify-content: flex-end;
	`};

    @media screen and (max-width: ${props => props.theme.mobileWidth}px) {
        margin-bottom: 20px;
		align-items: center;
    }
`;

export const Title = styled.div`
    font-size: 1rem;
    color: white;
    font-weight: 700;
`;

export const DesciptionLink = styled.a`
    color: ${props => props.theme.midGray};
    margin: 5px 0;
    font-weight: 100;
    cursor: pointer;
    transition: color ease-in-out 100ms;
	font-size: 0.9rem;

    &:hover {
        color: white;
    }
`;

export const Copyright = styled.div`
    align-self: flex-end;
    justify-self: flex-end;
    color: ${props => props.theme.midGray};
    margin: 5px 0;
    font-weight: 100;
	font-size: 0.8rem;

    @media screen and (max-width: ${props => props.theme.mobileWidth}px) {
        align-self: center;
        justify-self: center;
    }
`;
