import React, { useCallback, useEffect, useState } from 'react';
import { useSocket } from '../../Providers/SocketProvider';
import { useNavigate } from 'react-router-dom';

// Lobby component for the main lobby page
const Lobby = () => {

    // State to manage user email and room ID input
    const [email, setEmail] = useState("")
    const [room, setRoom] = useState("")

    // Access the socket instance from the SocketProvider
    const socket = useSocket()


    // Hook to navigate to a new route
    const navigate = useNavigate();


    // Handle form submission to join a room
    const handleSubmitForm = useCallback((e) => {
        e.preventDefault();

        // Emit a 'room:join' event with user email and room ID
        socket.emit('room:join', { email, room })

    }, [email, room, socket])


    // Handle joining a room on socket event
    const handleJoinRoom = useCallback((data) => {


        // Extract email and room ID from the received data
        const { email, room } = data

        navigate(`/room/${room}`)
    }, [navigate])


    // Set up socket event listener on component mount and clean up on unmount
    useEffect(() => {
        socket.on('room:join', handleJoinRoom)
        return () => {
            socket.off('room:join', handleJoinRoom)
        }
    }, [socket, handleJoinRoom])



    return (
        <div className='text-center'>
            <h1 className='text-2xl font-semibold'>Lobby</h1>

            {/* Form for entering email and room ID */}
            <form onSubmit={handleSubmitForm}>
                {/* Email input field */}
                <label className='p-2' htmlFor="email">Email ID</label>
                <input type="email" id='email' className='my-5  border border-black rounded-md'
                    value={email} onChange={e => setEmail(e.target.value)} />
                <br />

                {/* Room ID input field */}
                <label className='p-2' htmlFor="roomId">Room ID</label>
                <input type="text" id='roomId' className='border border-black rounded-md'
                    value={room} onChange={e => setRoom(e.target.value)}
                />
                <br />
                <button className='px-2 border bg-indigo-300 text-lg rounded-md'>Join</button>
            </form>
        </div>
    );
};

export default Lobby;
