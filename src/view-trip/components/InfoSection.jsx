import { GetPlaceDetails } from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";

const PHOTO_REF_URL =
  "https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=600&maxWidthPx=600&key=" +
  import.meta.env.VITE_GOOGLE_PLACE_API_KEY;
const InfoSection = ({ trip }) => {
  const [photoUrl, setPhotoUrl] = useState();
  useEffect(() => {
    trip && GetPlacePhoto();
  }, [trip]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: trip?.userChoice?.location?.label,
    };
    const result = await GetPlaceDetails(data).then((resp) => {
      console.log(resp.data.places[0].photos[3].name);

      const PhotoUrl = PHOTO_REF_URL.replace(
        "{NAME}",
        resp.data.places[0].photos[3].name
      );
      setPhotoUrl(PhotoUrl);
    });
  };
  return (
    <div>
      <img src={photoUrl} />
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
