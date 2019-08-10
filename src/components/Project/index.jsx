import React from 'react'
import { Contianer, TitleWrapper, BannerImage, MiniDescription, ColumnWrapper, InfoWrapper, ButtonWrapper } from './styles';
import Button from '../Button';

const Project = (props) => {
	const {
		title,
		image,
		miniDesc,
	} = props;

	return (
		<Contianer>
			<ColumnWrapper>
				<InfoWrapper>
					<TitleWrapper>{title}</TitleWrapper>
					<MiniDescription>{miniDesc}</MiniDescription>
					<ButtonWrapper>
						<Button title="See Project >>" />
					</ButtonWrapper>
				</InfoWrapper>
			</ColumnWrapper>
			<ColumnWrapper>
				<BannerImage image={image} />
			</ColumnWrapper>
		</Contianer>
	);
};

export default Project;