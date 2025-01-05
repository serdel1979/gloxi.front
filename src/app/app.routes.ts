import { Routes } from '@angular/router';

export const routes: Routes = [
{
    path:'init',
    loadComponent: ()=> import('./pages/init/init.component')
},
{
    path:'login',
    loadComponent: ()=> import('./pages/login/login.component')
},
{
    path:'register',
    loadComponent:()=> import('./pages/register/register.component')
},
{
    path: 'home',
    loadComponent: ()=> import('./pages/home/home.component')
},
{
    path: '',
    redirectTo:'/init',
    pathMatch: 'full'
}


];
