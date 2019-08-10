import React from 'react'
import { Contianer, TitleWrapper, RowWrapper, ColumnWrapper, Title, DesciptionLink, Copyright } from './styles';

const Footer = (props) => {
	const {
		title,
	} = props;

	return (
		<Contianer>
			<RowWrapper>
				<ColumnWrapper>
					<Title>FOLLOW ME</Title>
					<DesciptionLink>Twitter</DesciptionLink>
					<DesciptionLink>Linkdin</DesciptionLink>
					<DesciptionLink>Git Hub</DesciptionLink>
				</ColumnWrapper>
				<ColumnWrapper>
					<Title>CONTACT ME</Title>
					<DesciptionLink>b.bradfrancis@gmail.com</DesciptionLink>
					<DesciptionLink>@bradles36</DesciptionLink>
				</ColumnWrapper>
			</RowWrapper>
			<RowWrapper>
				<ColumnWrapper>
					<Title>USEFUL LINKS</Title>
					<DesciptionLink>PORTFOLIO</DesciptionLink>
					<DesciptionLink>ABOUT ME</DesciptionLink>
					<DesciptionLink>CONTACT ME</DesciptionLink>
				</ColumnWrapper>
				<ColumnWrapper end>
					<Copyright>Copyright Brad Francis 2019</Copyright>
				</ColumnWrapper>
			</RowWrapper>
		</Contianer>
	);
};

export default Footer;