import React from 'react';
import { InfoContainer, InfoWraper, InfoRow, Column1, Column2, TextWraper, TopLine, Span, SubTitle, BtnWrap, ImgWrap, Img, Big, Little } from './InfoElements';
import { animateScroll as scroll } from 'react-scroll';
import { Button } from '../ButtonElement';
const InfoSection = ({ lightBg, id, imgStart, topLine, lightText, headline, darkText, buttonLabel, img, alt, primary, dark, dark2 }) => {
    function resume() {
        window.open('https://drive.google.com/file/d/1iXnIlr66rvtLFaFg0UUbQPsMnKVHk5-p/view?usp=sharing', "_blank");
    }
    // const toggleAbout = () => {
    //     scroll.scrollTo(1600);
    // }

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWraper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWraper>
                                <TopLine>{topLine}</TopLine>
                                <SubTitle darkText={darkText}>
                                    <Big>
                                        I'm known for being a <Span>doer, pragmatical and team player.</Span>
                                        <br/>I'm a quick learner, proactive and I love to improve my knowledge.
                                    </Big>
                                    <Little>
                                        Also I've studied managment at university which gave me the opportunity 
                                        to work in differents teams and learn from it.
                                        I find myself looking for a job that challenges me every day!.
                                    </Little>
                                </SubTitle>
                                <BtnWrap>

                                    <Button to="home"
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact={true}
                                        offset={-80} primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                        onClick={resume}
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWraper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWraper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
