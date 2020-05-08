import styled from "styled-components";

export const Container = styled.button`
	height: 3rem;
	min-width: 7rem;
	background: white;
	align-items: center;
	justify-content: center;
	display: flex;
	transition: transform  200ms ease-in-out, background 300ms ease-in-out, color 200ms;;
	border-radius: 30px;
	margin-right: 10px;
    transform: scale(1);
	color: ${props => props.theme.retroBlack};;

  &:hover {
    transform: scale(1.05);
		color: white;
		background: ${props => props.theme.retroBlack};

		${props =>
            props.dark &&
            `
			background: gray;
		`};
  }

	${props =>
        props.dark &&
        `
		background: ${props.theme.retroBlack};
	`};
`;

export const Text = styled.div`
	color: inherit;
	font-size: 0.8rem;
`;
