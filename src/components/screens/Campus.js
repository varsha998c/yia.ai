import React, { useState } from "react";
import styled from "styled-components";
import Img1 from "../../assets/images/CHAKKALAKKAL_HIGHER_SECONDARY_SCHOOL_bLAdE1w.jpg";
import Img3 from "../../assets/images/Mohammed_Abdurahiman_Memo_YYVPYiB.jpg";
import Img4 from "../../assets/images/Peekay_CICS_Arts___Science_College_log_wrIEv5e.jpg";
import Img5 from "../../assets/images/PMSAMA_Higher_Secondary_School_logo.jpeg_4SMo8lN.jpg";
import Img6 from "../../assets/images/Sahya_Arts_and_Science_College_logo_ftW2BcR.jpg";
import Img7 from "../../assets/images/Sahya_Arts_and_Science_College_logo_ftW2BcR.jpg";
import Img8 from "../../assets/images/Sahya_Arts_and_Science_College_logo_ftW2BcR.jpg";
import Slider from "react-slick";

export default function Campus() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        nextArrow: false,
        prevArrow: false,
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    infinite: true,
                },
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 2,
                    infinite: true,
                },
            },
        ],
    };

    const sec_settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: -1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    infinite: true,
                },
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 2,
                    infinite: true,
                },
            },
        ],
    };

    const [colleges, setColleges] = useState([
        {
            id: 1,
            name: "Jamia Nadviyya arts & science college",
            image: Img1,
            place: "Malappuram",
        },
        {
            id: 2,
            name: "Jamia Nadviyya arts & science college",
            image: Img8,
            place: "Malappuram",
        },
        {
            id: 3,
            name: "Jamia Nadviyya arts & science college",
            image: Img3,
            place: "Malappuram",
        },
        {
            id: 4,
            name: "Jamia Nadviyya arts & science college",
            image: Img4,
            place: "Malappuram",
        },
        {
            id: 5,
            name: "Jamia Nadviyya arts & science college",
            image: Img5,
            place: "Malappuram",
        },
        {
            id: 6,
            name: "Jamia Nadviyya arts & science college",
            image: Img6,
            place: "Malappuram",
        },
        {
            id: 7,
            name: "Jamia Nadviyya arts & science college",
            image: Img7,
            place: "Malappuram",
        },
        {
            id: 8,
            name: "Jamia Nadviyya arts & science college",
            image: Img8,
            place: "malappuram",
        },
        {
            id: 9,
            name: "Jamia Nadviyya arts & science college",
            image: Img1,
            place: "Malappuram",
        },
        {
            id: 10,
            name: "Jamia Nadviyya arts & science college",
            image: Img5,
            place: "Malappuram",
        },
    ]);

    return (
        <GallerySection>
            <Container>
                <Wrapper className="wrapper">
                    <Title>
                        Associated <Span>Campuses</Span>
                    </Title>
                    <Description>
                        Various institutions have joined hands with us , to
                        train theri students and improve theri employability
                        skills , along with moulding them to be future
                        entrepreneurs.
                    </Description>

                    <CardContainer>
                        <SliderContainer>
                            <Slider {...settings}>
                                {colleges.map((college, index) => (
                                    <CampusCard key={college.id}>
                                        <ImgContainer>
                                            <img src={college.image} alt="" />
                                        </ImgContainer>
                                        <CollegeName>{college.name}</CollegeName>
                                        <Place>
                                            {college.place}
                                        </Place>
                                    </CampusCard>
                                ))}
                            </Slider>
                        </SliderContainer>
                        <SliderContainer>
                            <Slider {...sec_settings}>
                                {colleges.map((college) => (
                                    <CampusCard key={college.id}>
                                        <ImgContainer>
                                            <img src={college.image} alt="" />
                                        </ImgContainer>
                                        <CollegeName>{college.name}</CollegeName>
                                        <Place>
                                            {college.place}
                                        </Place>
                                    </CampusCard>
                                ))}
                            </Slider>
                        </SliderContainer>
                    </CardContainer>
                    <Heading>
                        And <Count>300</Count> More Campuses All Our Kerala
                    </Heading>
                </Wrapper>
            </Container>
        </GallerySection>
    );
}
const GallerySection = styled.section`
    padding: 40px;
    text-align: center;
    background: #e3f4e6;
    @media (max-width:480px){
        padding: 40px 20px;
    }
`;
const Container = styled.div`
    /* width: 90%;
    margin: 0 auto; */
    .slick-track {
        display: flex !important;
    }
    .slick-slide {
        height: inherit;
        display: flex !important;
    }
    .slick-slide > div {
        display: flex !important;
    }
    .slick-arrow {
        display: none !important;
    }
`;
const Wrapper = styled.div`
    /* margin: 0 auto;
    width: 92%; */
    
`;
const Title = styled.h2`
    color: #0fa76f;
    text-align: center;
    margin: 0 0 25px 0;
    font-size: 35px;
    font-weight: 600;
    @media (max-width:480px){
        font-size: 25px;
    }
`;
const Description = styled.p`
    text-align: center;
    margin: 0 auto;
    width: 50%;
    @media (max-width:480px){
        width: 90%;
    }
`;
const Span = styled.span`
    font-weight: 600;
    color: #000;
`;
const Heading = styled.h4`
    font-weight: 600;
    font-size: 20px;
    
`;
const Count = styled.span`
    color: #1ea070;
    font-weight: 700;
`;
const CardContainer = styled.div`
    margin-top: 50px;
    position: relative;
    overflow: hidden;
    @media all and (max-width: 1280px) {
        margin-top: 40px;
    }
    @media all and (max-width: 400px) {
        padding-top: 30px;
    }
`;
const CampusCard = styled.span`
    display: block;
    padding: 0 15px;
    @media all and (max-width: 400px) {
        padding: 0 15px;
    }
`;
const ImgContainer = styled.span`
    display: block;
    width: 70px;
    min-width: 70px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
    img {
        display: block;
        width: 100%;
    }
`;
const CollegeName = styled.h4`
    font-size: 14px;
    margin-top: 15px;
`;

const Place = styled.p`
    font-size: 14px;
    color: #0fa76f;
    @media all and (max-width: 360px) {
        font-size: 13px;
    }
`;
const SliderContainer = styled.div`
    margin-bottom: 30px;
    @media all and (max-width: 1280px) {
        margin-bottom: 20px;
    }
`;
