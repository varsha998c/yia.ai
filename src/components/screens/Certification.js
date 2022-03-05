import React from 'react';
import styled from 'styled-components';
import Img1 from "../../assets/images/medal+.svg";
import Img2 from "../../assets/images/certificate.png";
import Img3 from "../../assets/images/arrow.svg";


export default function Certification() {
  return (
    <Section className="container">
        <Wrapper>
            <Img src={Img1} alt="Image"/>
            <CertificationDiv>
                <Heading>Certification</Heading>
                <Description>പ്രോഗ്രാം പൂർത്തിയാക്കുന്ന എല്ലാ വിദ്യാർത്ഥികൾക്കും സ്കൂൾ ലോഗോയോടു കൂടിയ കംപ്ലീഷൻ സർട്ടിഫിക്കറ്റുകൾ.</Description>
            </CertificationDiv>
            <CertificationPic>
                <Container>
                    <Certificate src={Img2} alt="Image" />
                    <ArrowContainer>
                        <Arrow src={Img3} alt="Image" />
                    </ArrowContainer>
                </Container>
                
            </CertificationPic>
        </Wrapper>
    </Section>
  )
}
const Section = styled.section`
    padding: 5% 0;
`;
const Wrapper = styled.div`
    width: 92%;
    margin: 0 auto;
    background: linear-gradient(to right, #63bb4c 0%, #1898af 100%);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    height: 290px;
    position: relative;
    @media (max-width:1280px){
        width: 90%;
        min-height: 230px;
        height: 254px;
    } 
    @media (max-width:1080px){
        min-height: 700px;
        flex-direction: column-reverse;
    } 
    @media (max-width:768px){
        min-height: 608px;
    }
    @media (max-width:640px){
        min-height: 550px;
    }
    @media (max-width:540px){
        min-height: 500px;
    }
    @media (max-width:360px){
        min-height: 470px;
    }
`;
const CertificationDiv = styled.div`
    padding-left : 50px;
    width: 50%;
    @media (max-width:1280px){
        margin-top: 44px;
    }
    @media (max-width:1080px){
        width: 100%;
        padding: 0;
        margin: 0 auto;
        position: absolute;
        bottom: 0;
        left: 0;
        text-align: center;
    }
    
`;
const Img = styled.img`
    width: 34px;
    position: absolute;
    left: 50px;
    top: 0;
    @media (max-width:1080px){
        position: absolute;
        top: 0;
        left: 45px;
        width: 46px;
    }
    @media (max-width:640px){
        left: 15px;
        width: 39px;
    }
    @media (max-width:480px){
        width: 29px;
    }
    @media (max-width:360px){
        width: 22px;
    }

`;
const Heading = styled.h2`
    font-size: 35px;
    color: #fff;
    margin: 0;
    margin-top: 40px;
    @media(max-width:1280px){
        margin-top: 0;
    }
    @media (max-width:480px){
        font-weight: 600;
    }
`;
const Description = styled.p`
    width: 70%;
    color: #fff;
    margin: 0;
    line-height: 1.7;
    font-size: 17px;
    @media (max-width:1280px){
        width: 85%;
        color: #fff;
        margin: 0;
        line-height: 1.8;
        font-size: 19px;
    }
    @media (max-width:1080px){
        width: 80%;
        margin: 0 auto 30px;
    }
    @media (max-width:640px){
        width: 90%;
        line-height: 1.5;
        font-size: 16px;
    }
`;
const CertificationPic = styled.div`
    width: 45%;
    @media (max-width:1080px){
        width: 100%;
    }
`;
const Container = styled.div`
    width: 550px;
    transform: translate(-61px, -60px);
    position: relative;
    @media (max-width:1280px){
        width: 470px;
        transform: translate(-99px,-49px);
    }
    @media (max-width:1080px){
        width: 700px;
        position: absolute;
        right: 14px;
        top: 96px;
    }
    @media (max-width:980px){
        width: 559px;
        right: -38px;
    }
    @media (max-width:768px){
        width: 470px;
        right: -50px;
    }
    @media (max-width:640px){
        width: 402px;
        top: 132px;
    }
    @media (max-width:540px){
        width: 346px;
    }
    @media (max-width:480px){
        width: 250px;
        right: -59px;
    }
    @media (max-width:360px){
        width: 228px;
        right: -64px;
    }
`;
const Certificate = styled.img`
    display: block;
    width: 100%;
`;
const ArrowContainer = styled.div`
    width: 200px;
    bottom: -54px;
    position: absolute;
    left: -110px;
    @media (max-width:1280px){
        bottom: -55px;
        left: -125px;
    }
    @media (max-width:1080px){
        display: none;
    }
`;
const Arrow = styled.img`
    display: block;
    width:100%;
`;



