import React, { useState } from 'react'
import { Contianer, TitleWrapper, BannerImage, MiniDescription, ColumnWrapper, InfoWrapper, ButtonWrapper, ProjectInfo, PortfolioHeading } from './styles';
import Button from '../Button';
import {useSpring, animated} from 'react-spring'

const Project = (props) => {
	const {
		title,
		image,
		miniDesc,
		url,
		info,
		swapped,
		titlePort
	} = props;

	const [isOpen, setOpen] = useState(false);

	const sproing = useSpring({
		opacity: isOpen ? 1 : 0,
	})

	return (
		<Contianer>
			{swapped && <ColumnWrapper>
				<BannerImage image={image} />
			</ColumnWrapper>}
			<ColumnWrapper>
				{titlePort && <PortfolioHeading>Portfolio</PortfolioHeading>}
				<InfoWrapper titlePort={titlePort}>
					<TitleWrapper>{title}</TitleWrapper>
					<MiniDescription>{info}</MiniDescription>
					<ButtonWrapper>
						<Button title="More Info" onClick={() => setOpen(!isOpen)}/>
						<Button title="App Store" onClick={() => window.open(url)} />
					</ButtonWrapper>
				</InfoWrapper>	
			</ColumnWrapper>
			{!swapped && <ColumnWrapper>
				<BannerImage image={image} />
			</ColumnWrapper>}
		</Contianer>
	);
};

export default Project;