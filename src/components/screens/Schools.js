import React from 'react';
import styled from 'styled-components';
import Img1 from "../../assets/images/phone-g-call.svg";
import Img2 from "../../assets/images/certificate-r.svg";
import Img3 from "../../assets/images/scissors.svg";
import Img4 from "../../assets/images/devices.svg";
import Img5 from "../../assets/images/certificate.svg";
import { StyleSheetConsumer } from 'styled-components';



export default function Schools() {
  return (
    <Section className="container">
        <Wrapper>
            <Heading>How</Heading>
            <Span>Schools Can Join</Span>
            <Details>
                <CardDiv>
                    <Count>01</Count>
                    <DivContainer>
                        <ImageContainer className='whatsapp'>
                            <Img src={Img1} alt="Image" />
                        </ImageContainer>
                    </DivContainer>
                    <Description><Bold>Tefun</Bold>  പ്രോഗ്രാമിന്റെ ഭാഗമാകാൻ ആഗ്രഹിക്കുന്ന സ്കൂളുകൾക്ക് </Description>
                </CardDiv>
                <CardDiv>
                    <Count>02</Count>
                    <DivContainer className='one'>
                        <ImageContainer className='certificate'>
                            <Img src={Img3} alt="Image" />
                        </ImageContainer>
                    </DivContainer>
                    <Description><Bold>Tefun</Bold>  പ്രോഗ്രാമിന്റെ ഭാഗമാകാൻ ആഗ്രഹിക്കുന്ന സ്കൂളുകൾക്ക് </Description>
                </CardDiv>
                <CardDiv>
                    <Count>03</Count>
                    <DivContainer className='two'>
                        <ImageContainer className='scissors'>
                            <Img src={Img2 } alt="Image" />
                        </ImageContainer>
                    </DivContainer>
                    <Description><Bold>Tefun</Bold>  പ്രോഗ്രാമിന്റെ ഭാഗമാകാൻ ആഗ്രഹിക്കുന്ന സ്കൂളുകൾക്ക് </Description>
                </CardDiv>
                <CardDiv>
                    <Count>04</Count>
                    <DivContainer className='three'>
                        <ImageContainer className='devices'>
                            <Img src={Img4} alt="Image" />
                        </ImageContainer>
                    </DivContainer>
                    <Description><Bold>Tefun</Bold>  പ്രോഗ്രാമിന്റെ ഭാഗമാകാൻ ആഗ്രഹിക്കുന്ന സ്കൂളുകൾക്ക് </Description>
                </CardDiv>
                <CardDiv>
                    <Count>05</Count>
                    <DivContainer className='four'>
                        <ImageContainer className='certificate_blue'>
                            <Img src={Img5} alt="Image" />
                        </ImageContainer>
                    </DivContainer>
                    <Description><Bold>Tefun</Bold>  പ്രോഗ്രാമിന്റെ ഭാഗമാകാൻ ആഗ്രഹിക്കുന്ന സ്കൂളുകൾക്ക് </Description>
                </CardDiv>
            </Details>
            <RegisterButton>Register Now</RegisterButton>
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
`;
const Heading = styled.h2`
    text-align: center;
    color: #0fa76f;
    margin: 0;
    font-size: 25px;
    font-weight: 500;
    font-size: 40px;
    @media (max-width:980px){
        font-size: 30px;
    }
    @media (max-width:360px){
        font-size: 24px;
    }
`;
const Span = styled.h2`
    margin: 0;
    color: #000;
    font-weight: 500;
    text-align: center;
    font-size: 40px;
    @media (max-width:980px){
        font-size: 30px;
    }
    @media (max-width:360px){
        font-size: 24px;
    }
`;
const Details = styled.ul`
    display: flex;
    flex-wrap : wrap;
    align-items: flex-start;
    align-items: flex-start;
    width: 100%;
    margin: 60px auto;
    padding: 0;
    justify-content : space-between;
    @media (max-width:980px){
        display: flex;
        align-items: flex-start;
        -webkit-box-pack: center;
        justify-content: center;
        flex-wrap: wrap;
        margin: 50px auto 35px;
        position: relative;
        gap: 30px;
    }
    @media (max-width:768px){
        align-items: flex-start;
        gap: 20px;
    }
`;
const CardDiv = styled.li`
    width: 26%;
    margin: 30px 0 30px;
    list-style: none;
    text-align: center;
    display: flex;
    align-items: center;
    position: relative;
    flex-direction: column;
    &:nth-child(4) {
        margin-left : auto;
        margin-right: 14%;
        @media (max-width:980px){
            margin-left: 0;
            margin-right: 0;
        }
    }
    &:nth-child(5) {
        margin-right: auto;
    }
    @media (max-width:980px){
        width: 55%;
        margin: 30px auto 0;
    }
    @media (max-width:768px){
        width: 47%;
    }
    @media (max-width:480px){
        width: 87%;
    }
`;
const Count = styled.small`
    font-size: 60px;
    color: #eaeaea;
    font-weight: 600;
    position: absolute;
    z-index: 1;
    top: -52px;
    left: 96px;
    @media (max-width:1280px){
        left: 63px;
    }
    @media (max-width:1080px){
        top: -53px;
        width: 50px;
        left: 54px;
    }
    @media (max-width:980px){
        left: 132px;
    }
    @media (max-width:768px){
        left: 78px;
    }
    @media (max-width:640px){
        left: 55px;
    }
    @media (max-width:540px){
        left: 40px;
    }
    @media (max-width:480px){
        left: 90px;
        top: -47px;
        font-size: 54px;
    }
    @media (max-width:360px){
        left: 83px;
        top: -35px;
        font-size: 42px;
    }
`;
const DivContainer = styled.div`
    background: #009a66;
    width: 150px;
    height: 150px;
    border-radius: 35px;
    transform: rotate(45deg);
    @media (max-width:1080px){
        width: 110px;
        height: 110px;
        border-radius: 22px;
    }
    @media (max-width:640px){
        border-radius: 32px;
    }
    @media (max-width:480px){
        width: 80px;
        height: 80px;
        border-radius: 25px;
    }
`;
const ImageContainer = styled.div`
    
`;
const Img = styled.img`
    display: block;
    width: 44%;
    transform: rotate(-44deg);
`;
const Description = styled.div`
    margin-top: 42px;
    color: #6e6e6c;
`;
const Bold = styled.b`
    color: #646462;
`;
const RegisterButton = styled.button`
    width: 22%;
    margin: 0 auto;
    border: none;
    height: 59px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-image: linear-gradient(to right,
        #63bb4c 0%,
        #40ab79 51%,
        #1e9ba6 100%
        );
    color: #fff;
    font-size: 18px;
    &:hover {
        background-image: linear-gradient(to left, #63bb4c 20%, #1898af 100%);
    }
    @media (max-width:980px){
        width: 30%;
    }
    @media (max-width:768px){
        width: 37%;
    }
    @media (max-width:640px){
        width: 43%;
        height: 53px;
    }
    @media (max-width:540px){
        width: 50%;
        height: 50px;
    }
    @media (max-width:480px){
        width: 60%;
    }
    @media (max-width:360px){
        width: 70%;
    }
`;
