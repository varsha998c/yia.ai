import React,{useState} from 'react'
import styled from 'styled-components';
import Img1 from "../../assets/images/tefun-logo.svg";
import Img2 from "../../assets/images/640.svg";
import Img3 from "../../assets/images/spot-min.jpeg";
import Img4 from "../../assets/images/arrow.svg";
import Img5 from "../../assets/images/grey-and-play.svg";
import Img6 from "../../assets/images/elipse.svg";



export default function Spotlight() {
  return (
    <SpotlightSection className="container">
        <Wrapper>
            <Container>
            <DivLeft>
                <ImgContainer>
                    <Img src={Img1} alt="Tefun"/>
                </ImgContainer>
                <Title>Technology Fundamental Program</Title>
                <SubTitle>കേരളത്തിലെ <Small>20 ലക്ഷം</Small>സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് സൗജന്യമായി ടെക്ക്നോളജി പഠിക്കാം!</SubTitle>
                <Paragraph>ഇത് Industry 4.0 കാലഘട്ടം, ടെക്ക്‌നോളജിയുടെ പുത്തൻ സാധ്യതകൾ ഇനി നമ്മുടെ കുട്ടികൾ അറിയണം. സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് ടെക്ക്നോളജിയെ തൊട്ടറിയുവാനും, ടെക്ക്-സാക്ഷരത ഉറപ്പുവരുത്തുന്നതിനുമുള്ള സൗജന്യാവസരം ഒരുക്കുകയാണ് Talrop.</Paragraph>
                <ImgDiv>
                    <Image src={Img2} alt="Image" />
                </ImgDiv>
                <DivButtons>
                    <JoinButton>
                        <A href="#">Join for free</A>
                    </JoinButton>
                    <DivButton>
                        <EnquiryButton>
                            <a className='button' href="#">
                                <H6>Are you a school?</H6>
                                <Span>Enquire Now</Span>
                            </a>
                        </EnquiryButton>
                    </DivButton>
                </DivButtons>        
            </DivLeft>
            <DivRight>
                <InnerDiv>
                    <ImageDiv>
                        <Img src={Img3} alt="Image" />
                    </ImageDiv>
                    <ArrowImage src={Img4} alt="Image" />
                </InnerDiv>
                <PlayContainer>
                    <a className='google' href='#'>
                        <PlayImage src={Img5} alt="Image" />
                    </a>
                </PlayContainer>
            </DivRight>
            </Container>
        </Wrapper>
    </SpotlightSection>
  )
}


const SpotlightSection = styled.section`
    padding-top: 130px;
    max-width: 1380px;
    padding-bottom: 20px;
    position: relative;
    &:after {
        content: '';
        width: 170px;
        height: 170px;
        position: absolute;
        right: 1px;
        background-size: cover;
        bottom: -5%;
        z-index: -1;
        padding-bottom: 1%;
        background-image :url(${Img6});
        @media (max-width:480px){
            display: none;
        }
    }
`;
const Wrapper = styled.div`
    width: 95%;
    margin: 0 auto;
    background-color: rgb(243, 249, 235);
    border-radius: 40px;
    padding: 10px 0;
    @media (max-width:480px){
        border-radius: 15px;
    }
`;
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 60px 50px;
    @media (max-width:1080px) {
        flex-flow: column wrap;
    }
    @media (max-width:980px) {
        padding: 35px 50px;
    }
    @media (max-width:640px){
        text-align: center;
        padding: 35px 13px;
    }
`;
const DivLeft = styled.div`
    width: 45%;
    @media (max-width:1080px) {
        width: 100%;
    }
    @media (max-width:1080px) {
        margin-bottom: 50px;
    }
`;
const ImgContainer = styled.div`
    width: 40%;
    @media (max-width:1080px) {
        width: 30%;
    }
    @media (max-width:980px){
        width: 36%;
    }
    @media (max-width:768px) {
        width: 45%;
    }
    @media (max-width:640px){
        width: 55%;
        margin: 0 auto;
    }
`;
const Img = styled.img`
    width: 100%;
    display: block;
`;
const Title = styled.h4`
    font-size: 24px;
    color: #000;
    font-weight: 600;
    margin: 0;
    @media (max-width:480px){
        font-size: 17px;
    }
    
`;
const SubTitle = styled.h5`
    font-size: 24px;
    color: #000;
    font-weight: 900;
    line-height: 1.4;
    margin-top: 15px;
    @media (max-width:1080px) {
        font-size: 22px;
        margin-top: 22px;
    }
    @media (max-width:980px) {
        font-size: 23px;
    }
    @media (max-width:640px){
        margin-top: 27px;
        font-size: 20px;
    }
    @media (max-width:480px){
        font-size: 19px;
    }
`;
const Small = styled.small`
    color: #0fa76f;
`;
const Paragraph = styled.p`
    color: #595a59;
    line-height: 1.7;
    width: 95%;
    margin: 0 0 20px 0;
    @media (max-width:1080px) {
        width: 100%;
        margin: 0 0 33px 0;
    }
    @media (max-width:980px) {
        width: 90%;
        font-size: 18px;
        line-height: 1.4;
    }
    @media (max-width:768px) {
        width: 100%;
    }
    @media (max-width:480px) {
        font-size: 17px;
    }
`;
const ImgDiv = styled.div`
    width: 80%;
    @media (max-width:1080px) {
        width: 80%;
        margin: 0px auto;
    }
    @media (max-width:480px){
        width: 90%;
    }
`;
const Image = styled.img`
    width: 100%;
    display: block;
`;
const DivButtons = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    margin-top: 30px;
    /* justify-content: space-between; */
    @media (max-width:1280px) {
        width: 96%;
    }
    @media (max-width:1080px) {
        flex-flow: column wrap;
        width: 100%;
    }
`;
const A = styled.a`
   color: #fff;
   text-transform: capitalize;
`;
const JoinButton = styled.div`
    width: 242px;
    height: 70px;
    cursor: pointer;
    margin-right: 30px;
    font-size: 18px;
    display: flex;
    text-decoration: none;
    align-items: center;
    justify-content:center;
    font-weight: 700;
    border-radius: 10px;
    text-align : center;
    transition: all 0.6s ease 0s;
    background-image: linear-gradient(to right, #63bb4c 20%, #1898af 100%);
    &:hover {
        background-image: linear-gradient(to left, #63bb4c 20%, #1898af 100%);
    }
    @media (max-width:1280px) {
        margin-right: 23px;
    }
    @media (max-width:1080px) {
        margin-right: 0;
    }
    @media (max-width:640px) {
        height: 56px;
    }
`;
const DivButton = styled.div`
    width: 242px;
    height: 70px;
    border-radius: 10px;
    background-image: linear-gradient(to right, rgb(99, 187, 76) 30%, rgb(24, 152, 175) 100%);
    padding: 2px;
    &:hover {
        background-image: linear-gradient(to left, rgb(99, 187, 76) 30%, rgb(24, 152, 175) 100%);
    }
    @media (max-width:1280px) {
        width: 183px;
    }
    @media (max-width:1080px) {
        margin-top: 20px;
        width: 235px;
    }
    @media (max-width:640px) {
        height: 56px;
    }
`;
const EnquiryButton = styled.div`
    background: #ffff;
    border-radius: 10px;
    height: 69px;
    width: 241px;
    @media (max-width:1280px) {
        width: 182px;

    }
    @media (max-width:1080px) {
        width: 235px;
    }
    @media (max-width:640px) {
        height: 55px;
    }
`;
const H6 = styled.h6`
    margin: 0;
    color: #40a9b2;
    font-size: 16px;
`;
const Span = styled.span`
    color: #40aab2;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
`;
const DivRight = styled.div`
    width: 52%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    @media (max-width:1080px) {
        width: 70%;
        margin: 0px auto;
    }
    @media (max-width:980px) {
        width: 66%;
    }
    @media (max-width:768px) {
        width: 92%;
    }
    @media (max-width:640px) {
        width: 88%;
    }
`;
const InnerDiv = styled.div`
    position : relative;
    @media (max-width:1080px) {
        margin-bottom: 30px;
    }
`;
const ImageDiv = styled.div`
    overflow: hidden;
    border-radius: 30px;
    transform: rotate(3deg);
    @media (max-width:768px){
        transform: rotate(2deg);
    }
`;
const ArrowImage = styled.img`
    position: absolute;
    display: block;
    width: 25%;
    left: -16%;
    bottom: -12%;
    @media (max-width:768px){
        width: 33%;
        left: -6%;
        bottom: -16%;
    }
    @media (max-width:480px){
        left: -2%;
        bottom: -30%;
    }
`;
const PlayContainer = styled.div`
    @media (max-width:1080px) {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
`;
const PlayImage = styled.img`
    display: block;
    width: 100%;
`;
