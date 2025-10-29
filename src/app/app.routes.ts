import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { TaskNewPage } from './pages/task-new-page/task-new-page';
import { TaskEditPage } from './pages/task-edit-page/task-edit-page';

export const routes: Routes = [
    {
        path: '',
        component: HomePage
    },
    {
        path: 'home',
        component: HomePage    
    },
    {
        path: 'new',
        component: TaskNewPage
    },
    {
        path: 'edit/:id',
        component: TaskEditPage
    }
];
