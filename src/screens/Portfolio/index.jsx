import React from 'react';
import { Container } from './styles';
import NavigationBar from '../../components/NavigationBar';
import BannerHeader from '../../components/BannerHeader';
import FullHeading from '../../components/FullHeading';
import Project from '../../components/Project';
import Footer from '../../components/Footer';
import About from '../../components/About';
import Contact from '../../components/Contact';

const projects = [
	{
		title: 'Bub: Prenancy Companion',
		miniDesc: 'React Native project made in a short time frame',
		image: require('../../Images/BubMock.png'),
		url: 'https://apps.apple.com/au/app/bub-pregnancy-companion/id1468448524'
	}
];

const Portfolio = (props) => {

	return(
		<Container>
			<BannerHeader title="My name is Brad and im a Front End Developer!"/>
			<section id="port">
				<FullHeading title="Projects"/>
			</section>
			{projects.map(i => <Project {...i} />)}
			<section id="about">
				<About />
			</section>
			<section id="contact">
				<Contact />
			</section>
			<Footer />
		</Container>
	)
}

export default Portfolio;
