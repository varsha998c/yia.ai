import React from 'react';
import styled from 'styled-components';
import Img1 from "../../assets/images/join-img.png";


export default function Students() {
  return (
    <StudenntsSection className="container">
        <Wrapper>
        <Heading>How <Tefun>Students can join</Tefun></Heading>
            <Container>  
                <LeftDiv>
                    <ListItem>
                        <List className="orange">
                            <Description>Talrop-ന്റെ Web, Android,iOS പ്ലാറ്റ്ഫോമുകളിലൂടെ ( <Bold>www.yia.ai</Bold> ) ഓൺലൈനായി Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാകാം.</Description>
                            <Span>01</Span>
                        </List>
                        <List className="blue">
                            <Description>വിദ്യാർത്ഥികൾക്ക് ലോഗിൻ ചെയ്ത് Tefun പ്രോഗ്രാം സ്റ്റാർട്ട് ചെയ്യാം</Description>
                            <Span>02</Span>
                        </List>
                        <List className="green">
                            <Description>Virtual സ്കൂളിങ്ങിലൂടെ വിദ്യാർത്ഥികൾക്ക് ഇഷ്ടമുള്ള സമയത്ത് ഇഷ്ട മുള്ള സ്ഥലത്തുവെച്ചു ക്ലാസ്സുകൾ കാണാൻ സാധിക്കും..</Description>
                            <Span>03</Span>
                        </List>
                        <List className="green">
                            <Description>പ്രോഗ്രാം പൂർത്തിയാക്കിയതിനുശേഷം സ്കൂൾ മുഖാന്തരം..</Description>
                            <Span>04</Span>
                        </List>
                        <List className="orange">
                            <Description>പ്രോഗ്രാം പൂർത്തിയാക്കിയതിനുശേഷം സ്കൂൾ മുഖാന്തരം..</Description>
                            <Span>05</Span>
                        </List>
                        <List className="blue">
                            <Description>പ്രോഗ്രാം പൂർത്തിയാക്കിയതിനുശേഷം സ്കൂൾ മുഖാന്തരം..</Description>
                            <Span className='last'>06</Span>
                        </List>
                    </ListItem>
                </LeftDiv>
                <RightDiv>
                    <ImgContainer>
                        <Img src={Img1} alt="Image" />
                    </ImgContainer>
                </RightDiv>
            </Container>
        </Wrapper>
    </StudenntsSection>
  )
}

const StudenntsSection = styled.section`
    padding: 5% 0;
`;
const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
`;
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width:1080px){
        flex-direction: column-reverse;
        align-items: center;
    }
`;
const LeftDiv = styled.div`
    width: 45%;
    @media (max-width:1080px){
        width: 100%;
    }
`;
const Heading = styled.h4`
    margin: 0;
    font-size: 38px;
    color: #11a46e;
    font-weight: 600;
    @media (max-width:1280px){
        font-size: 34px;
    }
    @media (max-width:1080px){
        text-align: center;
        margin-bottom: 30px;
    }
    @media (max-width:980px){
        font-size: 27px;
    }
    @media (max-width:640px){
        font-size: 25px;
    }
`;
const Tefun = styled.h4`
    margin: 0;
    font-weight: 600;
    color: #000;
`;
const Bold = styled.b`
    color: #4f9877;
`;
const ListItem = styled.ul`
    margin: 70px 0 0 0;
    display: flex;
    flex-direction: column;
    padding: 0;
    @media (max-width:640px) {
        margin-top: 30px;
    }
`;
const List = styled.li`
    &:last-child(4) {
        margin-bottom: 0;
    }

`;
const Description = styled.h5`
    margin: 10px;
    line-height: 1.8;
    color: #4e5357;
    @media (max-width:1280px){
        font-size: 15px;
        font-weight: 500;
    }
    @media (max-width:1080px){
        font-size: 18px;
    }
    @media (max-width:640px){
        font-size: 17px;
    }
    @media (max-width:480px){
        line-height: 1.5;
    }
`;
const Span = styled.span`
    color: #4f9877;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    font-size: 18px;
    border: 3px solid #4f9877;
    font-weight: 800;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 33px;
    left: -6%;
    background: #fff;
    ::after {
        content: "";
        height: 94px;
        position: absolute;
        width: 1px;
        border-left: 2px dotted #0fa76f;
        top: 45px;
        @media (max-width:1280px){
            height: 111px;
            top: 57px;
        }
    }
    @media (max-width:1280px){
        width: 55px;
        height: 55px;
        top: 43px;
        left: -11%;
    }
    @media (max-width:1080px){
        left: -4%;
        top: 38px;
    }
    @media (max-width:980px){
        left: -5%;
    }
    @media (max-width:768px){
        display: none;
    }
`;
const RightDiv = styled.div`
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    width: 40%;
    @media (max-width:980px){
        width: 45%;
    }
    @media (max-width:640px){
        width: 60%;
    }

`;
const ImgContainer = styled.div`
    top: 81px;
    position: sticky;
`;
const Img = styled.img`
    display: block;
    width: 100%;
`;
