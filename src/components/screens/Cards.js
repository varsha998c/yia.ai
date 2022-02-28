import React from 'react'
import styled from 'styled-components';
import Img1 from "../../assets/images/human.jpg";
import Img2 from "../../assets/images/play2.jpg";



export default function Cards() {
  return (
    <CardSection>
        <Wrapper>
            <Title>പുതിയ ടെക്ക്നോളജികൾ മനസ്സിലാക്കാം</Title>
            <Description>ടെക്ക്-പഠനം വേറിട്ടതും, ക്രിയാത്മകവുമാക്കാൻ കഴിയുന്ന സിലബസ്സ്</Description>
            <CardDiv>
                <InnerCards>
                    <ImageContainer>
                        <Img src={Img1} alt="Image"/>
                    </ImageContainer>
                    <CardDetails>
                        <Name>Varsha</Name>
                        <Studies>8th, Jamia Edavanna</Studies>
                        <ButtonDiv>
                            <FontAwesomeIcon src={Img2} alt="Image" />
                            <a href="#">Watch story</a>
                        </ButtonDiv>
                    </CardDetails>
                </InnerCards>
                <InnerCards className="watch">
                    <ImageContainer>
                        <Img src={Img1} alt="Image"/>
                    </ImageContainer>
                    <CardDetails>
                        <Name>Varsha</Name>
                        <Studies>8th, Jamia Edavanna</Studies>
                        <ButtonDiv>
                            <FontAwesomeIcon src={Img2} alt="Image" />
                            <a href="#">Watch story</a>
                        </ButtonDiv>
                    </CardDetails>
                </InnerCards>
                <InnerCards>
                    <ImageContainer>
                        <Img src={Img1} alt="Image"/>
                    </ImageContainer>
                    <CardDetails>
                        <Name>Varsha</Name>
                        <Studies>8th, Jamia Edavanna</Studies>
                        <ButtonDiv>
                            <FontAwesomeIcon src={Img2} alt="Image" />
                            <a href="#">Watch story</a>
                        </ButtonDiv>
                    </CardDetails>
                </InnerCards>
                <InnerCards>
                    <ImageContainer>
                        <Img src={Img1} alt="Image"/>
                    </ImageContainer>
                    <CardDetails>
                        <Name>Varsha</Name>
                        <Studies>8th, Jamia Edavanna</Studies>
                        <ButtonDiv>
                            <FontAwesomeIcon src={Img2} alt="Image" />
                            <a href="#">Watch story</a>
                        </ButtonDiv>
                    </CardDetails>
                </InnerCards>
                <InnerCards>
                    <ImageContainer>
                        <Img src={Img1} alt="Image"/>
                    </ImageContainer>
                    <CardDetails>
                        <Name>Varsha</Name>
                        <Studies>8th, Jamia Edavanna</Studies>
                        <ButtonDiv>
                            <FontAwesomeIcon src={Img2} alt="Image" />
                            <a href="#">Watch story</a>
                        </ButtonDiv>
                    </CardDetails>
                </InnerCards>
                <InnerCards>
                    <ImageContainer>
                        <Img src={Img1} alt="Image"/>
                    </ImageContainer>
                    <CardDetails>
                        <Name>Varsha</Name>
                        <Studies>8th, Jamia Edavanna</Studies>
                        <ButtonDiv>
                            <FontAwesomeIcon src={Img2} alt="Image" />
                            <a href="#">Watch story</a>
                        </ButtonDiv>
                    </CardDetails>
                </InnerCards>
                <InnerCards>
                    <ImageContainer>
                        <Img src={Img1} alt="Image"/>
                    </ImageContainer>
                    <CardDetails>
                        <Name>Varsha</Name>
                        <Studies>8th, Jamia Edavanna</Studies>
                        <ButtonDiv>
                            <FontAwesomeIcon src={Img2} alt="Image" />
                            <a href="#">Watch story</a>
                        </ButtonDiv>
                    </CardDetails>
                </InnerCards>
                <InnerCards>
                    <ImageContainer>
                        <Img src={Img1} alt="Image"/>
                    </ImageContainer>
                    <CardDetails>
                        <Name>Varsha</Name>
                        <Studies>8th, Jamia Edavanna</Studies>
                        <ButtonDiv>
                            <FontAwesomeIcon src={Img2} alt="Image" />
                            <a href="#">Watch story</a>
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
    width: 24%;
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
    position: absolute;
    bottom: 22px;
    right: 40px;
    width: 217px;
    opacity: 0;
    &:hover {
        opacity: 1;
        transform: translateY(-1px) ease in- .2;
    }
`;
const Name = styled.h4`
    margin: 0;
    font-size: 33px;
    color: #fff;
    text-align: center;
`;
const Studies = styled.p`
    margin: 10px 0;
    color: #fff;
    text-align: center;
`;
const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:#fff;
    padding: 10px;
    border-radius: 10px;
    opacity : 0;
    &:hover {
        opacity: 1;
    }
`;
const FontAwesomeIcon = styled.img`
    display: block;
    width: 20px;
    margin-right:10px ;
`;

