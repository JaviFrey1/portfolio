import React from 'react';
import { InfoContainer, InfoWraper, InfoRow, Column1, Column2, TextWraper, TopLine, Heading, SubTitle, BtnWrap, ImgWrap, Img } from './InfoElements';
import { Button } from '../ButtonElement';

const InfoSection = ({ lightBg, id, imgStart, topLine, lightText, headline, darkText, buttonLabel, img, alt, primary, dark, dark2 }) => {
    function resume() {
        window.open('https://drive.google.com/file/d/1baeP6QsaSCKhcMue-szP4_QyZziByBI9/view?usp=sharing', "_blank");
    }
    

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWraper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWraper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <SubTitle darkText={darkText}>
                                    <h4>I'm known for being a doer, pragmatical and team player.</h4>
                                    <h4>I'm a quick learner, proactive and I love to improve my knowledge.</h4>
                                    <p>Also I've studied managment at university which gave me the opportunity to work in differents teams and learn from it.</p>
                                    <h3>I find myself looking for a job that challenges me every day!.</h3>
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
