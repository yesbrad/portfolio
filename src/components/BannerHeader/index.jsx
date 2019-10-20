import React from 'react'
import { Contianer, TitleWrapper, ContianerBackSkew, SliderImage } from './styles';
import { Slide } from 'react-slideshow-image';

const BannerHeader = (props) => {
	const {
		title,
		desc,
	} = props;

	return (
		<Contianer>
			<TitleWrapper>Welcome!</TitleWrapper>
			<TitleWrapper>{title}</TitleWrapper>
			<ContianerBackSkew>
				<Slide>
					<SliderImage>hellp</SliderImage>
					<SliderImage>cunt</SliderImage>
					<SliderImage>yet</SliderImage>
					<SliderImage>op</SliderImage>
				</Slide>
			</ContianerBackSkew>
		</Contianer>
	);
};

export default BannerHeader;