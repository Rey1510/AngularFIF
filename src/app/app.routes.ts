import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DetailComponent } from './pages/detail/detail.component';

export const routes: Routes = [
    {path: '', component: LandingComponent},
    {path: 'detail/:id/:methode', component: DetailComponent},
    // {path: 'detail/new', component: DetailComponent},
    {path: '404', component: NotFoundComponent},
    {path: '**', redirectTo: '404'}
];
