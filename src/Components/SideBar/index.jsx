import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWraper, SidebarLink, SidebarMenu } from './SideBarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWraper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to='projects' onClick={toggle}>
                        Proyects
                    </SidebarLink>
                    <SidebarLink to='contact' onClick={toggle}>
                        Contact me
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWraper>
        </SidebarContainer>
    )
}

export default Sidebar
