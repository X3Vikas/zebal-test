import { Injectable } from "@angular/core";
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { EmployeeModal } from "../models/employee.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  employeeData: Subject<any>;
  employee: any;
  constructor() {
    this.employeeData = new BehaviorSubject<any>(null);


  }

  setEmployee(user: any) {
    this.employeeData.next(user);
    this.employee = user;
  }
  getEmployee(): Observable<any> {
    return this.employeeData.asObservable();
  }
  getEmployeeWithoutObservable() {
    return this.employee;
  }
}
