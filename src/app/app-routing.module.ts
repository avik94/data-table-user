import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoComponent } from './dashboard/components/todo/todo.component';
import { FoodOrderComponent } from './dashboard/components/food-order/food-order.component';


const routes: Routes = [
  { path: "", redirectTo:"dashboard/todo-list", pathMatch:"full"},
  { path: "dashboard", component: DashboardComponent , children: [
    {path: "todo-list", component: TodoComponent},
    {path: "food-order", component: FoodOrderComponent},
  ]},
  { path: "login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
