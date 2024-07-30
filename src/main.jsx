import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateTrip from "./create-trip/index.jsx"; // Ensure correct file extension
import Header from "./components/custom/Header.jsx";
import { Toaster } from "./components/ui/sonner.jsx"; // Ensure correct file extension
import { GoogleOAuthProvider } from "@react-oauth/google";
import ViewTrip from "./view-trip/[tripId]/index.jsx"; // Ensure correct file extension
import { ParallaxProvider } from "react-scroll-parallax";
import MyTrips from "./my-trips/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create-trip",
    element: <CreateTrip />,
  },
  {
    path: "/view-trip/:tripId",
    element: <ViewTrip />,
  },
  {
    path: "/my-trip", 
    element : <MyTrips/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
      <ParallaxProvider>
        <Header />
        <Toaster />
        <RouterProvider router={router} />
      </ParallaxProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
