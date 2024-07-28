import React from "react";
import HotelCardItem from "./HotelCardItem";

const Hotels = ({ trip }) => {
  return (
    <div>
      <div>Hotel Recommendation</div>
      <div>
        {trip?.tripData?.hotel?.map((h, i) => (
          <HotelCardItem h={h} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Hotels;
