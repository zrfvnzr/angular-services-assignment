import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
    selector: 'app-active-users',
    templateUrl: './active-users.component.html',
    styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
    // @Input() users: string[];
    // @Output() userSetToInactive = new EventEmitter<number>();

    onSetToInactive(id: number) {
        // this.userSetToInactive.emit(id);
		// this.usersService.inactiveUsers.push(this.usersService.activeUsers[id]);
        // this.usersService.activeUsers.splice(id, 1);
		this.usersService.setToInactive(id);
    }

	constructor(public usersService: UsersService) {}
}
