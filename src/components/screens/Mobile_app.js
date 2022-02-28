import React from 'react';
import styled from 'styled-components';
import Img1 from "../../assets/images/grey-and-play.svg";
import Img2 from "../../assets/images/mobile-app.png";


export default function Mobile_app() {
  return (
    <Section>
        <Wrapper>
            <Container>
                <DivLeft>
                    <Heading>ടാൽറോപിന്റെ OTT കമ്മ്യൂണിറ്റി പ്ലാറ്റ്‌ഫോമായ യായിലൂടെ തികച്ചും സൗജന്യമായി ഇപ്പോൾ തന്നെ പഠനം ആരംഭിക്കൂ</Heading>
                    <Description><Bold>Tefun</Bold>-ലൂടെ ടെക്ക്‌നോളജിയുടെ വിസ്മയലോകം ഇനിയിതാ നിങ്ങളിലേക്ക്. ടെക്ക്-പഠനം ഇനി കൂടുതൽ എളുപ്പമാക്കാൻ  <Span>yia.ai</Span>  മൊബൈൽ ആപ്പ് ഡൗൺലോഡ് ചെയ്യൂ.</Description>
                    <ImgContainer>
                        <Anchor herf="#">
                            <Img src={Img1} alt="Image" />
                        </Anchor>
                        <Anchor herf="#">
                            <Img src={Img1} alt="Image" />
                        </Anchor>
                    </ImgContainer>
                </DivLeft>
                <DivRight>
                    <ImageContainer>
                        <Image src={Img2} alt="Image" />
                    </ImageContainer>
                </DivRight>
            </Container>
        </Wrapper>
    </Section>
  )
}

const Section = styled.section`
    padding: 5% 0;
`;
const Wrapper = styled.div`
    margin: 0 auto;
    width: 85%;
    border-radius: 30px;
    background: #f3f9eb;
    height: 500px;
    position: relative;
`;
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;
const DivLeft = styled.div`
    width: 50%;
    padding: 30px 30px 30px 90px;
`;
const Heading = styled.h3`
    width: 90%;
    color: #333;
    

`;
const Description = styled.p`
    width: 90%;
`;
const Bold = styled.b`
    color: #636560;
`;
const Span = styled.span`
    width: 80%;
    line-height: 1.7;
    color: #636560;
    font-size: 20px;
`;
const ImgContainer = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    margin-top: 60px;
`;
const Anchor = styled.a`
    margin-right: 20px;
`;
const Img = styled.img`
    display: block;
    width: 100%;
`;
const DivRight = styled.div`
    width: 50%;
    height: 100%;
`;
const ImageContainer = styled.div`
    width: 100%;
`;
const Image = styled.img`
    display: block;
    width: 55%;
    position: absolute;
    bottom: -25%;
    right: -5%;
`;
