import { ICreatEvent } from '../Interface';

export default class CreatEvent {
    eventClass: { [key: string]: any };

    constructor() {
        this.eventClass = {};
    }

    addEvent(props: ICreatEvent) {
        const { name, classObject } = props;

        if (classObject.prototype.dataProcessing) {
            console.log(`${name} 이벤트 객체 목록화`);
            this.eventClass[name] = classObject;
            return;
        }
        return;
    }

    createEventClass(props: { name: string; options: object }) {
        const { name, options } = props;

        const ClassMethod = this.eventClass[name];

        console.log(`${name} 이벤트 객체 생성`);
        return ClassMethod ? new ClassMethod(options) : null;
    }
}
