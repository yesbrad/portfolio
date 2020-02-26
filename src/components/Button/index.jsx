import React from "react";
import { Container, Text } from "./styles";

const Button = props => {
    const { title, dark, onClick } = props;

    return (
        <Container onClick={onClick} dark={dark}>
            <Text dark={dark}>{title}</Text>
        </Container>
    );
};

export default Button;
