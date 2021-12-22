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
export const LItem = styled.a`
    width: 100%;
    font-size: 1.2rem;
    font-weight: 400;
    text-decoration: none;
    color: #222831;
    margin: auto 20px;
    cursor: pointer;
    &:hover{
        border-bottom: 2px solid #222831;
    }
`
export const NavContainer = styled.div`
    position: relative;
    width: 100%;
    height: auto;
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
export const Mark = styled.a`
    margin-bottom: 4px;
    width: 75px;
    height: 50px;
    background-image: url(${PersonalMark});
    cursor: pointer;
    &:hover{
        margin: 7px 0 0 20.5px;
        width: 160px;
        height: 47px;
        background-image: url(${PersonalMarkHover});
    }
`