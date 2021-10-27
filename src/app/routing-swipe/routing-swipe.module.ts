import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoutingSwipePageRoutingModule } from './routing-swipe-routing.module';

import { RoutingSwipePage } from './routing-swipe.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RoutingSwipePageRoutingModule,
    ],
    declarations: [RoutingSwipePage],
})
export class RoutingSwipePageModule {}
