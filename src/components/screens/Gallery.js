import React, { useState } from 'react';
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
    const[tech,setTech] =useState([
        {
            id:1,
            image:Img1,
            name:"Artificial Intelligence",

        },
        {
            id:2,
            image:Img2,
            name:"AR-VR",

        },
        {
            id:3,
            image:Img3,
            name:"IoT",

        },
        {
            id:4,
            image:Img4,
            name:"Robotics",

        },
        {
            id:5,
            image:Img5,
            name:"3D-Printing",

        },
        {
            id:6,
            image:Img6,
            name:"Driverless Car",

        },
        {
            id:7,
            image:Img7,
            name:"Metaverse",

        },
        {
            id:8,
            image:Img8,
            name:"Web 3.0",
        },

    ])
  return (
    <GallerySection className="container">
        <Container>
            <Wrapper>
                <Title>ഞങ്ങളുടെ <Span>പാഠ്യപദ്ധതികൾ</Span></Title>
                <Description>ടെക്ക് പഠനം വേറിട്ടതും  , ക്രിയാത്മകവുമാക്കാൻ  മുന്നോട്ടുവെക്കുന്ന സിലബസുകൾ പരിചയപ്പെടാം </Description>
                <CardDiv>
                    {tech.map((item)=>(
                        <InnerCards>
                            <ImageContainer>
                                <Img src={item.image} alt="Image"/>
                            </ImageContainer>
                            <Name>{item.name}</Name>
                        </InnerCards>
                    ))}
                    <CardImage>
                        <Card src={Img9} alt="Image" />
                    </CardImage>
                </CardDiv>
            </Wrapper>
        </Container>
    </GallerySection>
  )
}
const GallerySection = styled.section`
    padding: 40px 0;
    text-align : center;
    position: relative;
`;
const Container = styled.div`
    width: 100%;
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
    @media(max-width:1280px) {
        justify-content: center;
    }

`;
const InnerCards = styled.li`
    width: 23%;
    margin: 0 0 30px;
    list-style: none;
    background-color: #e3f4e6;
    border-radius : 10px;
    padding: 5px;
    margin-right: 20px;
    &:nth-child(2) {
        background-color: #fff8e4;
        
    }
    &:nth-child(3) {
        background-color: #e2f9dd;
        @media (max-width:1280px) {
            margin-right: 0;
        }
        
    }
    &:nth-child(4) {
        background: #efeafa;
        margin-right: 0;
        @media (max-width:1280px) {
            margin-right: 20px;
        }
    }
    &:nth-child(5) {
        background-color: #fff8e4;
    }
    &:nth-child(6) {
        background-color: #ebf2fa;
    }
    &:nth-child(7) {
        background-color: #e3f4e6;
        @media (max-width:1280px) {
            margin-right: 20px;
        }
    }
    &:nth-child(8) {
        background: #f9eefb;
        margin-right: 0;
    }
    @media (max-width:1280px) {
        width: calc(30% - 20px);
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
    right: -62px;
    bottom: -13px;
    width: 19%;
    @media (max-width: 1280px) {
        right: 145px;
        bottom: 12px;
        width: 21%;
    }
    @media (max-width:1080px) {
        right: 119px;
        bottom: 12px;
        width: 24%;
    }
`;
const Card = styled.img`
    width: 100%;
    display: flex;
`;




