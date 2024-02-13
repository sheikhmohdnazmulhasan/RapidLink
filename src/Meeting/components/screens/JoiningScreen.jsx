import React from 'react';

const JoiningScreen = () => {


      // The main component for the Joining Screen, responsible for managing video, audio, and meeting details
      return (
              <div className="fixed inset-0">
    <div className="overflow-y-auto flex flex-col flex-1 h-screen bg-gray-800">
      <div className="flex flex-1 flex-col md:flex-row items-center justify-center md:m-[72px] m-16">
        <div className="container grid md:grid-flow-col grid-flow-row ">
          <div className="grid grid-cols-12">
            {/* Left column containing video display and controls */}
            <div className="md:col-span-7 2xl:col-span-6 col-span-12">
              <div className="flex items-center justify-center p-1.5 sm:p-4 lg:p-6">
                <div className="relative w-full md:pl-4 sm:pl-10 pl-5  md:pr-4 sm:pr-10 pr-5">
                  {/* Video player and controls */}
      );
};

export default JoiningScreen;