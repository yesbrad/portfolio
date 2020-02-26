import React from "react";
import { Contianer, TitleWrapper } from "./styles";

const FullHeading = props => {
    const { title } = props;

    return (
        <Contianer>
            <TitleWrapper>{title}</TitleWrapper>
        </Contianer>
    );
};

export default FullHeading;
