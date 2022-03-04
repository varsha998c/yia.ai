import React, {useState} from 'react';
import styled from 'styled-components';
import Img2 from '../../../assets/images/alerticon.svg';
import Img1 from '../../../assets/images/logo.svg';
import Img3 from '../../../assets/images/down-arrow.svg';
import {Link} from 'react-router-dom';


function HeaderModal({setIsModal}) {
    const handleClick = () => {
        setIsModal(true);
    }

  return (
    <>
    
    <Section>
        <Wrapper>
            <ImgContainer>
                <Img src={Img1} alt="Image" />
            </ImgContainer>
            <RightDiv>
                <AlertIcon>
                    <Img src={Img2} alt="Image" />
                </AlertIcon>
                <Name>
                    <Div>V</Div>
                    <MyName onClick={()=> handleClick()}>Varsha 
                        <img className='select' src={Img3} alt="Image" />
                    </MyName>
                </Name>
            </RightDiv>
        </Wrapper>
    </Section>
    </>
  )
}

export default HeaderModal;

const Section = styled.section`
    position: fixed;
    width: 100%;
    z-index: 10;
    backdrop-filter: blur(10px);
    background-color: rgba(0, 0, 0, .1);
`;
const Wrapper = styled.div`
    width: 95%;
    margin: 0 auto;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const ImgContainer = styled.div`
    width: 75px;
`;
const Img = styled.img`
    display: block;
    width: 100%;
`;
const RightDiv = styled.div`
    width: 11%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const AlertIcon = styled.div`
    width: 20px;
    padding-right: 20px;
    border-right: 1px solid #000;
`;
const Name = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 10px;
`;
const Div = styled.div`
    width: 30px;
    text-align: center;
    height: 30px;
    justify-content: center;
    display: flex;
    align-items: center;
    border-radius: 50%;
    background-color: #56b45c;
    margin-right: 5px;
`;
const MyName = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
`;
