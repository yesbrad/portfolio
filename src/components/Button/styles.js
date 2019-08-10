import styled from 'styled-components';

export const Container = styled.div`
	height: 50px;
	min-width: 100px;
	background: ${props => props.theme.retroBlack};
	border-radius: 500px;
	align-items: center;
	justify-content: center;
	display: flex;
`;

export const Text = styled.div`
	color: white;
`;