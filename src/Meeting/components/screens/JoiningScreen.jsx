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
                                                            <div className="w-full relative" style={{ height: "45vh" }}>
                                                                  <video
                                                                        autoPlay
                                                                        playsInline
                                                                        muted
                                                                        ref={videoPlayerRef}
                                                                        controls={false}
                                                                        style={{
                                                                              backgroundColor: "#1c1c1c",
                                                                        }}
                                                                        className={
                                                                              "rounded-[10px] h-full w-full object-cover flex items-center justify-center flip"
                                                                        }
                                                                        {/* Display a message if the camera is off (only for non-mobile devices) */}
                                                                        {!isMobile ? (
                                                                              <>
                                                                                    <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
                                                                                          {!webcamOn ? (
                                                                                                <p className="text-xl xl:text-lg 2xl:text-xl text-white">
                                                                                                      The camera is off
                                                                                                </p>
                                                                                          ) : null}
                                                                                    </div>
                                                                              </>
                                                                        ) : null}
                                                                        {/* Setting dialogue box for managing video and audio settings */}
                                                                        {settingDialogueOpen ? (
                                                                              <SettingDialogueBox
                                                                                    open={settingDialogueOpen}
                                                                                    onClose={handleClose}
                                                                                    popupVideoPlayerRef={popupVideoPlayerRef}
                                                                                    popupAudioPlayerRef={popupAudioPlayerRef}
                                                                                    changeWebcam={changeWebcam}
                                                                                    changeMic={changeMic}
                                                                                    setting={setting}
                                                                                    setSetting={setSetting}
                                                                                    webcams={webcams}
                                                                                    mics={mics}
                                                                                    setSelectedMic={setSelectedMic}
                                                                                    setSelectedWebcam={setSelectedWebcam}
                                                                                    videoTrack={videoTrack}
                                                                                    audioTrack={audioTrack}
                                                                              />
                                                                        ) : null}
                                                                        {/* Controls for turning on/off webcam and mic */}
                    <div className="absolute xl:bottom-6 bottom-4 left-0 right-0">
                                                                        <div className="container grid grid-flow-col space-x-4 items-center justify-center md:-m-2">
                                                                              <ButtonWithTooltip
                                                                                    onClick={_handleToggleMic}
                                                                                    onState={micOn}
                                                                                    mic={true}
                                                                                    OnIcon={MicOnIcon}
                                                                                    OffIcon={MicOffIcon}
                                                                              />
                                                                              <ButtonWithTooltip
                                                                                    onClick={_toggleWebcam}
                                                                                    onState={webcamOn}
                                                                                    mic={false}
                                                                                    OnIcon={WebcamOnIcon}
                                                                                    OffIcon={WebcamOffIcon}
                                                                              />
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                                  />
                                                            );
};

                                                            export default JoiningScreen;