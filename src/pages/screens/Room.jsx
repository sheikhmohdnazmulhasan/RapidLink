import React, { useCallback, useEffect, useState } from 'react';
import { useSocket } from '../../Providers/SocketProvider';
import ReactPlayer from 'react-player';

const Room = () => {

    const socket = useSocket();
    const [remoteSocketId, setRemoteSocketId] = useState(null)
    const [myStream, setMyStream] = useState()

    const handleUserJoined = useCallback(({ email, id }) => {
        console.log(`Email ${email} Joined Room`)
        setRemoteSocketId(id)
    })


    // const handleCallUser = useCallback(() => {
    //     const stream = await navigator.mediaDevices.getUserMedia({
    //         audio: true,
    //         video: true
    //     });

    //     seMyStream(stream)
    // }, []);


     // Handle calling the user
     const handleCallUser = useCallback(async () => {
        try {
            // Get user media stream
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true,
                video: true
            });

            // Set the local stream state
            setMyStream(stream);
        } catch (error) {
            console.error('Error accessing user media:', error);
        }
    }, []);



    useEffect(() => {
        socket.on('user:joined', handleUserJoined)

        return () => {
            socket.off('user:joined', handleUserJoined)
        }


    }, [socket, handleUserJoined])


    return (
        <div>
            <h1>Room Page</h1>
            <h4>{remoteSocketId ? 'Connected' : 'Waiting For Joinig To other user'}</h4>
            {
                remoteSocketId && <button onClick={handleCallUser}>Call</button>
            }
            {
                myStream && <ReactPlayer playing  url={myStream }></ReactPlayer>
            }
        </div>
    );
};

export default Room;