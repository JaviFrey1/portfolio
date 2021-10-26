import React from 'react';
import { InfoContainer, InfoWraper, InfoRow, Column1, Column2,TextWraper, TopLine, Heading, SubTitle, BtnWrap, ImgWrap, Img } from './InfoElements';
import { Button } from '../ButtonElement';

const InfoSection = ({lightBg, id, imgStart, topLine,lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWraper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWraper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <SubTitle darkText={darkText}>{description}</SubTitle>
                                <BtnWrap>
                                    
                                    <Button to="home" 
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact={true}
                                    offset={-80} primary={primary? 1 : 0}
                                    dark={dark? 1 : 0}
                                    dark2={dark2? 1 : 0}
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWraper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWraper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
