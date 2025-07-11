import { Routes } from '@angular/router';
import { Navbar } from './component/navbar/navbar';
import { Footer } from './component/footer/footer';
import { Inicio } from './component/inicio/inicio';

export const routes: Routes = [
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {path: 'navbar', component: Navbar},
    {path: 'footer', component: Footer},
    {path: 'inicio', component: Inicio}
];

