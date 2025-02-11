import React, { useState } from "react";
import Tiptapeditor from "../components/EditorComponents";
import EditorComponent from "../components/EditorComponents";

// Reusable Input Component
const Input: React.FC<{ placeholder: string; className?: string }> = ({ placeholder, className }) => (
  <input type="text" placeholder={placeholder} className={`border border-gray-300 rounded-md p-2 ${className}`} />
);

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
    <div className="bg-peach-200 p-6 rounded-md shadow-md max-w-lg mx-auto">
      {/* Search Section */}
      <div className="flex justify-between items-center mb-4">
        <Input placeholder="Search..." className="w-1/2" />
        <div className="flex gap-2">
          <div className="w-6 h-6 bg-gray-300 rounded-full" />
          <div className="w-6 h-6 bg-gray-300 rounded-full" />
        </div>
      </div>

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
