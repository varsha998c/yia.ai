import React from 'react';
import styled from 'styled-components';
import Img1 from '../../../assets/images/locked.svg';

function LockedModal() {
  return (
    <LockedSection>
        <CenterDiv>
            <ImgContainer>
                <Img src={Img1} alt="Image" />
            </ImgContainer>
            <Title>Your examination is locked.</Title>
            <Description>Please complete your lessons as possible to unlock your examination.</Description>
            <ButtonDiv>Go to Lessons</ButtonDiv>
        </CenterDiv>
    </LockedSection>
  )
}

export default LockedModal;

const LockedSection = styled.section`
    padding: 40px 0;
    height: 80vh;
`;
const CenterDiv = styled.div`
    width: 35%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 180px 0;
`;
const ImgContainer = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
`;
const  Img = styled.img`
    display: block;
    width: 100%;
`;
const Title = styled.h2`
    margin: 0;
    font-weight: 500;
`;
const Description = styled.p`
    color: #ababab;
    width: 80%;
    margin: o auto;
    text-align: center;
`;
const ButtonDiv = styled.div`
    margin-top: 20px;
    width: 185px;
    height: 40px;
    border-radius: 5px;
    background-image: linear-gradient(to right,#63bb4c 0%,#40ab79 51%,#1e9ba6 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    cursor: pointer;
`;