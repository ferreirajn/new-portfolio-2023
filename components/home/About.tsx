import { GiBrain } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { MdFolderSpecial } from "react-icons/md";
import { useState } from "react";
import styled from "styled-components";
import { colors, transition } from '../ui/tokens'
import Button from "../ui/Button";

export default function About() {
    const [switchLang, setSwitchLang] = useState("pt");

    return (
        <Section id="about">
            <Article>
                <h5> Saiba mais </h5>
                <h2> Sobre mim </h2>
            </Article>

            <AboutMeSection>
                <AboutMePicture>
                    <img src='/Images/Me-Ilustration.png' alt="uma foto minha sorrindo, com camisa laranja" />
                </AboutMePicture>

                <AboutMeContainer id="pt-container">
                    <CardsContainer>
                        <Card>
                            <GiBrain className="about__icon" />
                            <h5> Conhecimentos </h5>
                            <small> Análise e Desenvolvimento de sistemas </small>
                        </Card>

                        <Card>
                            <FaUsers className="about__icon" />
                            <h5> Projetos </h5>
                            <small> 20 + projetos realizados </small>
                        </Card>

                        <Card>
                            <MdFolderSpecial className="about__icon" />
                            <h5> Experiencia </h5>
                            <small> 1+ ano de experiência </small>
                        </Card>
                    </CardsContainer>

                    <AboutMeText>
                        Fluente em inglês, atualmente me graduando em Análise e
                        Desenvolvimento de Sistemas e especializando meus estudos em
                        Desenvolvimento Web Fullstack. Trabalhando diariamente com React.js,
                        Typescript, Next.js, PHP e WordPress. Desenvolvendo jogos através do
                        Construct 3 nas horas vagas.
                    </AboutMeText>

                    <ButtonContainer>
                        <Button text='Entre em contato' href='#contact' />
                        <Button text='Switch to english' href='#contact' />
                    </ButtonContainer>


                    {/* // onClick={() =>
                    //     setSwitchLang(() => {
                    //         document.querySelector("#pt-container").classList.add("hide");
                    //         document
                    //             .querySelector("#pt-container")
                    //             .classList.remove("show");
                    //         document.querySelector("#eng-container").classList.add("show");
                    //         document
                    //             .querySelector("#eng-container")
                    //             .classList.remove("hide");
                    //     })
                    // } */}


                </AboutMeContainer>
                <AboutMeContainerEnglish id="eng-container">
                    <CardsContainer>
                        <Card>
                            <GiBrain className="about__icon" />
                            <h5> Knowledge </h5>
                            <small> Systems and Analisys Development </small>
                        </Card>

                        <Card>
                            <FaUsers className="about__icon" />
                            <h5> Project </h5>
                            <small> 15+ projects </small>
                        </Card>

                        <Card>
                            <MdFolderSpecial className="about__icon" />
                            <h5> Experience </h5>
                            <small> 8+ months of experience </small>
                        </Card>
                    </CardsContainer>

                    <AboutMeText>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        I'm fluent in English, persuing a degree in Systems and Analysis
                        Development (which will be over around 2024-03) and focusing my
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        studies on web development. I've worked daily and built strong
                        knowledge in JavaScript, React.js, Next.js, Typescript, HTML5, CSS3,
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        WordPress, PHP and more. I'm always in development and working hard
                        to improve my skills. Being my best is my goal.
                    </AboutMeText>

                    <ButtonContainer>
                        <Button text='Get in touch' href='#contact' />
                        <Button text='Switch to Portuguese' href='#contact' />
                    </ButtonContainer>
                    {/* // onClick={() =>
                    //     setSwitchLang(() => {
                    //         document.querySelector("#eng-container").classList.add("hide");
                    //         document
                    //             .querySelector("#eng-container")
                    //             .classList.remove("show");
                    //         document.querySelector("#pt-container").classList.add("show");
                    //         document
                    //             .querySelector("#pt-container")
                    //             .classList.remove("hide");
                    //     })
                    // } */}

                </AboutMeContainerEnglish>
            </AboutMeSection>
        </Section>
    )
}

const Section = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;

    @media screen and (max-width: 1024px) {
        margin-top: 3rem;
    } 
`

const Article = styled.article`
    text-align: center;
`

const AboutMeSection = styled.div`
    display: flex;
    gap: 8%;
    flex-direction: row;
    align-content: center;
    align-items: center;
    flex-wrap: nowrap;
`

const AboutMePicture = styled.picture`
`

const AboutMeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;

    @media screen and (max-width: 1024px) { 
        p {
            margin: 1rem 0 1.5rem;
            width: 100%;
          }
    }

    @media screen and (max-width: 600px) {
        text-align: center;

        p {
            margin: 1.5rem 0;
          }
    }

`


const AboutMeContainerEnglish = styled.div`
    display: none;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;

    @media screen and (max-width: 1024px) { 
        p {
            margin: 1rem 0 1.5rem;
            width: 100%;
          }
    }

    @media screen and (max-width: 600px) {
        text-align: center;

        p {
            margin: 1.5rem 0;
          }
    }

`

const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

    @media screen and (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        align-items: stretch;
    } 

    @media screen and (max-width: 600px){
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }
`

const Card = styled.article`
    background: ${colors.lightGrayBgVariant};
    border: 1px solid transparent;
    border-radius: 1rem;
    padding: 1rem;
    text-align: center;
    transition: ${transition.transition};

    :hover{
        background: transparent;
        border-color: ${colors.yellowPrimaryColor};
        cursor: default;
    }

    h5 {
        font-size: 1rem;
        font-weight: 700;
    }

    small {
        font-size: 0.9rem;
        color: ${colors.lighterGray};
    }
`

const AboutMeText = styled.p`
    margin: 1.2rem 0 1.5rem;
    color: ${colors.lighterGray};
`

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
`