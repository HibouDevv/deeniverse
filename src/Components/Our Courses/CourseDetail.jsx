import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import courses from "../../Data/courses.json"
import { motion } from 'framer-motion'
import Container from '../Layout/Container'
import FullWidth from '../Layout/FullWidth'
import MainLayout from '../Layout/MainLayout'
import { ArrowLeft, BookOpen, Clock, Users, Award, CheckCircle, Share2 } from 'lucide-react'

const CourseDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const course = courses.find(course => course.id === parseInt(id))
  const currentUrl = window.location.href

  const shareCourse = () => {
    if (navigator.share) {
      navigator.share({
        title: `${course.title} - Islamic Course`,
        text: `Check out this Islamic course: ${course.title}`,
        url: currentUrl,
      })
      .catch(err => console.error('Error sharing:', err))
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(currentUrl)
      alert('Link copied to clipboard!')
    }
  }

  if (!course) {
    return (
      <FullWidth className="bg-[#182F51] text-white py-40 text-center text-xl">
        Course not found.
      </FullWidth>
    )
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const containerFade = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }

  return (
    <MainLayout>
      <FullWidth className="bg-gradient-to-b from-[#182F51] to-[#0f1f3a] text-white">
        <Container>
          <motion.section
            className="py-16 md:py-24"
            initial="hidden"
            animate="visible"
            variants={containerFade}
          >
            {/* Header with Back and Share buttons */}
            <div className="flex justify-between items-center mb-8">
              <motion.div 
                className="cursor-pointer flex items-center text-[#C0A34E] hover:text-[#D8B75A] transition w-fit group"
                onClick={() => navigate('/courses')}
                whileHover={{ x: -5 }}
                variants={fadeIn}
              >
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                
                <span className="text-sm font-semibold uppercase tracking-wider">Back to Courses</span>
              </motion.div>

              <motion.button
                onClick={shareCourse}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 bg-[#366AB7] hover:bg-[#3a72c9] rounded-lg text-sm font-medium transition-colors"
                variants={fadeIn}
              >
                <Share2 className="w-4 h-4" />
                Share Course
              </motion.button>
            </div>

            {/* Course Header */}
            <motion.div className="text-center mb-16" variants={fadeIn}>
              <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase bg-[#C0A34E] text-[#182F51] rounded-full shadow-md mb-4 tracking-wider">
                {course.category || "Premium Course"}
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-white tracking-tight">
                {course.title}
              </h1>
              <div className="w-24 h-1 bg-[#C0A34E] mx-auto mt-6 mb-8"></div>
              <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
                {course.description}
              </p>
            </motion.div>

            {/* Course Details Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Key Information Sidebar */}
              <motion.div className="space-y-6" variants={fadeIn}>
                <div className="bg-[#1a3258] rounded-xl p-6 border border-[#366AB7]/30 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-[#C0A34E]" />
                    Course Details
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Clock className="w-5 h-5 mr-3 mt-0.5 text-[#366AB7]" />
                      <div>
                        <span className="block text-sm text-gray-400">Duration</span>
                        <span className="text-white">{course.duration || "8 Weeks"}</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Award className="w-5 h-5 mr-3 mt-0.5 text-[#366AB7]" />
                      <div>
                        <span className="block text-sm text-gray-400">Level</span>
                        <span className="text-white">{course.level || "Beginner"}</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Users className="w-5 h-5 mr-3 mt-0.5 text-[#366AB7]" />
                      <div>
                        <span className="block text-sm text-gray-400">Audience</span>
                        <span className="text-white">{course.targetAudience || "All Muslims"}</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#1a3258] rounded-xl p-6 border border-[#366AB7]/30 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-4">Course Instructor</h3>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-[#366AB7] flex items-center justify-center text-white font-bold mr-4">
                      F
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Faiza Sahabat</h4>
                      <p className="text-sm text-gray-400">Certified Islamic Scholar</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Main Content */}
              <motion.div className="lg:col-span-2 space-y-8" variants={fadeIn}>
                {/* Overview Card */}
                <div className="bg-[#1a3258] rounded-xl p-8 border border-[#366AB7]/30 shadow-lg">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <BookOpen className="w-6 h-6 mr-3 text-[#C0A34E]" />
                    Course Overview
                  </h2>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300 mb-6">{course.longDescription || course.description}</p>
                    
                    <h3 className="text-xl font-semibold text-white mt-8 mb-4">What You'll Learn</h3>
                    <ul className="space-y-3">
                      {(course.objectives || ["Understand Quranic principles", "Improve recitation", "Gain deeper understanding"]).map((obj, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-[#C0A34E] flex-shrink-0" />
                          <span className="text-gray-300">{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Benefits Card */}
                <div className="bg-[#1a3258] rounded-xl p-8 border border-[#366AB7]/30 shadow-lg">
                  <h2 className="text-2xl font-bold text-white mb-6">Course Benefits</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {(course.benefits || [
                      "Personalized feedback",
                      "Structured curriculum",
                      "Certified instructors",
                      "Flexible scheduling"
                    ]).map((benefit, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="bg-[#366AB7]/20 p-2 rounded-lg mr-4">
                          <CheckCircle className="w-5 h-5 text-[#C0A34E]" />
                        </div>
                        <p className="text-gray-300">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Section */}
                <motion.div 
                  className="text-center pt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.a
                    href="https://api.whatsapp.com/send/?phone=923265566969&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-block bg-gradient-to-r from-[#C0A34E] to-[#D8B75A] hover:from-[#D8B75A] hover:to-[#C0A34E] text-[#182F51] font-bold text-lg px-8 py-4 rounded-lg shadow-lg transition-all duration-300"
                  >
                    Enroll Now - Limited Seats Available
                  </motion.a>
                  <p className="text-gray-400 mt-4 text-sm">
                    Classes begin on {course.startDate || "the next available session"}
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* Instructor Section */}
            <motion.div 
              className="mt-20 bg-[#1a3258] rounded-xl p-8 border border-[#366AB7]/30 shadow-lg max-w-5xl mx-auto"
              variants={fadeIn}
            >
              <h2 className="text-2xl font-bold text-white mb-6 text-center">About The Instructor</h2>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="w-40 h-40 rounded-full bg-[#366AB7] flex items-center justify-center text-white text-5xl font-bold border-4 border-[#C0A34E] shadow-lg">
                    F
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-xl font-bold text-white">Faiza Sahabat</h3>
                  <p className="text-[#C0A34E] mb-4">Certified Islamic Scholar</p>
                  <p className="text-gray-300 mb-4">
                    Ustadha Faiza Sahabat received her Islamic education from Al-Huda International Institute and has over 10 years of teaching experience. She specializes in Quranic recitation (Tajweed) and Islamic studies, bringing a compassionate and structured approach to her teaching methodology.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-[#366AB7]/20 text-[#C0A34E] px-3 py-1 rounded-full text-xs font-medium">Al-Huda Graduate</span>
                    <span className="bg-[#366AB7]/20 text-[#C0A34E] px-3 py-1 rounded-full text-xs font-medium">Tajweed Specialist</span>
                    <span className="bg-[#366AB7]/20 text-[#C0A34E] px-3 py-1 rounded-full text-xs font-medium">10+ Years Experience</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.section>
        </Container>
      </FullWidth>
    </MainLayout>
  )
}

export default CourseDetail