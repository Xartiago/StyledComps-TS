import styled from "styled-components";
/* Personal´s Brand Logos */
import PersonalMark from '../assets/Mark.svg'
import PersonalMarkHover from '../assets/MarkHover.svg'

/* Colors
    Primary: #222831
    Secondary: #393E46
    Blue: #00ADB5
    White: #EEEEEE

*/

/* Titles */
export const Titles = styled.h1`
    font-size: 2rem;
    color: orange;
`
export const LItem = styled.h2`
    width: auto;
    font-size: 1.2rem;
    font-weight: 400;
    margin: auto 20px;
    &:after{
        content: '';
        position: absolute;
        height: 0.175rem;
        background: #222831;
    }
    &:hover::after{
        transform: scale(1.11);
    }
`

export const NavContainer = styled.div`
    padding: 30px 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const NavList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
export const Mark = styled.div`
    margin-bottom: 4px;
    width: 75px;
    height: 50px;
    background-image: url(${PersonalMark});
    cursor: pointer;
    &:hover{
        margin: 7px 0 0 20.5px;
        width: 163px;
        height: 47px;
        background-image: url(${PersonalMarkHover});
    }
`