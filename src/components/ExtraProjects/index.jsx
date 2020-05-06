import React, { useState } from "react";
import {
    Contianer,
    TitleWrapper,
    MiniDescription,
    ColumnWrapper,
    InfoWrapper,
    ButtonWrapper,
} from "./styles";
import Button from "../Button";
import Contact from "../Contact";

const ExtraProjects = props => {
    return (
        <Contianer>
            <ColumnWrapper>
                <InfoWrapper>
                    <TitleWrapper>Extra Projects</TitleWrapper>
                    <MiniDescription>
                        Heres a link to my github for some of the other smaller
                        projects i've been tinkering on. There's also some of my
                        Game stuff in there too.
                    </MiniDescription>
                    <ButtonWrapper>
                        <Button
                            title="Github"
                            onClick={() =>
                                window.open("https://github.com/yesbrad")
                            }
                        />
                    </ButtonWrapper>
                </InfoWrapper>
            </ColumnWrapper>
            <ColumnWrapper double>
                <Contact></Contact>
            </ColumnWrapper>
        </Contianer>
    );
};

export default ExtraProjects;
