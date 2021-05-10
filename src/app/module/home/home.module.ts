import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeRouting, routes } from './home.routing';

@NgModule({
  declarations: [
    routes
  ],
  imports: [
    HomeRouting,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: []
})
export class HomeModule {
  constructor() { }
}
