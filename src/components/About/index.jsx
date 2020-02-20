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
						Hello! My name is Brad and from Melbourne, Australia. I'm a fresh front end deveoper and seasoned gamed deveoper. I've been working as a Software Engineer at local company approching 2 years. With recently moving to frontend development the past half year.
						I enjoy other things other than dev. Like fishing, snowboarding, traveling and friday socials.
						I always have an open mind for new opportunities. Feel free to message me if you have any questions!
					</InfoText>
				</Wrapper>
			</InnerContainer>
		</Contianer>
	);
};

export default About;