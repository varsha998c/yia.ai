import React,{useState} from 'react';
import styled from 'styled-components';
import Img1 from "../../assets/images/Jayasurya_01.jpg";
import Img2 from "../../assets/images/play2.jpg";
import Img3 from "../../assets/images/Antony_vertical_thumb_.jpg";
import Img4 from  "../../assets/images/Major_Ravi_02.jpg";
import Img5 from "../../assets/images/Niranjana_01.jpg";
import Img6 from "../../assets/images/Bibin-01-min.jpg";
import Img7 from "../../assets/images/Sandra-01-min.jpg";
import Img8 from "../../assets/images/Vishnu-unnikrishnan-01-min.jpg";
import Img9 from "../../assets/images/Maniyanpilla-Raju-01-min.jpg";



export default function Cards() {
    const [cards, setCards] = useState([
        {
            id: 1,
            name: "Jayasurya",
            job: "Actor",
            image: Img1,
            icon: Img2,
        },
        {
            id: 2,
            name: "Antony Vargheese",
            job: "Actor",
            image: Img3,
            icon: Img2,
        },
        {
            id: 3,
            name: "Major Ravi",
            job: "Director & Actor",
            image: Img4,
            icon: Img2,
        },
        {
            id: 4,
            name: "Niranjana Anoop",
            job: "Actress",
            image: Img5,
            icon: Img2,
        },
        {
            id: 5,
            name: "Bibin George",
            job: "Script writer & Actor",
            image: Img6,
            icon: Img2,
        },
        {
            id: 6,
            name: "Sandra Thomas",
            job: "Producer & Actress",
            image: Img7,
            icon: Img2,
        },
        {
            id: 7,
            name: "Vishnu",
            job: "Actor & Screenwriter",
            image: Img8,
            icon: Img2,
        },
        {
            id: 8,
            name: "Maniyanpilla Raju",
            job: "Actor",
            image: Img9,
            icon: Img2,
        },
    ]);
  return (
    <CardSection className="container">
        <Wrapper>
            <Title>TEFUN-ന്</Title>
            <Description>ആശംസകളോടെ</Description>
            <CardDiv>
                {cards.map((item)=> (
                        <InnerCards>
                            <ImageContainer>
                                <Img src={item.image} alt="Image"/>
                            </ImageContainer>
                            <Div></Div>
                            <CardDetails>
                                <Name>{item.name}</Name>
                                <Studies>{item.job}</Studies>
                                <ButtonDiv className='button' >
                                    <Span>
                                        <img src={item.icon} alt="Image" />
                                    </Span>
                                    <Small href='#'>Watch story</Small>
                                </ButtonDiv>
                            </CardDetails>
                        </InnerCards>
                    ))}
            </CardDiv>
        </Wrapper>
    </CardSection>
  )
}


const CardSection = styled.section`
    padding: 5% 0;
`;
const Wrapper = styled.div`
    margin: 0 auto;
    width: 80%;
    @media (max-width:1280px) {
        width: 77%;
    }
    @media (max-width:640px) {
        width: 91%;
    }
`;
const Title = styled.h2`
    color: #0fa76f;
    text-align: center;
    margin: 0 0 25px 0;
    font-size: 26px;
    @media (max-width:640px){
        margin: 0 0 9px 0;
    }
    @media (max-width:480px){
        font-size: 23px;
    } 
`;
const Description = styled.p`
    text-align: center;
    margin: 0 auto;
    width: 30%;
    font-size: 20px;
    font-weight: 700;
    @media (max-width:640px){
        width: 45%;
    }
    @media (max-width:540px){
        width: 47%;
    }
    @media (max-width:480px){
        width: 67%;
        font-size: 18px;
    } 
`;
const CardDiv = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 40px;
    padding: 0;
    @media (max-width:1280px) {
        justify-content: center;
    }
    @media (max-width:640px){
        justify-content: space-between;
    }
`;
const InnerCards = styled.li`
    width: calc(25% - 20px);
    list-style: none;
    margin-bottom :30px;
    margin-right: 20px;
    position: relative;
    &:hover {
        .button {
            opacity:1 ;
            height: 35px;
        }
    }
    &:nth-child(4) {
        margin-right: 0;
        @media (max-width:1280px) {
            margin-right: 20px;
        }
        @media (max-width:640px){
            margin-right: 0;
        }
    }
    &:nth-child(8) {
        margin-right: 0;
    }
    @media (max-width:1280px) {
        width: calc(33% - 20px);
    }
    @media (max-width:768px){
        width: calc(50% - 20px);
    }
    &:nth-child(2) {
        @media (max-width:640px){
            margin-right: 0;
        }
    }
    &:nth-child(6) {
        @media (max-width:640px) {
            margin-right: 0px;
        }
    }
    @media (max-width:540px){
            width: calc(50% - 10px);
    }
`;
const Div = styled.div`
    height: 100%;
    background: linear-gradient(rgba(248, 248, 248, 0) 0%, rgb(0, 0, 0) 100%);
    opacity: 0.4;
    position: absolute;
    width: 100%;
    top: 0px;
    left: 0px;
    height: 100%;
    z-index: 1;
    border-radius: 10px;
`;
const ImageContainer = styled.div`
    
`;
const Img = styled.img`
    width: 100%;
    display: block;
    border-radius: 10px;

`;
const CardDetails = styled.div`
    width: 100%;
    position: absolute;
    cursor: pointer;
    bottom: 32px;
    right: 0;
    z-index: 8;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border-radius: 10px;
    /* &:hover {
        .button {
            height: 35px;
        }
    } */
    @media (max-width:980px) {
        bottom: 15px;
    }
`;
const Name = styled.h4`
    margin: 0;
    font-size: 30px;
    font-weight: 600;
    color: #fff;
    text-align: center;
    @media (max-width:1280px) {
        font-size: 24px;
    }
    @media(max-width:980px){
        font-size: 18px;
        padding: 10px 25px;
    }
    @media (max-width:768px) {
        font-size: 24px;
        padding: 0;
    }
    @media (max-width:480px){
        font-size: 23px;
    }
    @media (max-width:360px){
        font-size:16px;
    }
`;
const Studies = styled.p`
    margin: 0;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    @media (max-width:980px){
        font-size: 15px;
    }
    @media (max-width:768px) {
        font-size: 16px;
    }
    @media (max-width:360px){
        font-size:14px;
    }
`;
const ButtonDiv = styled.div`
    background-color:#fff;
    border-radius: 5px;
    display: flex;
    width: 60%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease 0s;
    padding: 5px;
    margin-top: 20px;
    height: 0;
    opacity: 0;
    &:hover {
        opacity: 1;
    } 
    @media (max-width:768px) {
        opacity: 1;
        height: 30px;
        width: 80%;
    }
    @media (max-width:640px){
        height: 20px;
    }
`;
const Span = styled.span`
    width: 20px;
    img {
        width: 100%;
        display: block;
        @media (max-width:480px){
            display:none;
        }
    }
`;
const Small = styled.a`
    text-decoration: none;
    color: #000;
    text-transform: uppercase;
    @media (max-width:768px) {
        font-size: 14px;
        font-weight: 500;
    }
    @media (max-width:640px){
        font-size: 13px;
    }
`;
