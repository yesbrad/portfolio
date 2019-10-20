import React, { useState } from 'react'
import { Contianer, TitleWrapper, BannerImage, MiniDescription, ColumnWrapper, InfoWrapper, ButtonWrapper, ProjectInfo } from './styles';
import Button from '../Button';

const Project = (props) => {
	const {
		title,
		image,
		miniDesc,
		url
	} = props;

	const [isOpen, setOpen] = useState(false);

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
					{isOpen && <ProjectInfo>
						this is where the projext info will go
					</ProjectInfo>}
				</InfoWrapper>
			</ColumnWrapper>
			<ColumnWrapper>
				<BannerImage image={image} />
			</ColumnWrapper>
		</Contianer>
	);
};

export default Project;