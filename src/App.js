import React, { useState } from "react";
import AdminLoginForm from "../src/components/AdminLoginForm";
import AdminRegisterForm from "../src/components/AdminRegisterForm";
import UserLoginForm from "../src/components/UserLoginForm";
import UserRegisterForm from "../src/components/UserRegisterForm";
import '../src/components/Style.css';
// import StockEntryForm from "./components/StockEntryForm";

const App = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [isUser, setIsUser] = useState(true);

  const handleToggleForm = () => {
    setShowLogin(!showLogin);
  };

  const handleToggleUser = () => {
    setIsUser(!isUser);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="Name">Satelite Mart</h1>
      <div className="w-64">
        {isUser && showLogin ? <UserLoginForm /> : null}
        {!isUser && showLogin ? <AdminLoginForm /> : null}
        {isUser && !showLogin ? <UserRegisterForm /> : null}
        {!isUser && !showLogin ? <AdminRegisterForm /> : null}
        {/* <StockEntryForm 
          handleToggleForm={handleToggleForm} 
          handleToggleUser={handleToggleUser} 
          isUser={isUser} 
          showLogin={showLogin} 
        /> */}

        <br />
        <button

          // className="w-full py-2 mt-2 rounded bg-blue-500 text-white font-bold focus:outline-none"
          className="button1"
          onClick={handleToggleForm}
        >
          {showLogin ? "Switch to Register" : "Switch to Login"}
        </button>&nbsp;&nbsp;&nbsp;
        <button
         className="button1"
          // className="w-full py-2 mt-2 rounded bg-red-500 text-white font-bold focus:outline-none"
          onClick={handleToggleUser}
        >
          {isUser ? "Switch to Admin" : "Switch to User"}
        </button>
      </div>
    </div>
  );
};

export default App;
