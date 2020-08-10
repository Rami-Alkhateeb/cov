import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReslistsPage } from './reslists.page';

const routes: Routes = [
  {
    path: '',
    component: ReslistsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReslistsPageRoutingModule {}
