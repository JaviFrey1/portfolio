import styled from 'styled-components';

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({ lightBg }) => lightBg ? '#f9f9f9' : '#010606'};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const InfoWraper = styled.div`
    display:grid;
    z-index:1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-rigth: auto;
    margin-left: 20%;
    padding: 0 24px;
    justify-content: center;
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) => imgStart ? `'col2 col1'` : `'col1 col2'`};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) => imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
        margin-right: 80px;
    };

`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWraper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const TopLine = styled.p`
    background: #ccc;
    background: linear-gradient(90deg, #485462,#e3547c);
    font-family:system-ui;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 46px;
    line-height: 1;
    font-weight: 510;
    color: ${({ lightText }) => lightText ? '#f7f8fa' : '#010606'};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const SubTitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkText }) => darkText ? '#010606' : '#fff'};
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-rigth: 0;
`;

export const Big = styled.div`
    font-size: 1.5rem;
`;
export const Little = styled.div`
    padding: 10px 20px;    
    margin-top: 10px;
    border-top: 1px solid red;
`;

export const Span = styled.span`
    font-size: 2rem;
    font-weight: bolder;
`;