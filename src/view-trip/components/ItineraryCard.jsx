import React, { useEffect, useState } from "react";
import { PHOTO_REF_URL } from "@/constants/options";
import { GetPlaceDetails } from "@/service/GlobalApi";
import { CiStar } from "react-icons/ci";
import { GiTicket } from "react-icons/gi";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { Link } from "react-router-dom";

const ItineraryCard = ({ plan }) => {
  const [photoUrl, setPhotoUrl] = useState("");

  useEffect(() => {
    if (plan) {
      fetchPlacePhoto();
    }
  }, [plan]);

  const fetchPlacePhoto = async () => {
    const data = { textQuery: plan?.placeName };
    try {
      const result = await GetPlaceDetails(data);
      const photoName = result.data.places[0].photos[0]?.name;
      if (photoName) {
        const url = PHOTO_REF_URL.replace("{NAME}", photoName);
        setPhotoUrl(url);
      }
    } catch (error) {
      console.error("Error fetching place photo:", error);
    }
  };

  return (
    <Link
      to={
        "https://www.google.com/maps/search/?api=1&query=" +
        plan?.placeName +
        ", "
      }
      target="_blank"
    >
      <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 duration-300 itinerary-card">
        <img
          className="w-full h-48 object-cover"
          src={photoUrl}
          alt={plan.placeName}
        />
        <div className="p-4">
          <h4 className="text-xl font-semibold mb-2 flex items-center">
            <FaMapMarkerAlt className="text-blue-500 mr-2" />
            {plan.placeName}
          </h4>
          <p className="flex items-center text-md mb-2 text-gray-700">
            <CiStar className="text-yellow-500 mr-1" />
            {plan.rating}
          </p>
          <p className="flex items-center text-md mb-1 text-gray-600">
            <MdAttachMoney className="text-green-500 mr-1" />
            Ticket Pricing: {plan.ticketPricing}
          </p>
          <p className="flex items-center text-md mb-1 text-gray-600">
            <FaClock className="text-gray-500 mr-1" />
            Travel Time: {plan.timeTravel}
          </p>
          <p className="text-md text-gray-600 truncate">{plan.placeDetails}</p>
        </div>
      </div>
    </Link>
  );
};

export default ItineraryCard;
