import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Img2 from "../../assets/images/main-banner.png";

export default function LandingPage() {
  return (
    <LandingSection className="container">
        <Wrapper>
            <ImgContainer>
                <Img src={require("../../assets/images/brands-360.svg").default} alt="Image" />
                <Presents src={require("../../assets/images/presents.svg").default} alt="Image" />
                <Tefun src={require('../../assets/images/tefun-logo.svg').default} alt="Image" />
            </ImgContainer>
            <ImageContainer>
                <Image src={require("../../assets/images/8.png")} alt="Image" />
                <Image src={require("../../assets/images/5.png")} alt="Image" />
                <Image src={require("../../assets/images/7.png")} alt="Image" />
            </ImageContainer>
            <ImgDiv>
                <Image src={require("../../assets/images/10.png")} alt="Image" />
                <Image src={require("../../assets/images/11.png")} alt="Image" />
                <Image src={require("../../assets/images/12.png")} alt="Image" />
                <Image src={require("../../assets/images/14.png")} alt="Image" />
            </ImgDiv>
            <Container>
                <Image className='tech' src={require("../../assets/images/15.png")} alt="Image" />
                <Image className='edu' src={require("../../assets/images/16.png")} alt="Image" />
                <Image className='pro' src={require("../../assets/images/17.png")} alt="Image" />
            </Container>
            <Button>
                <Link to="/videopage">
                    <a href="" className='learning'>start learning
                    </a>
                    </Link>
                <RightArrow className='right' src={require("../../assets/images/right-arrow.svg").default} alt="Image" />
            </Button>  
        </Wrapper>
    </LandingSection>
  )
}


const LandingSection = styled.section`
    padding: 20px 0;
    width: 100%;
`;
const Wrapper = styled.div`
    width: 95%;
    margin: 0 auto;
    border-radius: 10px;
    background-image: url(${Img2});
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
    padding: 30px 0;
    @media (max-width:1080px){
        padding: 1px 0;
    }
    @media (max-width:980px){
        height: 94vh;
        margin: 0px auto;
    }
`;
const ImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 50px auto;
    padding-top: 40px;
    justify-content: center;
    align-items: center;
    @media (max-width:1280px) {
        margin: 5px auto 10px;
    }
    @media (max-width:980px){
        width: 85%;
    }
    @media (max-width:768px){
        padding-top:0;
    }
`;
const Img = styled.img`
    width: 255px;
    text-align: center;
    margin-bottom: 25px;
    @media (max-width:980px){
        width: 230px;
    }
    @media (max-width:768px){
        width: 210px;
    }
`;
const Presents = styled.img`
    width: 182px;
    margin-bottom: 25px;
    @media (max-width:768px) {
        width: 170px;
    }
`;
const Tefun = styled.img`
    width: 195px;
    @media (max-width:1080px){
        width: 184px;
    }
    @media (max-width:768px){
        width: 170px;
    }
`;
const ImageContainer = styled.div`
    display: flex;
    width: 70%;
    margin: 14px auto;
    flex-wrap: wrap;
    justify-content: center;
    @media (max-width:980px){
        width: 85%;
    }
    @media (max-width:768px){
        width: 76%;
    }
    @media (max-width:640px){
        width: 80%;
    }
    @media (max-width:540px){
        width: 84%;
    }
`;
const Image = styled.img`
    width: 205px;
    display: block;
    height: 60px;
    margin-right: 16px;
    &:last-child {
        margin-right: 0;
    }
    @media (max-width:1080px){
        width: 200px;
        margin-right: 13px;
    }
    @media (max-width:980px){
        width: 160px;
    }
    @media (max-width:768px){
        width: 137px;
        margin-right: 7px;
        height: 53px;
    }
    @media (max-width:640px){
        width: 120px;
        height: 50px;
    }
    @media (max-width:540px){
        width: 92px;
        height: 39px;
    }
    @media (max-width:480px){
        width: 77px;
        height: 30px;
    }
    @media (max-width:360px){
        width: 69px;
    }
`;
const Container = styled.div`
    width: 62%;
    margin: 10px auto;
    display: flex;
    justify-content: center;
    @media (max-width:768px){
        width: 69%;
    }
    @media (max-width:640px){
        width: 79%;
    }
`;
const ImgDiv = styled.div`
    width: 62%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    @media (max-width:980px){
        width: 90%;
    }
    @media (max-width:640px){
        width: 95%;
    }
`;
const Button = styled.button`
    height: 50px;
    width: 195px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
    border-radius: 5px;
    border: none;
    background-image: linear-gradient(to right,#63bb4c 0%,#40ab79 51%,#1e9ba6 100%);
    @media (max-width:768px){
        width: 182px;
    }
    @media (max-width:540px){
        height: 42px;
        width: 162;
    }
    @media (max-width:480px){
        margin-top: 69px;
    }
`;
const RightArrow = styled.img`
    margin-left: 20px;
`;
