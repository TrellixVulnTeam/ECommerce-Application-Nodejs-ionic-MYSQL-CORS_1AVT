import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicalsheetPage } from './medicalsheet.page';

const routes: Routes = [
  {
    path: '',
    component: MedicalsheetPage
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicalsheetPageRoutingModule {}
