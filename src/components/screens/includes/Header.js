import React, { useState } from "react";
import styled from "styled-components";
import Img1 from "../../../assets/images/logo.svg";
import Img2 from "../../../assets/images/menu-icon.svg";
import { Link, Router } from "react-router-dom";
import LoginPhoneModal from "./LoginPhoneModal";

export default function Header() {
    const [isModal, setModal] = useState(false);

    const handleModal = () => {
        setModal(!isModal);
    };
    return (
        <>
            <LoginPhoneModal
            isModal={isModal}
            setModal={setModal}
            handleModal={handleModal}
        />
        
               
            <HeaderSection>

                <Wrapper>
                    <DivLeft>
                        <H1>
                            <a href="#">
                                <Img src={Img1} alt="Logo" />
                            </a>
                        </H1>
                    </DivLeft>
                    <DivRight>
                        <RightButton>
                            <Button onClick={handleModal}>Join Now</Button>
                            <MenuImage>
                                <Img src={Img2} alt="Image" />
                            </MenuImage>
                        </RightButton>
                    </DivRight>
                </Wrapper>
            </HeaderSection>
            {/* <LoginPhoneModal isModal={isModal}/> */}
        </>
    );
}

const HeaderSection = styled.div`
    position: fixed;
    width: 100%;
    z-index: 10;
    height: 110px;
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.1);
    @media (max-width: 1280px) {
        height: 85px;
    }
    @media (max-width: 980px) {
        height: 80px;
    }
`;
const Wrapper = styled.div`
    width: 85%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const DivLeft = styled.div``;
const H1 = styled.h1`
    width: 125px;
    margin: 20px auto;
    @media (max-width:1280px) {
        width: 110px;
    }
    @media (max-width:980px) {
        width: 100px;
    }
    @media (max-width:768px) {
        width: 90px;
    }
    @media (max-width:640px) {
        width: 80px;
    }
    @media (max-width:480px) {
        width: 70px;
    }
    @media (max-width:320px) {
        width: 60px;
    }
`;
const Img = styled.img`
    display: block;
    width: 100%;
`;
const DivRight = styled.div``;
const RightButton = styled.div`
    display: flex;
    width: 212px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width:980px) {
        justify-content: flex-end;
    }
    @media (max-width:768px) {
        width: 134px;
    }
    @media (max-width:640px) {
        
    }
    @media (max-width:480px) {
        
    }
    @media (max-width:320px) {
        
    }
`;
const Button = styled.button`
    padding: 15px 34px;
    border: none;
    cursor: pointer;
    font-size: 18px;
    color: #fff;
    background-image: linear-gradient(
        to right,
        #63bb4c 0%,
        #40ab79 51%,
        #1e9ba6 100%
    );
    border-radius: 10px;
    font-weight: 600;
    &:hover {
        background-image: linear-gradient(to left, #63bb4c 20%, #1898af 100%);
    }
    @media (max-width:1280px) {
        padding: 15px 27px;
    }
    @media (max-width:768px) {
        padding: 15px;
        font-weight: 400;
        font-size: 14px;
    }
    @media (max-width:480px) {
        padding: 9px;
        font-weight: 200;
    }
`;
const MenuImage = styled.div`
    width: 40px;
    @media (max-width:980px) {
        display: none;
    }
`;