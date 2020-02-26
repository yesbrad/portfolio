import styled from "styled-components";
import theme from "../../styles/theme";

export const Contianer = styled.div`
    width: 100%;
    padding: 3em;
    padding-top: 0px;
`;

export const PanelWrapper = styled.div`
    background: linear-gradient(#7f00ff, #e100ff);
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
    height: 100%;
    /* border: 1px solid blue;	 */
`;

export const Wrapper = styled.div`
    /* border: 1px solid blue;	 */
    display: flex;
    padding: 30px 60px;
    height: 300px;
    overflow: auto;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    /* padding: 30px; */
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
    color: white;

    ${props =>
        props.small &&
        `
		font-weight: 350;
	`};

    @media screen and (max-width: ${props => props.theme.mobileWidth}px) {
        font-size: 20px;
    }
`;

export const SliderImage = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;
