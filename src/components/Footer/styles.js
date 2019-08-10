import styled from 'styled-components';

export const Contianer = styled.div`
	display: flex;
	height: 400px;
	width: 100%;
	flex-direction: row;
	background: ${props => props.theme.retroBlack};
	/* align-items: center; */
`;

export const RowWrapper = styled.div`
	display: flex;
	width: 100%;
	/* border: 1px solid green; */
	flex-direction: column;
	padding: 60px;
`;

export const ColumnWrapper = styled.div`
	display: flex;
	height: 100%;
	flex-direction: column;

	${props => props.end && `
		justify-content: flex-end;
	`};
`;

export const Title = styled.div`
	font-size: 18px;
	color: white;
	font-weight: 700;
`;

export const DesciptionLink = styled.a`
	color: ${props => props.theme.midGray};
	margin: 5px 0; 
	font-weight: 100;
`;

export const Copyright = styled.div`
align-self: flex-end;
justify-self:flex-end;
/* b	order: 1px solid green; */
	color: ${props => props.theme.midGray};
	margin: 5px 0; 
	font-weight: 100;
`;
