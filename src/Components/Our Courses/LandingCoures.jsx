

import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import Card from "../UI/Card";
import Container from "../Layout/Container";
import courseData from "../../Data/courseData.json";
import FullWidth from "../Layout/FullWidth";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // adjust for responsiveness
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
  ],
};

const LandingCoures = () => {
  return (
    <FullWidth>
    <div className="py-10 ">
      <Container>
        <h2 className="text-3xl font-bold mb-4 text-white text-center py-3 pb-5">Our Popular Courses</h2>
        <Slider {...sliderSettings}>
          {courseData.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="px-3"
            >
              <Card
                id={course.id}
                title={course.title}
                description={course.description}
                img={course.image}
              />
            </motion.div>
          ))}
        </Slider>
      </Container>
    </div>
    </FullWidth>
  );
};

export default LandingCoures;


