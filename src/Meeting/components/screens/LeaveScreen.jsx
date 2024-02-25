 

const LeaveScreen = () => {
      return (
            // Styling for the background and layout
            <div className="bg-gray-800 h-screen flex flex-col flex-1 items-center justify-center">
                  {/* Display a message indicating that the user left the meeting */}
                  <h1 className="text-white text-4xl">You left the meeting!</h1>
                  {/* Button to rejoin the meeting */}
                  <div className="mt-12">
                        <button
                              className="w-full bg-purple-350 text-white px-16 py-3 rounded-lg text-sm"
                              // Handle click event to set 'isMeetingLeft' to false
                              onClick={() => {
                                    setIsMeetingLeft(false);
                              }}
                        >
                              Rejoin the Meeting
                        </button>
                  </div>
            </div>
      );
};

export default LeaveScreen;