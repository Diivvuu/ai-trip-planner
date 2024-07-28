import { GetPlaceDetails } from "@/service/GlobalApi";
import React, { useEffect } from "react";

const InfoSection = ({ trip }) => {
  
  useEffect(() => {
    trip && GetPlacePhoto();
  }, [trip]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: trip?.userChoice?.location?.label,
    };
    const result = await GetPlaceDetails(data).then(resp => {
      console.log(resp.data);
    });
  };
  return (
    <div>
      <img src="/vite.svg" />
      <div>
        <h2> {trip?.userChoice?.location?.label}</h2>
        <div>{trip?.userChoice?.noOfDays}</div>
        <div>{trip?.userChoice?.budget}</div>
        <div>{trip?.userChoice?.noOfPeople}</div>
      </div>
    </div>
  );
};

export default InfoSection;
