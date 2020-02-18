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
		title: 'Bub: Pregnancy Companion',
		miniDesc: 'React Native project made in a short time frame',
		image: require('../../Images/bubShop.png'),
		url: 'https://apps.apple.com/au/app/bub-pregnancy-companion/id1468448524',
		info: `
			'BUB - Pregnancy Companion' was made in React native in a short time frame. I was in charge of implementing core screens and fuctionality. The project had it's challenges such as an inbuilt Forum, PDF Exporting and Ovulation Tracker. After release I worked on numous updates providing new features and bug fixing. If you have anymore questions feel free to send me a message below!
		`
	},
	{
		title: 'Award RV Scanner',
		miniDesc: 'React Native project made in a short time frame',
		image: require('../../Images/bubShop.png'),
		url: 'https://apps.apple.com/au/app/bub-pregnancy-companion/id1468448524',
		info: `
			'BUB - Pregnancy Companion' was made in React native in a short time frame. I was in charge of implementing core screens and fuctionality. The project had it's challenges such as an inbuilt Forum, PDF Exporting and Ovulation Tracker. After release I worked on numous updates providing new features and bug fixing. If you have anymore questions feel free to send me a message below!
		`,
		swapped: true,
	}
];

const Portfolio = (props) => {

	return(
		<Container>
			<BannerHeader title="My name is Brad and im a Front End Developer!"/>
			<section id="port">
				{/* <FullHeading title="Projects"/> */}
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
