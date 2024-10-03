import React from "react";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        background: "black",
        borderRadius: "30px",
        alignItems: "center",
      }}
    >
      <h4>menu</h4>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "30%",
        }}
      >
        <h4>home</h4>
        <h4>about</h4>
        <h4>contact</h4>
        <h4>help</h4>
      </div>
    </div>
  );
};

export default Navbar;
