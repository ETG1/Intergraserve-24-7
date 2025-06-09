"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Users, Star } from "lucide-react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

export default function HeroSection({
  title = "IntegraServe 24/7",
  subtitle = "Professional Security Training",
  description = "Elevate your career with industry-recognized certifications and hands-on experience from certified instructors.",
  ctaText = "Start Your Journey",
  ctaLink = "#services",
  backgroundImage = "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=1920&q=80",
}: HeroSectionProps) {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900">
      {/* Interactive Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
            scale: [1, 1.1, 1],
          }}
          transition={{
            x: { type: "spring", stiffness: 50 },
            y: { type: "spring", stiffness: 50 },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -0.02,
            y: mousePosition.y * -0.02,
            scale: [1, 1.2, 1],
          }}
          transition={{
            x: { type: "spring", stiffness: 50 },
            y: { type: "spring", stiffness: 50 },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
          }}
        />

        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-primary/20 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-primary/20 rounded-lg animate-pulse" />
          <div className="absolute top-1/2 left-10 w-16 h-16 border border-primary/20 rotate-45 animate-bounce" style={{ animationDuration: '3s' }} />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto"
        >
          {/* Subtitle Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-8"
          >
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary backdrop-blur-sm">
              <Shield className="w-4 h-4" />
              {subtitle}
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6 text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
          >
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-tight">
              {title}
            </span>
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Security Academy
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mb-12 max-w-2xl text-xl text-muted-foreground leading-relaxed"
          >
            {description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              size="lg"
              className="btn-modern gradient-primary text-white px-8 py-4 text-lg font-semibold shadow-large hover:shadow-primary/25"
              onClick={() =>
                document
                  .querySelector(ctaLink)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {ctaText}
              <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-border bg-background/50 hover:bg-background px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300"
            >
              Learn More
            </Button>
          </motion.div>

          {/* Stats/Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { icon: Award, label: "PSIRA Certified", value: "100%" },
              { icon: Users, label: "Students Trained", value: "2000+" },
              { icon: Star, label: "Success Rate", value: "98%" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="card-modern p-6 text-center"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Modern Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
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
