import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PldComponent } from './pld.component';
import { UserComponent } from './user/user.component';
import { ExampleComponent } from './example/example.component';

const routes: Routes = [{
  path: '',
  component: PldComponent,
  children: [
    {
      path: 'user',
      component: UserComponent,
    },
    {
      path: 'example',
      component: ExampleComponent,
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
  ExampleComponent,
];
