import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ColectComponent } from './colect/colect.component';
import { CenzorComponent } from './works/cenzor/cenzor.component';
import { UserslistComponent } from './works/userslist/userslist.component';
import { TasklistComponent } from './works/tasklist/tasklist.component';


const routes: Routes = [
  {path: '', component: ColectComponent},
  {path: 'works/cenzor', component: CenzorComponent},
  {path: 'works/userslist', component: UserslistComponent},
  {path: 'works/tasklist', component: TasklistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
