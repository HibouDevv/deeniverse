import React, { useState, useEffect } from "react";
import { BookOpen, Star, Share2, Clock, ArrowRight } from "lucide-react";
import MainLayout from "../Layout/MainLayout";
import courseData from "../../Data/courseData.json";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Courses = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    const el = document.getElementById("courses-section");
    if (el) observer.observe(el);

    const onMouse = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", onMouse);
    return () => window.removeEventListener("mousemove", onMouse);
  }, []);

  return (
    <MainLayout>
      <div
        id="courses-section"
        className="relative min-h-screen bg-gradient-to-b from-[#182F51] to-[#0f1f3a] text-white overflow-hidden"
      >
        {/* Background Animation */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute w-80 h-80 bg-[#C0A34E]/20 rounded-full blur-3xl animate-pulse"
            style={{
              transform: `translate(${mousePos.x * 0.015}px, ${
                mousePos.y * 0.015
              }px)`,
            }}
          />
          <div
            className="absolute top-1/3 right-1/4 w-56 h-56 bg-[#366AB7]/30 rounded-full blur-2xl animate-ping"
            style={{
              animationDuration: "4s",
              transform: `translate(${mousePos.x * -0.01}px, ${
                mousePos.y * -0.01
              }px)`,
            }}
          />
        </div>

        {/* Header */}
        <div className="text-center pt-28 pb-16 max-w-5xl mx-auto px-4">
          <div
            className={`flex flex-col items-center ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            } transition-all duration-1000`}
          >
            <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase bg-[#366AB7] text-white rounded-full shadow-md mb-4 tracking-wider">
              Comprehensive Curriculum
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-[#C0A34E] to-[#D8B75A] bg-clip-text text-transparent">
                Islamic Courses
              </span>{" "}
              for All Levels
            </h1>
            <div className="w-24 h-1 bg-[#C0A34E] mx-auto my-6"></div>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Structured programs in Quranic studies, Tajweed, Tafsir, and
              Islamic sciences taught by certified scholars.
            </p>
          </div>
        </div>

        {/* Course List */}
        <div className="px-6 lg:px-20 pb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {courseData.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#366AB7]/30 to-[#C0A34E]/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-[#1a3258] backdrop-blur-sm border border-[#366AB7]/30 rounded-2xl p-8 text-left shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-[#366AB7]/20 p-3 rounded-lg">
                    <BookOpen className="w-6 h-6 text-[#C0A34E]" />
                  </div>
                  <span className="text-xs font-medium bg-[#182F51] text-[#C0A34E] px-2 py-1 rounded-full">
                    {course.level}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {course.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                  {course.description}
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xs text-[#C0A34E] font-medium">
                    <Clock className="w-4 h-4 inline mr-1" /> {course.duration}
                  </span>
                  <a
                    href={`/courses/${course.id}`}
                    className="text-sm text-[#C0A34E] hover:text-[#D8B75A] font-medium transition-colors flex items-center"
                  >
                    Details <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className={`text-center pb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-xl font-medium text-gray-300 mb-6">
            Begin your Quranic journey today
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={
                "https://api.whatsapp.com/send/?phone=923335508011&text&type=phone_number&app_absent=0"
              }
              className='className="inline-block bg-gradient-to-r from-[#C0A34E] to-[#D8B75A] hover:from-[#D8B75A] hover:to-[#C0A34E] text-[#182F51] font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"'
            >
              {" "}
              Enroll Now
            </Link>

            <Link
              to={"/contact-us"}
              className="inline-block bg-transparent hover:bg-[#366AB7]/10 text-white border-2 border-[#366AB7] hover:border-[#C0A34E] font-bold px-8 py-4 rounded-lg transition-all duration-300"
            >
              {" "}
              Contact Advisor
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Courses;
