interface ISocket {
    socket: string;
}

interface IData<T> {
    data: T;
}

interface IEventData {
    data: { [key: string]: any };
    socket: string;
}

interface ICreatEvent {
    name: string;
    classObject: any;
}

interface IEventList extends ISocket, IData<{ [key: string]: any }> {}

export { IEventList, IEventData, ICreatEvent };
