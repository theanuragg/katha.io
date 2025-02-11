import React, { useState } from "react";

import EditorComponent from "../components/EditorComponents";
import Header from "../components/ui/Header";

// Reusable Input Component

// Reusable Button Component
const Button: React.FC<{
  label: string;
  onClick?: () => void;
  className?: string;
}> = ({ label, onClick, className }) => (
  <button
    onClick={onClick}
    className={`bg-gray-300 hover:bg-gray-400 text-black py-1 px-4 rounded-md ${className}`}
  >
    {label}
  </button>
);

// Main Component
const CreateStory: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState(
    "<p>Start writing your content here...</p>"
  );

  const handlePost = () => {
    console.log("Title:", title);
    console.log("Content:", content);
  };

  return (
    <div className="h-screen bg-bg">
      <Header />

      <div className="flex justify-between pt-16 px-6 items-start gap-16">
        {/* Left Card */}
        <div className="bg-facey p-6 pb-36 rounded-md shadow-md w-8/12 flex-shrink-0">
          {/* Title Input */}
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="border border-gray-300 rounded-md p-2 w-full mb-4"
          />

          {/* Content Editor */}
          <EditorComponent />

          {/* Post Button */}
          <div className="text-right mt-16">
            <Button
              label="Post"
              className="bg-button hover:bg-orange"
              onClick={handlePost}
            />
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-orange text-white p-2 rounded-md shadow-md max-w-xl w-4/12">
          <iframe
            src="https://roadmap.sh/r/embed?id=67ab9eb0f863343482985efb"
            width="100%"
            height="500px"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CreateStory;
