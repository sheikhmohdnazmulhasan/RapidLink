// Import necessary dependencies and components from React and other files
import { useEffect, useMemo, useRef, useState } from "react";
import { MeetingDetailsScreen } from "../MeetingDetailsScreen";
import { createMeeting, getToken, validateMeeting } from "../../api";
import { FaCheckCircle } from "react-icons/fa";
import SettingDialogueBox from "../SettingDialogueBox";
import ConfirmBox from "../ConfirmBox";
import { Constants } from "@videosdk.live/react-sdk";
import useIsMobile from "../../hooks/useIsMobile";
import { createPopper } from "@popperjs/core";
import WebcamOffIcon from "../../icons/WebcamOffIcon";
import WebcamOnIcon from "../../icons/Bottombar/WebcamOnIcon";
import MicOffIcon from "../../icons/MicOffIcon";
import MicOnIcon from "../../icons/Bottombar/MicOnIcon";

// Define JoiningScreen component
export function JoiningScreen({
      participantName,
      setParticipantName,
      setMeetingId,
      setToken,
      setSelectedMic,
      setSelectedWebcam,
      onClickStartMeeting,
      micEnabled,
      webcamEnabled,
      setWebcamOn,
      setMicOn,
}) {
      // State for managing selected setting (video or audio)
      const [setting, setSetting] = useState("video");
      // State for managing available devices (webcams and mics)
      const [{ webcams, mics }, setDevices] = useState({
            devices: [],
            webcams: [],
            mics: [],
      });
      // State for the video track
      const [videoTrack, setVideoTrack] = useState(null);
      // State for managing mute dialogue
      const [dlgMuted, setDlgMuted] = useState(false);
      // State for managing devices dialogue
      const [dlgDevices, setDlgDevices] = useState(false);
      //  Refs for video and audio players
      const videoPlayerRef = useRef();
      const popupVideoPlayerRef = useRef();
      const popupAudioPlayerRef = useRef();

      // Refs for video and audio tracks
      const videoTrackRef = useRef();
      const audioTrackRef = useRef();
      const audioAnalyserIntervalRef = useRef();

      // State for opening/closing setting dialogue
      const [settingDialogueOpen, setSettingDialogueOpen] = useState(false);
      // State for the audio track
      const [audioTrack, setAudioTrack] = useState(null);
      // Function to handle opening setting dialogue
      const handleClickOpen = () => {
            setSettingDialogueOpen(true);
      };
      // Function to handle closing setting dialogue
      const handleClose = (value) => {
            setSettingDialogueOpen(false);
      };
      // Custom hook to check if the device is mobile
      const isMobile = useIsMobile();
      // Memoized values for checking if webcam and mic are on
      const webcamOn = useMemo(() => !!videoTrack, [videoTrack]);
      const micOn = useMemo(() => !!audioTrack, [audioTrack]);
      // Functions to handle turning on/off webcam and mic
      const _handleTurnOffWebcam = () => {
            const videoTrack = videoTrackRef.current;

            if (videoTrack) {
                  videoTrack.stop();
                  setVideoTrack(null);
                  setWebcamOn(false);
            }
      };
      const _handleTurnOnWebcam = () => {
            const videoTrack = videoTrackRef.current;

            if (!videoTrack) {
                  getDefaultMediaTracks({ mic: false, webcam: true });
                  setWebcamOn(true);
            }
      };
      //     toggleWebcam set up
      const _toggleWebcam = () => {
            const videoTrack = videoTrackRef.current;

            if (videoTrack) {
                  _handleTurnOffWebcam();
            } else {
                  _handleTurnOnWebcam();
            }
      };
      //     handleTurnOffMic set up
      const _handleTurnOffMic = () => {
            const audioTrack = audioTrackRef.current;

            if (audioTrack) {
                  audioTrack.stop();

                  setAudioTrack(null);
                  setMicOn(false);
            }
      };
      const _handleTurnOnMic = () => {
            const audioTrack = audioTrackRef.current;

            if (!audioTrack) {
                  getDefaultMediaTracks({ mic: true, webcam: false });
                  setMicOn(true);
            }
      };
      //     handleToggleMic set up
      const _handleToggleMic = () => {
            const audioTrack = audioTrackRef.current;

            if (audioTrack) {
                  _handleTurnOffMic();
            } else {
                  _handleTurnOnMic();
            }
      };

      // Functions to change webcam and mic
      const changeWebcam = async (deviceId) => {
            const currentvideoTrack = videoTrackRef.current;

            if (currentvideoTrack) {
                  currentvideoTrack.stop();
            }

            const stream = await navigator.mediaDevices.getUserMedia({
                  video: { deviceId },
            });
            const videoTracks = stream.getVideoTracks();

            const videoTrack = videoTracks.length ? videoTracks[0] : null;

            setVideoTrack(videoTrack);
      };

      //     change the changeMic set up
      const changeMic = async (deviceId) => {
            const currentAudioTrack = audioTrackRef.current;
            currentAudioTrack && currentAudioTrack.stop();
            const stream = await navigator.mediaDevices.getUserMedia({
                  audio: { deviceId },
            });
            const audioTracks = stream.getAudioTracks();

            const audioTrack = audioTracks.length ? audioTracks[0] : null;
            clearInterval(audioAnalyserIntervalRef.current);

            setAudioTrack(audioTrack);
      };

      // Function to get default media tracks
      const getDefaultMediaTracks = async ({ mic, webcam, firstTime }) => {
            if (mic) {
                  const audioConstraints = {
                        audio: true,
                  };

                  const stream = await navigator.mediaDevices.getUserMedia(
                        audioConstraints
                  );
                  const audioTracks = stream.getAudioTracks();

                  const audioTrack = audioTracks.length ? audioTracks[0] : null;

                  setAudioTrack(audioTrack);
                  if (firstTime) {
                        setSelectedMic({
                              id: audioTrack?.getSettings()?.deviceId,
                        });
                  }
            }

            if (webcam) {
                  const videoConstraints = {
                        video: {
                              width: 1280,
                              height: 720,
                        },
                  };

                  const stream = await navigator.mediaDevices.getUserMedia(
                        videoConstraints
                  );
                  const videoTracks = stream.getVideoTracks();

                  const videoTrack = videoTracks.length ? videoTracks[0] : null;
                  setVideoTrack(videoTrack);
                  if (firstTime) {
                        setSelectedWebcam({
                              id: videoTrack?.getSettings()?.deviceId,
                        });
                  }
            }
      };

      // Function to start listening for mute events
      async function startMuteListener() {
            const currentAudioTrack = audioTrackRef.current;

            if (currentAudioTrack) {
                  if (currentAudioTrack.muted) {
                        setDlgMuted(true);
                  }

                  currentAudioTrack.addEventListener("mute", (ev) => {
                        setDlgMuted(true);
                  });
            }
      }

      // Function to get available devices
      const getDevices = async ({ micEnabled, webcamEnabled }) => {
            try {
                  const devices = await navigator.mediaDevices.enumerateDevices();

                  const webcams = devices.filter((d) => d.kind === "videoinput");
                  const mics = devices.filter((d) => d.kind === "audioinput");

                  const hasMic = mics.length > 0;
                  const hasWebcam = webcams.length > 0;

                  setDevices({ webcams, mics, devices });

                  if (hasMic) {
                        startMuteListener();
                  }

                  getDefaultMediaTracks({
                        mic: hasMic && micEnabled,
                        webcam: hasWebcam && webcamEnabled,
                        firstTime: true,
                  });
            } catch (err) {
                  console.log(err);
            }
      };
      // Effect to set audio track ref and start mute listener
      useEffect(() => {
            audioTrackRef.current = audioTrack;

            startMuteListener();

            return () => {
                  const currentAudioTrack = audioTrackRef.current;
                  currentAudioTrack && currentAudioTrack.stop();
                  audioTrackRef.current = null;
            };
      }, [audioTrack]);
      // Effect to set video track ref and update video player
      useEffect(() => {
            videoTrackRef.current = videoTrack;

            var isPlaying =
                  videoPlayerRef.current.currentTime > 0 &&
                  !videoPlayerRef.current.paused &&
                  !videoPlayerRef.current.ended &&
                  videoPlayerRef.current.readyState >
                  videoPlayerRef.current.HAVE_CURRENT_DATA;

            if (videoTrack) {
                  const videoSrcObject = new MediaStream([videoTrack]);

                  if (videoPlayerRef.current) {
                        videoPlayerRef.current.srcObject = videoSrcObject;
                        if (videoPlayerRef.current.pause && !isPlaying) {
                              try {
                                    videoPlayerRef.current.play();
                              } catch (err) {
                                    console.log("error in playing video", err);
                              }
                        }
                  }

                  setTimeout(() => {
                        if (popupVideoPlayerRef.current) {
                              popupVideoPlayerRef.current.srcObject = videoSrcObject;
                              try {
                                    popupVideoPlayerRef.current.play();
                              } catch (err) {
                                    console.log("error in playing video", err);
                              }
                        }
                  }, 1000);
            } else {
                  if (videoPlayerRef.current) {
                        videoPlayerRef.current.srcObject = null;
                  }
                  if (popupVideoPlayerRef.current) {
                        popupVideoPlayerRef.current.srcObject = null;
                  }
            }
      }, [videoTrack, setting, settingDialogueOpen]);
      // Effect to get devices on component mount
      useEffect(() => {
            getDevices({ micEnabled, webcamEnabled });
      }, [])

      const ButtonWithTooltip = ({ onClick, onState, OnIcon, OffIcon, mic }) => {
            // State and refs for managing tooltip visibility and positioning
            const [tooltipShow, setTooltipShow] = useState(false);
            const btnRef = useRef();
            const tooltipRef = useRef();
            const openTooltip = () => {
                  // Function to open the tooltip and create a popper for positioning
                  createPopper(btnRef.current, tooltipRef.current, {
                        placement: "top",
                  });
                  setTooltipShow(true);
            };
            // Function to close the tooltip
            const closeTooltip = () => {
                  setTooltipShow(false);
            };

            return (
                  <>
                        <div>
                              {/* Button Section */}
                              <button
                                    ref={btnRef}
                                    onMouseEnter={openTooltip}
                                    onMouseLeave={closeTooltip}
                                    onClick={onClick}
                                    className={`rounded-full min-w-auto w-11 h-11 flex items-center justify-center ${onState ? "bg-white" : "bg-red-650 text-white"
                                          }`}
                              >
                                    {onState ? (
                                          <OnIcon fillcolor={onState ? "#050A0E" : "#fff"} />
                                    ) : (
                                          <OffIcon fillcolor={onState ? "#050A0E" : "#fff"} />
                                    )}
                              </button>
                        </div>
                        {/* Tooltip Section */}
                        <div
                              style={{ zIndex: 999 }}
                              className={`${tooltipShow ? "" : "hidden"
                                    } overflow-hidden flex flex-col items-center justify-center pb-1.5`}
                              ref={tooltipRef}
                        >
                              <div className={"rounded-md p-1.5 bg-black "}>
                                    <p className="text-base text-white ">
                                          {onState
                                                ? `Turn off ${mic ? "mic" : "webcam"}`
                                                : `Turn on ${mic ? "mic" : "webcam"}`}
                                    </p>
                              </div>
                        </div>
                  </>
            );
      };




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
                                                                  />

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

                                                            {/* Check audio and video button (only for non-mobile devices) */}
                                                            {!isMobile && (
                                                                  <div
                                                                        className="m-4 absolute md:left-12 lg:left-24 xl:left-44 md:right-12 lg:right-24 xl:right-44 rounded cursor-pointer bg-gray-700"
                                                                        onClick={(e) => {
                                                                              handleClickOpen();
                                                                        }}
                                                                  >
                                                                        <div className="flex flex-row items-center justify-center m-1">
                                                                              <button className="text-white">
                                                                                    <FaCheckCircle className="h-5 w-5" />
                                                                              </button>
                                                                              <p className="text-base text-white ml-1">
                                                                                    Check your audio and video
                                                                              </p>
                                                                        </div>
                                                                  </div>
                                                            )}
                                                      </div>
                                                </div>
                                          </div>

                                          {/* Right column containing meeting details */}
                                          <div className="md:col-span-5 2xl:col-span-6 col-span-12 md:relative">
                                                <div className="flex flex-1 flex-col items-center justify-center xl:m-16 lg:m-6 md:mt-9 lg:mt-14 xl:mt-20 mt-3 md:absolute md:left-0 md:right-0 md:top-0 md:bottom-0">
                                                      {/* Meeting details component */}
                                                      <MeetingDetailsScreen
                                                            participantName={participantName}
                                                            setParticipantName={setParticipantName}
                                                            videoTrack={videoTrack}
                                                            setVideoTrack={setVideoTrack}
                                                            onClickStartMeeting={onClickStartMeeting}
                                                            onClickJoin={async (id) => {
                                                                  const token = await getToken();
                                                                  const valid = await validateMeeting({
                                                                        roomId: id,
                                                                        token,
                                                                  });

                                                                  if (valid) {
                                                                        setToken(token);
                                                                        setMeetingId(id);
                                                                        if (videoTrack) {
                                                                              videoTrack.stop();
                                                                              setVideoTrack(null);
                                                                        }
                                                                        onClickStartMeeting();
                                                                        setParticipantName("");
                                                                  } else alert("Invalid Meeting Id");
                                                            }}
                                                            _handleOnCreateMeeting={async () => {
                                                                  const token = await getToken();
                                                                  console.log(token);
                                                                  const _meetingId = await createMeeting({ token });
                                                                  setToken(token);
                                                                  setMeetingId(_meetingId);
                                                                  setParticipantName("");
                                                                  return _meetingId;
                                                            }}
                                                      />
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>

                  {/* ConfirmBox for system mic mute notification */}
                  <ConfirmBox
                        open={dlgMuted}
                        successText="OKAY"
                        onSuccess={() => {
                              setDlgMuted(false);
                        }}
                        title="System mic is muted"
                        subTitle="Your default microphone is muted, please unmute it or increase audio input volume from system settings."
                  />

                  {/* ConfirmBox for mic or webcam not available notification */}
                  <ConfirmBox
                        open={dlgDevices}
                        successText="DISMISS"
                        onSuccess={() => {
                              setDlgDevices(false);
                        }}
                        title="Mic or webcam not available"
                        subTitle="Please connect a mic and webcam to speak and share your video in the meeting. You can also join without them."
                  />
            </div>
      );

}           