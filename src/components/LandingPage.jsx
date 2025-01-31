import React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#0a192f] text-white flex flex-col justify-center items-center px-8">
      <div className="max-w-2xl text-center">
        <p className="text-green-400 text-lg">Hi, my name is</p>
        <h1 className="text-5xl font-bold mt-2 text-white">Your Name.</h1>
        <h2 className="text-4xl font-bold text-gray-400 mt-2">I build things for the web.</h2>
        <p className="text-gray-400 mt-4 text-lg">
          I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences.
        </p>
        <button className="mt-6 px-6 py-3 border border-green-400 text-green-400 rounded-lg hover:bg-green-400 hover:text-[#0a192f] transition-all">
          Check out my work!
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
