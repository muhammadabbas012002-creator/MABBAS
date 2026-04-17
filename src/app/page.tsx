"use client";

import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import CountriesSection from "@/components/CountriesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

export default function Home() {
    return (
        <main>
            <Toaster />
            <Sonner />
            <HeroSection />
            <ServicesSection />
            <CountriesSection />
            <AboutSection />
            <TestimonialsSection />
            <ContactSection />
            <ContactSection />
<div style={{ textAlign: "center", padding: "60px 20px" }}>
  <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>Founder</h2>

  <img
    src="/founder.jpg"
    style={{
      width: "150px",
      height: "150px",
      borderRadius: "50%",
      objectFit: "cover",
      display: "block",
      margin: "0 auto"
    }}
  />

  <h3 style={{ marginTop: "15px" }}>Muhammad Abbas</h3>

  <h2 style={{ marginTop: "50px", fontSize: "26px" }}>Our Team</h2>

  <div style={{
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    marginTop: "30px",
    flexWrap: "wrap"
  }}>

    <div style={{ textAlign: "center" }}>
      <img
        src="/1.jpg"
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          objectFit: "cover"
        }}
      />
      <p>Team Member 1</p>
    </div>

    <div style={{ textAlign: "center" }}>
      <img
        src="/2.jpg"
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          objectFit: "cover"
        }}
      />
      <p>Team Member 2</p>
    </div>

  </div>
</main>
    
    );
}

// ...existing code...
