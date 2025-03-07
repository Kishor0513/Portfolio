import React from "react";

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader-spinner"></div>
      <p style={{ marginTop: "20px", fontSize: "18px" }}>Loading...</p>
    </div>
  );
};

export default Loader;
