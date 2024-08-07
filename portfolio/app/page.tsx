'use client'
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact";
import Footbar from "@/components/footbar";
import IntroBanner from "@/components/intro-banner";
import Navbar from "@/components/navbar";
import ProjectSection from "@/components/projects-section";
import { useEffect, useState } from "react";

function onScrollStickyNavBarEventHandler(){
  
}

export default function Home() {

  
  return (
    <>
      <IntroBanner />
      <div className={`nav-bar-sticky sticky top-0 z-50 bg-white shadow-md`}>
        <Navbar />
      </div>
      <div className="relative -z-100">
        <AboutSection />
        <ProjectSection />
        <ContactSection />
        <Footbar />
      </div>
    </>
  );
}
