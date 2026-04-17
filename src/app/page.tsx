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

<div style={{ textAlign: "center", padding: "40px" }}>
  <h2>Founder</h2>
  <img src="/founder.jpg" width="150" style={{ borderRadius: "50%" }} />
  <h3>Muhammad Abbas</h3>

  <h2 style={{ marginTop: "30px" }}>Our Team</h2>

  <img src="/1.jpg" width="120" style={{ borderRadius: "50%" }} />
  <p>Team Member 1</p>

  <img src="/2.jpg" width="120" style={{ borderRadius: "50%" }} />
  <p>Team Member 2</p>
</div>

</main>
    
    );
}

// ...existing code...
