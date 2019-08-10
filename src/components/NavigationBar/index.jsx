import React from 'react'
import { Contianer, RowWrapper, LinkButton, LinkText, LogoWrapper, NavWrapper } from './styles';

const NavigationBar = (props) => {
	return (
		<Contianer>
			<RowWrapper>
				<LogoWrapper>BRAD FRANCIS</LogoWrapper>
			</RowWrapper>
			<RowWrapper>
				<NavWrapper>
					<LinkButton><LinkText>Portfolio</LinkText></LinkButton>
					<LinkButton><LinkText>About</LinkText></LinkButton>
					<LinkButton><LinkText>Contact</LinkText></LinkButton>
				</NavWrapper>
			</RowWrapper>
		</Contianer>
	);
};

export default NavigationBar;