import React from "react";
import {
    Contianer,
    TitleWrapper,
    InfoText,
    Wrapper,
    Image,
    InnerContainer
} from "./styles";

const About = props => {
    return (
        <Contianer>
            <InnerContainer>
                <Wrapper>
                    <Image src={require("../../Images/Profile.jpg")} />
                </Wrapper>
                <Wrapper>
                    <TitleWrapper>About Me</TitleWrapper>
                    <InfoText>
						Hello! My name is Brad and I'm a Frontend Developer from Melbourne, Australia. I worked at a local games company for just under two years. Spending half my time there as a Unity Developer and the other half as a Frontend Developer working in React/React Native.
					</InfoText>
					<InfoText>
						I enjoy other things other than development like fishing, snowboarding, traveling and Friday socials. I always have my eyes open for new opportunities. Please feel free to message me if you have any questions!
                    </InfoText>
                </Wrapper>
            </InnerContainer>
        </Contianer>
    );
};

export default About;
