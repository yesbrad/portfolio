import React from 'react';
import { Container, Text } from './styles';

const Button = (props) => {
	const {
		title,
	} = props;

	return (
		<Container>
			<Text>{title}</Text>
		</Container>
	)
};

export default Button;