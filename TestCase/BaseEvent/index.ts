import { IEventData } from '../Interface';
import Validation from '../Validation';

export default class BaseEvent {
    validation: Validation;

    constructor(props: IEventData) {
        this.validation = new Validation(props);
    }

    dataProcessing(): void {}
}
