import React, { useState } from 'react'
import { Contianer, TitleWrapper, MiniDescription, ColumnWrapper, InfoWrapper, ButtonWrapper, ProjectInfo } from './styles';
import Button from '../Button';
import {useSpring, animated} from 'react-spring'
import Contact from '../Contact';

const ExtraProjects = (props) => {
	return (
		<Contianer>
			<ColumnWrapper>
				<InfoWrapper>
					<TitleWrapper>Extra Projects</TitleWrapper>
					<MiniDescription>Heres a link to my github for some of the other smaller projects i've been tinkering on. There's also some of my Game stuff in there too.</MiniDescription>
					<ButtonWrapper>
						<Button title="Github" onClick={() => window.open('https://github.com/yesbrad')}/>
					</ButtonWrapper>
				</InfoWrapper>	
			</ColumnWrapper>
			<ColumnWrapper double>
				<InfoWrapper>
					<Contact></Contact>
				</InfoWrapper>
			</ColumnWrapper>
		</Contianer>
	);
};

export default ExtraProjects;