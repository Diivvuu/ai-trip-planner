import React, { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import _ from "lodash";
import { Input } from "@/components/ui/input";

const CreateTrip = () => {
  const [place, setPlace] = useState("");
  const handleSelect = _.debounce((value) => {
    setPlace(value);
    console.log(value);
  }, 1000);
  return (
    <div className="flex flex-col justify-center bg-black ">
      {/* heading */}
      <div className="mt-12 px-24">
        <h1 className="text-left font-bold text-slate-400 text-3xl">
          Travel Preferences 🚢✈️⛱️
        </h1>
        <p className="text-left font-semibold text-slate-300 text-md">
          Help us understand your travel plans by providing some details below.
          This information will help us tailor recommendations and make your
          travel experience as enjoyable as possible.
        </p>
      </div>
      {/* destination choice */}
      <div className="flex justify-between items-center px-24 mt-12">
        <div className="text-white text-xl font-semibold">
          What is your Destination ?{" "}
        </div>
        <div className="w-full max-w-lg mt-4">
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              placeholder: "Search for places...",
              onChange: handleSelect,
            }}
          />
        </div>
      </div>
      {/* no. of days */}
      <div className="flex justify-between items-center px-24 mt-12 ">
        <div className="text-white text-xl font-semibold">
          For how many days are you planning ?
        </div>
        <div className="w-full max-w-lg">
          <Input placeholder="Ex.6" type="Number" />
        </div>
      </div>
      {/* budget */}
      <div className="flex justify-between items-center px-24 mt-12">
        <div className="text-white text-xl font-semibold">
          What is your budget?
        </div>
      </div>
    </div>
  );
};

export default CreateTrip;
