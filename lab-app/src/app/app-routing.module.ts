import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompOneComponent } from './comp-one/comp-one.component';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { MainCompComponent } from './main-comp/main-comp.component';

const routes: Routes = [
  { path: 'one', component: CompOneComponent },
  { path: 'two', component: CompTwoComponent },
  { path: '', component: MainCompComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
