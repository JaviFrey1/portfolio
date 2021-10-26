import React, {useState, useEffect} from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowDown, ArrowDownward } from './HeroElements';
import { animateScroll as scroll } from 'react-scroll';
import { Button } from '../ButtonElement';
import Video from '../../videos/pexels.mp4';

const HeroSection = () => {

    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    }
    const [, setScrollNav] = useState(false);
    const handleScroll = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }
    const toggleAbout = () => {
        scroll.scrollTo(800);
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Hi! I'm Javier Gomez Frey</HeroH1>
                <HeroP>FullStack Developer</HeroP>
                <HeroBtnWrapper>
                    <Button to='about' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' onClick={toggleAbout}>
                        Let's go! {hover? <ArrowDownward/> : <ArrowDown/> }
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
