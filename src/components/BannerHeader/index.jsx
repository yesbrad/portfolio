import React, {useState} from "react";
import {
    Contianer,
    TitleWrapper,
    Wrapper,
	PanelWrapper,
	NavContianer,
    RowWrapper,
    LinkButton,
    LinkText,
    LogoWrapper,
	NavWrapper,
	HambergerWrapper,
	HambergerButton,
	HambergerIcon,
	MenuPanelWrapper,
	MenuPanelButton,
	MenuPanelText,
	MenuPanelExit,
} from "./styles";

const BannerHeader = props => {
    const { title, desc } = props;

    const [isOpen, setOpen] = useState(false);

    return (
        <Contianer>
            <PanelWrapper>
				<MenuPanelWrapper isOpen={!isOpen}>
					<MenuPanelExit onClick={() => setOpen(false)}></MenuPanelExit>
					<MenuPanelButton href="#port">
						<MenuPanelText>
							Portfolio
						</MenuPanelText>
					</MenuPanelButton>
					<MenuPanelButton href="#about">
						<MenuPanelText>
							About
						</MenuPanelText>
					</MenuPanelButton>
					<MenuPanelButton href="#contact">
						<MenuPanelText>
							Contact
						</MenuPanelText>
					</MenuPanelButton>
				</MenuPanelWrapper>
				<NavContianer>
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
						<HambergerWrapper>
							<HambergerButton onClick={() => setOpen(true)}>
								<HambergerIcon />
							</HambergerButton>
						</HambergerWrapper>
					</RowWrapper>
				</NavContianer>
                <Wrapper>
                    <TitleWrapper size={1.3}>
                        Frontend Developer
                    </TitleWrapper>
                    <TitleWrapper small size={0.9}>
                        Melbourne, Australia
                    </TitleWrapper>
                </Wrapper>
            </PanelWrapper>

        </Contianer>
    );
};

export default BannerHeader;
