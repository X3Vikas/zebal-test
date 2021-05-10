import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AddEditEmployeeComponent } from "./components/add-edit-employee/add-edit-employee.component";
import { IndexComponent } from "./components/index/index.component";
import { IndexResolver } from "./components/index/index.resolver";
import { HomeComponent } from "./home.component";

const route: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
      {
        path: '', component: IndexComponent, resolve: {
          employeeData: IndexResolver
        }
      },
      { path: 'add-edit-employee/:id/:mode', component: AddEditEmployeeComponent }
    ]
  }
]
export const routes = [
  HomeComponent,
  IndexComponent,
  AddEditEmployeeComponent
]


@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
  providers: [IndexResolver]
})
export class HomeRouting {
  constructor() { }
}
