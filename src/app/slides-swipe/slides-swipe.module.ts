import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppComponentsModule } from 'src/components/components.module';

import { SlidesSwipePage } from './slides-swipe.page';
import { SlidesSwipePageRoutingModule } from './slides-swipe-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SlidesSwipePageRoutingModule,
        AppComponentsModule,
    ],
    declarations: [
        SlidesSwipePage,
    ],
})
export class SlidesSwipePageModule {}
