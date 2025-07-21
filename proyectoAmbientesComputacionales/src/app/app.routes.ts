import { Routes } from '@angular/router';
import { Navbar } from './component/navbar/navbar';
import { Footer } from './component/footer/footer';
import { Inicio } from './component/inicio/inicio';
import { Git } from './component/git/git';
import { Github } from './component/github/github';
import { Documentos } from './component/documentos/documentos';
import { Docker } from './component/docker/docker';

export const routes: Routes = [
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {path: 'navbar', component: Navbar},
    {path: 'footer', component: Footer},
    {path: 'inicio', component: Inicio},
    {path: 'gits', component: Git},
    {path: 'github', component: Github},
    {path: 'documentos', component: Documentos},
    {path: 'docker', component: Docker}
];

