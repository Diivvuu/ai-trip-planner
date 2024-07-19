import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-56 gap-9">
      <div className="w-4/5 mt-20">
        <h1 className="font-bold text-5xl text-center tracking-wide">
          <span className="text-orange-700 leading-5">
            Discover Your Next Adventure with Personalized Itineraries : <br />
          </span>
          <span className="text-slate-600">
            Let AI curate your perfect travel experience, tailored just for you.
          </span>
        </h1>
      </div>
      <div>
        <h3 className="text-slate-700">
          Your Personalized trip planner and travel curator, creating custom
          Itineraries tailored to your interests and budget.
        </h3>
      </div>
      <Link to="/create-trip">
        <Button>Get Started, it's Free</Button>
      </Link>
    </div>
  );
};

export default Hero;
