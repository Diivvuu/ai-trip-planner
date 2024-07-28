import React from "react";

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
                  return (
                    <div key={i}>
                      <div className="flex gap-2">
                        <img src={plan.placeImageURL} />
                        {plan.placeName}
                        {plan.rating}
                        {plan.ticketPricing}
                        {plan.timeTravel}
                        {plan.palceDetails}
                      </div>
                    </div>
                  );
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
