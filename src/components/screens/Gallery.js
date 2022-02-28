import React from 'react';
import styled from 'styled-components';
import Img1 from "../../assets/images/ai.jpg";
import Img2 from "../../assets/images/ar&vr.jpg";
import Img3 from "../../assets/images/iot.jpg";
import Img4 from "../../assets/images/robotics.jpg";
import Img5 from "../../assets/images/3d.jpg";
import Img6 from "../../assets/images/car.jpg";
import Img7 from "../../assets/images/meta.jpg";
import Img8 from "../../assets/images/Group.jpg";
import Img9 from "../../assets/images/card.svg";



export default function Gallery() {
  return (
    <GallerySection>
        <Container>
            <Wrapper>
                <Title>ഞങ്ങളുടെ <Span>പാഠ്യപദ്ധതികൾ</Span></Title>
                <Description>ടെക്ക് പഠനം വേറിട്ടതും  , ക്രിയാത്മകവുമാക്കാൻ  മുന്നോട്ടുവെക്കുന്ന സിലബസുകൾ പരിചയപ്പെടാം </Description>
                <CardDiv>
                    <InnerCards>
                        <ImageContainer>
                            <Img src={Img1} alt="Image"/>
                        </ImageContainer>
                        <Name>Artificial Intelligence</Name>
                    </InnerCards>
                    <InnerCards className="watch">
                        <ImageContainer>
                            <Img src={Img2} alt="Image"/>
                        </ImageContainer>
                        <Name>AR-VR</Name>
                    </InnerCards>
                    <InnerCards>
                        <ImageContainer>
                            <Img src={Img3} alt="Image"/>
                        </ImageContainer>
                        <Name>IoT</Name>
                    </InnerCards>
                    <InnerCards>
                        <ImageContainer>
                            <Img src={Img4} alt="Image"/>
                        </ImageContainer>
                        <Name>Robotics</Name>
                    </InnerCards>
                    <InnerCards>
                        <ImageContainer>
                            <Img src={Img5} alt="Image"/>
                        </ImageContainer>
                        <Name>3D-Printing</Name>
                    </InnerCards>
                    <InnerCards>
                        <ImageContainer>
                            <Img src={Img6} alt="Image"/>
                        </ImageContainer>
                        <Name>Driverless Car</Name>
                    </InnerCards>
                    <InnerCards>
                        <ImageContainer>
                            <Img src={Img7} alt="Image"/>
                        </ImageContainer>
                        <Name>Metaverse</Name>
                    </InnerCards>
                    <InnerCards>
                        <ImageContainer>
                            <Img src={Img8} alt="Image"/>
                        </ImageContainer>
                        <Name>Web 3.0</Name>
                        <CardImage>
                            <Card src={Img9} alt="Image" />
                        </CardImage>
                    </InnerCards>
                </CardDiv>
            </Wrapper>
        </Container>
    </GallerySection>
  )
}
const GallerySection = styled.section`
    padding: 40px 0;
    text-align : center;
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
    font-size: 30px;
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
    width: 23%;
    margin: 0 0 30px;
    list-style: none;
    background-color: #e3f4e6;
    border-radius : 10px;
    padding: 5px;
    &:nth-child(2) {
        background-color: #fff8e4;
    }
    &:nth-child(3) {
        background-color: #e2f9dd;
    }
    &:nth-child(4) {
        background: #efeafa;
    }
    &:nth-child(5) {
        background-color: #fff8e4;
    }
    &:nth-child(6) {
        background-color: #ebf2fa;
    }
    &:nth-child(7) {
        background-color: #e3f4e6;
    }
    &:nth-child(8) {
        background: #f9eefb;
        position: relative;
    }

`;
const ImageContainer = styled.div`
    width: 92%;
    margin: 10px 10px;
    overflow: hidden;
`;
const Img = styled.img`
    width: 100%;
    display: block;
`;
const Name = styled.h4`
    margin: 20px;
    font-size: 20px;
    color: #000;
    font-weight: 500;
    text-align: center;
`;
const Span = styled.span`
    font-weight : 600;
    color: #000;
`;
const CardImage = styled.div`
    position: absolute;
    right: -106px;
    bottom: -100px;
    width: 83%;
`;
const Card = styled.img`
    width: 100%;
    display: flex;
`;




