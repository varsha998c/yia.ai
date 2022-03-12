import React, { useState } from 'react';
import styled from 'styled-components';
import Img1 from "../../assets/images/images.png";
import Img3 from "../../assets/images/down-arrow.svg";
import Img5 from "../../assets/images/i.jpg";
import Img6 from "../../assets/images/1080.svg";
import Img7 from "../../assets/images/small.svg";
import HeaderModal from '../screens/modals/HeaderModal';
import ProfileModal from './modals/ProfileModal';
import CollegeDetailView from './modals/CollegeDetailView';
import {Link} from 'react-router-dom';



export default function Video_page() {
    const [clgModal,setClgModal]=useState(false);
    const [isModal,setIsModal]=useState(false);


    const[matchedId,setMatchedId] = useState("")
    const[subHeadingId,setsubHeadingId] = useState("1")
    const [videoItems] = useState([ 
        {
            id:1,
            heading : "Introduction to Technology",
            subheadings : [
                {
                    id : 1,
                    title : "What is technology?",
                    duration : "2:34",
                },
                {
                    id : 2,
                    title : "What is information technology?",
                    duration : "2:34",
                },
                {
                    id : 3,
                    title : "Why should we learn technology?",
                    duration : "2:34",
                },
                {
                    id : 4,
                    title : "In which age who can learn technology?",
                    duration : "2:34",
                },
            ],
        },
        {
            id:2,
            heading : "Introduction to Technology",
            subheadings : [
                {
                    id : 1,
                    title : "What is technology?",
                    duration : "2:34",
                },
                {
                    id : 2,
                    title : "What is information technology?",
                    duration : "2:34",
                },
                {
                    id : 3,
                    title : "What is information technology?",
                    duration : "2:34",
                },
                {
                    id : 4,
                    title : "What is information technology?",
                    duration : "2:34",
                },
                {
                    id : 5,
                    title : "What is information technology?",
                    duration : "2:34",
                },
                {
                    id : 6,
                    title : "What is information technology?",
                    duration : "2:34",
                },
                {
                    id : 7,
                    title : "What is information technology?",
                    duration : "2:34",
                },

            ],
        },
        {
            id:3,
            heading : "Introduction to Technology",
            subheadings : [
                {
                    id : 1,
                    title : "What is technology?",
                    duration : "2:34",
                },
                {
                    id : 2,
                    title : "What is information technology?",
                    duration : "2:34",
                },
                {
                    id : 3,
                    title : "Why should we learn technology?",
                    duration : "2:34",
                },
                {
                    id : 4,
                    title : "In which age who can learn technology?",
                    duration : "2:34",
                },
            ],
        },
        {
            id:4,
            heading : "Introduction to Technology",
            subheadings : [
                {
                    id : 1,
                    title : "What is technology?",
                    duration : "2:34",
                },
                {
                    id : 2,
                    title : "What is information technology?",
                    duration : "2:34",
                },
                {
                    id : 3,
                    title : "Why should we learn technology?",
                    duration : "2:34",
                },
                {
                    id : 4,
                    title : "In which age who can learn technology?",
                    duration : "2:34",
                },
            ],
        },
        {
            id:5,
            heading : "Introduction to Technology",
            subheadings : [
                {
                    id : 1,
                    title : "What is technology?",
                    duration : "2:34",
                },
                {
                    id : 2,
                    title : "What is information technology?",
                    duration : "2:34",
                },
                {
                    id : 3,
                    title : "Why should we learn technology?",
                    duration : "2:34",
                },
                {
                    id : 4,
                    title : "In which age who can learn technology?",
                    duration : "2:34",
                },
            ],
        },
        {
            id:6,
            heading : "Introduction to Technology",
            subheadings : [
                {
                    id : 1,
                    title : "What is technology?",
                    duration : "2:34",
                },
                {
                    id : 2,
                    title : "What is information technology?",
                    duration : "2:34",
                },
                {
                    id : 3,
                    title : "Why should we learn technology?",
                    duration : "2:34",
                },
                {
                    id : 4,
                    title : "In which age who can learn technology?",
                    duration : "2:34",
                },
            ],
        },
    ])

    const renderItems = () => {
        console.log("click");
        return videoItems.map((videoItem) =>(
            <Li key={videoItem.id}className={ videoItem.id === matchedId && 'active' }>
                <Header onClick = {() => {
                    if(matchedId === videoItem.id){
                        setMatchedId("")
                    }
                    else {
                        setMatchedId(videoItem.id)
                    }
                }}>
                    <Subtopic>
                        {videoItem.heading}
                    </Subtopic>
                    <Marks className={videoItem.id === matchedId && 'dropactive'}>
                        <Icon src={Img3} alt="Image" />
                    </Marks>
                </Header>
                {
                    videoItem.subheadings.map((subheading) => (
                        <SubHeading key={subheading.id} className={ subheading.id === subHeadingId && 'subactive'}
                        onClick={ ()=> { setsubHeadingId(subheading.id)}}
                        >
                            <Mark>
                                <Tick src={require("../../assets/images/green-tick.svg").default} alt="Image" />
                                <Content>{subheading.title}</Content>
                            </Mark>
                            <Time>{subheading.duration}</Time>
                        </SubHeading>
                    ))
                }
            </Li>
        ))
    }

  return (
      <>
    <HeaderModal setIsModal={setIsModal}/> 
    <ProfileModal isModal={isModal} setIsModal={setIsModal}/>
    <VideoSection className="container">
        <AlertDiv>
            <AlertLeft>
                <Image src={Img5} alt="Image" />
                <ContentDiv>
                    <Title>Your  Examination date announced</Title>
                    <Description>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles.</Description>
                </ContentDiv>
            </AlertLeft>
            <AlertRight>
                <Link to="/exam">
                    <Start>Start Now</Start>
                </Link>
            </AlertRight>
        </AlertDiv>
        <Wrapper>
            <LeftDiv>
                <Container>
                    <VideoContainer>
                        <Img src={Img1} alt="Image" />
                    </VideoContainer>
                    <BottomDiv>
                        <Intro>
                            <H6>Technology Fundamentals</H6>
                            <H5>introduction</H5>
                        </Intro>
                        <Button>
                            <a href='#' className='learning'>
                                {/* <Marks>
                                    <Icon src={Img2} alt="Image" />
                                </Marks> */}
                                <Complete onClick={()=>setClgModal(true)}>Mark as completed</Complete>
                                <CollegeDetailView clgModal={clgModal} setClgModal={setClgModal}/>
                            </a>
                        </Button>
                    </BottomDiv>
                </Container>
                <ImgContainer>
                    <Imgs src={Img7} alt="Image" className='ad'/>
                    <Imgs src={Img6} alt="Image" />
                </ImgContainer>
            </LeftDiv>
            <RightDiv>
                <Ul>
                    {renderItems()}
                </Ul>
            </RightDiv>
        </Wrapper>
    </VideoSection>
    </>
  )
}


const VideoSection = styled.section`
    padding: 80px 0 20px;
    height: calc(100vh - 80px);
    @media (max-width:480px){
        position: relative;
    }
`;
const Wrapper = styled.div`
    width: 95%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    @media (max-width:1080px){
        flex-direction: column;
    }
    @media (max-width:480px){
        width: 100%;
    }
`;
const AlertDiv = styled.div`
    background-color: #fff3eb;
    width: 95%;
    margin: 0px auto 20px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width:480px){
        flex-direction: column;
        top: 10%;
        position: fixed;
        margin: 2px auto;
        width: 90%;
        left: 16px;
    }
`;
const AlertLeft = styled.div`
    width: 70%;
    padding: 5px 30px;
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
    @media (max-width:1280px){
        padding: 5px 11px;
    }
    @media (max-width:480px){
        width: 94%;
    }
`;
const Image = styled.img`
    width: 30px;
    height: 24px;
    display: block;
    margin-top: 10px;
    @media (max-width:1280px){
        width: 34px;
    }
`;
const ContentDiv = styled.div`
    margin-left: 25px;
    @media (max-width:480px){
        margin-left: 2px;
    }
`;
const Title = styled.h4`
    color: #d6835c;
    margin: 11px 0 0 0;
    font-weight: 500;
    font-size: 18px;
`;
const Description = styled.p`
    width: 80%;
    @media (max-width:1280px){
        width: 100%;
    }
    @media(max-width:768px){
        font-size: 13px;
    }
`;
const AlertRight = styled.div`
    width: 10%;
    @media (max-width:1280px){
        width: 11%;
        margin-right: 16px;
    }
    @media (max-width:1080px){
        width: 14%;
    }
    @media (max-width:640px){
        width: 16%;
    }
    @media (max-width:540px){
        width: 18%;
    }
    @media (max-width:480px){
        width: 25%;
    }
`;
const Start = styled.button`
    padding: 15px 26px;
    border: none;
    border-radius: 10px;
    background: #e4794b;
    color: #fff;
    cursor: pointer;
    @media (max-width:1080px){
        padding: 15px 21px;
    }
    @media (max-width:768px){
        padding: 15px 13px;
    }
    @media (max-width:640px){
        padding: 15px 11px;
    }
`;
const LeftDiv = styled.div`
    width: 65%;
    border-radius: 15px;
    @media (max-width:1280px){
        width: 82%;
    }
    @media (max-width:1080px){
        width: 100%;
    }
`;
const Container = styled.div`
    width:90%;
    background-color: #f5f5f5;
    padding: 10px;
    @media (max-width:1280px){
        width: 94%;
    }
    @media (max-width:1080px){
        width: 98%;
    }
    @media (max-width:768px){
        width: 96%;
        margin: 0 auto;
        border-radius: 5px;
    }
    @media (max-width:480px){
        padding: 0;
        width: 100%;
        background-color: #fff;
    }
`;
const VideoContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    @media (max-width:1080px){
        width: 98%;
        margin: 10px;
    }
    @media (max-width:768px){
        margin: 0 0 10px 0;
        width: 100%;
    }
    @media (max-width:640px){
        width: 98%;
        margin: 0 auto;
    }
    @media (max-width:480px){
        width: 100%;
        position: fixed;
    }
`;
const Img = styled.img`
    width: 100%;
    display: block;
    @media (max-width:480px){
        position: fixed;
        top: 39% ;
    }
`;
const BottomDiv  = styled.div`
    display: flex;
    width: 100%;
    margin: 20px auto;
    justify-content: space-between;
    align-items: center;
    @media (max-width:1080px){
        width: 98%;
        margin: 0 auto;
    }
    @media (max-width:768px){
        flex-direction: column;
        align-items: baseline;
    }
    @media (max-width:640px){
        margin-top: 16px;
    }
    @media (max-width:480px){
        margin-top: 108%;
        width: 91%;
    }
`;
const Intro = styled.div`

`;
const H6 = styled.h6`
    color: #9fa4a7;
    margin: 0;
    @media (max-width:768px){
        font-size: 17px;
    }
    @media (max-width:480px){
        margin-top: 10px;
        font-size: 16px;
    }
`;
const H5 = styled.h5`
    color: #343e44;
    text-transform: capitalize;
    font-size: 23px;
    margin: 0;
    font-weight: 500;
    @media (max-width:768px){
        font-size: 28px;
        font-weight: 700;
    }
    @media (max-width:480px){
        font-size: 24px;
    }
`;
const Button = styled.div`
    width: 185px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
    color: #fff;
    background-image: linear-gradient(to left, #63bb4c 20%, #1898af 100%);
    @media (max-width:1280px){
        width: 270px;
    }
    @media (max-width:768px){
        width: 100%;
        margin-top: 10px;
    }
    @media (max-width:540px){
        width: 60%;
        height: 45px;
    }
    @media (max-width:480px){
        width: 75%;
    }
`;
const Marks = styled.div`
    width: 16px;
`;
const Icon = styled.img`
    width: 100%;
    display: block;
    cursor: pointer;
`;
const Complete = styled.div`
    font-weight: 400;
    margin: 0 0 0 10px; 
    text-transform: none;
    font-size: 15px;
    color: #fff;
`;
const RightDiv = styled.div`
    width: 30%;
    @media (max-width:1280px){
        width: 31%;
    }
    @media (max-width:1080px){
        width: 100%;
    }
`;
const Ul = styled.ul`
    padding: 0;
    margin-top: 0;
    margin-left: 20px;
    @media (max-width:1280px){
        margin-left: 0;
    }
`;
const Li = styled.li`
    cursor: pointer;
    list-style: none;
    margin-bottom: 20px;
    &.active div{
        display: flex;
    }
    & .dropactive{
        transform: rotatez(271deg);
    }
    @media (max-width:480px){
        width: 91%;
        margin: 0 auto 10px;
    }
    /* &:last-child {
        @media (max-width:480px){
            position: relative;

        }
    } */
`;

const Header = styled.div`
    background-color: #f5f5f5;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    padding: 20px 16px;
    align-items: center;
`;

const Mark = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const ContainerDiv = styled.div`
    /* display: none; */
`;

const SubHeading = styled.div` 
    display: flex;
    border-radius: 10px;
    padding: 0 10px;
    margin: 10px 0;
    color: #7e7e80;
    justify-content: space-between;
    align-items: center;
    display: none;
    &:hover {
    background-image: linear-gradient(to right,#63bb4c 0%,#40ab79 51%,#1e9ba6 100%);
    color: #fff;
    }
    @media (max-width:540px){
        padding: 0px 29px;
    }

`;
const Subtopic = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Tick = styled.img`
    width: 16px;
    display: block;
`;
const Content = styled.h3`
    font-weight: 400;
    text-transform: capitalize;
    font-size: medium;
    /* color: #7e7e80; */
    margin: 20px 30px;
    @media (max-width:360px){
        margin: 3px 11px;
        font-size: 13px;
    }
`;
const Time = styled.span`
    /* color: #000; */
    margin-left: 50px;
`;
const ImgContainer = styled.div`
    width: 92%;
    display: flex;
    flex-direction: column;
    @media (max-width:1080px){
        width: 100%;
    }
    @media (max-width:540px){
        margin-top: 10px;
    }
    @media (max-width:540px){
        width: 91%;
        margin: 0 auto;
    }
`;
const Imgs = styled.img`
    margin-bottom: 20px;
`;
