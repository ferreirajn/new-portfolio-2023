import { useState } from "react";
import styled from "styled-components";
import { colors } from "../../ui/tokens";
import Button from "../../ui/Button";

export default function CTA() {
    const [showNav, setShowNav] = useState("hide");

    return (
        <CTAContainer className="cta">
            <Button text="Curriculum" onClick={() => { }} primary />
            {/* className="btn"
                onClick={() => {
                    if (showNav === "show") {
                        setShowNav("hide");
                    } else if (showNav === "hide") {
                        setShowNav("show");
                    }
                }}
            > */}
            <Button text="Contact" href={'#contact'} />
            <ListContainer
                className={showNav === "hide" ? "hide" : ""}
                id="nav-list-container"
            >
                <ListContainerTitle> Download: </ListContainerTitle>
                <List id="nav-list">
                    <li>
                        <a href={'/Utils/JessicaFerreira-EN.pdf'} download>
                            in English
                        </a>
                    </li>
                    <li>
                        <a href={'/Utils/JessicaFerreira-PT.pdf'} download>
                            in Portuguese
                        </a>
                    </li>
                </List>
            </ListContainer>
        </CTAContainer>
    )
}

const CTAContainer = styled.nav`
    margin-top: 2.5rem;
    display: flex;
    gap: 1.2rem;
    justify-content: center;
`

const ListContainer = styled.article`
    background-color: white;
    position: absolute;
    margin-top: 2.8rem;
    margin-left: 85px;
    padding: 10px;
    z-index: 99;
    box-shadow: 0px 0px 10px 2px rgb(48, 46, 46);

    @media screen and (max-width: 600px) {
        margin-left: 20px;
    }
`

const ListContainerTitle = styled.h4`
    color: ${colors.lightGrayBgVariant}
    border-bottom: 1px solid rgba(157, 119, 69, 0.35);
`

const List = styled.ul`
    li {
        display: inline;
        padding: 5px 10px;
        margin-inline: 10px;
    }

    li a:hover{
        cursor: pointer;
        color: rgba(157, 119, 69, 0.35);
    }

    @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    }

    `