import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={collapsed ? "sidebar collapsed" : "sidebar"}>
      {/* Toggle button */}
      <button
        onClick={toggleSidebar}
        style={{
          width: "100%",
          marginBottom: "20px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        {collapsed ? "→" : "←"}
      </button>

      {/* Navigation links */}
      <nav style={{ flex: 1 }}>
        <Link
          to="/"
          style={{
            display: "block",
            padding: "12px",
            marginBottom: "10px",
            borderRadius: "4px",
            textDecoration: "none",
            fontSize: collapsed ? "0" : "16px",
            textAlign: collapsed ? "center" : "left",
          }}
        >
          {collapsed ? "•" : "Profile"}
        </Link>
        <Link
          to="/articles"
          style={{
            display: "block",
            padding: "12px",
            marginBottom: "10px",
            borderRadius: "4px",
            textDecoration: "none",
            fontSize: collapsed ? "0" : "16px",
            textAlign: collapsed ? "center" : "left",
          }}
        >
          {collapsed ? "•" : "My Articles"}
        </Link>
      </nav>

      {/* Footer always visible */}
      <div
        className="sidebar-footer"
        style={{
          textAlign: "center",
          fontSize: collapsed ? "12px" : "14px",
          fontWeight: "600",
          color: "#FFFFFF",
          opacity: collapsed ? 0.7 : 1,
        }}
      >
        © 2025 WarmConnect
      </div>
    </div>
  );
}

export default Sidebar;
