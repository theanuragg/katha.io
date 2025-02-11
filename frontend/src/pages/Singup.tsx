import React from "react";

export const Signup = () => {
  return (
    <>
    <div className="h-screen bg-[#fce8dd] flex flex-col md:flex-row">
  {/* Left Section */}
  <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
    <div className="w-full max-w-md">
      <h1 className="text-4xl font-serif mb-8">Create User</h1>
      {/* <UserForm /> */}
    </div>
  </div>

  {/* Right Section */}
  <div className="w-full md:w-1/2 relative flex items-center justify-center overflow-hidden">
    {/* Main Image */}
    <img 
      src="/petercat.png" 
      className="w-full h-full object-cover"
      alt="Petercat"
    />
    {/* Overlay Text Image */}
    <img 
      src="/petercattext.png" 
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 md:w-1/2"
      alt="Petercat Text"
    />
  </div>
</div>

     </>
  );
};
