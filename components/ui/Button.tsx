import { FC } from "react"
import styled from "styled-components";
import { colors, transition } from './tokens'

export interface ButtonProps {
    text: string;
    href?: any;
    primary?: boolean;
    download?: boolean;
    onClick?: any;
}

const Button: FC<ButtonProps> = ({ onClick, text, href, primary = false }): JSX.Element => {
    return (
        <ButtonContainer primary={primary} onClick={onClick}>
            <a href={href}> {text} </a>
        </ButtonContainer>
    )
}

export default Button

const ButtonContainer = styled.button <{
    primary: boolean;
}> `
    display: inline-block;
    padding: 0.75rem 1.2rem;
    border-radius: 0.4rem;
    cursor: pointer;
    border: 1px solid ${colors.yellowPrimaryColor};
    transform: ${transition.transition};
    font-size: 1.2rem;
    box-shadow: 0px 0px 9px -1px rgb(48, 46, 46);
    font-family: "Poppins", sans-serif;
    background: ${(props) => props.primary ? 'transparent' : colors.yellowPrimaryColor}};

    :hover{
        background-color: ${colors.white};
        border-color: transparent;
    }

    a {
        text-decoration: none;
        color: ${(props) => props.primary ? colors.yellowPrimaryColor : colors.darkGrayBg}};
    }
`

