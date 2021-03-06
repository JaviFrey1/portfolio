import styled from 'styled-components';

export const ServicesCointainer = styled.div`
    height: 720px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }
    @meadia screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    display: grid;
    // background: red;
    margin: 0 0 0 0;;  
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;
export const P = styled.span`
    font-size: 18px;
    position: relative;
    cursor: pointer;
    &:after{
        content: "";
        display: block;
        width: 0;
        height: 1px;
        background-color: #ff6ef8 ;
        position: absolute;
        left: 50%;
        bottom: 0;
        transition: all .5s ease-in-out;
        color:  #ff6ef8 ;
        cursor: pointer;
      }
      &:hover:after {
        color:  #ff6ef8 ;
        width: 100%;
        left: 0;
        cursor: pointer;
      }
      &:hover {
        transition:all .5s ease-in-out;
        color:  #ff6ef8 ;
        
      }

      @media screen and (max-width: 768px) {
        font-size: 16px;
    }
    @meadia screen and (max-width: 480px) {
        font-size: 12px;
    }
`;
export const ServicesCard = styled.div`
    background: #fff;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    height: 320px;
    max-height: 600px;
    max-width: 350px;
    padding: 30px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
    transition: all .2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all .2s ease-in-out;
        cursor: pointer;
    }
    @media screen and (max-width: 1000px) {
       width: 300px;
       height: 250px;
    }

    @media screen and (max-width: 768px) {
        width: 300px;
       height: 250px;
    }
`;

export const ServicesIcon = styled.img`
    max-height: 350px;
    
    max-width: 340px;
    margin-bottom: 10px;
    background-size:cover;
    box-shadow: 0px 0px 17px 2px rgba(0,0,0,0.70);
-webkit-box-shadow: 0px 0px 17px 2px rgba(0,0,0,0.70);
-moz-box-shadow: 0px 0px 17px 2px rgba(0,0,0,0.70);
    @media screen and (max-width: 1000px) {
        width: 300px;
        height: 250px;;
    }

    @media screen and (max-width: 768px) {
        width: 300px;
        height: 250px;
    }
`;

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px
`;

export const ServicesP = styled.p`
    text-align: center;
    font-size: 1rem;
    
    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
    @meadia screen and (max-width: 480px) {
        font-size: 10px;
    }
`;