import React, { useState } from 'react';
import styled from 'styled-components';
import Img1 from '../../assets/images/gre-yel.svg';
import Congradulation from './modals/Congradulation';
import HeaderModal from '../screens/modals/HeaderModal';
import ProfileModal from './modals/ProfileModal';


export default function NewStudentData() {
    const [cngrtsModal,setCngrtsModal]=useState(false);
    const [isModal,setIsModal]=useState(false);
  return (
      <>
    <HeaderModal setIsModal={setIsModal}/> 
    <ProfileModal isModal={isModal} setIsModal={setIsModal}/>
    <Section> 
    <DataSection className="container">
        <InnerDiv>
            <Img src={Img1} alt="Image" />
        </InnerDiv>
        <StudentDiv>
            <TitleSec>Fill your details</TitleSec>
            <hr></hr>
            <Form>
                <p>
                    <Label type="text" value="Campus Name/Code">Campus Name/Code</Label>
                    <Input type="text" />
                </p>
                <p>
                    <Label type="text" value="select class">Select class</Label>
                    <Select>
                        <Option value=""></Option>
                        <Option value="1">1</Option>
                        <Option value="2">2</Option>
                        <Option value="3">3</Option>
                        <Option value="4">4</Option>
                        <Option value="5">5</Option>
                        <Option value="6">6</Option>
                    </Select>
                </p>
                <p>
                    <Label type="text" value="select division">Select division</Label>
                    <Select>
                        <Option value=""></Option>
                        <Option value="A">A</Option>
                        <Option value="B">B</Option>
                        <Option value="C">C</Option>
                        <Option value="D">D</Option>
                        <Option value="E">E</Option>
                    </Select>
                </p>
            </Form>
            <Bottom>
                <a href="/" className='back'>back</a>
                    <Button onClick={()=>setCngrtsModal((prev)=>!prev)}>Submit</Button>
                <Congradulation cngrtsModal={cngrtsModal}/>
            </Bottom>
        </StudentDiv>
    </DataSection>
    </Section>
    </>
  )
}


const Section = styled.div`
    width: 95%;
    margin-top: 30px;
    margin: 0 auto;
    height: 70vh;
    position: relative;
`;
const DataSection = styled.section`
    padding: 30px;
    height: 80vh;
    display: flex;
    width: 93%;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    background-image : linear-gradient(to bottom,  #f8fdf9 21%, #fff 100%);
`;
const StudentDiv = styled.div`
    width: 300px;
    padding: 20px;
    background: #fff;
    border: 2px solid #f1f3f2;  
    display: flex;
    flex-direction: column;
    border-radius: 5px;
`;
const TitleSec = styled.div`
    margin-bottom: 15px;
`;
const Form = styled.form`
`;
const Label = styled.label`
    font-size: 15px;
    font-weight: 100;
    margin-bottom: 5px;
`;
const Input = styled.input`
    width: 95%;
    margin: 10px 0 0 0;
    background-color: #fcfcfc;
    border: 2px solid #f0f0f0;
    padding: 6px;
    border-radius: 5px;
    &:hover {
        border-color: #74c5aa;
    }
`;
const Select = styled.select`
    width: 100%;
    margin: 10px 0 0 0;
    background-color: #fcfcfc;
    border: 2px solid #f0f0f0;
    padding: 6px;
    border-radius: 5px;
    &:hover {
        border-color: #74c5aa;
    }
`;
const Option = styled.option``;
const Bottom = styled.div`
    display: flex;
    margin-top: 20px;
    align-items: center;
    justify-content: end;
`;
const InnerDiv = styled.div`
    width: 115px;
    position: absolute;
    top: 80px;
    left: 21px;
`;
const Img = styled.img`
    width: 100%;
    display: block;
`;
const Button = styled.div`
    margin-right: 22px;
    padding: 7px 24px;
    text-transform: capitalize;
    border-radius: 5px;
    margin-right: 0;
    border: 1px solid #f0f0f0;
    font-size: 14px;
    color: #000;
    cursor: pointer;
    &:hover {
        background-image: linear-gradient(to right, #63bb4c 20%, #1898af 100%);
        color: #fff;
    }
`;