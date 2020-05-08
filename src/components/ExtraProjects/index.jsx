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
                    <TitleWrapper>Github</TitleWrapper>
                    <MiniDescription>
                        Here's a link to my github for some of the other smaller
                        projects I tinker on. There's also some
                        game stuff in there too.
                    </MiniDescription>
                    <ButtonWrapper>
                        <Button
                            title="Open Github"
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
