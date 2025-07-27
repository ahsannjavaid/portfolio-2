import React from "react";

const GOOGLE_DRIVE_FILE_ID = "184wvg9793Bww6_LP1_-WDnKNnkgkUMrJ";
// const GOOGLE_DRIVE_FILE_ID = "1Uo_kryaoq61NQd67NNkWj1k88nts9snY";

const Player = () => (
  <div
    style={{
      width: "100%",
      maxWidth: "1000px",
      padding: "12px",
      boxSizing: "border-box",
      margin: "0 auto",
    }}
  >
    <div
      style={{
        position: "relative",
        width: "100%",
        paddingBottom: "56.25%" /* 16:9 aspect ratio */,
        height: 0,
        borderRadius: "8px",
        overflow: "hidden",
        background: "#000",
      }}
    >
      <iframe
        src={`https://drive.google.com/file/d/${GOOGLE_DRIVE_FILE_ID}/preview`}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: 0,
          borderRadius: "8px",
          display: "block",
        }}
        allow="autoplay"
        allowFullScreen
        title="University Management System (UMS)"
      ></iframe>
    </div>
  </div>
);

export default Player;