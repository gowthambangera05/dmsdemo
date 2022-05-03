import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {
    path: 'quick-access',
    loadChildren: () => import('./quick-access/quick-access.module').then(m => m.QuickAccessModule),
  },
  {
    path: 'repository',
    loadChildren: () => import('./repository/repository.module').then(m => m.RepositoryModule),
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then(m => m.SearchModule),
  },
  {
    path: 'template',
    loadChildren: () => import('./templates/template.module').then(m => m.TemplateModule),
  },
  {
    path: 'repo-admin',
    loadChildren: () => import('./repo-admin/repo-admin.module').then(m => m.RepoAdminModule),
  },
  {
    path: 'tenant-repo-admin',
    loadChildren: () => import('./tenant-admin/tenant-admin.module').then(m => m.TenantAdminModule),
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

