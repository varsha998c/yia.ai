import React from 'react'
import { useState } from 'react/cjs/react.production.min';
import styled from 'styled-components';
import Img1 from "../../assets/images/actor.jpg";
import Img2 from "../../assets/images/play2.jpg";



export default function Cards() {
    // const [cards, setCards] = useState([
    //     {
    //         id: 1,
    //         name: "Mammootty",
    //         job: "Actor",
    //         image: Img1,
    //         icon: Img2,
    //     },
    //     {
    //         id: 2,
    //         name: "Mammootty",
    //         job: "Actor",
    //         image: Img1,
    //         icon: Img2,
    //     },
    //     {
    //         id: 3,
    //         name: "Mammootty",
    //         job: "Actor",
    //         image: Img1,
    //         icon: Img2,
    //     },
    //     {
    //         id: 4,
    //         name: "Mammootty",
    //         job: "Actor",
    //         image: Img1,
    //         icon: Img2,
    //     },
    //     {
    //         id: 5,
    //         name: "Mammootty",
    //         job: "Actor",
    //         image: Img1,
    //         icon: Img2,
    //     },
    //     {
    //         id: 6,
    //         name: "Mammootty",
    //         job: "Actor",
    //         image: Img1,
    //         icon: Img2,
    //     },
    //     {
    //         id: 7,
    //         name: "Mammootty",
    //         job: "Actor",
    //         image: Img1,
    //         icon: Img2,
    //     },
    // ])
  return (
    <CardSection className="container">
        <Wrapper>
            <Title>TEFUN-ന്</Title>
            <Description>ആശംസകളോടെ</Description>
            <CardDiv>
                <InnerCards>
                    <ImageContainer>
                        <Img src={Img1} alt="Image"/>
                    </ImageContainer>
                    <CardDetails>
                        <Name>Mammootty</Name>
                        <Studies>Actor</Studies>
                        <ButtonDiv className='button'>
                            <Span>
                                <img src={Img2} alt="Image" />
                            </Span>
                            <Small>Watch story</Small>
                        </ButtonDiv>
                    </CardDetails>
                </InnerCards>

                <InnerCards className="watch">
                    <ImageContainer>
                        <Img src={Img1} alt="Image"/>
                    </ImageContainer>
                    <CardDetails>
                        <Name>Mammootty</Name>
                        <Studies>Actor</Studies>
                        <ButtonDiv className='button'>
                            <Span>
                                <img src={Img2} alt="Image" />
                            </Span>
                            <Small>Watch story</Small>
                        </ButtonDiv>
                    </CardDetails>
                </InnerCards>
                <InnerCards>
                    <ImageContainer>
                        <Img src={Img1} alt="Image"/>
                    </ImageContainer>
                    <CardDetails>
                        <Name>Mammootty</Name>
                        <Studies>Actor</Studies>
                        <ButtonDiv className='button'>
                            <Span>
                                <img src={Img2} alt="Image" />
                            </Span>
                            <Small>Watch story</Small>
                        </ButtonDiv>
                    </CardDetails>
                </InnerCards>
                <InnerCards>
                    <ImageContainer>
                        <Img src={Img1} alt="Image"/>
                    </ImageContainer>
                    <CardDetails>
                        <Name>Mammootty</Name>
                        <Studies>Actor</Studies>
                        <ButtonDiv className='button'>
                            <Span>
                                <img src={Img2} alt="Image" />
                            </Span>
                            <Small>Watch story</Small>
                        </ButtonDiv>
                    </CardDetails>
                </InnerCards>
                <InnerCards>
                    <ImageContainer>
                        <Img src={Img1} alt="Image"/>
                    </ImageContainer>
                    <CardDetails>
                        <Name>Mammootty</Name>
                        <Studies>Actor</Studies>
                        <ButtonDiv className='button'>
                            <Span>
                                <img src={Img2} alt="Image" />
                            </Span>
                            <Small>Watch story</Small>
                        </ButtonDiv>
                    </CardDetails>
                </InnerCards>
                <InnerCards>
                    <ImageContainer>
                        <Img src={Img1} alt="Image"/>
                    </ImageContainer>
                    <CardDetails>
                        <Name>Mammootty</Name>
                        <Studies>Actor</Studies>
                        <ButtonDiv className='button'>
                            <Span>
                                <img src={Img2} alt="Image" />
                            </Span>
                            <Small>Watch story</Small>
                        </ButtonDiv>
                    </CardDetails>
                </InnerCards>
                <InnerCards>
                    <ImageContainer>
                        <Img src={Img1} alt="Image"/>
                    </ImageContainer>
                    <CardDetails>
                        <Name>Mammootty</Name>
                        <Studies>Actor</Studies>
                        <ButtonDiv className='button'>
                            <Span>
                                <img src={Img2} alt="Image" />
                            </Span>
                            <Small>Watch story</Small>
                        </ButtonDiv>
                    </CardDetails>
                </InnerCards>
                <InnerCards>
                    <ImageContainer>
                        <Img src={Img1} alt="Image"/>
                    </ImageContainer>
                    <CardDetails>
                        <Name>Mammootty</Name>
                        <Studies>Actor</Studies>
                        <ButtonDiv className='button'>
                            <Span>
                                <img src={Img2} alt="Image" />
                            </Span>
                            <Small>Watch story</Small>
                        </ButtonDiv>
                    </CardDetails>
                </InnerCards>
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
`;
const Title = styled.h2`
    color: #0fa76f;
    text-align: center;
    margin: 0 0 25px 0;
    font-size: 26px;
`;
const Description = styled.p`
    text-align: center;
    margin: 0 auto;
    width: 30%;
    font-size: 20px;
    font-weight: 700;
`;
const CardDiv = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 40px;
    padding: 0;
`;
const InnerCards = styled.li`
    width: calc(25% - 20px);
    list-style: none;
    margin-bottom :30px;
    position: relative;
`;
const ImageContainer = styled.div`
`;
const Img = styled.img`
    width: 100%;
    display: block;
    border-radius: 10px ;
`;
const CardDetails = styled.div`
    width: 100%;
    position: absolute;
    cursor: pointer;
    bottom: 10px;
    right: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    /* opacity: 0; */
    &:hover {
        .button {
            height: 35px;
        }
        /* opacity: 1; */
        /* transform: translateY(-1px) ease in .2; */
    }
`;
const Name = styled.h4`
    margin: 0;
    font-size: 30px;
    font-weight: 600;
    color: #fff;
    text-align: center;
`;
const Studies = styled.p`
    margin: 10px 0;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
`;
const ButtonDiv = styled.div`
    background-color:#fff;
    border-radius: 10px;
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

    /* overflow: hidden;
    height: 0; */
    /* opacity : 0;
    &:hover {
        opacity: 1;
    } */
`;
const Span = styled.span`
    width: 20px;
    img {
        width: 100%;
        display: block;
    }
`;
// const Imgs = styled.img`
//     display: block;
//     width: 100%;
//     margin-right:10px ;
// `;
const Small = styled.span`
    text-decoration: none;
    color: #000;
    text-transform: uppercase;
`;
