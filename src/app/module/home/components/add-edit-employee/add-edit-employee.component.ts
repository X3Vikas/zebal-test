import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { department } from "src/app/models/enum";
import { UserService } from "src/app/service/user.service";

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html'
})
export class AddEditEmployeeComponent implements OnInit {
  addeditForm: FormGroup;
  departmentList: any;
  addeditFormSubmitted = false;
  addeditFormSubmitting = false;
  employeeData: any;
  isOnlyView = false;
  isEditMode = false;
  constructor(
    private _FormBuilder: FormBuilder,
    private _UserServic: UserService,
    private _Router: Router,
    private _ActivatedRoute: ActivatedRoute
  ) {
    this.departmentList = department
    this.addeditForm = this._FormBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      dob: [null, [Validators.required]],
      gender: ['Male', [Validators.required]],
      department: [null, [Validators.required]],
      id: [null],
    })


  }
  ngOnInit() {
    this.employeeData = this._UserServic.getEmployeeWithoutObservable();
    if (this._ActivatedRoute.snapshot.params.mode === 'view') {
      const [filterData] = this.employeeData?.filter((val: any) => val.id === Number(this._ActivatedRoute.snapshot.params.id));
      this.addeditForm.patchValue(filterData);
      this.addeditForm.disable();
      this.isOnlyView = true;
      this.isEditMode = false;
    } if (this._ActivatedRoute.snapshot.params.mode === 'edit') {
      const [filterData] = this.employeeData?.filter((val: any) => val.id === Number(this._ActivatedRoute.snapshot.params.id));
      this.addeditForm.patchValue(filterData);
      this.isOnlyView = false;
      this.isEditMode = true;
    }

  }
  addeditFormSubmit() {
    this.addeditFormSubmitted = true;
    if (this.addeditForm.valid) {

      this.addeditFormSubmitting = true;
      if (this.isEditMode) {
        const [filterData] = this.employeeData?.filter((val: any) => val.id === Number(this._ActivatedRoute.snapshot.params.id));
        this.employeeData.splice(filterData.id, 1);
        this.addeditForm.controls.id.setValue(this.employeeData.length);
        this.employeeData.push(this.addeditForm.value);
      } else {
        this.addeditForm.controls.id.setValue(this.employeeData.length);
        this.employeeData.push(this.addeditForm.value);
      }
      this._UserServic.setEmployee(this.employeeData);
      this._Router.navigate([`home`])
    }
  }
  back() {
    window.history.back();
  }
}
