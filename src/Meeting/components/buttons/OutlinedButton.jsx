import React from 'react';

// OutlinedButton component that displays a button with optional features
export const OutlinedButton = ({
      bgColor,
      onClick,
      Icon,
      isFocused,
      tooltip,
      badge,
      lottieOption,
      disabledOpacity,
      renderRightComponent,
      disabled,
      large,
      btnID,
      color,
      focusIconColor,
      isRequestProcessing,
      borderColor,
      buttonText,
}) => {
       // State variables for tracking mouse interaction, blinking state, and tooltip visibility
      const [mouseOver, setMouseOver] = useState(false);
      const [mouseDown, setMouseDown] = useState(false);
      const [blinkingState, setBlinkingState] = useState(1);
      const [tooltipShow, setTooltipShow] = useState(false);

        // Refs for button and tooltip elements
      const btnRef = useRef();
      const tooltipRef = useRef();

      // Function to open the tooltip and position it using Popper.js
      const openTooltip = () => {
            createPopper(btnRef.current, tooltipRef.current, {
                  placement: "top",
                  modifiers: [
                        {
                              name: "offset",
                              options: {
                                    offset: [-50, 0],
                              },
                        },
                  ],
            });
            setTooltipShow(true);
      };
        // Function to close the tooltip
      const closeTooltip = () => {
            setTooltipShow(false);
      };

       // Ref for the blinking interval
      const intervalRef = useRef();

      // Calculate the icon size based on whether the button is large or not
      const iconSize = 24 * (large ? 1.7 : 1);

       // Function to start blinking when a request is in progress
      const startBlinking = () => {
            intervalRef.current = setInterval(() => {
                  setBlinkingState((s) => (s === 1 ? 0.4 : 1));
            }, 600);
      };

        // Function to stop blinking when the request is no longer in progress
      const stopBlinking = () => {
            clearInterval(intervalRef.current);

            setBlinkingState(1);
      };

        // Effect to start or stop blinking based on the isRequestProcessing prop
      useEffect(() => {
            if (isRequestProcessing) {
                  startBlinking();
            } else {
                  stopBlinking();
            }
      }, [isRequestProcessing]);

      // Effect to stop blinking when the component unmount
      useEffect(() => {
            return () => {
                  stopBlinking();
            };
      }, []);

      // Render the OutlinedButton component
      return (
            <>
                  <div
                        ref={btnRef}
                        onMouseEnter={() => {
                              setMouseOver(true);
                              openTooltip();
                        }}
                        onMouseLeave={() => {
                              setMouseOver(false);
                              closeTooltip();
                        }}
                        onMouseDown={() => {
                              setMouseDown(true);
                        }}
                        onMouseUp={() => {
                              setMouseDown(false);
                        }}
                  >
                        {/* Button container with dynamic styling based on mouse interaction and props */}
                        <div
                              className={`flex items-center justify-center  rounded-lg ${bgColor ? `${bgColor}` : isFocused ? "bg-white" : "bg-gray-750"
                                    } ${mouseOver
                                          ? "border-2 border-transparent border-solid"
                                          : borderColor
                                                ? `border-2 border-[${borderColor}] border-solid`
                                                : bgColor
                                                      ? "border-2 border-transparent border-solid"
                                                      : "border-2 border-solid border-[#ffffff33]"
                                    } md:m-2 m-1`}
                              style={{
                                    transition: "all 200ms",
                                    transitionTimingFunction: "ease-in-out",
                                    opacity: blinkingState,
                              }}
                        >
                              {/* Button element with optional icon, badge, and text */}
                              <button
                                    className={`${disabled ? "cursor-default" : "cursor-pointer"
                                          } flex items-center justify-center`}
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
                                    <div
                                          className="flex items-center justify-center p-1 m-1 rounded-lg"
                                          style={{
                                                opacity: disabled ? disabledOpacity || 0.7 : 1,
                                                transform: `scale(${mouseOver ? (mouseDown ? 0.95 : 1.1) : 1})`,
                                                transition: `all ${200 * 1}ms`,
                                                transitionTimingFunction: "linear",
                                          }}
                                    >
                                          {/* Display Lottie animation or regular icon */}
                                          {Icon &&
                                                (lottieOption ? (
                                                      <div className={`flex items-center justify-center`}>
                                                            <div
                                                                  style={{
                                                                        height: iconSize,
                                                                        width:
                                                                              (iconSize * lottieOption?.width) /
                                                                              lottieOption?.height,
                                                                  }}
                                                            >
                                                                  <Lottie
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
                                                      <>
                                                            {/* Regular Icon with optional badge */}
                                                            <Icon
                                                                  style={{
                                                                        color: isFocused
                                                                              ? focusIconColor || "#1C1F2E"
                                                                              : color
                                                                                    ? color
                                                                                    : "#fff",
                                                                        height: iconSize,
                                                                        width: iconSize,
                                                                  }}
                                                                  fillcolor={
                                                                        isFocused
                                                                              ? focusIconColor || "#1C1F2E"
                                                                              : color
                                                                                    ? color
                                                                                    : "#fff"
                                                                  }
                                                            />
                                                            {badge && (
                                                                  <p
                                                                        className={`${isFocused ? "text-black" : "text-white"
                                                                              } text-base ml-2`}
                                                                  >
                                                                        {badge}
                                                                  </p>
                                                            )}
                                                      </>
                                                ))}
                                    </div>
                                    {/* Optional text for the button */}
                                    {buttonText ? (
                                          <p className="text-sm text-white font-semibold mr-2 text-center">
                                                {buttonText}
                                          </p>
                                    ) : null}
                              </button>
                              {/* Render additional component to the right of the button if provided */}
                              {typeof renderRightComponent === "function" && renderRightComponent()}
                        </div>
                  </div>
                  {/* Tooltip element displayed above the button */}
                  <div
                        style={{ zIndex: 999 }}
                        className={`${tooltipShow && (mouseOver || mouseDown) ? "" : "hidden"
                              } overflow-hidden flex flex-col items-center justify-center whitespace-pre-line`}
                        ref={tooltipRef}
                  >
                        {/* Tooltip content */}
                        <div className={"rounded-md p-1.5 bg-black "}>
                              <p className="text-base text-white ">{tooltip || ""}</p>
                        </div>
                  </div>
            </>
      );
};
