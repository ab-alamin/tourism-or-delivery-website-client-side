import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from  '../../../images/banner/banner-1.jpg';
import banner2 from  '../../../images/banner/banner-2.jpg';
import banner3 from  '../../../images/banner/banner-3.jpg';

const Banners = () => {
    return (
        <>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>AL AMIN Travel</h3>
      <p>Our Services is 24 hours 7 days.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>AL AMIN Travel</h3>
      <p>Our Services is 24 hours 7 days.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>AL AMIN Travel</h3>
      <p>Our Services is 24 hours 7 days.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

        </>
    );
};

export default Banners;