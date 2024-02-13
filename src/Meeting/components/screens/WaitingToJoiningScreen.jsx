import React from 'react';

const WaitingToJoiningScreen = () => {

      // JSX to render the WaitingToJoinScreen component
      return (
            <div
                  className="bg-gray-800"
                  style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100vh",
                        // backgroundColor: theme.palette.darkTheme.main,
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

                        </div>


                  </div>




            </div>
      );
};

export default WaitingToJoiningScreen;