import React from "react";
import {
    Contianer,
    RowWrapper,
    LinkButton,
    LinkText,
    LogoWrapper,
    NavWrapper
} from "./styles";
import { Link } from "react-router-dom";

const NavigationBar = () => (
    <Contianer>
        <RowWrapper>
            <LogoWrapper>BRAD FRANCIS</LogoWrapper>
        </RowWrapper>
        <RowWrapper>
            <NavWrapper>
                <LinkButton href="#port">
                    <LinkText>Portfolio</LinkText>
                </LinkButton>
                <LinkButton href="#about">
                    <LinkText>About</LinkText>
                </LinkButton>
                <LinkButton href="#contact">
                    <LinkText>Contact</LinkText>
                </LinkButton>
            </NavWrapper>
        </RowWrapper>
    </Contianer>
);

export default NavigationBar;
