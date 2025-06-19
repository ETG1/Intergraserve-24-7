"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Target, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  ctaLink?: string;
}

export default function HeroSection({
  ctaLink = "#services",
}: HeroSectionProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Full-width Background Image - Exact firearmtrainers.co.za style */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://ik.imagekit.io/6ywhgwsgk/int247/in.png?updatedAt=1750224159570')`,
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />
        {/* Clean overlay - matching firearmtrainers.co.za */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content Container - Exact firearmtrainers.co.za Layout */}
      <div className="relative z-10 flex min-h-screen w-full items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            {/* Main Title - Security Training Academy */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-none mb-6 "
            >
              <span className="block ">INTEGRASERVE</span>
              <span className="block flex items-center">SECURITY TRAINING ACADEMY</span>
            </motion.h1>

            {/* Tagline - Security Academy focused */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-white/90 mb-8 font-medium"
            >
              PSIRA Certified Training • Expert Instructors • Career Ready
            </motion.p>

            {/* CTA Buttons  */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-base font-bold uppercase tracking-wide transition-all duration-300"
                onClick={() =>
                  document
                    .querySelector(ctaLink)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                VIEW COURSES
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white bg-transparent hover:bg-white hover:text-black text-white px-8 py-4 text-base font-bold uppercase tracking-wide transition-all duration-300"
              >
                CONTACT US
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Process Steps Section - Clean design */}
      <div className="relative z-10 bg-gray-50 py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              HOW TO OBTAIN YOUR SECURITY LICENSE
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Follow our simple 3-step process to get certified
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-wide">PROFESSIONAL TRAINING</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Complete our comprehensive security training program with certified instructors and hands-on experience.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-wide">COMPETENCY ASSESSMENT</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Pass our rigorous competency assessments and practical evaluations to demonstrate your skills.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-wide">PSIRA LICENSE</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Receive your official PSIRA certification and start your career in the security industry.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-slate-300"
        >
          <span className="text-xs font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-current rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
