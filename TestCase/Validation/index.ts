import Schema, { ValidationError } from 'validate';
import { IEventData } from '../Interface';

export default class Validation {
    data: { [key: string]: any };
    schma: { [key: string]: any };
    validateResult: boolean;
    socket: string;
    errorList: ValidationError[];

    constructor(props: IEventData) {
        this.data = props.data;
        this.socket = props.socket;
        this.validateResult = false;
        this.schma = {};
        this.errorList = [];
    }

    vaildCheck() {
        const schma = new Schema(this.schma);
        this.errorList = schma.validate(this.data);
        console.log(`${this.data.event} vaildCheck`);
        return;
    }

    vaildCheckResult() {
        console.log(`${this.data.event} vaildCheckResult`);

        // const toFail = JSON.stringify({ event: this._data.event, result: 'false' });

        if (this.errorList.length > 0) {
            //uid data format check
            console.log(this.errorList);
            this.validateResult = false;
            // this._socket.write(toFail);
            // this._socket.end();
            return;
        }
        this.validateResult = true;
        return;
    }
}
