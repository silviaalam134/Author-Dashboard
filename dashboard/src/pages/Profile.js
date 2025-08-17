import React from "react";

function Profile() {
  return (
    <div>
      <h2>Profile</h2>
      <img
        src="https://via.placeholder.com/120"
        alt="profile"
        style={{ borderRadius: "50%" }}
      />
      <p><b>Full Name:</b> John Doe</p>
      <p><b>Email:</b> john@example.com</p>
      <p><b>Date Joined:</b> 2025-01-01</p>
    </div>
  );
}

export default Profile;
