import { GetPlaceDetails } from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PHOTO_REF_URL =
  "https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=600&maxWidthPx=600&key=" +
  import.meta.env.VITE_GOOGLE_PLACE_API_KEY;
const HotelCardItem = ({ h }) => {
  const [photoUrl, setPhotoUrl] = useState();
  useEffect(() => {
    h && GetPlacePhoto();
  }, [h]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: h?.name,
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
    <div>
      <Link
        to={
          "https://www.google.com/maps/search/?api=1&query=" +
          h?.name +
          ", " +
          h?.address
        }
        target="_blank"
      >
        <div>
          <img src={photoUrl} />
          <div>{h.name}</div>
          <div>{h.address}</div>
          <div>{h.rating}</div>
        </div>
      </Link>
    </div>
  );
};

export default HotelCardItem;
