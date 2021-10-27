import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
        pathMatch: 'full'
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'routing-swipe',
        loadChildren: () => import('./routing-swipe/routing-swipe.module').then( m => m.RoutingSwipePageModule),
    },
    {
        path: 'slides-swipe',
        loadChildren: () => import('./slides-swipe/slides-swipe.module').then( m => m.SlidesSwipePageModule),
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
