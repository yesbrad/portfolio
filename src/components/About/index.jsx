import React from 'react'
import { Contianer, TitleWrapper, InfoText, Wrapper, Image } from './styles';

const About = (props) => {
	const {
		title,
	} = props;

	return (
		<Contianer>
			<Wrapper>
				<Image src={require('../../Images/Profile.jpg')}/>
			</Wrapper>
			<Wrapper>
				<TitleWrapper>About Me</TitleWrapper>
				<InfoText>
					Hello! I'm Brad and from Melbourne, Australia.
					I've been creating games since 2013. With my first ever finished game reaching over one million people. Including Youtuber Markiplier. If only the game was good.
					At the moment I'm working at Playside Studios for a year and a half.
					I enjoy other things other than games. Like Fishing, Snowboarding, Traveling and Friday socials.
					I always have an open mind for new opportunities. Feel free to message me if you have any questions!
				</InfoText>
			</Wrapper>
		</Contianer>
	);
};

export default About;