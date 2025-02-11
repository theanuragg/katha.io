import React from "react";

interface ButtonProps {
  active: boolean;
  onMouseDown: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ active, onMouseDown, children }) => {
  return (
    <button
      onMouseDown={onMouseDown}
      style={{
        fontWeight: active ? "bold" : "normal",
        padding: "5px 10px",
        margin: "2px",
        borderRadius: "5px",
        border: "1px solid gray",
        background: active ? "#ddd" : "white",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
