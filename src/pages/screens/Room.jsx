import React, { useCallback, useEffect, useState } from 'react';
import { useSocket } from '../../Providers/SocketProvider';
import ReactPlayer from 'react-player';
import peer from '../../service/peer';

const Room = () => {


    // Access the socket instance from the SocketProvider
    const socket = useSocket();

    // State to track the remote user's socket ID
    const [remoteSocketId, setRemoteSocketId] = useState(null)

    // State to store the local user's media stream
    const [myStream, setMyStream] = useState()


    // Handle user joined event
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




    // Handle calling the user and accessing local media stream
    const handleCallUser = useCallback(async () => {
        try {
            // Get user media stream
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true,
                video: true
            });
            const offer = await peer.getOffer();
            socket.emit("user:call", { to: remoteSocketId, offer })

            // Set the local stream state
            setMyStream(stream);
        } catch (error) {
            console.error('Error accessing user media:', error);
        }
    }, [remoteSocketId, socket]);



    const handlesIncommingCall = useCallback(async ({ from, offer }) => {
        setRemoteSocketId(from)
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true
        });
        setMyStream(stream);
        console.log(`Incoming Call`, from, offer);
        const ans = await peer.getAnswer(offer);
        socket.emit('call:accepted', { to: from, ans })
    }, [socket])


    const handleCallAccepted = useCallback(({ from, ans }) => {
        peer.setLocalDescription(ans)
        console.log('Call Accepted');
    }, [])


    // Set up socket event listener on component mount and clean up on unmount
    useEffect(() => {
        socket.on('user:joined', handleUserJoined)
        socket.on('incomming:call', handlesIncommingCall)
        socket.on('call:accepted', handleCallAccepted)

        return () => {
            socket.off('user:joined', handleUserJoined)
            socket.off('incomming:call', handlesIncommingCall)
            socket.off('call:accepted', handleCallAccepted)
        }


    }, [socket, handleUserJoined, handlesIncommingCall, handleCallAccepted])


    return (
        <div>
            <h1>Room Page</h1>
            <h4>{remoteSocketId ? 'Connected' : 'Waiting For Joinig To other user'}</h4>
            {
                remoteSocketId && <button onClick={handleCallUser}>Call</button>
            }
            {
                myStream &&
                <>
                    <h1>My Stream</h1>
                    <ReactPlayer playing url={myStream}></ReactPlayer>
                </>
            }
        </div>
    );
};

export default Room;