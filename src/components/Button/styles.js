import styled from 'styled-components';

export const Container = styled.button`
	height: 45px;
	min-width: 150px;
	background: ${props => props.theme.primary};
	/* background: ${props => props.theme.dark ? props.theme.dark : props.theme.primary} */
	/* border-radius: 500px; */
	align-items: center;
	justify-content: center;
	display: flex;
	transition: background 300ms ease-in-out;
	/* transition: transform  300ms ease-in-out; */

  &:hover {
    /* transform: scale(1.1); */

		background: turquoise;

		${props => props.dark && `
			background: gray;
		`};
  }

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