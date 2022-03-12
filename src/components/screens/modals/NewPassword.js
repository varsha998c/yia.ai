import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import tick from '../../../assets/images/Group 2645.svg';
import close from '../../../assets/images/Group 2938.svg';
import Img6 from "../../../assets/images/decorator.svg";
import Img7 from "../../../assets/images/cancel.png";



function NewPassword(handleModal) {
    const [image,setImage] = useState(false);
    const [image2,setImage2] = useState(false);
    const toggle2 = () => {
        setImage2(!image2);
        console.log(image2)
    }
    const toggle= ()=> {
        setImage(!image);
    }
    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
    });
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    }; 
    const handleClickShowPassword2 = () => {
        setValues({ ...values, showPassword2: !values.showPassword2 });
    };      
    const [password, setPassword] = useState({
        firstPassword: "",
        secondPassword: "",
    });
    const setFirst = (event) => {
        setPassword({ ...password, firstPassword: event.target.value });
        };
        const setSecond = (event) => {
        setPassword({ ...password, secondPassword: event.target.value });
    };
    
    const usePasswordValidation = ({ firstPassword = "", secondPassword = "" }) => {
        const [validLength, setValidLength] = useState(null);
        const [hasNumber, setHasNumber] = useState(null);
        const [upperCase, setUpperCase] = useState(null);
        const [lowerCase, setLowerCase] = useState(null);
        const [specialChar, setSpecialChar] = useState(null);
        const [match, setMatch] = useState(null);   
        useEffect(() => {
            setValidLength(firstPassword.length >= 8 ? true : false);
            setUpperCase(firstPassword.toLowerCase() !== firstPassword);
            setLowerCase(firstPassword.toUpperCase() !== firstPassword);
            setHasNumber(/\d/.test(firstPassword));
            setSpecialChar(/[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(firstPassword));
            setMatch(firstPassword && firstPassword === secondPassword);

        }, [firstPassword, secondPassword]); 
        return [validLength, hasNumber, upperCase, lowerCase, match, specialChar];               
    }
    const [
        validLength,
        hasNumber,
        upperCase,
        lowerCase,
        match,
        specialChar,
        ] = usePasswordValidation({
        firstPassword: password.firstPassword,
        secondPassword: password.secondPassword,
    });
    return (
    <Container>
    <Overlay></Overlay>
    {/* <Section> */}
        <MainContainer>
            <TopContainer>
                <ImageContainer>
                    <Round src={require("../../../assets/images/Group 2608.svg").default} alt="Round Pic" />
                </ImageContainer>
                <Heading>Password</Heading>
                <SubHeading>Enter your password for this account</SubHeading>
            </TopContainer>
            <MiddleContainer>
                <InputField placeholder= "Enter Password"  required type={values.showPassword ? "text" : "password"}
                                    onChange={setFirst}
                                    />
                <LockImage src={require("../../../assets/images/Layer3.svg").default} alt="Lock Icon" />
                <EyeImage src={require("../../../assets/images/hide.svg").default} alt="Eye Icon" onClick={()=>(toggle(),handleClickShowPassword())} image={image}  />
                <EyeOpen src={require("../../../assets/images/eye.svg").default} alt="Open Eye" onClick={()=>(toggle(),handleClickShowPassword())} image={image}/>
            </MiddleContainer>
            <Validation>
                <Span className="valid-length" validLength={validLength}>
                    <CheckImage src={validLength ? tick : close}/>Should Contain atleast 8 characters
                </Span>
                <Span className="lower-case" lowerCase={lowerCase}>
                    <CheckImage src={lowerCase ?  tick : close} />Should Contain lowercase (small) letter (a-z)
                </Span>
                <Span className="upper-case" upperCase={upperCase}>
                    <CheckImage src={upperCase ?  tick : close} />Should Contains uppercase (capital) letter (A-z)
                </Span>
                <Span className="has-number" hasNumber={hasNumber}>
                    <CheckImage src={hasNumber ?  tick : close} />Should Contain at least one number (0-9)
                </Span>
                <Span className="special-char" specialChar={specialChar}>
                    <CheckImage src={specialChar ? tick : close} />Should Contain at least one symbol($,@,#,%,!,*,?,&)
                </Span>
            </Validation>
            <BottomContainer>
                <Link to="/chooseprofile">
                    <Button>Confirm</Button>
                </Link>
            </BottomContainer>
            <FooterDiv>
            <a href="#" className="term">Terms of service</a>
        </FooterDiv>
        </MainContainer>  
    {/* </Section> */}
    <CancelDiv to="/#">
        <Cancel src={Img7} alt="Image" />
    </CancelDiv>
    </Container>
    )
}


const Container = styled.div`
    width: 100%;
    transition: 0.3s;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(4px);
`;
const Overlay = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    min-height: 100vh;
    max-height: 100vh;
    filter: blur(2px);
`;
// const Section =styled.div`
//     width: 500px;
//     padding: 0 50px;
//     background-color: #fff;
//     animation-delay: .3s;
// `;
const MainContainer = styled.div`
    text-align: left;
    width: 500px;
    padding: 40px 0;
    position: absolute;
    right: 0;
    top: 0;
    background-color: #fff;
    background: url(${Img6}) no-repeat;
    animation-delay: .3s;
    animation: 0.4s ease 0s 1 normal none running slide-box;
    @keyframes slide-box {
        from {right:-200px;}
        to {right:2px;}
    }
    /* @media (max-width:1280px){
        width:600px;
        height: 60vh;
    } */
    @media (max-width:640px){
        width: 428px;
    }
    @media (max-width:540px){
        width: 425px;
    }
    @media (max-width:480px){
        width: 361px;
        padding-top: 164px;
    }
    @media (max-width:360px){
        width: 321px;
    }
`;
const TopContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    padding: 30px;
`;
const ImageContainer = styled.div`
    width:20px;
`;
const Round = styled.img`
    display: block;
    width: 100%;
`;
const Heading = styled.h5`
    font-size: 25px;
    margin: 10px 0;
`;
const SubHeading = styled.p`
    font-weight: 500;
`;
const MiddleContainer = styled.div`
    padding: 0 30px;
    position: relative;
    height: 50px;
    border: 1px solid #000;
    border-radius: 5px;
    width: 75%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width:360px){
        width: 66%;
    }
`;
const InputField = styled.input`
    width: 100%;
    padding: 10px 40px;
    outline: none;
    border:none;
    box-sizing: border-box;
`;
const EyeImage = styled.img`
    position: absolute;
    width: 18px;
    top: 12px;
    right:46px;
    display: ${({image})=> (image ? 'block' : 'none')};
    cursor: pointer;
`;
const EyeOpen = styled.img`
    position: absolute;
    width: 18px;
    top: 20px;
    right:46px;
    display: ${({image})=> (image ? 'none' : 'block')};
    cursor: pointer;
`;
const LockImage = styled.img`
    position: absolute;
    width: 15px;
    top:11px;
    left: 40px;
`;
const  Validation = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
    padding-bottom: 10px;
    @media (max-width:480px){
        display: none;
    }
`;
const  Span = styled.span`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    font-size: 14px;
    &.correct {
        color:red;
        display: ${({match})=>(match ? 'none' : 'block')};
    }
    &.valid-length {
        color: ${({validLength})=>(validLength ? '#2bc871' : '#adafae')}
    }
    &.lower-case{
        color: ${({lowerCase})=>(lowerCase ? '#2bc871' : '#adafae')}
    }
    &.upper-case {
        color: ${({upperCase})=>(upperCase ? '#2bc871' : '#adafae')}
    }
    &.has-number {
        color: ${({hasNumber})=>(hasNumber ? '#2bc871' : '#adafae')}
    }
    &.special-char {
        color: ${({specialChar})=>(specialChar ? '#2bc871' : '#adafae')}
    }
`;
const  CheckImage = styled.img`
    display: inline-block;
    width: 20px;
    margin-right: 20px;
`;

const BottomContainer = styled.div`
    padding: 0 30px 40px;
    text-align: center;
    font-size: 12px;   
    @media (max-width:480px){
        width: 91%;
        margin: 0 auto 150px;
        padding: 0;
    }
`;
const Button = styled.button`
    border: none;
    width: 100%;
    background-image: linear-gradient(
        to left,
        #63bb4c 0%,
        #40ab79 51%,
        #1e9ba6 100%
    );
    font-size: 14px;
    margin-top: 67px;
    border: none;
    border-radius: 7px;
    height: 55px;
    color: #fff;
    cursor: pointer;   
    &:hover {
        background-image: linear-gradient(
        to right,
        #63bb4c 0%,
        #40ab79 51%,
        #1e9ba6 100%
    );
    }
`;
const FooterDiv = styled.div`
    text-align: center;
    margin-top: 25px;
    border-top: 1px dotted #333;
    @media (max-width:1280px){
        width: 80%;
        margin: 0 auto;
    }
    @media (max-width:1080px){
        width: 91%;
        margin: 0 auto;
    }
    @media (max-width:360px){
        font-size:12px;
    }
`;
const CancelDiv = styled(Link)`
    width: 20px;
    display: flex;
    position: absolute;
    top: 0;
    right: 33%;
    cursor: pointer;
    @media (max-width:1280px){
        top: 7px;
        right: 47%;
    }
    @media (max-width:1080px){
        right: 51%;
    }
    @media (max-width:980px){
        right: 66%;
    }
    @media (max-width:768px){
        right: 79%;
    }
    @media (max-width:540px){
        right: 89%;
        top: 6px;
    }
    @media (max-width:480px){
        right: 94%;
    }
`;
const Cancel = styled.img`
    width: 100%;
    display: block;
`;

export default NewPassword;
