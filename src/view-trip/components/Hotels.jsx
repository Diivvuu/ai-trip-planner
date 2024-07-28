import React from "react";
import { Link } from "react-router-dom";

const Hotels = ({ trip }) => {
  return (
    <div>
      <div>Hotel Recommendation</div>
      <div>
        {trip?.tripData?.hotel?.map((h, i) => (
          <Link
            to={"https://www.google.com/maps/search/?api=1&query=" + h?.name + ", " + h?.address}
            target="_blank"
            key={i}
          >
            <div>
              <img src={h.imageUrl} />
              <div>{h.name}</div>
              <div>{h.address}</div>
              <div>{h.rating}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
