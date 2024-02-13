import React from 'react';

// Define the WaitingToJoinScreen functional component
const WaitingToJoiningScreen = () => {
      // Array of messages displayed while waiting
      const waitingMessages = [
            { index: 0, text: "Creating a room for you..." },
            { index: 1, text: "Almost there..." },
      ];
      // State to manage the currently displayed message
      const [message, setMessage] = useState(waitingMessages[0]);
      // Reference for the interval used to change messages
      const intervalRef = useRef(null);
      // useEffect to handle message rotation at intervals
      useEffect(() => {
            intervalRef.current = setInterval(() => {
                  setMessage((s) =>
                        s.index === waitingMessages.length - 1
                              ? s
                              : waitingMessages[s.index + 1]
                  );
            }, 3000);
            // Cleanup function to clear the interval on component unmount
            return () => {
                  clearInterval(intervalRef.current);
            };
      }, []);

      // Custom hooks to determine if the device is a tablet or mobile
      const isTab = useIsTab();
      const isMobile = useIsMobile();

      // Default options for the Lottie animation
      const animationDefaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
            },
      };

      // JSX to render the WaitingToJoinScreen component
      return (
            <div
                  className="bg-gray-800"
                  style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100vh",
                        
                  }}
            >
                  <div className="flex flex-col">
                        {/* height width setup for the mobile */}
                        <div
                              style={{
                                    height: isTab ? 200 : isMobile ? 200 : 250,
                                    width: isTab ? 200 : isMobile ? 200 : 250,
                              }}
                        >
                              {/* Lottie animation component */}
                              <Lottie
                                    loop={animationDefaultOptions.loop}
                                    autoplay={animationDefaultOptions.autoplay}
                                    animationData={animationDefaultOptions.animationData}
                                    rendererSettings={{
                                          preserveAspectRatio:
                                                animationDefaultOptions.rendererSettings.preserveAspectRatio,
                                    }}
                                    style={{ height: "100%", width: "100%" }}
                              />
                              {/* Display the current message */}
                              <h1 className="text-white text-center font-bold mt-1 text-xl">
                                    {message.text}
                              </h1>

                        </div>


                  </div>




            </div>
      );
};

export default WaitingToJoiningScreen;