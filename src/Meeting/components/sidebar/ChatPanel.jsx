import { HiMiniPaperAirplane } from "react-icons/hi2";

import { useMeeting, usePubSub } from "@videosdk.live/react-sdk";
import React, { useEffect, useRef, useState } from "react";
import { formatAMPM, json_verify, nameTructed } from "../../utils/helper";

// set up the chatMessage object call
const ChatMessage = ({ senderId, senderName, text, timestamp }) => {
      // Access the meeting context using useMeeting hook
      const mMeeting = useMeeting();
      // Retrieve the local participant's ID
      const localParticipantId = mMeeting?.localParticipant?.id;
      // Check if the message is from the local participant
      const localSender = localParticipantId === senderId;
      return (
            <div
                  // Outer container with dynamic styling for message alignment
                 