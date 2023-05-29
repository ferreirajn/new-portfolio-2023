import { TbBrandLinkedin } from 'react-icons/tb'
import { VscGithub } from 'react-icons/vsc'
import styled from 'styled-components'

export default function Socials() {
    return (
        <SocialsContainer className='header__socials'>
            <a href="https://www.linkedin.com/in/j%C3%A9ssica-ferreira-soueu/" target="_blank" rel="noopener noreferrer"> <TbBrandLinkedin /></a>
            <a href="https://github.com/ferreirajn" target="_blank" rel="noopener noreferrer"> <VscGithub /> </a>
        </SocialsContainer>
    )
}

const SocialsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    position: absolute;
    left: 0;
    bottom: 3rem;

    img {
        width: 50px;
        height: 50px;
    }

    ::after {
        content: "";
        width: 1px;
        height: 2rem;
        background-color: var(--color-primary);
      }

      @media screen and (max-width: 600px) {
        display: none;
      }
`