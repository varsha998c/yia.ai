import React from 'react'
import styled from 'styled-components';
import Img1 from '../../../assets/images/congratsbg.svg';
import Img2 from '../../../assets/images/linegreen.svg';
import Img3 from '../../../assets/images/college.svg';


function CollegeDetailView({clgModal, setClgModal}) {
    // console.log(Modal, "isModal");
    const handleChange = () => {
        setClgModal(false);
    }
  return (
    <CollegeDetailSection clgModal={clgModal}>
        <Wrapper>
            <Container>
                <LeftDiv>
                    <Image src={Img3} alt="Image" />
                </LeftDiv>
                <RightDiv>
                    <Title>Hurray!</Title>
                    <Description>You have successfully completed the Tefun course...We will notify your examination date soon.</Description>
                    <Board onClick={()=> handleChange()}>Go to Dashboard</Board>
                </RightDiv>
            </Container>
            <Line src={Img2} alt="Image" />
        </Wrapper>
    </CollegeDetailSection>
  )
}

export default CollegeDetailView;


const CollegeDetailSection = styled.section`
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    width: 100%;
    height:100vh;
    justify-content: center;
    transform : ${({clgModal})=>clgModal ? 'scale(1,1)' : 'scale(0,0)'};
    transition:.4s ease;
    z-index: 10000;
    position: fixed;
    top: 0;
    left: 0;
`;
const Wrapper = styled.div`
    width: 600px;
    height: 300px;
    background-image: url(${Img1});
    position: relative;
    border-radius: 5px;
    background-repeat: no-repeat;
    position: relative;
    border-radius: 5px;
    background-position: bottom;
    background-size: cover;
    box-shadow: 1px 3px 25.3px #8888;

`;
const Container = styled.div`
    /* background-image: url(${Img3}); */
    position: relative;
`;
const RightDiv = styled.div`
    width: 39%;
    position: absolute;
    top: 0;
    right: 25px;
    margin: 20px 7px;
    text-align: center;
`;
const Title = styled.h4`
    color: #20aa77;
    font-size: 30px;
    margin: 25px 0 0 0;
    text-transform: none;
`;
const Description = styled.p`
    color: #577d7e;
    font-size: 14px;
    margin-top: 22px;
    font-weight: 500;
    text-transform: none;
`;
const Board = styled.div`
    width: 72%;
    height: 39px;
    margin: 37px auto;
    background-image: linear-gradient(to right,#63bb4c 0%,#40ab79 51%,#1e9ba6 100%);
    border-radius: 5px;
    border: none;
    color: #fff;
    text-transform:capitalize;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const LeftDiv = styled.div`
    width: 43%;
    position: absolute;
    left: 33px;
    top: 2px;

`;
const Image = styled.img`
    display: block;
    width: 100%;
`;
const Line = styled.img`
    width: 100%;
    bottom: 0;
    position: absolute;
    left: 0;
`;
