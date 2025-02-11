import React from "react";

interface ToolbarProps {
  children: React.ReactNode;
}

const Toolbar: React.FC<ToolbarProps> = ({ children }) => {
  return (
    <div style={{ marginBottom: "10px", padding: "5px", borderBottom: "1px solid #ddd" }}>
      {children}
    </div>
  );
};

export default Toolbar;
