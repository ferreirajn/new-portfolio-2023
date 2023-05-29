import styled from "styled-components";
import CTA from "./CTA";
import Socials from "./Socials";
import { colors } from "../../ui/tokens";

export default function FirstSection() {
    return (
        <FirstSectionContainer>
            <IntroducingArticle>
                <h5> Olá, eu sou </h5>
                <h1> Jéssica Ferreira </h1>
                <h5 className="text-light"> FullStack Developer </h5>
            </IntroducingArticle>
            <CTA />
            <Socials />
            <Picture>
                <img src='/Images/Office.svg' alt="" />
            </Picture>
            <ScrollDown href="#contact">
                Scroll Down
            </ScrollDown>
        </FirstSectionContainer>
    )
}

const FirstSectionContainer = styled.section`
    padding-top: 3rem;
    text-align: center;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
`

const IntroducingArticle = styled.article`
    display: flex;
    flex-direction: column;
    gap: 8px;

    h5 {
        margin: 0;
        padding: 0;
        font-weight: 300;
    }

    h1 {
        margin: 0;
        padding: 0;
        font-weight: 700;
        font-size: 2.5em;
        letter-spacing: 0.05em;
    }
`

const Picture = styled.picture`
    margin: auto;
    position: inherit;
  
    img {
    width: 100%;
    position: relative;
    z-index: 0;
  }
`
const ScrollDown = styled.a` 
    position: absolute;
    right: -2.3rem;
    bottom: 5rem;
    transform: rotate(90deg);
    font-weight: 300;
    font-size: 0.9rem;
    text-decoration: none;
    color: ${colors.yellowPrimaryColor}

`