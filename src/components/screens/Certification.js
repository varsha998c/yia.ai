import React from 'react';
import styled from 'styled-components';
import Img1 from "../../assets/images/medal+.svg";
import Img2 from "../../assets/images/certificate.png";
import Img3 from "../../assets/images/arrow.svg";


export default function Certification() {
  return (
    <Section className="container">
        <Wrapper>
            <CertificationDiv>
                <Img src={Img1} alt="Image"/>
                <Heading>Certification</Heading>
                <Description>പ്രോഗ്രാം പൂർത്തിയാക്കുന്ന എല്ലാ വിദ്യാർത്ഥികൾക്കും സ്കൂൾ ലോഗോയോടു കൂടിയ കംപ്ലീഷൻ സർട്ടിഫിക്കറ്റുകൾ.</Description>
            </CertificationDiv>
            <CertificationPic>
                <Certificate src={Img2} alt="Image" />
                <Arrow src={Img3} alt="Image" />
            </CertificationPic>
        </Wrapper>
    </Section>
  )
}
const Section = styled.section`
    padding: 5% 0;
`;
const Wrapper = styled.div`
    width: 86%;
    margin: 0 auto;
    background-image: linear-gradient(to right, #63bb4c 0%, #1898af 100%);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    height: 290px;
    position: relative;
`;
const CertificationDiv = styled.div`
    padding-left : 75px;
    width: 50%;
`;
const Img = styled.img`
    width: 6%;

`;
const Heading = styled.h2`
    font-size: 35px;
    color: #fff;
    margin: 0;
    margin-top: 40px;
`;
const Description = styled.p`
    color: #fff;
    margin: 20px 0 0 0;
`;
const CertificationPic = styled.div`
    width: 45%;
`;
const Certificate = styled.img`
    position: absolute;
    display: block;
    width: 555px;
    bottom: -63px;
    right: 7%;
`;
const Arrow = styled.img`
    display: block;
    position: absolute;
    bottom: -114px;
    right: 41%;
    width: 205px;

`;



