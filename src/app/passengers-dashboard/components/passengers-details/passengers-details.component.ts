import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Passengers } from '../../Interfaces/Passengers.interface';

@Component({
    selector: 'app-passdetails',
    templateUrl: './passengers-details.component.html',
    styleUrls: ['./passengers-details.component.scss']
})
export class PassengersDetailsComponent {

    @Input()
    detail: Passengers;

    @Output()
    handleRemove: EventEmitter<any> = new EventEmitter();

    @Output()
    handleEdit: EventEmitter<any> = new EventEmitter();

    @Output()
    view: EventEmitter<any> = new EventEmitter();

    editing = false;

    gotoPassenger() {
        this.view.emit(this.detail);
    }

    onNameChange(s: string) {
        this.detail.fullname = s;
    }
    startEditing() {
        if (this.editing) {
            this.handleEdit.emit(this.detail);
        }
        this.editing = !this.editing;
    }
    toggleRemove() {
        this.handleRemove.emit(this.detail);
    }
}
