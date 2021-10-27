import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UsersService } from '../users.service';

@Component({
    selector: 'app-user-profile-page',
    templateUrl: './user-profile.page.html',
})
export class UserProfilePage {

    user: User;

    constructor(private usersService: UsersService, private router: Router, route: ActivatedRoute) {
        this.user = usersService.find(Number(route.snapshot.params.userId));
    }

    swipeLeft() {
        this.move(1);
    }

    swipeRight() {
        this.move(-1);
    }

    private move(delta: number) {
        const nextId = Math.min(this.usersService.getUsersCount(), Math.max(1, this.user.id + delta));

        if (nextId === this.user.id) {
            return;
        }

        this.router.navigateByUrl(`/routing-swipe/${nextId}`);
    }

}
