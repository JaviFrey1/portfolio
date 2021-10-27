import React from 'react';
import { ServicesCointainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP, P } from './ServicesElements';
import rick from '../../images/rik.svg';
import tuki from '../../images/tuki.svg';
import pk from '../../images/pk.svg';

const Services = () => {
    function redirectTo() {
        window.open('https://github.com/JaviFrey1/ITicket', "_blank");
    }
    function redirectPoke() {
        window.open('https://pokemon-flame.vercel.app/', "_blank");
    }
    function redirectRick() {
        window.open('https://rick-morty-pearl.vercel.app/', "_blank");
    }
    function redirectGit() {
        window.open("https://github.com/JaviFrey1", "_blank");
    }

    return (
        <ServicesCointainer id="projects">
            <ServicesH1>My Projects  <P onClick={redirectGit}> - Link to my Github</P></ServicesH1>
            <ServicesWrapper>
                <ServicesCard onClick={redirectRick}>
                    <ServicesIcon src={rick} alt=""/>
                    <ServicesH2>Rick & Morty App</ServicesH2>
                    <ServicesP>Single Page App consuming an API</ServicesP>
                </ServicesCard>
                <ServicesCard onClick={redirectTo}>
                    <ServicesIcon src={tuki} alt=""/>
                    <ServicesH2>TukiTeck</ServicesH2>
                    <ServicesP>Ticket sales e-commerce</ServicesP>
                </ServicesCard>
                <ServicesCard onClick={redirectPoke}>
                    <ServicesIcon src={pk} alt=""/>
                    <ServicesH2>PokeApp</ServicesH2>
                    <ServicesP>SPA consuming an API. Storage in SQL DataBase.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesCointainer>
    )
}

export default Services
