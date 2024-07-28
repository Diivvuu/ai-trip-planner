import React from "react";
import ItineraryCard from "./ItineraryCard";

const Itinerary = ({ trip }) => {
  return (
    <div>
      <h2>Places to visit</h2>
      <div>
        {trip?.tripData?.itinerary.map((item, i) => {
          return (
            <div key={i}>
              <div>{item?.day}</div>
              <div>
                {item?.plan?.map((plan, i) => {
                  return <ItineraryCard plan={plan} key={i} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Itinerary;
