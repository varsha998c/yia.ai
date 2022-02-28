import React from 'react';
import styled from 'styled-components';
import Img1 from "../../assets/images/CHAKKALAKKAL_HIGHER_SECONDARY_SCHOOL_bLAdE1w.jpg";
import Img2 from "../../assets/images/CHAKKALAKKAL_HIGHER_SECONDARY_SCHOOL_bLAdE1w.jpg";
import Img3 from "../../assets/images/Mohammed_Abdurahiman_Memo_YYVPYiB.jpg";
import Img4 from "../../assets/images/Peekay_CICS_Arts___Science_College_log_wrIEv5e.jpg";
import Img5 from "../../assets/images/PMSAMA_Higher_Secondary_School_logo.jpeg_4SMo8lN.jpg";
import Img6 from "../../assets/images/Sahya_Arts_and_Science_College_logo_ftW2BcR.jpg";
import Img7 from "../../assets/images/Sahya_Arts_and_Science_College_logo_ftW2BcR.jpg";
import Img8 from "../../assets/images/Sahya_Arts_and_Science_College_logo_ftW2BcR.jpg";



export default function Campus() {
  return (
    <GallerySection>
        <Container>
            <Wrapper>
                <Title>Associated <Span>Campuses</Span></Title>
                <Description>Various institutions have joined hands with us , to train theri students and improve theri employability skills , along with moulding them to be future entrepreneurs.</Description>
                <CardDiv>
                    <InnerCards>
                        <ImageContainer>
                            <Img src={Img1} alt="Image"/>
                        </ImageContainer>
                        <Name>Jamia Nadviyya arts & science college</Name>
                        <Place>Malappuram</Place>
                    </InnerCards>
                    <InnerCards>
                        <ImageContainer>
                            <Img src={Img2} alt="Image"/>
                        </ImageContainer>
                        <Name>Jamia Nadviyya arts & science college</Name>
                        <Place>Malappuram</Place>
                    </InnerCards>
                    <InnerCards>
                        <ImageContainer>
                            <Img src={Img3} alt="Image"/>
                        </ImageContainer>
                        <Name>Jamia Nadviyya arts & science college</Name>
                        <Place>Malappuram</Place>
                    </InnerCards>
                    <InnerCards>
                        <ImageContainer>
                            <Img src={Img4} alt="Image"/>
                        </ImageContainer>
                        <Name>Jamia Nadviyya arts & science college</Name>
                        <Place>Malappuram</Place>
                    </InnerCards>
                    <InnerCards>
                        <ImageContainer>
                            <Img src={Img5} alt="Image"/>
                        </ImageContainer>
                        <Name>Jamia Nadviyya arts & science college</Name>
                        <Place>Malappuram</Place>
                    </InnerCards>
                    <InnerCards>
                        <ImageContainer>
                            <Img src={Img6} alt="Image"/>
                        </ImageContainer>
                        <Name>Jamia Nadviyya arts & science college</Name>
                        <Place>Malappuram</Place>
                    </InnerCards>
                    <InnerCards>
                        <ImageContainer>
                            <Img src={Img7} alt="Image"/>
                        </ImageContainer>
                        <Name>Jamia Nadviyya arts & science college</Name>
                        <Place>Malappuram</Place>
                    </InnerCards>
                    <InnerCards>
                        <ImageContainer>
                            <Img src={Img8} alt="Image"/>
                        </ImageContainer>
                        <Name>Jamia Nadviyya arts & science college</Name>
                        <Place>Malappuram</Place>
                    </InnerCards>
                    <InnerCards>
                        <ImageContainer>
                            <Img src={Img1} alt="Image"/>
                        </ImageContainer>
                        <Name>Jamia Nadviyya arts & science college</Name>
                        <Place>Malappuram</Place>
                    </InnerCards>
                    <InnerCards>
                        <ImageContainer>
                            <Img src={Img3} alt="Image"/>
                        </ImageContainer>
                        <Name>Jamia Nadviyya arts & science college</Name>
                        <Place>Malappuram</Place>
                    </InnerCards>
                </CardDiv>
                <Heading>And <Count>300</Count> More Campuses All Our Kerala</Heading>
            </Wrapper>
        </Container>
    </GallerySection>
  )
}
const GallerySection = styled.section`
    padding: 40px 0;
    text-align : center;
    background: #e3f4e6;
`;
const Container = styled.div`
    width: 90%;
    margin: 0 auto;
`;
const Wrapper = styled.div`
    margin: 0 auto;
    width: 92%;
`;
const Title = styled.h2`
    color: #0fa76f;
    text-align: center;
    margin: 0 0 25px 0;
    font-size: 35px;
    font-weight: 600;
`;
const Description = styled.p`
    text-align: center;
    margin: 0 auto;
    width: 50%;
`;
const CardDiv = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 80px;
    padding: 0;
    text-align:center;

`;
const InnerCards = styled.li`
    width: 16%;
    margin: 0 0 30px;
    list-style: none;
    border-radius: 10px;
    padding: 5px;
`;
const ImageContainer = styled.div`
    width: 30%;
    margin: 0 auto;
    border-radius: 50%;
    overflow: hidden;
`;
const Img = styled.img`
    width: 100%;
    display: block;
`;
const Name = styled.h4`
    margin: 14px 0;
    font-weight: 400;
    text-align: center;
`;
const Span = styled.span`
    font-weight : 600;
    color: #000;
`;

const Place = styled.h5`
    color: #19AB75;
    margin: 0;
`;
const Heading = styled.h4`
    font-weight: 600;
    font-size: 20px;
`;
const Count = styled.span`
    color: #1ea070;
    font-weight: 700;
`;




