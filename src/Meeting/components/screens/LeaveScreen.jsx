import React from 'react';

const LeaveScreen = () => {
      return (
            // Styling for the background and layout
            <div className="bg-gray-800 h-screen flex flex-col flex-1 items-center justify-center">
                  {/* Display a message indicating that the user left the meeting */}
                  <h1 className="text-white text-4xl">You left the meeting!</h1>

            </div>
      );
};

export default LeaveScreen;