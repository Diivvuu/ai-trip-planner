import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Parallax } from "react-scroll-parallax"; // Ensure this is installed

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    gsap.fromTo(
      ".hero-title",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".hero-title",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".hero-description",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
        scrollTrigger: {
          trigger: ".hero-description",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".cta-section",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
        scrollTrigger: {
          trigger: ".cta-section",
          start: "top 60%",
        },
      }
    );
  }, []);

  return (
    <div className="text-white h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden ">
      {/* Parallax Background Image */}
      <Parallax className="absolute top-0 left-0 w-full h-full" y={[-50, 50]}>
        <img
          src="/bg.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </Parallax>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-[#dcebfe] to-yellow-100 bg-opacity-50 p-6 rounded-lg shadow-md">
        <div className="relative z-10 text-center mb-12 text-black">
          <h1 className="text-5xl font-extrabold hero-title mb-4 ">
            Discover Your Perfect Trip with Globe Guru
          </h1>
          <p className="text-xl hero-description mb-3 font-semibold">
            Globe Guru is your ultimate AI-powered travel companion. Tell us
            your travel preferences, and we'll craft the perfect itinerary just
            for you.
          </p>
          <p className="text-xl hero-description mb-8 font-semibold">
            Scroll down to start planning
          </p>
        </div>

        {/* Call to Action Section */}
        <div className="cta-section relative z-10 text-center mb-12">
          <p className="text-lg mb-4 font-semibold text-black">
            Ready to start planning your dream vacation? Share your travel
            destination, days, budget, and travel group preferences with us.
          </p>
          <Link to="/create-trip">
            <Button className="py-3 px-6 text-lg font-bold bg-orange-500 hover:bg-orange-600">
              Start Planning Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
