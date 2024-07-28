import { GetPlaceDetails } from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";

const PHOTO_REF_URL =
  "https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=600&maxWidthPx=600&key=" +
  import.meta.env.VITE_GOOGLE_PLACE_API_KEY;

const ItineraryCard = ({ plan }) => {
  const [photoUrl, setPhotoUrl] = useState();
  useEffect(() => {
    plan && GetPlacePhoto();
  }, [plan]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: plan?.placeName,
    };
    const result = await GetPlaceDetails(data).then((resp) => {
      console.log(resp.data.places[0].photos[0].name);

      const PhotoUrl = PHOTO_REF_URL.replace(
        "{NAME}",
        resp.data.places[0].photos[1].name
      );
      setPhotoUrl(PhotoUrl);
    });
  };
  return (
    <div className="flex gap-2">
      <img src={photoUrl} />
      {plan.placeName}
      {plan.rating}
      {plan.ticketPricing}
      {plan.timeTravel}
      {plan.palceDetails}
    </div>
  );
};

export default ItineraryCard;
