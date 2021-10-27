import { NgModule } from '@angular/core';

import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
    declarations: [
        UserProfileComponent,
    ],
    exports: [
        UserProfileComponent,
    ],
})
export class AppComponentsModule {}
