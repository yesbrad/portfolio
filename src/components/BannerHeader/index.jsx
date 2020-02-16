import React from 'react'
import { Contianer, TitleWrapper, Wrapper, BgImage } from './styles';
import { Slide } from 'react-slideshow-image';
import NavigationBar from '../NavigationBar';
import bgImage from '../../Images/HOSIER-LANE-2.jpg';

const BannerHeader = (props) => {
	const {
		title,
		desc,
	} = props;

	return (
		<Contianer>
			<NavigationBar />
			<Wrapper src="../../Images/HOSIER-LANE-2.jpg">
				<TitleWrapper size={60}>Hi!</TitleWrapper>
				<TitleWrapper size={40}>My name's Brad</TitleWrapper>
				<TitleWrapper size={40}>I'm a Frontend Developer</TitleWrapper>
				<TitleWrapper size={40}>Based in Melbourne, Australia.</TitleWrapper>
			</Wrapper>
			{/* <BgImage src={bgImage} resizeMode="contain"/> */}
		</Contianer>
	);
};

export default BannerHeader;