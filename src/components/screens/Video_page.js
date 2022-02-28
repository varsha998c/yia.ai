import React, { useState } from 'react';
import styled from 'styled-components';
import Img1 from "../../assets/images/images.png";
import Img2 from "../../assets/images/images.jpg";
import Img3 from "../../assets/images/down-arrow.svg";
import Img5 from "../../assets/images/i.jpg";
import Img6 from "../../assets/images/1080.svg";
import Img7 from "../../assets/images/small.svg";
import HeaderModal from '../screens/modals/HeaderModal';
import ProfileModal from './modals/ProfileModal';
import CollegeDetailView from './modals/CollegeDetailView';


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
                                <Tick src={Img2} alt="Image" />
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
    <VideoSection>
        <AlertDiv>
            <AlertLeft>
                <Image src={Img5} alt="Image" />
                <ContentDiv>
                    <Title>Your  Examination date announced</Title>
                    <Description>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles.</Description>
                </ContentDiv>
            </AlertLeft>
            <AlertRight>
                <Start>Start Now</Start>
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
                            <a href='#' className='mark'>
                                <Marks>
                                    <Icon src={Img2} alt="Image" />
                                </Marks>
                                <Complete onClick={()=>setClgModal(true)}>mark as completed</Complete>
                                <CollegeDetailView clgModal={clgModal}/>
                            </a>
                        </Button>
                    </BottomDiv>
                </Container>
                <ImgContainer>
                    <Imgs src={Img7} alt="Image" />
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
`;
const Wrapper = styled.div`
    width: 95%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`;
const AlertDiv = styled.div`
    background-color: #fff3eb;
    width: 95%;
    margin: 0px auto 20px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const AlertLeft = styled.div`
    width: 70%;
    padding: 5px 30px;
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
`;
const Image = styled.img`
    width: 30px;
    height: 24px;
    display: block;
    margin-top: 10px;
`;
const ContentDiv = styled.div`
    margin-left: 25px;
`;
const Title = styled.h4`
    color: #d6835c;
    margin: 11px 0 0 0;
    font-weight: 500;
    font-size: 18px;
`;
const Description = styled.p`
    width: 80%;
`;
const AlertRight = styled.div`
    width: 10%;
`;
const Start = styled.button`
    padding: 15px 26px;
    border: none;
    border-radius: 10px;
    background: #e4794b;
    color: #fff;
`;
const LeftDiv = styled.div`
    width: 65%;
    border-radius: 15px;
`;
const Container = styled.div`
    width:90%;
    background-color: #f5f5f5;
    padding: 10px;
`;
const VideoContainer = styled.div`
    width: 100%;
    margin: 0 auto;
`;
const Img = styled.img`
    width: 100%;
    display: block;
    border-radius: 10px;
`;
const BottomDiv  = styled.div`
    display: flex;
    width: 100%;
    margin: 20px auto;
    justify-content: space-between;
    align-items: center;
`;
const Intro = styled.div`

`;
const H6 = styled.h6`
    color: #9fa4a7;
    margin: 0;
`;
const H5 = styled.h5`
    color: #343e44;
    text-transform: capitalize;
    font-size: 23px;
    margin: 0;
    font-weight: 500;
`;
const Button = styled.div`
    
`;
const Marks = styled.div`
    width: 16px;
`;
const Icon = styled.img`
    width: 100%;
    display: block;
`;
const Complete = styled.button`
    font-weight: 400;
    margin: 0 0 0 10px;
    text-transform: capitalize;
    font-size: 15px;

`;
const RightDiv = styled.div`
    width: 30%;
`;
const Ul = styled.ul`
    padding: 0;
    margin-top: 0;
    margin-left: 20px;
`;
const Li = styled.li`
    list-style: none;
    &.active div{
        display: flex;
    }
    & .dropactive{
        transform: rotatez(271deg);
    }
`;

const Header = styled.div`
    background-color: #f5f5f5;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    padding: 20px 16px;
    align-items: center;
    margin-top: 30px;
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
    justify-content: space-between;
    align-items: center;
    display: none;
    &:hover {
    background-image: linear-gradient(to right,#63bb4c 0%,#40ab79 51%,#1e9ba6 100%);
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
    color: #7e7e80;
    margin: 20px 30px;
`;
const Time = styled.span`
    color: #000;
    margin-left: 50px;
`;
const ImgContainer = styled.div`
    width: 92%;
    display: flex;
    flex-direction: column;
`;
const Imgs = styled.img`
    margin-bottom: 20px;
`;
