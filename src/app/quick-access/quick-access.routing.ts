﻿import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from '../root/root.component';
import { DashboardComponent } from './dashboard/dashboard.component';
export const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
        {
          path: 'dashboard',
          component: DashboardComponent
        },
        
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuickAccessRoutingModule { }
