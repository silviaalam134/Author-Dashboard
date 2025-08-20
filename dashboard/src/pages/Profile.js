import React from "react";
import myProfilePic from "../assets/silvia.jpg"; // replace with your image

const recentArticles = [
  "How to Learn React",
  "CSS Tips and Tricks",
  "React Hooks Deep Dive",
  "Building a Todo App",
];

const badges = ["Top Author", "React Expert", "1000+ Views"];

function Profile() {
  return (
    <div
      style={{
        maxWidth: "850px",
        height: "650px", // fits in one screen
        margin: "20px auto",
        padding: "20px",
        backgroundColor: "#f9fafb",
        boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
        borderRadius: "12px",
        fontFamily: "'Poppins', sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", // spreads sections evenly
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <img
          src={myProfilePic}
          alt="profile"
          style={{
            borderRadius: "50%",
            width: "140px",
            height: "140px",
            objectFit: "cover",
            border: "4px solid #ff7f50",
          }}
        />
        <div>
          <h1 style={{ fontSize: "28px", fontWeight: "700", margin: "0 0 4px 0", color: "#2c3e50" }}>
            Silvia Alam
          </h1>
          <p style={{ fontSize: "15px", color: "#34495e", margin: "0 0 2px 0" }}>
            silviaalam134@gmail.com
          </p>
          <p style={{ fontSize: "13px", color: "#7f8c8d", margin: 0 }}>
            Joined: August 1, 2018
          </p>
        </div>
      </div>

      {/* Short Bio */}
      <div
        style={{
          backgroundColor: "#d4ecf6ff",
          padding: "10px 14px",
          borderRadius: "8px",
        }}
      >
        <h3 style={{ fontSize: "18px", fontWeight: "600", margin: "0 0 4px 0", color: "#2980b9" }}>
          About Me
        </h3>
        <p style={{ fontSize: "14px", color: "#34495e", lineHeight: "1.25", margin: 0 }}>
          Silvia Alam is a software developer and tech writer specializing in React and modern web technologies.
        </p>
      </div>

      {/* Statistics */}
      <div style={{ display: "flex", gap: "12px" }}>
        {[
          { value: "12", label: "Articles", color: "#3498db", bg: "#ddebf9ff" },
          { value: "2500", label: "Views", color: "#e67e22", bg: "#fff5e6" },
          { value: "5", label: "Categories", color: "#27ae60", bg: "#f0f9f0" },
        ].map((stat, idx) => (
          <div key={idx} style={{ textAlign: "center", backgroundColor: stat.bg, padding: "10px", borderRadius: "8px", flex: 1 }}>
            <h4 style={{ fontSize: "16px", fontWeight: "600", color: stat.color, margin: 0 }}>{stat.value}</h4>
            <p style={{ fontSize: "12px", color: "#7f8c8d", margin: 0 }}>{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Badges / Achievements */}
      <div>
        <h3 style={{ fontSize: "18px", fontWeight: "500", margin: "0 0 6px 0", color: "#2980b9" }}>Achievements</h3>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {badges.map((badge, idx) => (
            <span
              key={idx}
              style={{
                backgroundColor: "#f5e5baff",
                padding: "4px 10px",
                borderRadius: "6px",
                fontSize: "12px",
                fontWeight: "600",
                color: "#e67e22",
                transition: "0.2s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#ffd699")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#ffefc4")}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div>
        <h3 style={{ fontSize: "18px", fontWeight: "500", margin: "0 0 4px 0", color: "#2980b9" }}>Connect</h3>
        <div style={{ display: "flex", gap: "10px" }}>
          {[
            { label: "LinkedIn", link: "https://www.linkedin.com", color: "#0077B5", bg: "#eaf4fb" },
            { label: "Twitter", link: "https://twitter.com", color: "#1DA1F2", bg: "#e6f7ff" },
            { label: "GitHub", link: "https://github.com", color: "#333", bg: "#f0f0f0" },
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                color: social.color,
                fontWeight: "500",
                backgroundColor: social.bg,
                padding: "4px 10px",
                borderRadius: "6px",
                fontSize: "13px",
                transition: "0.2s",
              }}
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>

      {/* Recent Articles */}
      <div>
        <h3 style={{ fontSize: "18px", fontWeight: "500", margin: "0 0 4px 0", color: "#2980b9" }}>Recent Articles</h3>
        <ul style={{ paddingLeft: "18px", color: "#34495e", fontSize: "14px", lineHeight: "1.25", margin: 0 }}>
          {recentArticles.map((article, idx) => (
            <li key={idx} style={{ marginBottom: "4px" }}>{article}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Profile;
