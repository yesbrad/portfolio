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
		titlePort,
		second
	} = props;

	const [isOpen, setOpen] = useState(false);

	const sproing = useSpring({
		opacity: isOpen ? 1 : 0,
	})

	return (
		<Contianer>
			{swapped && <ColumnWrapper>
				<BannerImage image={image}  isOpen={isOpen}/>
			</ColumnWrapper>}
			<ColumnWrapper>
				{titlePort && <PortfolioHeading>Portfolio</PortfolioHeading>}
				<InfoWrapper titlePort={titlePort} second={second}>
					<TitleWrapper>{title}</TitleWrapper>
					<MiniDescription>{info}</MiniDescription>
					<ButtonWrapper>
						<Button title="More Info" onClick={() => setOpen(!isOpen)}/>
						<Button title="App Store" onClick={() => window.open(url)} />
					</ButtonWrapper>
				</InfoWrapper>	
			</ColumnWrapper>
			{!swapped && <ColumnWrapper>
				{/* <InfoWrapper titlePort={titlePort} second={second}>
					<TitleWrapper>{title}</TitleWrapper>
					<MiniDescription>{info}</MiniDescription>
					<ButtonWrapper>
						<Button title="More Info" onClick={() => setOpen(!isOpen)}/>
						<Button title="App Store" onClick={() => window.open(url)} />
					</ButtonWrapper>
				</InfoWrapper> */}
				<BannerImage image={image} isOpen={isOpen}/>
			</ColumnWrapper>}
		</Contianer>
	);
};

export default Project;