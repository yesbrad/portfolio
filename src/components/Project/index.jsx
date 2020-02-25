import React, { useState } from 'react'
import { Contianer, TitleWrapper, BannerImage, MiniDescription, ColumnWrapper, InfoWrapper, ButtonWrapper, InformationText, PortfolioHeading, BannerWrapper, HeadingWrapper } from './styles';
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
		second,
		gitHub
	} = props;

	const [isOpen, setOpen] = useState(false);

	const sproing = useSpring({
		opacity: isOpen ? 1 : 0,
	})

	const renderBannerInfo = () => (
		<ColumnWrapper>
			<BannerWrapper>
				<InfoWrapper second={second} ab >
					<TitleWrapper>More Info</TitleWrapper>
					{info.map((line) => {
						return <InformationText>{line}</InformationText>
					})}
				</InfoWrapper>
				<BannerImage image={image} isOpen={isOpen} />
			</BannerWrapper>
		</ColumnWrapper>
	)

	return (
		<Contianer>
			{swapped && renderBannerInfo()}
			<ColumnWrapper>
				{titlePort && <PortfolioHeading>Portfolio</PortfolioHeading>}
				<InfoWrapper titlePort={titlePort} second={second}>
					<TitleWrapper>{title}</TitleWrapper>
					<MiniDescription>{miniDesc}</MiniDescription>
					<ButtonWrapper>
						<Button title="More Info" onClick={() => setOpen(!isOpen)}/>
						{url && <Button title="App Store" onClick={() => window.open(url)} />}
						{gitHub && <Button title="Github" onClick={() => window.open(gitHub)} />}
					</ButtonWrapper>
				</InfoWrapper>	
			</ColumnWrapper>
			{!swapped && renderBannerInfo()}
		</Contianer>
	);
};

export default Project;