import React from 'react'
import { Contianer, TitleWrapper, RowWrapper, ColumnWrapper, Title, DesciptionLink, Copyright } from './styles';

const Footer = (props) => {
	const {
		title,
	} = props;

	const Links = {
		twitter: 'https://twitter.com/bradles36',
		github: 'https://github.com/yesbrad',
		linkdin: 'https://www.linkedin.com/in/brad-francis-a88564130/',
	}

	return (
		<Contianer>
			<RowWrapper>
				<ColumnWrapper>
					<Title>FOLLOW ME</Title>
					<DesciptionLink onClick={() => window.open(Links.twitter)}>Twitter</DesciptionLink>
					<DesciptionLink onClick={() => window.open(Links.linkdin)}>Linkdin</DesciptionLink>
					<DesciptionLink onClick={() => window.open(Links.github)}>Git Hub</DesciptionLink>
				</ColumnWrapper>
				<ColumnWrapper>
					<Title>CONTACT ME</Title>
					<DesciptionLink>b.bradfrancis@gmail.com</DesciptionLink>
					<DesciptionLink onClick={() => window.open(Links.twitter)}	>@bradles36</DesciptionLink>
				</ColumnWrapper>
			</RowWrapper>
			<RowWrapper>
				<ColumnWrapper>
					<Title>USEFUL LINKS</Title>
					<DesciptionLink href="#port">PORTFOLIO</DesciptionLink>
					<DesciptionLink href="#about">ABOUT ME</DesciptionLink>
					<DesciptionLink href="#contact">CONTACT ME</DesciptionLink>
				</ColumnWrapper>
				<ColumnWrapper end>
					<Copyright>Copyright © Brad Francis 2019</Copyright>
				</ColumnWrapper>
			</RowWrapper>
		</Contianer>
	);
};

export default Footer;