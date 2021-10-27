import styled from 'styled-components';
import { Link as LinkR} from 'react-router-dom';
import { Link as LinkS} from 'react-scroll';

export const Nav = styled.nav`
    background: ${({scrollNav}) => scrollNav ? '#000' : 'rgba(0,0,0,.4)'};
    height: 80px;
    margin-top: -80px;    
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media (max-width: 960px) {
        transition: .8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
background: #ccc;
background: linear-gradient(90deg, #b52c31 ,#e3547c,#ffe1df);
font-family:system-ui;
-webkit-text-fill-color: transparent;
-webkit-background-clip: text;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    heightL 80px;
`;

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    alig-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        transition:.4s;
        padding-bottom: .6rem;
        border-bottom: 3px solid #e3547c;
        
    }
`