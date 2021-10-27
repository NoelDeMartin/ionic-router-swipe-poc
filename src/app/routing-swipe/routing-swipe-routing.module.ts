import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutingSwipePage } from './routing-swipe.page';

const routes: Routes = [
    {
        path: '',
        component: RoutingSwipePage,
        children: [
            {
                path: ':userId',
                loadChildren: () => import('../user-profile/user-profile.module').then(m => m.UserProfilePageModule)
            },
        ],
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingSwipePageRoutingModule {}
