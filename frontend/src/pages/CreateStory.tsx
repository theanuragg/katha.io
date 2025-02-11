import React, { useState } from "react";

import EditorComponent from "../components/EditorComponents";

// Reusable Input Component

// Reusable Button Component
const Button: React.FC<{ label: string; onClick?: () => void; className?: string }> = ({ label, onClick, className }) => (
  <button onClick={onClick} className={`bg-gray-300 hover:bg-gray-400 text-black py-1 px-4 rounded-md ${className}`}>
    {label}
  </button>
);

// Main Component
const CreateStory: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("<p>Start writing your content here...</p>");

  const handlePost = () => {
    console.log("Title:", title);
    console.log("Content:", content);
  };

  return (
    <div className="bg-facey p-6  rounded-md shadow-md max-w-lg mx-auto">
      {/* Search Section */}
      

      {/* Title Input */}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="border border-gray-300 rounded-md p-2 w-full mb-4"
      />

      {/* Content Editor */}
      <EditorComponent/>

      {/* Post Button */}
      <div className="text-right mt-4">
        <Button label="Post" onClick={handlePost} />
      </div>
    </div>
  );
};

export default CreateStory;
