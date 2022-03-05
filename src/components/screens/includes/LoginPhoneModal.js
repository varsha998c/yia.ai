import React, { useState } from "react";
import styled from "styled-components";
import Img3 from "../../../assets/images/india-flag.jpeg";
import Img4 from "../../../assets/images/down-arrow.svg";
import Img5 from "../../../assets/images/phone.svg";
import Img6 from "../../../assets/images/decorator.svg";
import Img7 from "../../../assets/images/cancel.png";
import { Link } from "react-router-dom";

export default function LoginPhoneModal({ isModal, setModal, handleModal }) {
    return (
        <>
         {
            isModal &&
            <BackContainer isModal= {isModal} className="back" >
                <Overlay className="overlay"></Overlay>
                <LoginSection isModal ={isModal} className="login">
                    <Login>
                        <ContentDiv>
                            <Title>Login to your account</Title>
                            <Paragraph>
                                Enter your registered phone number
                            </Paragraph>
                            <FormDiv>
                                <InnerDiv>
                                    <ImageDiv>
                                        <Img
                                            className="country"
                                            src={Img3}
                                            alt="Image"
                                        />
                                    </ImageDiv>
                                    <Img
                                        className="arrow"
                                        src={Img4}
                                        alt="Image"
                                    />
                                </InnerDiv>
                                <FillingPart>
                                    <Img
                                        className="phone"
                                        src={Img5}
                                        alt="Image"
                                    />
                                    <Bold>+91</Bold>
                                    <Input
                                        type="text"
                                        placeholder="Enter your phone number"
                                    />
                                </FillingPart>
                            </FormDiv>
                            <Link to="/entername">
                                <Links>Next</Links>
                            </Link>
                            <AcountDiv>
                                New to Yiaai?
                                <a href="#" className="create">
                                    Create an account
                                </a>
                            </AcountDiv>
                        </ContentDiv>
                        <FooterDiv>
                            <a href="#" className="term">
                                Terms of service
                            </a>
                        </FooterDiv>
                    </Login>
                    <CancelDiv onClick={()=>handleModal()}>
                        <Cancel src={Img7} alt="Image" />
                    </CancelDiv>
                </LoginSection>
            </BackContainer>
}
            {/* <Congradulation modalGift={modalGift} setModalGift={setModalGift} /> */}
        </>
    );
}

const BackContainer = styled.div`
    position: fixed;
    transition: 0.3s;
    width: 100%;
    height: 100vh;
    z-index: 999;
    right: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(1px);
    overflow: hidden;

`;
const Overlay = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    min-height: 100vh;
    max-height: 100vh;
    filter: blur(3px);
    backdrop-filter: blur(1px);
`;
const LoginSection = styled.section`
    width: 500px;
    background-color: #fff;
    position: absolute;
    right: ${(props)=>(props.isModal ? "0" : "-500px")};
    top: 0;
    z-index: 700;
    height: 100vh;
    animation-delay: .3s;
    animation: 0.4s ease 0s 1 normal none running slide-box;
    @keyframes slide-box {
        from {right:-200px;}
        to {right:2px;}
    }
    @media (max-width:1280px){
        width:596px;
    }
    @media (max-width:641px){
        width: 428px;
    }
    @media (max-width:480px){
        width:361px;
    }
    @media (max-width:360px){
        width:321px;
    }
`;
const Login = styled.div`
    width: 80%;
    padding: 0 50px;
    background: url(${Img6}) no-repeat;
    @media (max-width:980px){
        padding:50px;
    }
    @media (max-width:640px){
        padding: 50px 0 30px 30px;
        width: 85%;
    }
    @media (max-width:480px){
        width:100%;
    }
`;
const ContentDiv = styled.div`
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 60vh;
    @media (max-width:1080px){
        padding-top: 120px;
    }
    @media (max-width:480px){
        width: 87%;
    }
    /* border-bottom: 1px dotted #333; */
`;
const Img = styled.img``;
const Title = styled.h4`
    margin: 0;
    font-size: 30px;
    font-weight: 500;
    @media (max-width:1080px){
        font-size:27px;
    }
    @media (max-width:480px){
        font-size:25px;
    }
`;
const Bold = styled.b`

`;
const Paragraph = styled.p`
    color: #333333;
    margin: 10px 0 20px;
    width: 75%;
    font-weight:600;
    font-size: 17px;
    @media (max-width:768px){
        font-size:16px;
    }
    @media (max-width:640px){
        font-size:15px;
    }
    @media (max-width:480px){
        width:81%;
    }
`;
const FormDiv = styled.div`
    display: flex;
    @media (max-width:540px){
        margin-top: 25px;
    }
`;
const InnerDiv = styled.div`
    display: flex;
    margin: auto 0;
    cursor: pointer;
    width: 15%;
    padding-left: 5px;
    @media (max-width:640px){
        padding-left:0;
        width:20%;
    }
`;
const ImageDiv = styled.div`
    display: flex;
    border-radius: 50%;
    width: 40px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 5px;
    height: 40px;
    justify-content: center;
`;
const FillingPart = styled.div`
    border: 1px solid #000;
    border-radius: 8px;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #000;
    margin-left: 10px;
    width: 80%;
    background-color: #fff;
    @media (max-width:980px){
        margin-left:0;
    }
`;
const Input = styled.input`
    width: 95%;
    color: #000;
    border: none;
    padding-left: 5px;
    font-size: 17px;
    font-weight: 600;
    @media (max-width:640px){ 
        font-size:15px;
    }
`;
const Links = styled.button`
    border: none;
    width: 100%;
    background-image: linear-gradient(
        to left,
        #63bb4c 0%,
        #40ab79 51%,
        #1e9ba6 100%
    );
    font-size: 20px;
    margin-top: 40px;
    border: none;
    border-radius: 7px;
    height: 55px;
    color: #fff;
    cursor: pointer;
    @media (max-width:640px){
        height:50px;
    }
`;
const AcountDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    color: #4d4d4d;
    font-weight: 600;
    margin: 20px 0 50px 0;
`;
const FooterDiv = styled.div`
    text-align: center;
    margin-top: 100px;
    border-top: 1px dotted #333;
    @media (max-width:640px){
        margin-top: 44px;
    }
    @media (max-width:480px){
        width: 308px;
    }
    @media (max-width:360px){
        width: 270px;
    }
`;
const CancelDiv = styled.div`
    width: 20px;
    display: flex;
    position: absolute;
    top: 0;
    left: -20px;
    cursor: pointer;
    @media (max-width:480px){
        top: 10px;
        left: 2px;
    }
`;
const Cancel = styled.img`
    width: 100%;
    display: block;
`;