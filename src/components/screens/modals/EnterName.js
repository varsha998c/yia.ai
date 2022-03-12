import React, { useState } from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import Img3 from "../../../assets/images/person.png";
import Img6 from "../../../assets/images/decorator.svg";
import Img7 from "../../../assets/images/cancel.png";


export default function EnterName() {
  
  return (
    <>
      {/* <BackContainer style={{ transform: isModal ? "scale(1,1)" : "scale(0,0)" }}> */}
      <BackContainer>
        <Overlay></Overlay>
        <LoginSection>
            <Login>
                <ContentDiv>
                    <Title>Enter your Name</Title>
                    <Paragraph>Please enter your fullname</Paragraph>
                    <FormDiv>
                        <ImageDiv>
                            <Img className="person" src={Img3} alt="Image" />
                            <Input type="text"  placeholder="Enter your phone number" />
                        </ImageDiv>   
                    </FormDiv>
                    <Link to="/enterpassword">
                        <NextButton>Next</NextButton>
                    </Link>
                </ContentDiv>
                <FooterDiv>
                    <a href="#" className="term">
                        Terms of service
                    </a>
                </FooterDiv>
            </Login>
            <CancelDiv to="/#">
                <Cancel src={Img7} alt="Image" />
            </CancelDiv>
        </LoginSection>
    </BackContainer>
      {/* <Congradulation modalGift={modalGift} setModalGift={setModalGift} /> */}
    </>
  );
}

const BackContainer = styled.div`
    position: fixed;
    transition: 0.3s;
    transform: ${({isModal})=>isModal ? 'scale(1,1)' : 'scale(1,1)'};
    width: 100%;
    height: 100vh;
    z-index: 10;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(3px);
`;
const Overlay = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    min-height: 100vh;
    max-height: 100vh;
    filter: blur(1px);
`;
const LoginSection = styled.section`
    padding: 5% 0;
    width: 500px;
    background-color: #fff;
    position: absolute;
    right: 0;
    top: 0;
    height: 100vh;
    z-index: 200;
    animation-delay: .3s;
    animation: 0.4s ease 0s 1 normal none running slide-box;
        @keyframes slide-box {
            from {right:-200px;}
            to {right:2px;}
        }
    @media (max-width:1280px){
        width:600px;
    }
    @media(max-width:640px){
        width: 420px;
    }
    @media (max-width:480px){
        width: 361px;
    }
    @media (max-width:360px){
        width:320px;
    }
`;
const Login = styled.div`
    width: 80%;
    padding: 0 50px;
    background: url(${Img6}) no-repeat;
    @media (max-width:640px){
        width: 86%;
        padding: 0px 28px;
    }
    @media (max-width:360px){
        width: 86%;
        padding: 0px 21px;
    }
`;
const ContentDiv = styled.div`
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 70vh;
    @media (max-width:640px){
        padding-top:60px;
    }
`;
const Img = styled.img`
        width: 35px;
`;
const Title = styled.h4`
    margin: 0;
    font-size: 30px;
    font-weight: 500;
    @media (max-width:640px){
        font-size:25px;
    }
`;
const Paragraph = styled.p`
    color: #333333;
    margin: 10px 0 20px;
    width: 70%;
    font-size: 17px;
    font-weight: 600;
    @media (max-width:360px){
        width: 100%;
        font-size: 14px;
    }
`;
const FormDiv = styled.div`
    display: flex;
`;
const ImageDiv = styled.div`
    display: flex;
    width: 100%;
    padding: 5px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #000;
    justify-content: center;
`;
const Input = styled.input`
    width: 90%;
    color: #000;
    border: none;
    outline: none;
    margin-left: 10px;
`;
const NextButton = styled.button`
    border: none;
    background-image: linear-gradient(
        to left,
        #63bb4c 0%,
        #40ab79 51%,
        #1e9ba6 100%
    );
    width: 100%;
    font-size: 20px;
    margin-top: 40px;
    border: none;
    border-radius: 7px;
    height: 55px;
    color: #fff;
    cursor: pointer;
    &:hover{
        background-image: linear-gradient(
        to right,
        #63bb4c 0%,
        #40ab79 51%,
        #1e9ba6 100%
    ); 
    }
`;
const FooterDiv = styled.div`
    text-align: center;
    margin-top: 25px;
    border-top: 1px dotted #333;
    @media (max-width:480px){
        font-size: 12px;
    }
`;
const CancelDiv = styled(Link)`
    width: 20px;
    display: flex;
    position: absolute;
    top: 0;
    left: -20px;
    cursor: pointer;
    @media (max-width:480px){
        top: 5px;
        left: 4px;
    }
`;
const Cancel = styled.img`
    width: 100%;
    display: block;
`;
