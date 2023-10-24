import BaseEvent from '../BaseEvent';
import CreatEvent from '../CreatEvent';
import v4_WASEvent from '../SendEventList';
import { IEventData } from '../Interface';

//BaseEvent 상속
class EUpdateSocketConnected extends BaseEvent {
    constructor(props: IEventData) {
        super(props);
        this.validation.schma = {
            event: {
                type: String,
                required: true,
                length: { min: 1 },
            },
            gid: {
                type: String,
                required: true,
                length: { min: 1, max: 12 },
            },
            uid: {
                type: String,
                required: true,
                length: { min: 1, max: 130 },
            },
        };
    }

    dataProcessing() {
        if (this.validation.validateResult) {
            console.log(`${this.validation.data.event} dataProcessing`);
            console.log(`========[ ${this.validation.data.event} Process 완료 ]=======`);
            console.log('\n\n');
            return;
        }

        console.log(`========[ ${this.validation.data.event} Process 실패 ]=======`);
        console.log('\n\n');
        return;
    }
}

class EDelSocketConnected extends BaseEvent {
    constructor(props: IEventData) {
        super(props);

        this.validation.vaildCheck = () => {
            console.log(`${this.validation.data.event} vaildCheck`);
            return;
        };

        this.validation.vaildCheckResult = () => {
            console.log(`${this.validation.data.event} vaildCheckResult`);
            return;
        };
    }

    dataProcessing() {
        console.log(`${this.validation.data.event} dataProcessing`);
        console.log(`========[ ${this.validation.data.event} Process 완료 ]=======`);
        return;
    }
}

class ECheckConnectAdmin extends BaseEvent {
    constructor(props: IEventData) {
        super(props);

        this.validation.vaildCheck = () => {
            console.log(`${this.validation.data.event} vaildCheck`);
            return;
        };

        this.validation.vaildCheckResult = () => {
            console.log(`${this.validation.data.event} vaildCheckResult`);
            return;
        };
    }

    dataProcessing() {
        console.log(`${this.validation.data.event} dataProcessing`);
        console.log(`========[ ${this.validation.data.event} Process 완료 ]=======`);
        return;
    }
}

class ESendSocketEvent extends BaseEvent {
    constructor(props: IEventData) {
        super(props);

        this.validation.vaildCheck = () => {
            return;
        };

        this.validation.vaildCheckResult = () => {
            return;
        };
    }

    dataProcessing() {
        console.log(`${this.validation.data.event} dataProcessing`);
        console.log(`========[ ${this.validation.data.event} Process 완료 ]=======`);
        return;
    }
}

//CreateEvent : 이벤트 객체 목록화
export const eventMethodCase = new CreatEvent();

//Bridge Server에서 처리할 이벤트
eventMethodCase.addEvent({ name: 'update-socket-connected', classObject: EUpdateSocketConnected });
eventMethodCase.addEvent({ name: 'del-socket-connected', classObject: EDelSocketConnected });
eventMethodCase.addEvent({ name: 'check-connect-admin', classObject: ECheckConnectAdmin });

//v4_WASEvent 공통 class를 사용
const v4_WASEventList = Object.keys(v4_WASEvent).filter((event) => isNaN(Number(event)));

//enum 이벤트 객체 목록화
v4_WASEventList.map((event) => {
    eventMethodCase.addEvent({ name: event, classObject: ESendSocketEvent });
});
console.log('\n');
console.log('=========[ CreateEvent에 저장된 이벤트 & 객체 ]===========');
console.log('\n');
console.log(eventMethodCase.eventClass);
console.log('\n');
