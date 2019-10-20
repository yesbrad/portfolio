import React from 'react'
import { Contianer, TitleWrapper, Wrapper, BgImage } from './styles';
import { Slide } from 'react-slideshow-image';
import NavigationBar from '../NavigationBar';
import bgImage from '../../Images/65387718_2143822785907594_3822437326261321728_n.jpg';

const BannerHeader = (props) => {
	const {
		title,
		desc,
	} = props;

	return (
		<Contianer>
			<NavigationBar />
			<Wrapper src="../../Images/65387718_2143822785907594_3822437326261321728_n.jpg">
				<TitleWrapper>Hi!</TitleWrapper>
				<TitleWrapper>My names Brad and im a Frontend Developer based in Melbourne Australia</TitleWrapper>
			</Wrapper>
			<BgImage src={bgImage} resizeMode="contain"/>
		</Contianer>
	);
};

export default BannerHeader;