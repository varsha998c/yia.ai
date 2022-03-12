import React, { useState }  from 'react';
import styled from 'styled-components';
import Img1 from '../../../assets/images/gre-yel.svg';
import Img2 from '../../../assets/images/greentick.svg';
import Img3 from '../../../assets/images/linegreen.svg';
import {Link} from 'react-router-dom';
import HeaderModal from '../../screens/modals/HeaderModal';
import ProfileModal from '../../screens/modals/ProfileModal';


function ChooseProfile() {
    const [isModal,setIsModal]=useState(false);
    const [std,setStd] = useState([
        {
            id:1,
            content:"",
            name:"Akshay S(5A)",
            school:"LVHS Pothencode",
            image:Img2,
        },
        {
            id:2,
            content:"",
            name:"Akshay S(5A)",
            school:"LVHS Pothencode",
            image:Img2,
        },
        {
            id:3,
            content:"",
            name:"Akshay S(5A)",
            school:"LVHS Pothencode",
            image:Img2,
        },
    ]);
  return (
    <>
    <HeaderModal setIsModal={setIsModal}/> 
    <ProfileModal isModal={isModal} setIsModal={setIsModal}/>
    <ProfileSection>
        <InnerSection>
            <InnerDiv>
                <Img src={Img1} alt="Image" />
            </InnerDiv>
            <SelectDiv>
                <Heading>Hi, Mark Anderson <Choose>Choose your profile from the number</Choose> 
                </Heading>
                <InnerCard>
                    <Card>
                        <Title>Choose your profile</Title>
                        <Call>( +91 9876543210 )</Call>
                    </Card>
                    <Ul>
                        {std.map((item)=>{
                            return <Li>
                                <LiLeft>
                                    <Container>{item.content}</Container>
                                    <NameSet>
                                        <H4>{item.name}</H4>
                                        <H6>{item.school}</H6>
                                    </NameSet>
                                </LiLeft>
                                <LiRight>
                                    <ImgContainer>
                                        <Img src={item.image} alt="Image" />
                                    </ImgContainer>
                                </LiRight>
                            </Li>
                        })}
                        <Buttons>
                            <NotMe><a href="/" className='profile'>Not me!</a></NotMe>
                            <Link to="/newstudentdata">
                                <Enroll>Enroll</Enroll>
                            </Link>
                        </Buttons>
                    </Ul>
                </InnerCard>
                <Img src={Img3} alt="Image"/>
            </SelectDiv>    
        </InnerSection>
    </ProfileSection>
    </>
  )
}

export default ChooseProfile;


const ProfileSection = styled.section`
    padding: 88px 0 40px;
`;
const InnerSection = styled.div`
    background-image : linear-gradient(to bottom,  #f8fdf9 21%, #fff 100%);
    width: 95%;
    margin: 0 auto;
    border-radius: 5px;
    position: relative;
    height: 90vh;
    text-align: center;

`;
const InnerCard = styled.div`
    border: 2px solid #f4f6f5;
    border-radius: 5px;
    margin-top: 50px;
    background-color: #fff;
    height: 400px;
`;
const SelectDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 35%;
    margin: 0 auto;
    position: absolute;
    right: 33%;
    top: 89px;
    @media (max-width:1280px){
        width:38%;
    }
    @media (max-width:1080px){
        width: 40%;
    }
    @media (max-width:980px){
        width: 45%;
        right: 27%;
    }
    @media (max-width:768px){
        width: 52%;
        right: 23%;
    }
    @media (max-width:640px){
        width: 56%;
        right: 23%;
    }
    @media (max-width:540px){
        width: 61%;
        right: 19%;
    }
    @media (max-width:480px){
        width: 77%;
        right: 11%;
    }
    @media (max-width:360px){
        width: 89%;
        right: 5%;
    }
`;
const InnerDiv = styled.div`
    width: 115px;
    @media (max-width:540px){
        width: 93px;
    }
    @media (max-width:480px){
        width: 72px;
    }
`;
const Img = styled.img`
    width: 100%;
    display: block;
`;
const Heading = styled.h3`
    color: #3baf85;
    margin: 20px 0 0 0;
    font-size: 27px;
    font-weight: 500;
    @media (max-width:1080px){
        font-size: 25px;
    }
    @media (max-width:980px){
        font-size: 24px;
    }
    @media (max-width:768px){
        font-size: 20px;
    }
`;
const Choose = styled.span`
    color: #000;
`;
const Card = styled.div`
    height: 65px;
    padding: 0 40px;
    border-bottom: 2px solid #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width:980px){
        padding: 0 10px;
    }
`;
const Title = styled.h4`
    color: #707070;
    font-weight: 500;
    @media (max-width:768px){
        font-size: 16px;
    }
    @media (max-width:480px){
        font-size: 15px;
    }
`;
const Call = styled.span`
    color: #60c7a7;
    font-weight: 600;
    @media (max-width:768px){
        font-size: 15px;
    }
    @media (max-width:480px){
        font-size: 14px;
    }
`;
const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0 30px;
    margin: 0;
`;
const Li = styled.li`
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid  #f0f0f0;
    padding: 20px 0;
`;
const LiLeft = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Container = styled.div`
    width: 30px;
    margin-right: 20px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid green;
`;
const NameSet = styled.div``;
const H4 = styled.h4`
    margin: 0;
    color: #7f8487;
    font-weight: 500;
`;
const H6 = styled.h6`
    margin: 0;
    color: #6abbbd;
    font-weight: 600;
`;
const LiRight = styled.div``;
const ImgContainer = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #000;
`;
const Buttons = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
const NotMe = styled.div`
    width: 116px;
    height: 43px;
    margin-right: 10px;
    color: #ff0000;
    border: 1px solid #ff0000;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
        color: #000;
        font-weight: 600;
    }
    @media (max-width:768px){
        width: 100px;
        height:40px;
    }
`;
const Enroll = styled.div`
    width: 116px;
    height: 43px;
    border-radius: 5px;
    color: #fff;
    text-align: center;
    background-image: linear-gradient(to right, #63bb4c 20%, #1898af 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
        background-image: linear-gradient(
        to left,
        #63bb4c 0%,
        #40ab79 51%,
        #1e9ba6 100%
    );
}
    @media (max-width:768px){
        width: 100px;
        height:40px;
    }
`;