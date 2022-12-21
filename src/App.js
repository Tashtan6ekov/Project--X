import React from "react";
import AuthContextProvider from "./contexts/authContext";
import Navbar from "./Navbar/Navbar";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <AuthContextProvider>
      <Navbar />
      <MainRoutes />
    </AuthContextProvider>
  );
};

export default App;
