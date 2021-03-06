import React, { useState } from "react";
import {
    Contianer,
    TitleWrapper,
    BannerImage,
    MiniDescription,
    ColumnWrapper,
    InfoWrapper,
    ButtonWrapper,
    InformationText,
    PortfolioHeading,
    BannerWrapper,
    HeadingWrapper
} from "./styles";
import Button from "../Button";

const Project = props => {
    const {
        title,
        image,
        miniDesc,
        url,
        info,
        swapped,
        titlePort,
        second,
		gitHub,
		website,
		colors
    } = props;

    const [isOpen, setOpen] = useState(false);

    const renderBannerInfo = () => (
        <ColumnWrapper>
            <BannerWrapper>
                <InfoWrapper  color1={colors[0]} color2={colors[1]} second={second} ab>
                    <TitleWrapper>More Info</TitleWrapper>
                    {info.map(line => {
                        return <InformationText>{line}</InformationText>;
                    })}
                </InfoWrapper>
                <BannerImage image={image} isOpen={isOpen} />
            </BannerWrapper>
        </ColumnWrapper>
    );

    return (
        <Contianer swapped={!swapped}>
            {swapped && renderBannerInfo()}
            <ColumnWrapper main>
                {titlePort && <PortfolioHeading>Portfolio</PortfolioHeading>}
                <InfoWrapper color1={colors[0]} color2={colors[1]} titlePort={titlePort} second={second}>
                    <TitleWrapper>{title}</TitleWrapper>
                    <MiniDescription>{miniDesc}</MiniDescription>
                    <ButtonWrapper>
                        <Button
                            title="More Info"
                            onClick={() => setOpen(!isOpen)}
                        />
                        {url && (
                            <Button
                                title="App Store"
                                onClick={() => window.open(url)}
                            />
						)}
						{website && (
                            <Button
                                title="View"
                                onClick={() => window.open(website)}
                            />
                        )}
                        {gitHub && (
                            <Button
                                title="Github"
                                onClick={() => window.open(gitHub)}
                            />
                        )}
                    </ButtonWrapper>
                </InfoWrapper>
            </ColumnWrapper>
            {!swapped && renderBannerInfo()}
        </Contianer>
    );
};

export default Project;
