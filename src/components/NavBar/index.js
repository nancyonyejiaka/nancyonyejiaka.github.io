import React from 'react'
import {
    ButtonContainer,
    GitHubButton,
    MobileIcon,
    MobileLink,
    MobileMenu,
    Nav,
    NavBarContainer,
    NavItems,
    NavLink,
    NavLogo,
    Span
} from './NavBarStyle'
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import {FaBars} from 'react-icons/fa';
import {Bio} from '../../data/constants';
import {useTheme} from 'styled-components';

const NavBar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const theme = useTheme()
    return (
        <Nav>
            <NavBarContainer>
                <NavLogo to='/'>
                    <a style={{
                        display: "flex",
                        alignItems: "center",
                        color: "white",
                        marginBottom: '20;',
                        cursor: 'pointer'
                    }}>
                        <EmojiNatureIcon /> <Span>Nancy Onyeiaka</Span>
                    </a>
                </NavLogo>
                <MobileIcon>
                    <FaBars onClick={() => {
                        setIsOpen(!isOpen)
                    }}/>
                </MobileIcon>
                <NavItems>
                    <NavLink href="#about">About</NavLink>
                    <NavLink href='#skills'>Skills</NavLink>
                    <NavLink href='#experience'>Experience</NavLink>
                    <NavLink href='#projects'>Projects</NavLink>
                    <NavLink href='#education'>Education</NavLink>
                </NavItems>
                <ButtonContainer>
                    <GitHubButton href={Bio.github} target="_blank">GitHub</GitHubButton>
                </ButtonContainer>
                {
                    isOpen &&
                    <MobileMenu isOpen={isOpen}>
                        <MobileLink href="#about" onClick={() => {setIsOpen(!isOpen)}}>
                            About
                        </MobileLink>
                        <MobileLink href='#skills' onClick={() => {
                            setIsOpen(!isOpen)
                        }}>Skills</MobileLink>
                        <MobileLink href='#experience' onClick={() => {
                            setIsOpen(!isOpen)
                        }}>Experience</MobileLink>
                        <MobileLink href='#projects' onClick={() => {
                            setIsOpen(!isOpen)
                        }}>Projects</MobileLink>
                        <MobileLink href='#education' onClick={() => {
                            setIsOpen(!isOpen)
                        }}>Education</MobileLink>
                        <GitHubButton style={{
                            padding: '10px 16px',
                            background: `${theme.primary}`,
                            color: 'white',
                            width: 'max-content'
                        }} href={Bio.github} target="_blank">GitHub</GitHubButton>
                    </MobileMenu>
                }
            </NavBarContainer>
        </Nav>
    )
}

export default NavBar