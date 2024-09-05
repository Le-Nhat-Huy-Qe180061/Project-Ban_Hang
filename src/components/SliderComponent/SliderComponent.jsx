import React from "react";
import { Carousel } from 'antd';

const SliderComponent = ({ arrImage = [] }) => {
  const contentStyle = {
    height: '350px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <Carousel arrows infinite={false} autoplay>
      {arrImage.map((image, index) => (
        <div key={index}>
          <div style={contentStyle}>
            <img 
              src={image} 
              alt={`Slide ${index + 1}`} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default SliderComponent;