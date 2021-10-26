import React, { useEffect, useState } from 'react';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';

const NavBar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false);
    const handleScroll = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);


    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={toggleHome}>Portfolio</NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true'
                                offset={-80} >About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="projects" smooth={true} duration={500} spy={true} exact='true'
                                offset={-80}>Proyects</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="contacto" smooth={true} duration={500} spy={true} exact='true'
                                offset={-80}>Contact me</NavLinks>
                            </NavItem>
                        </NavMenu>

                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default NavBar
