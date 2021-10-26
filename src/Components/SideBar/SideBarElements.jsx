import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkS} from 'react-scroll';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    background: rgb(13,13,13,.8);
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    cursor: pointer;
    font-size: 2rem;
    outline: none;    
`;

export const SidebarWraper = styled.div`
    color: #fff;
    align-items: center;
    text-align: center;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns:1fr;
  grid-template-rows: repeat(6,80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    gird-template-rows: repeat(6, 60px);

  }
`;

export const SidebarLink = styled(LinkS)`
    display:flex;
    align-items: center;
    justyfy-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2 ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    text-align: center;
    transform: translateX(40%);

    &:hover {
        color: #58bae6;
        transition: 0.2 ease-in-out;
    }
`;

