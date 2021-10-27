import { Component } from '@angular/core';
import { User, UsersService } from '../users.service';

@Component({
    selector: 'app-slides-swipe-page',
    templateUrl: './slides-swipe.page.html',
    styleUrls: ['./slides-swipe.page.scss'],
})
export class SlidesSwipePage {

    users: User[];

    constructor(usersService: UsersService) {
        this.users = usersService.getUsers();
    }

}
