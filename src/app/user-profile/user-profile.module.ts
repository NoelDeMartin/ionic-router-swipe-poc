import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppComponentsModule } from 'src/components/components.module';

import { UserProfilePage } from './user-profile.page';
import { UserProfilePageRoutingModule } from './user-profile-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AppComponentsModule,
        UserProfilePageRoutingModule,
    ],
    declarations: [
        UserProfilePage,
    ],
})
export class UserProfilePageModule {}
