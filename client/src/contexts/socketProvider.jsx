import React, { useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';

const SocketContext = React.createContext();

export function useSocket() {
    return useContext(SocketContext);
}

export function SocketProvider({ children }) {
    const [socket, setSocket] = useState();

    useEffect(() => {
        // const newSocket = io('http://localhost:4000');
        const newSocket = io('https://ttt-3d-new-server.vercel.app/');
        setSocket(newSocket);

        return () => newSocket.close();
    }, []);

    

    return (
        <SocketContext.Provider value={socket} >
            {children}
        </SocketContext.Provider>
    )
}