import { db } from "@/service/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import InfoSection from "../components/InfoSection";
import Hotels from "../components/Hotels";
import Itinerary from "../components/Itinerary";
const ViewTrip = () => {
  const { tripId } = useParams();
  const [trip, setTrip] = useState([]);
  // logic to get trip info from firebase
  const GetTripData = async () => {
    const docRef = doc(db, "AITrips", tripId);
    const docSnap = await getDoc(docRef);
    {
      if (docSnap.exists()) {
        console.log("Document : ", docSnap.data());
        setTrip(docSnap.data());
      } else {
        console.log("No such document");
        toast("No trip found");
      }
    }
  };
  useEffect(() => {
    GetTripData();
  }, [tripId]);

  return (
    <div>
      {/* information section */}
      <InfoSection trip={trip} />
      {/* recommended hotels */}
      <Hotels trip={trip} />
      {/* daily plan */}
      <Itinerary trip={trip} />
      {/* footer (not necessary) */}
    </div>
  );
};

export default ViewTrip;
