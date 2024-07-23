import React, { useEffect, useState } from "react";
import axios from "axios";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import _ from "lodash";
import { Input } from "@/components/ui/input";
import {
  AI_PROMPT,
  SelectBudgetOptions,
  SelectTavelList,
} from "@/constants/options";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { chatSession } from "@/service/AIModel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useGoogleLogin } from "@react-oauth/google";

const CreateTrip = () => {
  const [place, setPlace] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState([]);
  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => GetUserProfile(tokenResponse),
    onError: (error) => console.log(error),
  });

  const handleSelect = _.debounce((value) => {
    setPlace(value);
    handleInputChange("location", value);
  }, 1000);

  const onGenerateTrip = async () => {
    const user = localStorage.getItem("user");

    if (!user) {
      setOpenDialog(true);
      return;
    }

    if (formData?.noOfDays > 7) {
      toast("Please enter no. of days less than 8");
      return;
    }
    if (
      !formData?.noOfDays ||
      !formData?.location ||
      !formData?.budget ||
      !formData?.noOfPeople
    ) {
      toast("Please enter all the details");
      return;
    }
    const FINAL_PROMPT = AI_PROMPT.replace(
      "{location}",
      formData?.location?.label
    )
      .replace("{totalDays}", formData?.noOfDays)
      .replace("{traveler}", formData?.noOfPeople)
      .replace("{budget}", formData?.budget)
      .replace("{totalDays}", formData?.noOfDays);
    // console.log(FINAL_PROMPT);
    const result = await chatSession.sendMessage(FINAL_PROMPT);
    console.log("--", result?.response?.text());
  };

  const GetUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo.access_token}`,
            Accept: "application/json",
          },
        }
      )
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
      });
  };

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
          What is your Destination ?
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
          <Input
            placeholder="Ex.6"
            type="Number"
            onChange={(e) => handleInputChange("noOfDays", e.target.value)}
          />
        </div>
      </div>
      {/* budget */}
      <div className="flex flex-col justify-center items-start gap-y-8 px-24 mt-12">
        <h2 className="text-white text-xl font-semibold">
          What is your budget?
        </h2>
        <div className="grid grid-cols-3 gap-6 w-full">
          {SelectBudgetOptions.map((item, index) => (
            <div
              key={index}
              className={`rounded-xl border-2 border-transparent hover:border-orange-500 hover:bg-zinc-800 transition-all duration-300 p-6 cursor-pointer ${
                formData?.budget === item.title
                  ? "shadow-lg bg-orange-600 border-white"
                  : ""
              }`}
              onClick={() => handleInputChange("budget", item.title)}
            >
              <div className="flex flex-col items-center justify-center text-center">
                <div className="text-5xl mb-2">{item.icon}</div>
                <h2 className="text-white text-2xl font-bold mb-2">
                  {item.title}
                </h2>
                <p className="text-white text-lg font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* no. of people */}
      <div className="flex flex-col justify-center items-start gap-y-8 px-24 mt-12">
        <h2 className="text-white text-xl font-semibold">
          Who do you plan on travelling with on your adventure?
        </h2>
        <div className="grid grid-cols-3 border-blue-100 w-full gap-x-24 gap-y-8">
          {SelectTavelList.map((item, index) => (
            <div
              key={index}
              className={`rounded-xl border-2 border-transparent hover:border-orange-500 hover:bg-zinc-800 transition-all duration-300 p-6 cursor-pointer ${
                formData?.noOfPeople === item.people
                  ? "shadow-lg bg-orange-600 border-white"
                  : ""
              }`}
              onClick={(e) => handleInputChange("noOfPeople", item.people)}
            >
              <div className="flex items-center justify-center">
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="text-white text-xl font-bold">{item.title}</h2>
              </div>
              <p className="text-white text-center font-semibold">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center my-4 ">
        <Button className="w-fit" onClick={onGenerateTrip}>
          Generate Trip
        </Button>
      </div>
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Sign in</DialogTitle>
            <DialogDescription>
              <img src="/logo.png" className="w-20" />
              {/* <h2>Sign in with Google</h2> */}
              <span>Sign in to the App with google Authentication securely</span>
              <Button onClick={login} className="w-full mt-5">
                Sign in with Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateTrip;
