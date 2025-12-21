import React from "react";

import Menu from "./Menu";

const TopBar = () => {

  const handleLogout = () => {
    // remove token
    localStorage.removeItem("token");

    // redirect to login
    window.location.href = "http://localhost:3000/login";
  };

  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{100.2} </p>
          <p className="percent"> </p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>


        <button
        onClick={handleLogout}
        style={{
          padding: "8px 16px",
          backgroundColor: "#dc3545",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Logout
      </button>


      </div>

      <Menu />
    </div>
  );
};

export default TopBar;
