import React, { useState } from 'react'
import { Contianer, TitleWrapper, BannerImage, MiniDescription, ColumnWrapper, InfoWrapper, ButtonWrapper, ProjectInfo } from './styles';
import Button from '../Button';
import {useSpring, animated} from 'react-spring'

const Project = (props) => {
	const {
		title,
		image,
		miniDesc,
		url,
		info
	} = props;

	const [isOpen, setOpen] = useState(false);

	const sproing = useSpring({
		opacity: isOpen ? 1 : 0,
	})

	return (
		<Contianer>
			<ColumnWrapper>
				<InfoWrapper>
					<TitleWrapper>{title}</TitleWrapper>
					<MiniDescription>{miniDesc}</MiniDescription>
					<ButtonWrapper>
						<Button title="More Info" onClick={() => setOpen(!isOpen)}/>
						<Button title="App Store" onClick={() => window.open(url)} dark />
					</ButtonWrapper>
					<ProjectInfo style={sproing}>
						{info}
					</ProjectInfo>
				</InfoWrapper>	
			</ColumnWrapper>
			<ColumnWrapper>
				<BannerImage image={image} />
			</ColumnWrapper>
		</Contianer>
	);
};

export default Project;