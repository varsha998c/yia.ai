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
    <SpotlightSection>
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
                    <A href="#">Join for free</A>
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
    padding-top: 10%;
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
    }
`;
const Wrapper = styled.div`
    width: 95%;
    margin: 0 auto;
    background-color: rgb(243, 249, 235);
    border-radius: 40px;
    padding: 10px 0;
    
`;
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 60px 50px;
`;
const DivLeft = styled.div`
    width: 45%;
`;
const ImgContainer = styled.div`
    width: 40%;
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
`;
const SubTitle = styled.h5`
    font-size: 24px;
    color: #000;
    font-weight: 900;
    line-height: 1.4;
    margin-top: 15px;
`;
const Small = styled.small`
    color: #0fa76f;
`;
const Paragraph = styled.p`
    color: #595a59;
    line-height: 1.7;
    width: 95%;
    margin: 0 0 20px 0;
`;
const ImgDiv = styled.div`
    width: 80%;

`;
const Image = styled.img`
    width: 100%;
    display: block;
`;
const DivButtons = styled.div`
    display: flex;
    align-items: center;
    margin-top: 30px;
`;
const A = styled.a`
    width: 198px;
    height: 62px;
    cursor: pointer;
    margin-right: 30px;
    color: #fff;
    text-transform: capitalize;
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
`;
const DivButton = styled.div`
    width: 198px;
    height: 61px;
    border-radius: 10px;
    background: #fff;
    background-image: linear-gradient(to right, rgb(99, 187, 76) 30%, rgb(24, 152, 175) 100%);
    padding: 2px;
`;
const EnquiryButton = styled.div`
    background: #ffff;
    border-radius: 10px;
    height: 60px;
    width: 197px;
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
    
`;
const InnerDiv = styled.div`
    position : relative;
`;
const ImageDiv = styled.div`
    overflow: hidden;
    border-radius: 30px;
    transform: rotate(3deg);
`;
const ArrowImage = styled.img`
    position: absolute;
    display: block;
    width: 25%;
    left: -16%;
    bottom: -12%;
`;
const PlayContainer = styled.div``;
const PlayImage = styled.img`
    display: block;
    width: 100%;
`;
