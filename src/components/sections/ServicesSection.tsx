"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Shield, Target, Award, Users, Clock, MapPin, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CourseCardProps {
  name: string;
  duration: string;
  price: string;
  features?: string[];
  category: string;
  type?: string;
  icon: React.ReactNode;
  isPopular?: boolean;
}

const CourseCard = ({
  name,
  duration,
  price,
  features,
  category,
  icon,
  isPopular = false,
}: CourseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative h-full"
    >
      <Card className={`card-modern h-full relative overflow-hidden ${
        isPopular ? "ring-2 ring-primary/50 shadow-primary/20" : ""
      }`}>
        {isPopular && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10"
          >
            <Badge className="gradient-accent text-white px-4 py-1 text-xs font-semibold shadow-lg">
              <Star className="w-3 h-3 mr-1 fill-current" />
              Most Popular
            </Badge>
          </motion.div>
        )}

        <CardHeader className="text-center pb-4 relative z-10">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="flex justify-center mb-4"
          >
            <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-all duration-300">
              {icon}
            </div>
          </motion.div>
          <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {name}
          </CardTitle>
          <CardDescription className="text-muted-foreground text-sm font-medium">
            {category}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4 relative z-10">
          <div className="text-center py-4 bg-muted/30 rounded-lg border border-border/50">
            <div className="text-3xl font-bold text-primary mb-1">
              {price}
            </div>
            <div className="text-sm text-muted-foreground font-medium flex items-center justify-center gap-1">
              <Clock className="w-3 h-3" />
              {duration}
            </div>
          </div>

          {features && (
            <ul className="space-y-2 mt-4">
              {features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center text-sm text-foreground/80 group-hover:text-foreground transition-colors duration-300"
                >
                  <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="w-2.5 h-2.5 text-primary" />
                  </div>
                  {feature}
                </motion.li>
              ))}
            </ul>
          )}

          <Button className="w-full mt-6 btn-modern gradient-primary text-white font-semibold py-2.5 text-sm">
            Get Started
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Courses", icon: <Award className="w-4 h-4" /> },
    { id: "security", name: "Security Training", icon: <Shield className="w-4 h-4" /> },
    { id: "firearm", name: "Firearm Training", icon: <Target className="w-4 h-4" /> },
    { id: "special", name: "Special Courses", icon: <Award className="w-4 h-4" /> },
    { id: "psira", name: "PSIRA Services", icon: <Users className="w-4 h-4" /> },
  ];

  const allCourses = [
    // Security Training Courses
    {
      name: "Grade EDC",
      duration: "3 Weeks",
      price: "R1,950",
      category: "Security Training",
      type: "security",
      icon: <Shield className="w-5 h-5" />,
      features: [
        "Entry Level Training",
        "Basic Security Principles",
        "PSIRA Certification",
      ],
      isPopular: true,
    },
    {
      name: "Grade E-B",
      duration: "4 Weeks",
      price: "R2,900",
      category: "Security Training",
      type: "security",
      icon: <Shield className="w-5 h-5" />,
      features: [
        "Intermediate Training",
        "Advanced Security Protocols",
        "Practical Assessments",
      ],
    },
    {
      name: "Grade E-A",
      duration: "5 Weeks",
      price: "R3,500",
      category: "Security Training",
      type: "security",
      icon: <Shield className="w-5 h-5" />,
      features: [
        "Advanced Training",
        "Leadership Skills",
        "Specialized Techniques",
      ],
    },
    {
      name: "Grade E",
      duration: "5 Days",
      price: "R800",
      category: "Security Training",
      type: "security",
      icon: <Shield className="w-5 h-5" />,
      features: [
        "Basic Security Grade",
        "Quick Certification",
        "Entry Level",
      ],
    },
    {
      name: "Grade D",
      duration: "5 Days",
      price: "R850",
      category: "Security Training",
      type: "security",
      icon: <Shield className="w-5 h-5" />,
      features: [
        "Security Grade D",
        "Professional Training",
        "PSIRA Approved",
      ],
    },
    {
      name: "Grade C",
      duration: "5 Days",
      price: "R900",
      category: "Security Training",
      type: "security",
      icon: <Shield className="w-5 h-5" />,
      features: [
        "Security Grade C",
        "Intermediate Level",
        "Career Advancement",
      ],
    },
    {
      name: "Grade B",
      duration: "5 Days",
      price: "R1,300",
      category: "Security Training",
      type: "security",
      icon: <Shield className="w-5 h-5" />,
      features: [
        "Security Grade B",
        "Advanced Training",
        "Leadership Skills",
      ],
    },
    {
      name: "Grade A",
      duration: "1 Week",
      price: "R1,400",
      category: "Security Training",
      type: "security",
      icon: <Shield className="w-5 h-5" />,
      features: [
        "Highest Security Grade",
        "Management Level",
        "Expert Certification",
      ],
    },
    // Firearm Training Courses
    {
      name: "Hand Gun",
      duration: "3 Days",
      price: "R2,500",
      category: "Firearm Training",
      type: "firearm",
      icon: <Target className="w-5 h-5" />,
      features: ["Safety Protocols", "Marksmanship", "Legal Requirements"],
    },
    {
      name: "Shotgun",
      duration: "3 Days",
      price: "R2,500",
      category: "Firearm Training",
      type: "firearm",
      icon: <Target className="w-5 h-5" />,
      features: ["Weapon Handling", "Maintenance", "Practical Shooting"],
    },
    {
      name: "Rifle",
      duration: "3 Days",
      price: "R2,500",
      category: "Firearm Training",
      type: "firearm",
      icon: <Target className="w-5 h-5" />,
      features: ["Precision Shooting", "Range Safety", "Equipment Care"],
    },
    {
      name: "Hand Gun, Shotgun & Rifle",
      duration: "5 Days",
      price: "R5,500",
      category: "Firearm Training",
      type: "firearm",
      icon: <Target className="w-5 h-5" />,
      features: ["All Three Firearms", "Comprehensive Training", "Best Value"],
      isPopular: true,
    },
    {
      name: "Any 2 Fire Arms",
      duration: "4 Days",
      price: "R4,500",
      category: "Firearm Training",
      type: "firearm",
      icon: <Target className="w-5 h-5" />,
      features: ["Choose Any Two", "Flexible Training", "Cost Effective"],
    },
    {
      name: "Armed Reaction",
      duration: "Specialized",
      price: "R2,000",
      category: "Firearm Training",
      type: "firearm",
      icon: <Target className="w-5 h-5" />,
      features: ["Tactical Training", "Emergency Response", "Professional Skills"],
    },
    // Special Courses
    {
      name: "Instructor",
      duration: "Intensive",
      price: "R5,500",
      category: "Special Courses",
      type: "special",
      icon: <Award className="w-5 h-5" />,
      features: [
        "Teaching Methodology",
        "Curriculum Development",
        "Assessment Skills",
      ],
    },
    {
      name: "Facilitator",
      duration: "Professional",
      price: "R3,500",
      category: "Special Courses",
      type: "special",
      icon: <Award className="w-5 h-5" />,
      features: [
        "Group Management",
        "Communication Skills",
        "Training Delivery",
      ],
    },
    {
      name: "Assessor",
      duration: "Specialized",
      price: "R3,500",
      category: "Special Courses",
      type: "special",
      icon: <Award className="w-5 h-5" />,
      features: [
        "Evaluation Techniques",
        "Standards Compliance",
        "Quality Assurance",
      ],
    },
    {
      name: "Moderator",
      duration: "Advanced",
      price: "R3,500",
      category: "Special Courses",
      type: "special",
      icon: <Award className="w-5 h-5" />,
      features: [
        "Quality Control",
        "Standards Verification",
        "Process Management",
      ],
    },
    // PSIRA Services
    {
      name: "PSIRA Registration",
      duration: "Fast Track",
      price: "R450",
      category: "PSIRA Services",
      type: "psira",
      icon: <Users className="w-5 h-5" />,
      features: ["New Applications", "Document Processing", "Quick Turnaround"],
    },
    {
      name: "PSIRA Renewal",
      duration: "Express",
      price: "R250",
      category: "PSIRA Services",
      type: "psira",
      icon: <Users className="w-5 h-5" />,
      features: ["Renewal Processing", "Status Updates", "Compliance Support"],
    },
  ];

  const filteredCourses = activeCategory === "all"
    ? allCourses
    : allCourses.filter(course => course.type === activeCategory);

  return (
    <section
      id="services"
      className="py-24 px-4 md:px-8 lg:px-16 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-semibold text-primary backdrop-blur-sm">
              Professional Excellence
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent leading-tight">
            Training Programs That
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Transform Careers
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Choose from our comprehensive range of security and firearm training
            courses designed to advance your career and meet industry standards
            with
            <span className="text-primary font-semibold">
              {" "}
              certified excellence
            </span>
            .
          </p>
        </motion.div>

        {/* Modern Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "gradient-primary text-white shadow-medium"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {category.icon}
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Course Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredCourses.map((course, index) => (
              <CourseCard key={`${activeCategory}-${index}`} {...course} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Job Placement Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="card-modern p-8 max-w-4xl mx-auto bg-gradient-to-r from-accent/5 to-primary/5">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="p-3 rounded-full gradient-accent">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Job Placement Guarantee
              </h3>
            </div>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed mb-6">
              We're committed to your success. Complete our specialized
              training programs and we'll help you find employment in the
              security industry with our extensive network of partners.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              {[
                { icon: <MapPin className="w-4 h-4" />, text: "Industry Partnerships" },
                { icon: <Users className="w-4 h-4" />, text: "Career Support" },
                { icon: <Phone className="w-4 h-4" />, text: "Professional Network" },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2 text-muted-foreground">
                  <div className="text-primary">{item.icon}</div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
