import React from 'react';
import styled from 'styled-components';
import Campus from './Campus';
import Cards from './Cards';
import Certification from './Certification';
import Faq from './Faq';
import Footer from './Footer';
import Gallery from './Gallery';
import Header from './includes/Header';
import LoginPhoneModal from './includes/LoginPhoneModal';
import Mobile_app from './Mobile_app';
import ExaminationModal from './modals/ExaminationModal';
import Schools from './Schools';
import Spotlight from './Spotlight';
import Students from './Students';

function Explore() {
  return (
    <Container>
        <Header/>
        <LoginPhoneModal/>
        <Spotlight/>
        <Cards/>
        <Campus/>
        <Gallery/>
        <Certification/>
        <Schools/>
        <Students/>
        <Mobile_app/>
        <Faq/>
        <Footer/>
    </Container>
  )
}

export default Explore;
const Container = styled.div``;