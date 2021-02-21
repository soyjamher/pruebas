import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PldComponent } from './pld.component';
import { UserComponent } from './user/user.component';
import { TreeGridComponent } from './tree-grid/tree-grid.component';

const routes: Routes = [{
  path: '',
  component: PldComponent,
  children: [
    {
      path: 'user',
      component: UserComponent,
    },
    {
      path: 'tree-grid',
      component: TreeGridComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PldRoutingModule { }

export const routedComponents = [
  PldComponent,
  UserComponent,
  TreeGridComponent,
];
