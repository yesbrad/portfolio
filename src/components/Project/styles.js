import styled from "styled-components";

export const Contianer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    height: auto;

    @media screen and (max-width: ${props => props.theme.mobileWidth}px) {
        border-radius: 0;
        flex-direction: ${props => props.swapped ? 'column' : 'column-reverse'};
    }
`;

export const ColumnWrapper = styled.div`
    width: 100%;
    padding: 1.5rem;
    height: 60rem;
    flex: 1;

	${props => props.main && `
	    height: 38rem;
	`};

    @media screen and (min-width: ${props => props.theme.mobileWidth}px) {
		height: 40rem;
    }
`;

export const HeadingWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    border: 1px springgreen;
`;

export const InfoWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 2rem;
    border-radius: 40px;
    background: linear-gradient(${props => props.color1}, ${props => props.color2});
    height: 100%;

    ${props =>
        props.titlePort &&
        `
		height: 85%;
	`};

    @media screen and (max-width: ${props => props.theme.mobileWidth}px) {
        padding: 50px;
    }

    ${props =>
        props.ab &&
        `
		position: absolute;
		min-height: 100%;
	`};
`;

export const TitleWrapper = styled.div`
    font-size: 2rem;
    font-weight: 700;
    color: white;
`;

export const MiniDescription = styled.div`
    font-size: 1rem;
    color: ${props => props.theme.midGray};
    margin-top: 10px;
    color: white;
	font-weight: 200;
`;

export const InformationText = styled.div`
    font-size: 16px;
    color: ${props => props.theme.midGray};
    margin-top: 25px;
    color: white;
	font-weight: 200;
`;

export const BannerWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

export const BannerImage = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${props => props.image});
    border-radius: 40px;
    overflow: hidden;
    clip-path: circle(140.9% at 0 100%);
    transition: clip-path 1s;

    ${props =>
        props.isOpen &&
        `
		clip-path: circle(0% at 0 100%);
	`};

    ${props =>
        props.titlePort &&
        `
		margin-top: 20px;
	`};
`;

export const ButtonWrapper = styled.div`
    display: flex;
    height: 100%;
    /* border: 1px solid; */
    flex-direction: row;
    justify-content: flex-end;
	align-items: flex-end;

	@media screen and (max-width: ${props => props.theme.mobileWidth}px) {
		justify-content: center;
	}
`;

export const ProjectInfo = styled.div`
    color: ${props => props.theme.retroBlack};
    margin-top: 15px;
    max-width: 500px;
`;

export const PortfolioHeading = styled.div`
    font-size: 4rem;
    font-weight: 900;
    color: #444;
    height: 15%;
`;
