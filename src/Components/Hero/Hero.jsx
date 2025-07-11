import React from 'react';
import FullWidth from '../Layout/FullWidth.jsx';
import Container from '../Layout/Container.jsx';
import heroImage from '../../assets/images/hero-grad.png';
import Button from '../UI/Button.jsx';
import HeaderImage from "../../assets/images/head-image.png";

const Hero = () => {
  return (
    <FullWidth>
      <section
        className="bg-cover bg-center w-full"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <Container className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-[300px] min-h-[80vh]">
          
          {/* Hero text */}
          <div className='text-left flex flex-col items-start mb-8 md:mb-0 max-w-lg'>
            <h1 className='text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4'>
              Unlock Your Potential with <br /> Expert-Led Learning
            </h1>

            <Button className='bg-[#C0A34E] text-white cursor-pointer py-2 px-4 text-sm rounded-2xl'>
              Get Started
            </Button>
          </div>

          {/* Header image */}
          <div className="w-full md:w-auto max-w-xs sm:max-w-sm md:max-w-none">
            <img src={HeaderImage} alt="Quran" className="w-full h-auto" />
          </div>

        </Container>
      </section>
    </FullWidth>
  );
};

export default Hero;
