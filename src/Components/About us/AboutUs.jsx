import React from 'react';
import { BookOpen, GraduationCap, School, Star, Check, Globe, Smartphone, Award } from 'lucide-react';
import MainLayout from '../Layout/MainLayout';

const faculty = [
  {
    name: 'Faiza Sahabat',
    title: 'Director of Quranic Studies',
    credentials: 'Islamic Education – AlHuda International Institute',
    icon: <BookOpen className="w-12 h-12 text-[#C0A34E]" />,
  },
  {
    name: 'Dr. Amina Noor',
    title: 'Chair of Tafsir Studies',
    credentials: 'PhD in Islamic Studies – Tafsir & Tajweed',
    icon: <GraduationCap className="w-12 h-12 text-[#C0A34E]" />,
  },
  {
    name: 'Ustadha Nawal Zahra',
    title: 'Head of Tajweed Instruction',
    credentials: 'Certified Qaria – Darul Uloom Karachi',
    icon: <School className="w-12 h-12 text-[#C0A34E]" />,
  },
];

const AboutUs = () => {
  return (
    <MainLayout>
      <main className="bg-gradient-to-b from-[#182F51] to-[#0f1f3a] text-white min-h-screen">
        {/* Hero Section */}
        <section className="relative py-28 px-6 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/36704/pexels-photo.jpg')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#182F51]/90 to-[#182F51]"></div>
          <div className="relative max-w-5xl mx-auto">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase bg-[#366AB7] text-white rounded-full shadow-md mb-4 tracking-wider">
              Authentic Islamic Education
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#C0A34E] to-[#D8B75A] bg-clip-text text-transparent">
                About Deeniverse
              </span>
            </h1>
            <div className="w-24 h-1 bg-[#C0A34E] mx-auto my-8"></div>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              A premier online institution preserving the authentic tradition of Quranic education while embracing innovative teaching methodologies for the digital age.
            </p>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-20 px-6 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center justify-center gap-3">
            <Award className="w-8 h-8 text-[#C0A34E]" /> Our Mission
          </h2>
          <div className="bg-[#1a3258] rounded-xl p-8 border border-[#366AB7]/30 shadow-lg max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed">
              Our mission is to provide authentic, accessible Quranic education that combines traditional Islamic scholarship with modern pedagogical approaches. We aim to nurture a generation deeply connected to the Quran through proper recitation, understanding, and implementation.
            </p>
          </div>
        </section>

        {/* Unique Features Section */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3 mb-6">
                  <Star className="w-8 h-8 text-[#C0A34E]" /> Why Choose Us
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We bridge the gap between classical Islamic education and contemporary learning needs with our unique approach.
                </p>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-[#366AB7]/20 p-2 rounded-lg mr-4">
                    <Check className="w-5 h-5 text-[#C0A34E]" />
                  </div>
                  <span className="text-gray-300">Comprehensive Tajweed & Tafseer programs certified by Al-Azhar scholars</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#366AB7]/20 p-2 rounded-lg mr-4">
                    <Check className="w-5 h-5 text-[#C0A34E]" />
                  </div>
                  <span className="text-gray-300">Female scholars with traditional certification (Ijazah)</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#366AB7]/20 p-2 rounded-lg mr-4">
                    <Check className="w-5 h-5 text-[#C0A34E]" />
                  </div>
                  <span className="text-gray-300">Global access with flexible scheduling across timezones</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#366AB7]/20 p-2 rounded-lg mr-4">
                    <Check className="w-5 h-5 text-[#C0A34E]" />
                  </div>
                  <span className="text-gray-300">Interactive learning platform with progress tracking</span>
                </li>
              </ul>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-[#366AB7]/20 rounded-3xl blur-xl -z-10"></div>
              <img
                src="https://images.pexels.com/photos/36704/pexels-photo.jpg"
                alt="Islamic Learning Experience"
                className="rounded-2xl shadow-xl border-2 border-[#366AB7]/30 w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        {/* Distinguished Faculty */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-3">
              <GraduationCap className="w-8 h-8 text-[#C0A34E]" /> Our Esteemed Faculty
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Learn from certified scholars with traditional Islamic education and modern teaching expertise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {faculty.map((member, index) => (
              <div
                key={index}
                className="bg-[#1a3258] border border-[#366AB7]/30 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-[#366AB7]/20 p-4 rounded-full group-hover:bg-[#366AB7]/30 transition-colors duration-300">
                    {member.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#C0A34E]">{member.name}</h3>
                <p className="text-gray-300 mt-2">{member.title}</p>
                <p className="text-sm text-gray-400 mt-3">{member.credentials}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 max-w-4xl mx-auto text-center">
          <div className="bg-[#1a3258] rounded-xl p-8 border border-[#366AB7]/30 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Begin Your Quranic Journey Today</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of students worldwide who are transforming their relationship with the Quran through our structured programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/courses"
                className="inline-block bg-gradient-to-r from-[#C0A34E] to-[#D8B75A] hover:from-[#D8B75A] hover:to-[#C0A34E] text-[#182F51] font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                View Our Courses
              </a>
              <a
                href="/contact"
                className="inline-block bg-transparent hover:bg-[#366AB7]/10 text-white border-2 border-[#366AB7] hover:border-[#C0A34E] font-bold px-8 py-4 rounded-lg transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
};

export default AboutUs;