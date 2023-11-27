import { EVENTS_FROM_SERVER } from "./events-from-server";

export interface ISocketPayload {
    message?: string;
}

export interface subscribeProps {
    type: EVENTS_FROM_SERVER;
    action: (payload: ISocketPayload) => void;
}