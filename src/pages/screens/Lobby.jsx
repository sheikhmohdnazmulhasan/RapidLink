import React, { useCallback, useState } from 'react';
import { useSocket } from '../../Providers/SocketProvider';

// Lobby component for the main lobby page
const Lobby = () => {


    const [email, setEmail] = useState("")
    const [room, setRoom] = useState("")

    const socket = useSocket()


    const handleSubmitForm = useCallback((e) => {
        e.preventDefault();
        socket.emit('room:join', { email, room })

    }, [email, room, socket])


    


    console.log(socket);


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
