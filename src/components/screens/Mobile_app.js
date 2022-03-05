import React from 'react';
import styled from 'styled-components';
import Img1 from "../../assets/images/grey-and-play.svg";
import Img2 from "../../assets/images/mobile-app.png";


export default function Mobile_app() {
  return (
    <Section className="container">
        <Wrapper>
            <Container>
                <DivLeft>
                    <Heading>ടാൽറോപിന്റെ OTT കമ്മ്യൂണിറ്റി പ്ലാറ്റ്‌ഫോമായ യായിലൂടെ തികച്ചും സൗജന്യമായി ഇപ്പോൾ തന്നെ പഠനം ആരംഭിക്കൂ</Heading>
                    <Description><Bold>Tefun</Bold>-ലൂടെ ടെക്ക്‌നോളജിയുടെ വിസ്മയലോകം ഇനിയിതാ നിങ്ങളിലേക്ക്. ടെക്ക്-പഠനം ഇനി കൂടുതൽ എളുപ്പമാക്കാൻ  <Span>yia.ai</Span>  മൊബൈൽ ആപ്പ് ഡൗൺലോഡ് ചെയ്യൂ.</Description>
                    <ImgContainer>
                        <Anchor>
                            <Img src={Img1} alt="Image" />
                        </Anchor>
                        <Anchor className='ytube'>
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
    width: 94%;
    position: relative;
    @media (max-width:1080px){
        width:90% ;
    }
`;
const Container = styled.div`
    display: flex;
    background: #f3f9eb;
    border-radius: 30px;
    height: 500px;
    padding:0 70px;
    box-sizing:border-box ;
    justify-content: space-between;
    /* align-items: center; */
    width: 100%;
    @media (max-width:1080px ){
        flex-direction:column-reverse ;
        height: 750px;
        align-items:center ;
    }
    @media (max-width:980px){
        padding: 0 50px;
    }
    @media (max-width:640px){
        padding:0 20px;
    }
`;
const DivLeft = styled.div`
    width: 50%;
    padding-top: 80px;
    @media (max-width:1080px){
        width: 100%;
        margin: 0 auto;
        padding: 27px 0;
    }
`;
const Heading = styled.h3`
    width: 100%;
    margin: 0 0 20px 0;
    color: #333;
    @media (max-width:1280px){
        width: 96%;
        font-weight: 900;
        line-height: 1.3;
        font-size: 21px;
    }
    @media (max-width:1080px){
        text-align: center ;
        width:100% ;
    }
    @media (max-width:980px){
        width: 83%;
        margin: 0 auto;
    }
    @media (max-width:640px){
        width: 100%;
        font-size: 18px;
    }
    @media (max-width:540px){
        width: 90%;
    }
`;
const Description = styled.p`
    width: 90%;
    line-height: 1.4;
    font-size: 20px;
    @media (max-width:1280px){
        width:100% ;
    }
    @media (max-width:1080px){
        width: 100%;
        text-align: center ;
    }
    @media (max-width:768px){
        margin-top: 30px;
        width:99% ;
    }
    @media (max-width:640px){
        font-size:17px;
        width:100%;
    }
    @media (max-width:540px){
        font-size: 15px;
        width: 90%;
        margin: 20px auto 0;
    }
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
    @media (max-width:1280px){
        margin-top: 32px;
        width: 80%;
    }
    @media (max-width:1080px){
        width: 100%;
        display: flex;
        justify-content: center;
    }
`;
const Anchor = styled.div`
    margin-right: 20px;
    @media (max-width:1080px){
        height: 57px;
        width: 149px;
    }
    @media (max-width:540px){
        width: 130px;
    }
`;
const Img = styled.img`
    display: block;
    width: 100%;
`;
const DivRight = styled.div`
    width: 50%;
`;
const ImageContainer = styled.div`
     width: 640px;
     transform: translateY(63px);
     @media (max-width:1280px){
        width: 553px;
        transform: translateY(109px);
     }
     @media (max-width:1080px) {
        width: 481px;
        transform: translate(10px, 16px);
     }
     @media (max-width:980px){
        transform: translate(-30px,16px);
        width:395px;
     }
     @media (max-width:768px){
        transform: translate(-40px,52px);
     }
     @media (max-width:640px){
        width: 335px;
        transform: translate(-50px,57px);
     }
    
`;
const Image = styled.img`
    display: block;
    width: 100%;
  
  
`;
