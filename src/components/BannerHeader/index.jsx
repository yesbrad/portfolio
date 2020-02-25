import React from 'react'
import { Contianer, TitleWrapper, Wrapper, BgImage, PanelWrapper } from './styles';
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
			<PanelWrapper>
				<NavigationBar />
				<Wrapper>
					<TitleWrapper size={30}>React Native/React Developer</TitleWrapper>
					<TitleWrapper small size={20}>Melbourne, Australia</TitleWrapper>
				</Wrapper>
			</PanelWrapper>
		</Contianer>
	);
};

export default BannerHeader;