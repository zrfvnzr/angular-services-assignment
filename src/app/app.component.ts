import { Component } from '@angular/core';
import { UsersService } from './services/users.service';
import { CounterService } from './services/counter.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
//   activeUsers = ['Max', 'Anna'];
//   inactiveUsers = ['Chris', 'Manu'];

    // onSetToInactive(id: number) {
    //     this.inactiveUsers.push(this.activeUsers[id]);
    //     this.activeUsers.splice(id, 1);
    // }

    // onSetToActive(id: number) {
    //     this.activeUsers.push(this.inactiveUsers[id]);
    //     this.inactiveUsers.splice(id, 1);
    // }

	constructor(public counterService: CounterService) {}

}
