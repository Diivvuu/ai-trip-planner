import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import axios from "axios";
const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [openDialog, setOpenDialog] = useState(false);
  useEffect(() => {
    console.log(user);
  }, []);
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
        localStorage.setItem("user", JSON.stringify(resp.data));
        setOpenDialog(false);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
      });
  };
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => GetUserProfile(tokenResponse),
    onError: (error) => console.log(error),
  });
  return (
    <header className="flex justify-between items-center px-8 py-4 shadow-md bg-white">
      <div>
        <img className="w-24 h-auto" src="/logo.png" alt="Logo" />
      </div>
      {user ? (
        <div className="flex items-cetner gap-x-3">
          <a href = "/my-trip">
            <Button variant="outline" className="rounded-full">
              My Trips
            </Button>
          </a>
          <Popover>
            <PopoverTrigger>
              <img className="h-10 w-10 rounded-full" src={user?.picture} />
            </PopoverTrigger>
            <PopoverContent>
              <Button
                onClick={() => {
                  googleLogout();
                  localStorage.clear();
                  window.location.reload();
                }}
                className="rounded-2xl border-2 p-2 cursor-pointer"
              >
                Logout
              </Button>
            </PopoverContent>
          </Popover>
        </div>
      ) : (
        <Button onClick={() => setOpenDialog(true)}>Sign in</Button>
      )}
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Sign In</DialogTitle>
            <DialogDescription>
              <div className="flex flex-col items-center">
                <img src="/logo.png" alt="Logo" className="w-20 mb-4" />
                <span>Sign in with Google Authentication securely</span>
                <Button onClick={login} className="w-full mt-5">
                  Sign in with Google
                </Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Header;
