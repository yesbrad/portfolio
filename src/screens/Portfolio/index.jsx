import React from 'react';
import { Container } from './styles';
import NavigationBar from '../../components/NavigationBar';
import BannerHeader from '../../components/BannerHeader';
import FullHeading from '../../components/FullHeading';
import Project from '../../components/Project';
import Footer from '../../components/Footer';
import About from '../../components/About';
import Contact from '../../components/Contact';
import ExtraProjects from '../../components/ExtraProjects';

const projects = [
	{
		title: 'Bub: Pregnancy Companion',
		miniDesc: "'BUB - Pregnancy Companion' was made in React Native in a short time frame for Netflix star Lorinska Merrington. ",
		image: require('../../Images/bubSHop2.png'),
		url: 'https://apps.apple.com/au/app/bub-pregnancy-companion/id1468448524',
		info: [
			"'BUB - Pregnancy Companion' was made in React Native in a short time frame for Netflix star Lorinska Merrington. ",
			'I was in charge of implementing core screens and functionality. The project had its challenges such as an inbuilt Forum, PDF Exporting, Ovulation Tracker and AR experience. These challenges required much R&D and pushed my skill and team skill to new levels.',
			'Project takes advantage of technology such as Redux, Styled Components, Firebase and Apple IAP. The project also made me very fluent with Apples App Store Connect and uploading builds to the App Store.',
			'After release I worked on numerous updates providing new features and bug fixing. If you have any more questions feel free to send me a message below!',
		],
		titlePort: true
	},
	{
		title: 'Award RV Scanner',
		miniDesc: 'The Award Ticket Scanner is a NETO integrated enterprise app made for Award RV SuperStore to help with sale ticket printing.',
		image: require('../../Images/AwardShop.png'),
		info: [
			'The Award Ticket Scanner is a NETO integrated enterprise app made for Award RV Super Store.',
			'The project involved taking use of NETO developer endpoints to make a project that helped print in store price tickets. This improved the old printing system by saving days of work. Because it is real time with the database and its also available to all workers phones that can get updates immediately.',
			'The Project took advantage of the React Native Camera package that detects barcodes in seconds. Then hands that of into the NETO database. If you have anymore questions send me a message!',
		],
		gitHub: 'https://github.com/yesbrad',
		swapped: true,	
		second: true,
	}
];

const Portfolio = (props) => {

	return(
		<Container>
			<BannerHeader title="My name is Brad and im a Front End Developer!"/>
			<section id="port">
			</section>
			{projects.map(i => <Project {...i} />)}
			<section id="about">
				<About />
			</section>
			<section id="contact">
				<ExtraProjects></ExtraProjects>
			</section>
			<Footer />
		</Container>
	)
}

export default Portfolio;
