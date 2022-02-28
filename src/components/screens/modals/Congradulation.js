import React from 'react';
import styled from 'styled-components';
import Img1 from '../../../assets/images/congratsbg.svg';
import Img2 from '../../../assets/images/greenline.svg';
import Img3 from '../../../assets/images/child.svg';
import {Link} from 'react-router-dom';


const Congradulation = ({modalGift,setModalGift,cngrtsModal}) => {
// const Congradulation = ({ isModal, setModal, handleModal }) => {

  return (
    <Section cngrtsModal={cngrtsModal} >
     {/* <Section> */}

        <Wrapper>
            <Container>
                <LeftDiv>
                    <Image src={Img3} alt="Image" />
                </LeftDiv>
                <RightDiv>
                    <Title>Welcome</Title>
                    <Description>You've successfully activated your Tefun program</Description>
                    <Link to="/landing"><Links>Go to Dashboard</Links></Link>
                </RightDiv>
            </Container>
            <Line src={Img2} alt="Image" />
        </Wrapper>
    </Section>
  )
}

export default Congradulation;


const Section = styled.section`
    backdrop-filter: blur(5px);
    display: flex;
    /* transform: scale(0, 0); */
    position: fixed;
    top: 0;
    left: 0;

    align-items: center;
    width: 100%;
    height:100vh;
    justify-content: center;
    transform : ${({cngrtsModal})=>cngrtsModal ? 'scale(1,1)' : 'scale(0,0)'};
    transition:.4s ease;
    z-index: 10000;
    /* flex-direction: column; */
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
    font-size: 19px;
    margin: 25px 0 0 0;
`;
const Description = styled.p`
    color: #20aa77;
`;
const Links = styled.div`
    width: 72%;
    cursor: pointer;
    height: 37px;
    margin: 37px auto;
    background-image: linear-gradient(to right,#63bb4c 0%,#40ab79 51%,#1e9ba6 100%);
    border-radius: 5px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
`;
const LeftDiv = styled.div`
    width: 66%;
    position: absolute;
    left: -59px;
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
