import React from 'react'
import styled from 'styled-components';
import Img1 from '../../../assets/images/tefun-logo.svg';   
import Img2 from '../../../assets/images/congrats.svg';
import Img3 from '../../../assets/images/congratsbg.svg';



function ExamComplete() {
  return (
    <ExamCompleteSection>
        <Wrapper>
            <InnerDiv>
                <TefunDiv>
                    <Img src={Img1} alt="Image" />
                </TefunDiv>
                <CongratsDiv>
                    <Img src={Img2} alt="Image" />
                </CongratsDiv>
                <H2>Congratulations!</H2>
                <Description>You have completed your examination .We will provide your certificate soon.</Description>
                <Button><a href="/" className='goto'>Go to Dashboard</a></Button>
            </InnerDiv>
        </Wrapper>
    </ExamCompleteSection>
  )
}

export default ExamComplete;

const ExamCompleteSection = styled.section`
    padding: 40px 0;
`;
const Wrapper = styled.div`
    background-image: url(${Img3});
    background-repeat: no-repeat;
    background-size: cover;
    width: 95%;
    margin: 0 auto;
    text-align: center;
    height: 80vh;
    background-position: bottom;
`;
const InnerDiv = styled.div`
    width: 30%;
    margin: 0 auto;
    padding-top: 20px;
`;
const TefunDiv = styled.div`
    padding-top: 80px;
    width: 150px;
    margin: 0 auto;
`;
const Img = styled.img`
    display: block;
    width: 100%;
`;
const CongratsDiv = styled.div`
    width: 93%;
    margin: 20px auto;
`;
const H2 = styled.h2`
    color: #22a575;
    font-weight: 500;
`;
const Description = styled.p`
    color: #a3b5b5;
    width: 90%;
    margin: 0 auto;
`;
const Button = styled.div`
    margin:30px auto;
    width: 143px;
    height: 36px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-image: linear-gradient(to right,#63bb4c 0%,#40ab79 51%,#1e9ba6 100%);


`;