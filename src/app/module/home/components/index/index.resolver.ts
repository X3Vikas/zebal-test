import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { EmployeeModal } from "src/app/models/employee.model";
import { UserService } from "src/app/service/user.service";
declare const require: any;

@Injectable()
export class IndexResolver implements Resolve<any>{
  employeeData: any;
  constructor(
    private _UserService: UserService
  ) {
    this.employeeData = require(`src/app/data/data.json`);
  }
  resolve(): Promise<any> {
    this._UserService.setEmployee(this.employeeData)
    return this.employeeData;
  }
}
