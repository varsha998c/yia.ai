import React from 'react'
import styled from 'styled-components';
import Img1 from '../../../assets/images/down-arrow.svg';
import Img2 from '../../../assets/images/reading.svg';
import Img3 from '../../../assets/images/reading.svg';
import Img4 from '../../../assets/images/graduated.svg';
import Img5 from '../../../assets/images/logout-.jpg';


function ProfileModal({setIsModal, isModal}) {
  return (
    <ProfileSection isModal={isModal}>
        <Overlay></Overlay>
        <Wrapper>
            <Profile>
              <IconDiv onClick={() => setIsModal(false)}>
                <Img className='leftarrow' src={Img1} alt="Image" />
              </IconDiv>
              <H3>Profile</H3>
            </Profile>
            <NameIcon>V</NameIcon>
            <Name>Varsha</Name>
            <Number>( +91 8589998071 )</Number>
            <Ul>
              <Li>
                <ImgContainer>
                  <Img src={Img2} alt="Image" />
                </ImgContainer>
                <RightDiv>
                    <Campus>Campus</Campus>
                    <CampusName>Jamia Nadviyya Arts & science College Edavanna</CampusName>
                </RightDiv>
              </Li>
              <Li>
              <ImgContainer>
                  <Img  src={Img3} alt="Image" />
                </ImgContainer>
                <RightDiv>
                    <Campus>Class</Campus>
                    <CampusName>IV</CampusName>
                </RightDiv>
              </Li>
              <Li>
              <ImgContainer>
                  <Img src={Img4} alt="Image" />
                </ImgContainer>
                <RightDiv>
                    <Campus>Division</Campus>
                    <CampusName>B</CampusName>
                </RightDiv>
              </Li>
            </Ul>
            <LogOut onClick={() => setIsModal(false)}><img className='log' src={Img5} alt="Image" />Logout</LogOut>
        </Wrapper>
    </ProfileSection>
  )
}

export default ProfileModal;

const ProfileSection = styled.div`
  width: 100%;
  display: ${({isModal}) => (isModal ? "block" : "none")};
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(2px);
`;
const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  filter: blur(5px);
  background-color: #000;
  opacity: .5;
`;
const Wrapper = styled.div`
    width: 20%;
    position: absolute;
    right: 0;
    top: 0;
    padding: 72px 20px;
    background: #fff;
    height: 600px;
    border-radius: 10px;
`;
const Profile = styled.div`
    height: 165px;
    padding: 21px;
    display: flex;
    justify-content: flex-start;
    background-color: #f3f9eb;
    border-radius: 10px;
    position: relative;
`;
const IconDiv = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Img = styled.img`
    width: 60%;
    display: block;
`;
const H3 = styled.h3`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    margin: 0;
    color: #5c6970;
    font-weight: 00;
`;
const NameIcon = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #56b45c;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 30px;
    top:170px;
    position: absolute;
    left: 120px;
`;
const Name =styled.h4`
    color: #4c565a;
    margin: 40px 0 10px;
    text-align: center;
    font-size: 25px;
    font-weight: 500;
`;
const Number = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #5fb895;
    font-weight: 500;
`;
const Ul = styled.ul`
    padding: 0;
    display: flex;
    flex-direction: column;
    margin-bottom: 80px;
`;
const Li = styled.li`
    list-style: none;
    height: 50px;
    padding: 10px;
    border-radius: 10px;
    background-color: #f8faf5;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;
const ImgContainer = styled.div`
    width: 30px;
    margin-right: 5px;
`;
const RightDiv = styled.div``;
const Campus = styled.h6`
    margin: 0;
    color: #aeb0ad;
`;
const CampusName = styled.h5`
    margin: 0;
    color: #62686b;
    font-weight: 500;
`;
const LogOut = styled.div`
    color: red;
    font-weight: 300;
    font-size: 15px;
    display: flex;
    cursor: pointer;
`;
