import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TrCard from '../TrCard/TrCard';
import Tr1 from '../../images/tr1.webp';
import Tr2 from '../../images/tr2.webp';
import Tr3 from '../../images/tr3.webp';
import './About3.css';

function About3() {
  const instructors = [
    { name: "Mr. Anup Baloj", post: "Sports Instructor", imgpath: Tr1 },
    { name: "Mrs. Rita Sharma", post: "Sports Instructor", imgpath: Tr2 },
    { name: "Mr. Rohit Vashe", post: "Sports Instructor", imgpath: Tr3 },
    { name: "Mr. Mohit Vashe", post: "Sports Instructor", imgpath: Tr3 },
    { name: "Mr. Anup Baloj", post: "Sports Instructor", imgpath: Tr1 },
    { name: "Mrs. Rita Sharma", post: "Sports Instructor", imgpath: Tr2 },
    { name: "Mr. Rohit Vashe", post: "Sports Instructor", imgpath: Tr3 },
    { name: "Mr. Mohit Vashe", post: "Sports Instructor", imgpath: Tr3 },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'black' 
      ,borderRadius:"100%"}}
        onClick={onClick}
      />
    );
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'black', borderRadius:"100%"}}
        onClick={onClick}
      />
    );
  }

  return (
    <div className="about3 tr-sect">
      <div className="home homeSec2-content sec">
        <h3 className="center-text">
          <div className='tr-sect-head'>Expert Teachers</div>
        </h3>
        <p className="homeSec2-para center-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, excepturi omnis? Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Unde, nihil.
        </p>
      </div>
      <Slider {...sliderSettings} className='tr-carousel'>
        {instructors.map((tr, index) => (
          <TrCard name={tr.name} post={tr.post} imgpath={tr.imgpath} key={index} />
        ))}
      </Slider>
    </div>
  );
}

export default About3;
