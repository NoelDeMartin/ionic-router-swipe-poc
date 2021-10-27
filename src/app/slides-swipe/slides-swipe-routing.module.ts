import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlidesSwipePage } from './slides-swipe.page';

const routes: Routes = [
    {
        path: '',
        component: SlidesSwipePage,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SlidesSwipePageRoutingModule {}
