//Library
import { eventMethodCase } from './EventClass';
import { IEventList } from './Interface';

export default function EventList({ data, socket }: IEventList) {
    const eventClass = eventMethodCase.createEventClass({
        name: data.event,
        options: {
            socket: socket,
            data: data,
        },
    });

    if (eventClass) {
        eventClass.validation.vaildCheck();
        eventClass.validation.vaildCheckResult();
        eventClass.dataProcessing();
    }

    return;
}

//실제로 사용하는 방식
// EventList({ data: data, socket: socket });

//Test Case
//브릿지에서 처리할것

console.log('==========[ Was에서 Bridge Server로 이벤트 날림 ]==========');
console.log({
    data: { event: 'update-socket-connected', gid: 'asdfasdf', uid: 'asdasdasdasdasd' },
    socket: 'socket',
});

EventList({
    data: { event: 'update-socket-connected', gid: 'asdfasdf', uid: 'asdasdasdasdasd' },
    socket: 'socket',
});

console.log('==========[ Was에서 Bridge Server로 이벤트 날림 ]==========');
console.log('gid 누락');

EventList({
    data: { event: 'update-socket-connected', uid: 'asdasdasdasdasd' },
    socket: 'socket',
});

console.log('==========[ Was에서 Bridge Server로 이벤트 날림 ]==========');
console.log('validation 과정 제거');
console.log({
    data: { event: 'delete-agent', uid: 'asdasdasdasdasd' },
    socket: 'socket',
});

//공통으로 클라이언트 서버에서 처리할 부분
EventList({
    data: { event: 'delete-agent', uid: 'asdasdasdasdasd' },
    socket: 'socket',
});
