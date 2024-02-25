import React, { useState, useRef, useEffect } from "react";
import Lottie from "lottie-react";
import { createPopper } from "@popperjs/core";

const OutlineIconTextButton = ({
      onClick,
      isFocused,
      bgColor,
      Icon,
      focusBGColor,
      disabled,
      renderRightComponent,
      fillcolor,
      lottieOption,
      tooltipTitle,
      btnID,
      buttonText,
      large,
      isRequestProcessing,
      textColor,
}) => {
      // State variables for managing button interactions and tooltip visibility
      const [mouseOver, setMouseOver] = useState(false);
      const [mouseDown, setMouseDown] = useState(false);
      const [blinkingState, setBlinkingState] = useState(1);
      const [tooltipShow, setTooltipShow] = useState(false);
      // React refs for the button and tooltip elements
      const btnRef = useRef();
      const tooltipRef = useRef();
      // Ref for storing the interval ID used for blinking effect
      const intervalRef = useRef();
      // Function to open the tooltip
      const openTooltip = () => {
            createPopper(btnRef.current, tooltipRef.current, {
                  placement: "bottom",
            });
            setTooltipShow(true);
      };
      // Function to close the tooltip
      const closeTooltip = () => {
            setTooltipShow(false);
      };
      // Calculate icon size based on the 'large' prop
      const iconSize = 22 * (large ? 1 : 1);
      // Function to start the blinking effect when a request is in progress
      const startBlinking = () => {
            intervalRef.current = setInterval(() => {
                  setBlinkingState((s) => (s === 1 ? 0.4 : 1));
            }, 600);
      };
      // Function to stop the blinking effect
      const stopBlinking = () => {
            clearInterval(intervalRef.current);

            setBlinkingState(1);
      };
      // Effect to start or stop the blinking effect based on the 'isRequestProcessing' prop
      useEffect(() => {
            if (isRequestProcessing) {
                  startBlinking();
            } else {
                  stopBlinking();
            }
      }, [isRequestProcessing]);
      // stop Blinking useEffect uses
      useEffect(() => {
            return () => {
                  stopBlinking();
            };
      }, []);


      return (
            <>
                  <div ref={btnRef} onMouseEnter={openTooltip} onMouseLeave={closeTooltip}>
                        {/* Button Section */}
                        <button
                              // Button styling with dynamic classes and inline styles
                              className={`flex items-center justify-center  rounded-lg ${bgColor ? `${bgColor}` : isFocused ? "bg-white" : "bg-gray-750"
                                    } ${mouseOver
                                          ? "border-2 border-transparent border-solid"
                                          : focusBGColor
                                                ? `border-2 border-[${focusBGColor}] border-solid`
                                                : bgColor
                                                      ? "border-2 border-transparent border-solid"
                                                      : "border-2 border-solid border-[#ffffff33]"
                                    } md:m-2 m-1 cursor-pointer`}
                              style={{
                                    // Inline styles for transitions and transformations
                                    transition: "all 200ms",
                                    transitionTimingFunction: "ease-in-out",
                                    opacity: blinkingState,
                              }}
                              id={btnID}
                              onMouseEnter={() => {
                                    setMouseOver(true);
                              }}
                              onMouseLeave={() => {
                                    setMouseOver(false);
                              }}
                              onMouseDown={() => {
                                    setMouseDown(true);
                              }}
                              onMouseUp={() => {
                                    setMouseDown(false);
                              }}
                              disabled={disabled}
                              onClick={onClick}
                        >
                              {/* Content inside the button, including text or Lottie animation */}
                              <div
                                    className="flex items-center justify-center p-1 m-1 rounded-lg overflow-hidden"
                                    // Inline styles for opacity and scaling based on interactions
                                    style={{
                                          opacity: disabled ? 0.7 : 1,
                                          transform: `scale(${mouseOver ? (mouseDown ? 0.97 : 1.05) : 1})`,
                                          transition: `all ${200 * 1}ms`,
                                          transitionTimingFunction: "linear",
                                    }}
                              >
                                    {/* Conditional rendering of either Lottie animation or text */}
                                    {buttonText ? (
                                          lottieOption ? (
                                                <div className="flex items-center justify-center">
                                                      {/* Rendering of Lottie animation */}
                                                      <div
                                                            className={`lg:h-[${22 * (large ? 1 : 1)}px] w-[${(22 * (large ? 1 : 1) * lottieOption?.width) /
                                                                  lottieOption?.height
                                                                  }px]`}
                                                            style={{
                                                                  height: iconSize,
                                                                  width:
                                                                        (iconSize * lottieOption?.width) / lottieOption?.height,
                                                            }}
                                                      >
                                                            <Lottie
                                                                  // Lottie animation options
                                                                  loop={lottieOption.loop}
                                                                  autoPlay={lottieOption.autoPlay}
                                                                  animationData={lottieOption.animationData}
                                                                  rendererSettings={{
                                                                        preserveAspectRatio:
                                                                              lottieOption.rendererSettings.preserveAspectRatio,
                                                                  }}
                                                                  isClickToPauseDisabled
                                                            />
                                                      </div>
                                                </div>
                                          ) : (
                                                <p
                                                      className={`text-sm font-semibold leading-6 ${isFocused
                                                            ? "text-[#1c1f2e]"
                                                            : textColor
                                                                  ? textColor
                                                                  : "text-white"
                                                            }`}
                                                >
                                                      {buttonText}
                                                </p>
                                          )
                                    ) : null}
                              </div>

                              {typeof renderRightComponent === "function" && renderRightComponent()}
                        </button>
                  </div>
                  {/* Tooltip Section */}
                  <div
                        style={{ zIndex: 999 }}
                        className={`${tooltipShow ? "" : "hidden"
                              } overflow-hidden flex flex-col items-center justify-center pt-1`}
                        ref={tooltipRef}
                  >
                        {/* Tooltip Content */}
                        <div className={"rounded-md p-1.5 bg-black "}>
                              <p className="text-base text-white ">{tooltipTitle || ""}</p>
                        </div>
                  </div>
            </>
      );
};

export default OutlineIconTextButton;

