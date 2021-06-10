import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { DetailComponent } from './components/detail/detail.component';
import { DataComponent } from './components/data/data.component';
import { SqlComponent } from './components/sql/sql.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'detail/:id', component: DetailComponent},
  { path: 'data', component: DataComponent},
  { path: 'sql', component: SqlComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'user'}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
