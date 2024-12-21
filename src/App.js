import React from "react";
import Claimform from "./components/Claimform";
import "./App.css";

const App = () => {
  return (
    <div className="flex h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200">
      

      {/* Main Content */}
      <div className="flex flex-col flex-grow p-6">
       

        {/* Claim Form */}
        <Claimform />
      </div>
    </div>
  );
};

export default App;
