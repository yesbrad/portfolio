import React from 'react'
import { Contianer, TitleWrapper, InfoText, Wrapper, Image, InnerContainer } from './styles';

const About = (props) => {
	const {
		title,
	} = props;

	return (
		<Contianer>
			<InnerContainer>	
				<Wrapper>
					<Image src={require('../../Images/Profile.jpg')}/>
				</Wrapper>
				<Wrapper>
					<TitleWrapper>About Me</TitleWrapper>
					<InfoText>
						Hello! My name is Brad and from Melbourne, Australia. I'm a fresh React Native/React developer and professional game developer. I worked as a Software Engineer at a local company for just under 2 years. With recently moving to React Development in the past year. I enjoy other things other than development. Like fishing, snowboarding, traveling and Friday socials. I always have an open mind for new opportunities. Feel free to message me if you have any questions!
					</InfoText>
				</Wrapper>
			</InnerContainer>
		</Contianer>
	);
};

export default About;