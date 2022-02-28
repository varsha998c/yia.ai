import React, { useState } from "react";
import styled from "styled-components";
import Img1 from "../../../assets/images/logo.svg";
import Img2 from "../../../assets/images/menu-icon.svg";
import { Link, Router } from "react-router-dom";
import LoginPhoneModal from "./LoginPhoneModal";

export default function Header() {
    const [isModal, setModal] = useState(false);

    const handleModal = () => {
        setModal((prev) => !prev);
    };
    return (
        <>
            <HeaderSection>
                <LoginPhoneModal
                    isModal={isModal}
                    setModal={setModal}
                    handleModal={handleModal}
                />
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
`;
const MenuImage = styled.div`
    width: 40px;
`;