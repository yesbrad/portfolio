import React from 'react';
import { Container } from './styles';
import NavigationBar from '../../components/NavigationBar';
import BannerHeader from '../../components/BannerHeader';
import FullHeading from '../../components/FullHeading';
import Project from '../../components/Project';
import Footer from '../../components/Footer';

const projects = [
	{
		title: 'Bubs: Prenancy Companion',
		miniDesc: 'React Native project made in a short time frame',
		image: require('../../Images/BubFullTemp.png'),
	}
];

const Portfolio = (props) => {

	return(
		<Container>
			<NavigationBar />
			<BannerHeader title="My name is Brad and im a Front End Developer!"/>
			<section id="port">
				<FullHeading title="Projects"/>
			</section>
			{projects.map(i => <Project {...i} />)}
			<Footer />
		</Container>
	)
}

export default Portfolio;