import { Component, Input } from '@angular/core';
import { User } from '../../app/users.service';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {

    @Input() user: User;

}
