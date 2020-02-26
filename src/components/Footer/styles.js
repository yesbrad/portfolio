import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Contianer = styled.div`
    height: 400px;

    @media screen and (max-width: ${props => props.theme.mobileWidth}px) {
        flex-direction: column;
        height: 700px;
    }

    padding: 3em;
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
`;

export const RowWrapper = styled.div`
    display: flex;
    width: 100%;
    /* border: 1px solid green; */
    flex-direction: column;
    padding: 60px;
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
    }
`;

export const Title = styled.div`
    font-size: 18px;
    color: white;
    font-weight: 700;
`;

export const DesciptionLink = styled.a`
    color: ${props => props.theme.midGray};
    margin: 5px 0;
    font-weight: 100;
    cursor: pointer;
    transition: color ease-in-out 100ms;

    &:hover {
        color: white;
    }
`;

export const Copyright = styled.div`
    align-self: flex-end;
    justify-self: flex-end;
    /* b	order: 1px solid green; */
    color: ${props => props.theme.midGray};
    margin: 5px 0;
    font-weight: 100;

    @media screen and (max-width: ${props => props.theme.mobileWidth}px) {
        align-self: flex-start;
        justify-self: flex-start;
    }
`;
