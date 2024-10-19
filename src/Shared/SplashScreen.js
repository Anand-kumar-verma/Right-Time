import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import splash_screen from "../assets/images/splash.png";
import CryptoJS from "crypto-js";


const SplashScreen = () => {
  const navigate = useNavigate();
  useEffect(() => {

    setTimeout(() => {
      const isAuthenticated =
      (localStorage.getItem("logindataen") &&
        CryptoJS.AES.decrypt(
          localStorage.getItem("logindataen"),
          "anand"
        )?.toString(CryptoJS.enc.Utf8)) ||
      null;
      isAuthenticated?.user_type==="User" 
      ?navigate("/dashboard"): 
     (["Admin","SuperAdmin"]?.includes(isAuthenticated?.user_type)) && navigate("/admindashboard");
    }, 1000);
  }, []);

  return (
    <Container
      sx={{
        height: "100vh",
      }}
    >
      <Box>
        <img src={splash_screen} className="!h-[100vh] !w-[100%]" />
      </Box>
    </Container>
  );
};

export default SplashScreen;
