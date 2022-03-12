import React,{ useState } from 'react';
import Img1 from '../../../assets/images/exam.png';
import Img2 from '../../../assets/images/arrow.png';
import styled from 'styled-components';
import ProfileModal from '../../screens/modals/ProfileModal';
import HeaderModal from '../../screens/modals/HeaderModal';
import { Link } from "react-router-dom";




function ExaminationModal() {
    const [isModal,setIsModal]=useState(false);
    const [quest,setQuest] = useState([
        {
            id:1,
            round:"",
            point: "60 മിനിറ്റ് ആയിരിക്കും എക്സാം ഉണ്ടാവുക ",
        },
        {
            id:2,
            round:"",
            point: "എല്ലാ ചോദ്യത്തിനും ഉത്തരം എഴുതണം",
        },
        {
            id:3,
            round:"",
            point: "25 ചോദ്യങ്ങൾ ആവും ഉണ്ടാവുക",
        },
        {
            id:4,
            round:"",
            point: "ഓരോ ശരിയുത്തരത്തിനും ഓരോ മാർക്ക് വീതം ലഭിക്കും",
        },
        {
            id:5,
            round:"",
            point: "25 ചോദ്യങ്ങൾ ആവും ഉണ്ടാവുക",
        },
        {
            id:6,
            round:"",
            point: "60 മിനിറ്റ് ആയിരിക്കും എക്സാം ഉണ്ടാവുക ",
        },
    ]);

  return (
      <>
    <HeaderModal setIsModal={setIsModal}/> 
    <ProfileModal isModal={isModal} setIsModal={setIsModal}/>
    <ExaminationSection>
        <Exam>
            <Start></Start>
            <Count>01</Count>
            <Circle>02</Circle>
        </Exam>
        <Container>
            <TimeDiv>
                <Left>
                    <IconContainer>
                        <Icon src={Img1} alt="Image"/>
                    </IconContainer>
                    <Examination>tefun examination</Examination>
                </Left>
                <Right>
                    <Div>
                        <Span>Time remaining</Span>
                        <Time>03 : 00 : 00</Time>
                    </Div>
                </Right>
            </TimeDiv>
            <InstDiv>
                <Contents>
                    <Instructions>Examination <Small>instructions</Small></Instructions>
                    <Ul>
                        {quest.map((item)=>(
                            <Li>
                                <Round>
                                    <InnerRound>{item.round}</InnerRound>
                                </Round>
                                <Points>{item.point}</Points>
                            </Li>
                        ))}
                    </Ul>
                    <Link to="/start">
                        <Button>start exam now <img className='right' src={Img2} alt="Image" /></Button>
                    </Link>
                </Contents>
            </InstDiv>
        </Container>
    </ExaminationSection>
    </>
  )
}

export default ExaminationModal;

const  ExaminationSection = styled.div`
    padding: 85px 0 20px;
    height: 90vh;
    position: relative;
`;
const Container = styled.div`
    width: 95%;
    margin: 0 auto;
    height: 100vh;
`;
const TimeDiv = styled.div`
    height: 90px;
    background-color: #fff6f9;
    border-radius: 5px;
    border: 1px solid #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Left = styled.div`
    margin-left: 22px;
    width: 16%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width:1080px){
        width: 20%;
    }
    @media (max-width:980px){
        width: 24%;
    }
    @media (max-width:768px){
        width: 26%;
    }
    @media (max-width:640px){
        width: 28%;
    }
    @media (max-width:480px){
        width: 36%;
    }
    @media (max-width:360px){
        width: 40%;
    }
`;
const IconContainer = styled.div`
    width: 55px;
    margin-right: 10px;
    height: 45px;
    background-color: #d2814a;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width:1080px){
        width: 50px;
    }
    @media (max-width:768px){
        width: 45px;
        height: 45px;
    }
    @media (max-width:640px) {   
        width: 43px;
        height: 34px;
    }
    @media (max-width:540px){
        width: 44px;
    }
`;
const Icon = styled.img`
    display: block;
    width: 20px;
    @media (max-width:768px){
        width: 18px;
    }
`;
const Examination = styled.h4`
    color: #545454;
    text-transform: capitalize;
    font-weight: 600;
    margin: 0;
    font-size: 18px;
    @media (max-width:768px){
        font-size: 16px;
    }
`;
const Right = styled.div`
    width: 10%;
    padding-right: 32px;
    @media (max-width:1080px){
        width: 15%;
    }
    @media (max-width:768px){
        width: 20%;
    }
    @media (max-width:540px){
        width: 25%;
    }
    @media (max-width:480px){
        width: 30%;
    }
`;
const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    height: 46px;
    border-left: 1px solid #a4a0a1;
`;
const Span = styled.span`
    text-transform: capitalize;
    font-size: 14px;
    @media (max-width:540px){ 
        font-size: 13px;
    }
    @media (max-width:480px){
        font-size: 12px;
    }
`;
const Time = styled.small`
    font-weight: 800;
    font-size: 20px;
    @media (max-width:640px){
        font-size: 18px;
    }
    @media (max-width:540px){ 
        font-size: 16px;
    }
    @media (max-width:480px){
        font-size: 14px;
    }
`;
const InstDiv =styled.div`
    margin-top: 5px;
    border-radius: 5px;
    background-color: #f9fdfc;
    height: 100vh;
`;
const Instructions = styled.h2`
    color: #0ea76f;
    text-transform: capitalize;
    font-size: 40px;
    font-weight: 500;
    @media (max-width:1080px){
        font-size: 36px;
    }
    @media (max-width:980px)
    { font-size: 33px;
    }
    @media (max-width:768px){
        font-size: 27px;
    }
    @media (max-width:360px){
        font-size: 21px;
    }
`;
const Contents = styled.div`
    width: 40%;
    margin: 0px auto;
    padding: 125px 0;
    @media (max-width:1280px){
        width: 45%;
    }
    @media (max-width:1080px){
        width: 49%;
    }
    @media (max-width:980px){
        width: 60%;
    }
    @media (max-width:768px){
        width: 68%;
    }
    @media (max-width:640px){
        width: 77%;
    }
    @media (max-width:540px){
        width: 90%;
        padding: 35px 0;
    }
    @media (max-width:360px){
        width: 100%;
        padding: 55px 0;
    }
`;
const Small = styled.span`
    color: #000;
`;
const Ul = styled.ul`
    padding: 0;
`;
const Li = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;
const Round = styled.div`
    max-width: 20px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #0ea76f;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    @media (max-width:980px){
        width: 15px;
        height: 15px;
    }
    @media (max-width:360px){
        margin-right: 15px;
    }
`;
const InnerRound = styled.div`
    max-width: 15px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color:#0ea76f;
    @media (max-width:980px){
        max-width: 11px;
        width: 11px;
        height: 11px;
    }
`;
const Points = styled.h6`
    color: #707473;
    margin: 0;
    @media (max-width:1080px){
        font-size: 13px;
    }
    @media (max-width:980px){
        font-size: 12px;
    }
    @media (max-width:360px){
        font-size: 11px;
    }
`;
const Button = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 200px;
    margin: 40px auto;
    height: 50px;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    text-transform: capitalize;
    background-image: linear-gradient(
        to left,
        #63bb4c 0%,
        #40ab79 51%,
        #1e9ba6 100%
    );
`;
const Exam = styled.div`
    width: 50px;
    height: 200px;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 53%;
    left: 13%;
    align-items: center;
    @media (max-width:980px){
        left: 6%;
    }
    @media (max-width:768px){
        left: 0;
    }
    @media (max-width:640px){
        display: none;
    }
`;
const Start = styled.div`
    width: 20px;
    height: 20px;
    position: relative;
    border-radius: 50%;
    background-color: #0fa66f;
    ::before {
        content: "Start";
        color: #0fa66f;
        font-weight: 600;
        position: absolute;
        right: -40px;
        top: 0;
    }
    ::after {
        content: "";
        height: 65px;
        position: absolute;
        width: 1px;
        border-left: 2px dotted #0fa76f;
        top: 20px;
        right: 7px;
    }
`;
const Count = styled.small`
    color: #9d9b9b;
    font-size: 14px;
    margin-bottom: 50px;
    font-weight: 500;
    top: 82px;
    position: absolute;
    ::after {
        content: "";
        height: 65px;
        position: absolute;
        width: 1px;
        border-left: 2px dotted #0fa76f;
        top: 18px;
        right: 3px;
    }

`;
const Circle = styled.span`
    color: #9d9b9b;
    font-size: 14px;
    position: absolute;
    bottom: 20px;
    
`;