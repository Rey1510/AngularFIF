import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DetailComponent } from './pages/detail/detail.component';
import { AuthGuard } from'../guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    { path:'' , redirectTo: 'landing' , pathMatch: 'full' },
    {path: 'landing', component: LandingComponent, canActivate:[AuthGuard]},
    {path: 'detail/:id/:methode', component: DetailComponent, canActivate:[AuthGuard]},
    // {path: 'detail/new', component: DetailComponent},
    {path:'login', component: LoginComponent},
    {path: '404', component: NotFoundComponent},
    {path: '**', redirectTo: '404'}
];
