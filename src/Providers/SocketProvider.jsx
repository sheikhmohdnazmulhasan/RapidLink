// Import necessary dependencies from React and Socket.IO
import React, { createContext, useContext, useMemo } from 'react';
import { io } from 'socket.io-client';

// Create a context to manage the WebSocket connection
const SocketContext = createContext(null)


// Custom hook to access the socket instance within components
export const useSocket = () => {
    const socket = useContext(SocketContext);
    return socket;
}

// Provider component to wrap the application and provide the socket instance
export const SocketProvider = (props) => {

    // Create a memoized instance of the socket connection
    const socket = useMemo(() => io('localhost:8000'), []);


    // Provide the socket instance to the context
    return (
        <SocketContext.Provider value={socket}>
            {props.children}
        </SocketContext.Provider>
    );
};

