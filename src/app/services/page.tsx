"use client";

import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Shield, Target, Award, Users, Clock, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface CourseCardProps {
  name: string;
  duration: string;
  price: string;
  features?: string[];
  category: string;
  type?: string;
  icon: React.ReactNode;
  image?: string;
  isPopular?: boolean;
}

const CourseCard = ({
  name,
  duration,
  price,
  features,
  category,
  icon,
  image,
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
      <Card className={`h-full relative overflow-hidden bg-card border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 ${
        isPopular ? "ring-2 ring-amber-500/50 shadow-amber-500/20" : ""
      }`}>

        {/* Professional Course Image */}
        {image && (
          <div className="relative h-48 overflow-hidden rounded-t-xl">
            <div
              className="absolute inset-0 bg-cover bg-center bg-white  bg-no-repeat"
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Category Badge */}
            <div className="absolute top-4 right-4 z-10">
              <Badge variant="outline" className="text-xs bg-black/20 backdrop-blur-sm text-white border-white/30">
                {category}
              </Badge>
            </div>

            {/* Popular Badge */}
            {isPopular && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-4 left-4 z-10"
            >
              <Badge className="bg-gradient-to-r from-blue-500 to-amber-500 text-white px-3 py-1 text-xs font-semibold shadow-lg">
                <Star className="w-3 h-3 mr-1 fill-current" />
                Most Popular
              </Badge>
            </motion.div>
            )}
          </div>
        )}

        {/* Category Badge for cards without images */}
        {!image && (
          <div className="absolute top-4 right-4 z-10">
            <Badge variant="outline" className="text-xs bg-background/80 backdrop-blur-sm">
              {category}
            </Badge>
          </div>
        )}

        <CardHeader className="text-center pb-4 relative z-10 pt-6">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="flex justify-center mb-4"
          >
            <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-500 group-hover:bg-amber-500/20 transition-all duration-300 shadow-soft">
              {icon}
            </div>
          </motion.div>
          <CardTitle className="text-xl font-extrabold text-foreground group-hover:text-blue-500 transition-colors duration-300 mb-2">
            {name}
          </CardTitle>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
        </CardHeader>

        <CardContent className="space-y-6 relative z-10 px-6 pb-6">
          {/* Price Section */}
          <div className="text-center py-6 bg-gradient-to-br from-blue-500/5 to-amber-500/5 rounded-xl border border-blue-500/10">
            <div className="text-4xl font-bold text-blue-500 mb-2">
              {price}
            </div>
            <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
              Professional Training
            </div>
          </div>

          {/* Features List */}
          {features && (
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                What's Included:
              </h4>
              <ul className="space-y-3">
                {features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start text-sm text-foreground/80 group-hover:text-foreground transition-colors duration-300"
                  >
                    <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-blue-500" />
                    </div>
                    <span className="leading-relaxed">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA Button */}
          <div className="pt-4">
            <Button className="w-full btn-modern bg-gradient-to-r from-blue-500 to-amber-500 text-white font-semibold py-3 text-sm hover:shadow-blue-500/25 transition-all duration-300">
              Enroll Now
            </Button>
            <p className="text-xs text-muted-foreground text-center mt-2">
              PSIRA Certified Training
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ServicesPage = () => {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const filter = searchParams.get("filter");
    if (filter) {
      setActiveCategory(filter);
    }
  }, [searchParams]);

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
      image: "https://ik.imagekit.io/6ywhgwsgk/int247/logo.png?updatedAt=1750219208447",
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
      image: "https://ik.imagekit.io/6ywhgwsgk/int247/logo.png?updatedAt=1750219208447",
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
      image: "https://ik.imagekit.io/6ywhgwsgk/int247/logo.png?updatedAt=1750219208447",
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
      image: "https://ik.imagekit.io/6ywhgwsgk/int247/logo.png?updatedAt=1750219208447",
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
      image: "https://ik.imagekit.io/6ywhgwsgk/int247/logo.png?updatedAt=1750219208447",
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
      image: "https://ik.imagekit.io/6ywhgwsgk/int247/logo.png?updatedAt=1750219208447",
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
      image: "https://ik.imagekit.io/6ywhgwsgk/int247/logo.png?updatedAt=1750219208447",
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
      image: "https://ik.imagekit.io/6ywhgwsgk/int247/logo.png?updatedAt=1750219208447",
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
      image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=400&q=80",
      features: ["Safety Protocols", "Marksmanship", "Legal Requirements"],
    },
    {
      name: "Shotgun",
      duration: "3 Days",
      price: "R2,500",
      category: "Firearm Training",
      type: "firearm",
      icon: <Target className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1639064569728-14f279104fa7?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: ["Weapon Handling", "Maintenance", "Practical Shooting"],
    },
    {
      name: "Rifle",
      duration: "3 Days",
      price: "R2,500",
      category: "Firearm Training",
      type: "firearm",
      icon: <Target className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1713643560082-1d0a7ccc41de?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: ["Precision Shooting", "Range Safety", "Equipment Care"],
    },
    {
      name: "Hand Gun, Shotgun & Rifle",
      duration: "5 Days",
      price: "R5,500",
      category: "Firearm Training",
      type: "firearm",
      icon: <Target className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1619760563055-2699bea3755d?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-amber-500 text-white py-20">
        <div className="container mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Professional security and firearm training courses designed to advance your career
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Category Filter */}
        <div className="mb-12">
          <div className="bg-card border border-border/50 rounded-2xl p-2 shadow-soft max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveCategory(category.id)}
                className={`flex flex-col items-center gap-2 px-4 py-6 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-blue-500 to-amber-500 text-white shadow-medium"
                    : "bg-transparent text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                }`}
              >
                <div className={`p-2 rounded-lg ${
                  activeCategory === category.id
                    ? "bg-white/20"
                    : "bg-blue-500/10"
                }`}>
                  {category.icon}
                </div>
                  <span className="text-sm font-semibold text-center leading-tight">
                    {category.name}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Course Count Indicator */}
          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              Showing <span className="font-semibold text-blue-500">{filteredCourses.length}</span> courses
              {activeCategory !== "all" && (
                <span> in <span className="font-semibold">{categories.find(c => c.id === activeCategory)?.name}</span></span>
              )}
            </p>
          </div>
        </div>

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
      </div>
    </div>
  );
};

export default ServicesPage;
