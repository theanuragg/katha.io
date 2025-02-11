// components/Layout.tsx
import React from "react";
import Header from "./Header"; // Import your Header component
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Dynamic Content */}
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;