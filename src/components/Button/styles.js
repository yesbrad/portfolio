import styled from 'styled-components';

export const Container = styled.button`
	height: 45px;
	min-width: 150px;
	background: ${props => props.theme.primary};
	/* border-radius: 500px; */
	align-items: center;
	justify-content: center;
	display: flex;

	${props => props.dark && `
		background: ${props.theme.retroBlack};
	`};
`;

export const Text = styled.div`
	color: ${props => props.theme.retroBlack};;

	${props => props.dark && `
		color: white;
	`};
`;