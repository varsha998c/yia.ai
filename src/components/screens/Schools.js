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
    <Section>
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
            <RegisterButton href="#">Register Now</RegisterButton>
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
`;
const Span = styled.h2`
    margin: 0;
    color: #000;
    font-weight: 500;
    text-align: center;
    font-size: 40px;
`;
const Details = styled.ul`
    display: flex;
    flex-wrap : wrap;
    align-items: flex-start;
    align-items: flex-start;
    width: 80%;
    margin: 60px auto;
    padding: 0;
    justify-content : space-between;
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
    }
    &:nth-child(5) {
        margin-right: auto;
    }
`;
const Count = styled.small`
    font-size: 60px;
    color: #eaeaea;
    font-weight: 600;
    position: absolute;
    z-index: 1;
    top: -52px;
    left: 73px;
`;
const DivContainer = styled.div`
    background: #009a66;
    width: 140px;
    height: 140px;
    border-radius: 35px;
    transform: rotate(45deg);
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
const RegisterButton = styled.a`
    width: 16%;
    margin: 0 auto;
    height: 59px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 17px;
    background: linear-gradient(45deg, #59b757, #1c9aa8);
    color: #fff;
    font-size: 18px;
`;
