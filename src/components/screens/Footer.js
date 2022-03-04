import React from 'react';
import styled from 'styled-components';
import Img1 from "../../assets/images/logo-grey.svg";
import Img2 from "../../assets/images/instagram-color.svg";
import Img3 from "../../assets/images/instagram.svg";
import Img4 from "../../assets/images/facebook-color.svg";
import Img5 from "../../assets/images/facebook.svg";
import Img6 from "../../assets/images/twitter-color.svg";
import Img7 from "../../assets/images/twitter.svg";
import Img8 from "../../assets/images/linkedin-color.svg";
import Img9 from "../../assets/images/linkedin.svg";
import Img10 from "../../assets/images/youtube-color.svg";
import Img11 from "../../assets/images/youtube.svg";


export default function Footer() {
  return (
    <FooterSection>
        <Wrapper>
            <ImgContainer>
                <InnerDiv>
                    <Image src={Img1} alt="Image" />
                </InnerDiv>
            </ImgContainer>
            <MiddleDiv>
                <IconDiv>
                    <Icon href="/">
                        <Img className='color' src={Img2} alt="Image" />
                        <Img src={Img3} alt="Image" />
                    </Icon>
                    <Icon href="/">
                        <Img className='color' src={Img4} alt="Image" />
                        <Img src={Img5} alt="Image" />
                    </Icon>
                    <Icon href="/">
                        <Img className='color' src={Img6} alt="Image" />
                        <Img src={Img7} alt="Image" />
                    </Icon>
                    <Icon href="/">
                        <Img className='color' src={Img8} alt="Image" />
                        <Img src={Img9} alt="Image" />
                    </Icon>
                    <Icon href="/">
                        <Img className='color' src={Img10} alt="Image" />
                        <Img src={Img11} alt="Image" />
                    </Icon>
                </IconDiv>
            </MiddleDiv>
            <Numbers>
                <Phone>+91 8589999 552</Phone>
                <Email>hello@talrop.com</Email>
            </Numbers>
            <FooterDiv>
                <Description>© 2022, <a href='#' className='footer'>Talrop Private Limited</a></Description>
                <Right>
                    <a href='#' className='terms'>Terms of service</a>
                    <a href='#' className='privacy'>Privacy Policy</a>
                </Right>
            </FooterDiv>
        </Wrapper>
    </FooterSection>
  )
}

const FooterSection = styled.section`
    padding: 5% 0;
`;
const Wrapper = styled.div`
    background:#1e1e1e;
    padding: 50px 0;
    text-align: center;
`;
const ImgContainer = styled.div`
    width: 100%;
    text-align: center;
`;
const InnerDiv = styled.div`
    width: 100px;
    margin: 0 auto;
`;
const Image = styled.img`
    display: block;
    width: 100%;
`;
const MiddleDiv = styled.div`
    margin-top: 40px;
`;
const IconDiv = styled.div`
    display: flex;
    width: 16%;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
`;
const Icon = styled.a`
    padding: 10px;
    display: inline-block;
    &:hover img{
        display: none;
    }
    &:hover .color{
        display: block;
    }
`;
const Img = styled.img`
    display: block;
    &.color{
        display: none;
    }
`;
const FooterDiv = styled.div`
    width: 34%;
    margin: 40px auto;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: space-between;
    align-items: center;
`;
const Description = styled.p`
    color: #8e8e8e;
    margin: 0;
`;
const Right = styled.div`
    color: #8e8e8e;
    width: 46%;
    display: flex;
    justify-content: space-between;
`;
const Numbers = styled.div`
    width: 16%;
    margin: 20px auto;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #8e8e8e;
`;
const Phone = styled.h6`
    margin: 0;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
`;
const Email = styled.h5`
    margin: 0;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
`;

