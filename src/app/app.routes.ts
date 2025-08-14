import { Routes } from '@angular/router';

export const routes: Routes = [
    // { path: '', redirectTo: '/', pathMatch: 'full' },
    {
        path: '',
        loadComponent: () => import('./views/home/home.component').then(m => m.HomeComponent),
        data: {
            title: 'Calton Datx',
            description:'Description Meta Tag Content',
            ogUrl: 'your og url'
        }
    },
    {
        path: 'solutions',
        loadComponent: () => import('./views/solutions/solutions.component').then(m => m.SolutionsComponent),
        data: {
            title: 'Calton Datx | Solutions',
            description:'Description Meta Tag Content',
            ogUrl: 'your og url'
        }
    },
    {
        path: 'about',
        loadComponent: () => import('./views/about/about.component').then(m => m.AboutComponent),
        data: {
            title: 'Calton Datx | About',
            description:'Description Meta Tag Content',
            ogUrl: 'your og url'
        }
    },
    {
        path: 'industries',
        loadComponent: () => import('./views/industries/industries.component').then(m => m.IndustriesComponent),
        data: {
            title: 'Calton Datx | Industries',
            description:'Description Meta Tag Content',
            ogUrl: 'your og url'
        }
    },
    {
        path: 'resources',
        loadComponent: () => import('./views/resources/resources.component').then(m => m.ResourcesComponent),
        data: {
            title: 'Calton Datx | Resources',
            description:'Description Meta Tag Content',
            ogUrl: 'your og url'
        }
    },
];
