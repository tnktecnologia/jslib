import { FieldType } from '../../enums/fieldType';

import { View } from './view';

import { Field } from '../domain/field';

export class FieldView implements View {
    name: string;
    value: string;
    type: FieldType;

    constructor(f?: Field) {
        if (!f) {
            return;
        }

        this.type = f.type;
    }

    get maskedValue(): string {
        return this.value != null ? '••••••••' : null;
    }
}
