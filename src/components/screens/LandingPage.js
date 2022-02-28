import React from 'react';
import styled from 'styled-components';
import Img1 from '../../assets/images/brands-360.svg';
import Img2 from '../../assets/images/presents.svg';
import Img3 from '../../assets/images/tefun-logo.svg';
import Img4 from '../../assets/images/right-arrow.svg';
import Img18 from '../../assets/images/main-banner.png';
import {Link} from 'react-router-dom';
import lakh from '../../assets/images/5.png';
import Students from '../../assets/images/7.png';
import free from '../../assets/images/10.png';
import tech from '../../assets/images/11.png';
import Imp from '../../assets/images/12.png';
import know from '../../assets/images/14.png';
import techh from '../../assets/images/15.png';
import ed from '../../assets/images/16.png';
import Kerala from '../../assets/images/8.png';
import pro from '../../assets/images/17.png';



export default function LandingPage() {
  return (
    <LandingSection>
        <Wrapper>
            <ImgContainer>
                <Img src={Img1} alt="Image" />
                <Presents src={Img2} alt="Image" />
                <Tefun src={Img3} alt="Image" />
            </ImgContainer>
            <ImageContainer>
                <Image src={Kerala} alt="Image" />
                <Image src={lakh} alt="Image" />
                <Image src={Students} alt="Image" />
            </ImageContainer>
            <ImgDiv>
                <Image src={free} alt="Image" />
                <Image src={tech} alt="Image" />
                <Image src={Imp} alt="Image" />
                <Image src={know} alt="Image" />
            </ImgDiv>
            <Container>
                <Image className='tech' src={techh} alt="Image" />
                <Image className='edu' src={ed} alt="Image" />
                <Image className='pro' src={pro} alt="Image" />
            </Container>
            <Button>
                <Link to="/videopage">
                    <a href="" className='learning'>start learning
                    </a>
                    </Link>
                <RightArrow src={Img4} alt="Image" />
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
    background-image: url(${Img18});
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
    padding: 30px 0;
`;
const ImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 50px auto;
    padding-top: 40px;
    justify-content: center;
    align-items: center;
`;
const Img = styled.img`
    width: 255px;
    text-align: center;
    margin-bottom: 25px;
`;
const Presents = styled.img`
    width: 182px;
    margin-bottom: 25px;
`;
const Tefun = styled.img`
    width: 195px;
`;
const ImageContainer = styled.div`
    display: flex;
    width: 70%;
    margin: 14px auto;
    flex-wrap: wrap;
    justify-content: center;
`;
const Image = styled.img`
    width: 205px;
    display: block;
    height: 60px;
    margin-right: 16px;
    &:last-child {
        margin-right: 0;
    }
`;
const Container = styled.div`
    width: 62%;
    margin: 10px auto;
    display: flex;
    justify-content: center;
`;
const ImgDiv = styled.div`
    width: 62%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
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
`;
const RightArrow = styled.img`
    margin-left: 20px;
`;
