import React,{ useState } from 'react';
import styled from 'styled-components';
import Img1 from '../../../assets/images/exam.png';
import { Link } from "react-router-dom";
import ProfileModal from '../../screens/modals/ProfileModal';
import HeaderModal from '../../screens/modals/HeaderModal';


function ExamStart() {
    const [isModal,setIsModal]=useState(false);
    const [exam,setExam] = useState([
        {
            id:1,
            content:"A",
            question:"Another answer can be placed here",
        },
        {
            id:2,
            content:"B",
            question:"Another answer can be placed here",
        },
        {
            id:3,
            content:"C",
            question:"Another answer can be placed here",
        },
        {
            id:4,
            content:"D",
            question:"Another answer can be placed here",
        },
    ])
  return (
    <>
    <HeaderModal setIsModal={setIsModal}/> 
    <ProfileModal isModal={isModal} setIsModal={setIsModal}/>
        <ExamSection>
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
                    <Instructions>The school survay questions for teachers in an in-depth survey that a school deploys to its teaching stuff to gather data about they perception  about the school?</Instructions>
                    <Ul>
                        {exam.map((item)=>(
                            <Li>
                                <Round>{item.content}</Round>
                                <Points>{item.question}</Points>
                            </Li>
                        ))}    
                    </Ul>
                    <Link to="/complete">
                        <Button>next</Button>
                    </Link>
                </Contents>
            </InstDiv>
        </Container>
        </ExamSection>
    </>
  )
}

export default ExamStart;
const ExamSection = styled.div`
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
const InstDiv = styled.div`
    margin-top: 5px;
    border-radius: 5px;
    background-color: #f9fdfc;
    height: 80vh;
`;
const Contents = styled.div`
    width: 60%;
    margin: 0px auto;
    padding: 125px 0;
    @media (max-width:980px){
        padding: 6px 0;
    }
    @media (max-width:480px){
        width: 85%;
    }
    @media (max-width:360px){
        width: 90%;
    }
`;
const Instructions = styled.h2`
    color: #494a49;
    text-transform: none;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 40px;
    @media (max-width:768px){
        font-size: 18px;
    }
    @media (max-width:480px){
        font-size: 16px;
    }
    @media (max-width:360px){
        font-size: 15px;
    }
`;
const Ul = styled.ul`
    padding: 0;
`;
const Li = styled.li`
    list-style: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    border: 1px solid #989a99;
    background-color: #f5fafd;
    padding: 15px;
    border-radius: 5px;
    &:hover {
        border: 2px solid #29a194;
    }
`;
const Round = styled.div`
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #989a99;
    border-radius: 5px;
    background-color: #fff;
    margin-right: 10px;
`;
const Points = styled.h5`
    color: #707473;
    margin: 0;
    font-weight: 400;
`;
const Button = styled.div`
    width: 150px;
    height: 40px;
    background-image: linear-gradient(to right,#63bb4c 0%,#40ab79 51%,#1e9ba6 100%);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
    color: #fff;
    position: absolute;
    right: 325px;
    bottom: auto;
    @media (max-width:768px){
        left: 36%;
    }
    @media (max-width:480px){
        left: 29%;
    }
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
        left: 9%;
        top: 45%;
    }
    @media (max-width:768px){
        left: 5%;
    }
    @media (max-width:480px){
        display: none;
    }
`;
const Start = styled.div`
    width: 10px;
    height: 10px;
    position: relative;
    border-radius: 50%;
    background-color: #9d9b9b;
    ::after {
        content: "";
        height: 65px;
        position: absolute;
        width: 1px;
        border-left: 2px dotted #0fa76f;
        top: 10px;
        right: 2px;
    }
    ::before {
        content: "Start";
        color: #9d9b9b;
        font-weight: 600;
        position: absolute;
        right: -40px;
        top: 0;
    }
`;
const Count = styled.small`
    color: green;
    margin-bottom: 50px;
    font-size: 24px;
    font-weight: 500;
    top: 67px;
    position: absolute;
    ::after {
        content: "";
        height: 65px;
        position: absolute;
        width: 1px;
        border-left: 2px dotted #0fa76f;
        top: 32px;
        right: 9px;
    }
`;
const Circle = styled.span`
    color: #9d9b9b;
    position: absolute;
    bottom: 20px;
    
`;
