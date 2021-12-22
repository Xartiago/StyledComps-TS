import { Mark, NavContainer, NavList, LItem } from "../style"

const Nav = () => {
    return (
        <NavContainer>
            <Mark />
            <NavList>
                <LItem>About</LItem>
                <LItem>Experience</LItem>
                <LItem>Works</LItem>
                <LItem>Hobbies</LItem>
                <LItem>Contact</LItem>
            </NavList>
        </NavContainer>
    )
}

export default Nav
