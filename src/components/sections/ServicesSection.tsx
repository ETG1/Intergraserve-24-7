"use client";

import React from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const ServicesSection = () => {
  const router = useRouter();

  const courses = [
    { name: "Security Training", filter: "security" },
    { name: "Firearm Training", filter: "firearm" },
    { name: "Special Courses", filter: "special" },
    { name: "PSIRA Services", filter: "psira" },
    { name: "More Courses", filter: "all" }
  ];

  const handleCourseClick = (filter: string) => {
    if (filter === "all") {
      // Navigate to services page with all courses
      router.push("/services");
    } else {
      // Navigate to services page with specific filter
      router.push(`/services?filter=${filter}`);
    }
  };

  return (
    <section
      id="services"
      className="relative min-h-screen bg-black overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1602901248767-2ba389c86d0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGd1bnN8ZW58MHx8MHx8fDA%3D')"
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            {/* Title */}
            <div className="mb-8">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tight leading-none">
                OUR<br />
                COURSES
              </h2>

              {/* Green Accent Line */}
              <div className="w-16 h-1 bg-green-500 mb-8"></div>
            </div>

            {/* Tagline */}
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 leading-tight">
              BE READY. BE CONFIDENT. MASTER SECURITY & FIREARM SAFETY & SKILLS.
            </h3>

            {/* Description */}
            <p className="text-lg text-gray-300 mb-12 leading-relaxed max-w-lg">
              IntegraServe 24/7 are proud to offer several instructional courses for individuals of all skill levels.
              Our courses are designed and developed by experts in the field to help you learn the basics and improve your
              security skills.
            </p>

            {/* Course List */}
            <div className="space-y-4">
              {courses.map((course, index) => (
                <motion.div
                  key={course.name}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center group cursor-pointer"
                  onClick={() => handleCourseClick(course.filter)}
                >
                  <div className="w-6 h-6 rounded-full border-2 border-green-500 flex items-center justify-center mr-4 group-hover:bg-green-500 transition-colors duration-300">
                    <Plus className="w-3 h-3 text-green-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-white text-lg font-medium group-hover:text-green-400 transition-colors duration-300">
                    {course.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Equipment Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div
                className="w-full h-96 bg-cover bg-center bg-no-repeat rounded-lg"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1602901248767-2ba389c86d0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGd1bnN8ZW58MHx8MHx8fDA%3D')"
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};



export default ServicesSection;
