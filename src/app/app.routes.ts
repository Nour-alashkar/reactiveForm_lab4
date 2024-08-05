import { Routes } from '@angular/router';
import { TeamReactiveFormComponent } from './team-reactive-form/team-reactive-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import path from 'path';


export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: TeamReactiveFormComponent, title: 'Login' },
    { path: 'register', component: ReactiveFormComponent, title: 'Register' },
];




