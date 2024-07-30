import React from "react";
import ItineraryCard from "./ItineraryCard";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Itinerary = ({ trip }) => {
  return (
    <div className="container mx-auto px-6 py-12 w-4/5">
      <h2 className="text-4xl font-bold text-center mb-8">Places to Visit</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {trip?.tripData?.itinerary.map((item, i) => (
          <div
            key={i}
            className="itinerary-card p-4 bg-white rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">{item?.day}</h3>
            <div className="space-y-6">
              {item?.plan?.map((plan, index) => (
                <ItineraryCard plan={plan} key={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Itinerary;
