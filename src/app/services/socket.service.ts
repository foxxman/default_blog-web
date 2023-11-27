import { EVENTS_TO_SERVER } from './../../types/events-to-server';
import io, { Socket } from "socket.io-client";
import { ISocketPayload, subscribeProps } from "../../types/socket";

interface IEmitProps{
  type: EVENTS_TO_SERVER,
  data: any,
}

const serverUrl = String(process.env.REACT_APP_SOCKET_URL);
const socket: Socket = io(serverUrl);

const initConnection = () => {  
    socket.connect();
}

const emit = ({type, data}: IEmitProps) => {
    if ( socket.connected ) {
          socket.emit(type, data)
    } else {
        console.log('socket not connected', socket?.connected);
    }
}

const subscribe = (props: subscribeProps) => {
    if ( socket ) {
      socket.on(props.type, (payload: ISocketPayload) => {
        props.action(payload);
      });
    }
  }

const SocketService = {
    initConnection,
    emit,
    subscribe,
}

export default SocketService;