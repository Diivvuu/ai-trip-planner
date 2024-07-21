import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-56 gap-9 ">
      <div className="lg:w-4/5 mt-28">
        <h1 className="font-bold lg:text-4xl text-center tracking-wide">
          <span className="text-orange-400 leading-5">
            Discover Your Next Adventure with Personalized Itineraries : <br />
          </span>
          <span className="text-slate-900">
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
