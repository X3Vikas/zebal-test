import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { EmployeeModal } from "src/app/models/employee.model";


@Component({
  selector: "app-index",
  templateUrl: "./index.component.html"
})
export class IndexComponent implements OnInit {
  employeeData: EmployeeModal[];
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _Router: Router
  ) {
    this.employeeData = [];
  }
  ngOnInit() {
    this._ActivatedRoute.data.subscribe(data => {
      this.employeeData = data.employeeData;
      console.log(this.employeeData);

    })
  }
  addNewEmployee() {
    this._Router.navigate([`home/add-edit-employee/0/add`]);
  }
  deleteEmployee(index: any) {
    this.employeeData.splice(index, 1);
  }
  view(index: any) {
    this._Router.navigate([`home/add-edit-employee/${index}/view`]);
  }
  edit(index: any) {
    this._Router.navigate([`home/add-edit-employee/${index}/edit`]);

  }
}
