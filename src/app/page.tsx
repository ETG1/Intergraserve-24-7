import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";
import Navbar from "@/components/layout/Navbar";
import MobileNavigation from "@/components/layout/MobileNavigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Fixed Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <HeroSection />

        {/* Services Section */}
        <section id="services" className="py-24 bg-muted/30">
          <ServicesSection />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24">
          <ContactSection />
        </section>
      </main>

      {/* Modern Footer */}
      <footer className="bg-muted/50 border-t border-border/50 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">IS</span>
                </div>
                <span className="text-xl font-bold">IntegraServe 24/7</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Leading security training academy in South Africa. Professional courses,
                certified instructors, and guaranteed career advancement.
              </p>
              <div className="flex space-x-4">
                {/* Social Links */}
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                  <span className="text-primary text-sm font-bold">FB</span>
                </div>
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                  <span className="text-primary text-sm font-bold">TW</span>
                </div>
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                  <span className="text-primary text-sm font-bold">LI</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {["Home", "Services", "About", "Contact"].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>087 183 1341</li>
                <li>073 55 2399</li>
                <li>info@integraserve247.co.za</li>
                <li className="text-sm">
                  Cnr R101, Hery Gwala Ave<br />
                  DMP Building, Marokolong
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/50 pt-8 text-center">
            <p className="text-muted-foreground">
              &copy; {new Date().getFullYear()} IntegraServe 24/7. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Navigation - Only visible on mobile */}
      <div className="md:hidden">
        <MobileNavigation />
      </div>
    </div>
  );
}
