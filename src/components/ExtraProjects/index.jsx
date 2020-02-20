import React, { useState } from 'react'
import { Contianer, TitleWrapper, BannerImage, MiniDescription, ColumnWrapper, InfoWrapper, ButtonWrapper, ProjectInfo, PortfolioHeading } from './styles';
import Button from '../Button';
import {useSpring, animated} from 'react-spring'
import Contact from '../Contact';

const ExtraProjects = (props) => {
	const {
		title,
		image,
		miniDesc,
		url,
		info,
		swapped,
		titlePort,
		second
	} = props;

	const [isOpen, setOpen] = useState(false);

	const sproing = useSpring({
		opacity: isOpen ? 1 : 0,
	})

	return (
		<Contianer>
			<ColumnWrapper>
				<InfoWrapper titlePort={titlePort} second={second}>
					<TitleWrapper>Extra Projects</TitleWrapper>
					<MiniDescription>Heres a link to my github for some of the other smaller projects i've been tinkering on. There's also some of my Game stuff in there too.</MiniDescription>
					<ButtonWrapper>
						<Button title="Github" onClick={() => setOpen(!isOpen)}/>
					</ButtonWrapper>
				</InfoWrapper>	
			</ColumnWrapper>
			<ColumnWrapper double>
				<InfoWrapper>
					<Contact></Contact>
				</InfoWrapper>
			</ColumnWrapper>
		</Contianer>
	);
};

export default ExtraProjects;