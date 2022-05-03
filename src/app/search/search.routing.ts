import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from '../root/root.component';
import { WorkInProgressComponent } from '../shared/work-in-progress/work-in-progress.component';
import { SearchComponent } from '../search/search.component';
import { AdvancedSearchComponent } from '../search/advanced-search/advanced-search.component';
export const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      {
        path: '',
        component: SearchComponent
      },
      {
        path: 'advanced-search',
        component: AdvancedSearchComponent
      },
     
      { 
        path: '**', 
        component: WorkInProgressComponent 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
