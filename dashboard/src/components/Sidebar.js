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
      <button onClick={toggleSidebar}>
        {collapsed ? "→" : "←"}
      </button>

      {/* Navigation links */}
      <nav>
        <Link to="/">Profile</Link>
        <Link to="/articles">My Articles</Link>
      </nav>

      {/* Footer only when expanded */}
      {!collapsed && (
        <div className="sidebar-footer">
          <small>© 2025 WarmConnect</small>
          <small>v1.0.0</small>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
