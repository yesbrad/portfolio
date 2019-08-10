import React from 'react'
import { Contianer, TitleWrapper, ContianerBackSkew } from './styles';

const BannerHeader = (props) => {
	const {
		title,
		desc,
	} = props;

	return (
		<Contianer>
			<TitleWrapper>Welcome!</TitleWrapper>
			<TitleWrapper>{title}</TitleWrapper>
			<ContianerBackSkew />
		</Contianer>
	);
};

export default BannerHeader;