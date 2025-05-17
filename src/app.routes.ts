import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Notfound } from './app/pages/notfound/notfound';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            { 
                path: '', 
                loadChildren: () => import('./app/pages/dashboard/dashboard').then(m => m.Dashboard) 
            },
            { 
                path: 'uikit', 
                loadChildren: () => import('./app/pages/uikit/uikit.routes') 
            },
            { 
                path: 'documentation', 
                loadChildren: () => import('./app/pages/documentation/documentation').then(m => m.Documentation) 
            },
            { 
                path: 'pages', 
                loadChildren: () => import('./app/pages/pages.routes') 
            }
        ]
    },
    { 
        path: 'landing', 
        loadChildren: () => import('./app/pages/landing/landing').then(m => m.Landing) 
    },
    { 
        path: 'notfound', 
        component: Notfound 
    },
    { 
        path: 'auth', 
        loadChildren: () => import('./app/pages/auth/auth.routes') 
    },
    { 
        path: '**', 
        redirectTo: '/notfound' 
    }
];
