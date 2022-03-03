import React, { useState } from 'react';
import styled from 'styled-components';
import Img1 from "../../assets/images/down-arrow.svg";


export default function Faq() {
    const[matchedId,setMatchedId] = useState("")
    const [faqItems] = useState([
        {
            id:1,
            question: "Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാവാൻ സാധിക്കുന്നത് ആർക്കെല്ലാം?",
            answer: "LP, UP, HS, HSE, VHSE  സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാകാവുന്നതാണ്.",
        },
        {
            id:2,
            question: "Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാവാൻ സാധിക്കുന്നത് ആർക്കെല്ലാം?",
            answer: "LP, UP, HS, HSE, VHSE  സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാകാവുന്നതാണ്.",
        },
        {
            id:3,
            question: "Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാവാൻ സാധിക്കുന്നത് ആർക്കെല്ലാം?",
            answer: "LP, UP, HS, HSE, VHSE  സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാകാവുന്നതാണ്.",
        },
        {
            id:4,
            question: "Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാവാൻ സാധിക്കുന്നത് ആർക്കെല്ലാം?",
            answer: "LP, UP, HS, HSE, VHSE  സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാകാവുന്നതാണ്.",
        },
        {
            id:5,
            question: "Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാവാൻ സാധിക്കുന്നത് ആർക്കെല്ലാം?",
            answer: "LP, UP, HS, HSE, VHSE  സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാകാവുന്നതാണ്.",
        },
        {
            id:6,
            question: "Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാവാൻ സാധിക്കുന്നത് ആർക്കെല്ലാം?",
            answer: "LP, UP, HS, HSE, VHSE  സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാകാവുന്നതാണ്.",
        },
        {
            id:7,
            question: "Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാവാൻ സാധിക്കുന്നത് ആർക്കെല്ലാം?",
            answer: "LP, UP, HS, HSE, VHSE  സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാകാവുന്നതാണ്.",
        },
        {
            id:8,
            question: "Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാവാൻ സാധിക്കുന്നത് ആർക്കെല്ലാം?",
            answer: "LP, UP, HS, HSE, VHSE  സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാകാവുന്നതാണ്.",
        },
        {
            id:9,
            question: "Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാവാൻ സാധിക്കുന്നത് ആർക്കെല്ലാം?",
            answer: "LP, UP, HS, HSE, VHSE  സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാകാവുന്നതാണ്.",
        }
        
        
    ])


    const faqList = () => {
        return faqItems.map((faqItem) => (
            <Li key={faqItem.id} onClick={ ()=> {setMatchedId(faqItem.id)} } >
                <Items>
                    <Description>{faqItem.question}</Description>
                    <Img src={Img1} alt="Image" />
                </Items>
                <Answer className={faqItem.id === matchedId && 'active'} >{faqItem.answer}</Answer>
            </Li>
        ));
    };


  return (
    <Section className='container'>
        <Wrapper>
            <Heading>Frequently <br></br><Span>Asked Questions</Span></Heading>
            <Ul>
                {faqList()}
            </Ul>
        </Wrapper>
    </Section>
  )
}


const Section = styled.section`
    padding: 5% 0;
`;
const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    text-align: center;
`;
const Heading = styled.h3`
    width: 50%;
    margin: 0 auto;
    color: #1b9f6f;
    font-weight: 500;
    font-size: 35px;
`;
const Span = styled.span`
    color: #000;
`;
const Ul = styled.ul`
    width: 70%;
    margin: 50px auto;
`;
const Li = styled.li`
    list-style: none;
    background-color: #f3f9eb;
    border-radius: 15px;
    margin-bottom: 40px;
    padding: 0 30px;
    border: 1px solid #dfe9d0;

`;
const Items = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
`;
const Description = styled.p`
    color: #525451;
    font-size: 16px;
    font-weight: 600;
    
`;
const Img = styled.img`
    cursor: pointer;
    display: block;
    width: 20px;
`;
const Answer = styled.p`
    display: none;
    &.active {
        display: block;
        text-align: start;
    }
`;