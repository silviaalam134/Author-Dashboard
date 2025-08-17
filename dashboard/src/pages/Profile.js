import React from "react";

const recentArticles = [
  "How to Learn React",
  "CSS Tips and Tricks",
  "React Hooks Deep Dive",
  "Building a Todo App",
];

function Profile() {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "30px auto",
        padding: "20px",
        backgroundColor: "#f9fafb",
        boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
        borderRadius: "12px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <img
          src="https://via.placeholder.com/150"
          alt="profile"
          style={{
            borderRadius: "50%",
            width: "150px",
            height: "150px",
            objectFit: "cover",
            marginRight: "20px",
            border: "4px solid #ff7f50",
          }}
        />
        <div>
          <h1 style={{ fontSize: "32px", fontWeight: "600", marginBottom: "6px", color: "#2c3e50" }}>
            Silvia Alam
          </h1>
          <p style={{ fontSize: "16px", color: "#34495e", marginBottom: "2px" }}>
            silviaalam134@gmail.com
          </p>
          <p style={{ fontSize: "14px", color: "#7f8c8d" }}>
            Joined: August 1, 2018
          </p>
        </div>
      </div>

      {/* Short Bio */}
      <div style={{ marginBottom: "20px", backgroundColor: "#eaf6ff", padding: "12px 16px", borderRadius: "8px" }}>
        <h3 style={{ fontSize: "20px", fontWeight: "500", marginBottom: "6px", color: "#2980b9" }}>
          About Me
        </h3>
        <p style={{ fontSize: "15px", color: "#34495e", lineHeight: "1.5" }}>
          Silvia Alam is a software developer and tech writer specializing in React and modern web technologies.
        </p>
      </div>

      {/* Statistics */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <div style={{ textAlign: "center", backgroundColor: "#f1f8ff", padding: "12px", borderRadius: "8px", flex: 1 }}>
          <h4 style={{ fontSize: "18px", fontWeight: "600", color: "#3498db" }}>12</h4>
          <p style={{ fontSize: "13px", color: "#7f8c8d" }}>Articles</p>
        </div>
        <div style={{ textAlign: "center", backgroundColor: "#fff5e6", padding: "12px", borderRadius: "8px", flex: 1 }}>
          <h4 style={{ fontSize: "18px", fontWeight: "600", color: "#e67e22" }}>2500</h4>
          <p style={{ fontSize: "13px", color: "#7f8c8d" }}>Views</p>
        </div>
        <div style={{ textAlign: "center", backgroundColor: "#f0f9f0", padding: "12px", borderRadius: "8px", flex: 1 }}>
          <h4 style={{ fontSize: "18px", fontWeight: "600", color: "#27ae60" }}>5</h4>
          <p style={{ fontSize: "13px", color: "#7f8c8d" }}>Categories</p>
        </div>
      </div>

      {/* Social Links */}
      <div style={{ marginBottom: "20px" }}>
        <h3 style={{ fontSize: "20px", fontWeight: "500", marginBottom: "6px", color: "#2980b9" }}>
          Connect
        </h3>
        <div style={{ display: "flex", gap: "12px" }}>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              color: "#0077B5",
              fontWeight: "500",
              backgroundColor: "#eaf4fb",
              padding: "5px 10px",
              borderRadius: "6px",
              transition: "0.2s",
            }}
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              color: "#1DA1F2",
              fontWeight: "500",
              backgroundColor: "#e6f7ff",
              padding: "5px 10px",
              borderRadius: "6px",
              transition: "0.2s",
            }}
          >
            Twitter
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              color: "#333",
              fontWeight: "500",
              backgroundColor: "#f0f0f0",
              padding: "5px 10px",
              borderRadius: "6px",
              transition: "0.2s",
            }}
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Recent Articles */}
      <div>
        <h3 style={{ fontSize: "20px", fontWeight: "500", marginBottom: "6px", color: "#2980b9" }}>
          Recent Articles
        </h3>
        <ul style={{ paddingLeft: "20px", color: "#34495e", fontSize: "15px", lineHeight: "1.5" }}>
          {recentArticles.map((article, index) => (
            <li key={index} style={{ marginBottom: "4px" }}>{article}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Profile;
