import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoComponent } from './dashboard/components/todo/todo.component';


const routes: Routes = [
  { path: "", redirectTo:"dashboard/data-table", pathMatch:"full"},
  { path: "dashboard", component: DashboardComponent , children: [
    {path: "data-table", component: TodoComponent},
  ]},
  { path: "login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
