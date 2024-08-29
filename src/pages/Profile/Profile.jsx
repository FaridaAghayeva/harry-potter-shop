import React from "react";

export default function Profile() {
  return (
    <div
      onClick={() => {
        localStorage.removeItem("data");
        window.location.reload();
      }}
    >
      logout
    </div>
  );
}
