import { db } from "@/service/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";
import UserTripCardItem from "./components/UserTripCardItem";

const MyTrips = () => {
  const navigation = useNavigation();
  const [userTrips, setUserTrips] = useState([]);
  // using to get all trips of a user
  const GetUserTrips = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigation("/");
      return;
    }

    const q = query(
      collection(db, "AITrips"),
      where("userEmail", "==", user?.email)
    );
    setUserTrips([]);
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      setUserTrips((prevVal) => [...prevVal, doc.data()]);
    });
  };
  useEffect(() => {
    GetUserTrips();
  }, []);
  return (
    <div className="p-10 md: px-20 lg:px-36">
      <h2 className="font-bold text-4xl text-center">My Trips</h2>
      <div className="grid grid-cols-2 mt-10 md:grid-cols-3 gap-5">
        {userTrips.map((trip, index) => (
          <UserTripCardItem trip={trip} key={index} />
        ))}
      </div>
    </div>
  );
};

export default MyTrips;
