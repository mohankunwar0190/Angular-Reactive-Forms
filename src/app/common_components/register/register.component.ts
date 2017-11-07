import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ZIPCODE_REGEXP, SNUMBER_REGEXP, SSN_REGEXP } from './../../common_models/form-validation.regex';
import { STATES, LEVEL } from './../../common_models/data-models';
import { Validation } from './../../common_models/validation-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // component variables;
  public showErrors = false;
  public states: Array<string> = STATES;
  public levels: Array<string> = LEVEL;
  // form declarations
  public studentRegisterForm: FormGroup;
  public teacherRegisterForm: FormGroup;
  public parentRegisterForm: FormGroup;
  public addressForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }
  ngOnInit() {
    this.initializeStudentRegisterForm();
    this.initializeTeacherRegisterForm();
    this.initializeParentRegisterForm();
  }

  initializeStudentRegisterForm() {
    this.studentRegisterForm = this.formBuilder.group({
      snumber: ['', Validators.compose([
        Validators.required,
        Validators.pattern(SNUMBER_REGEXP)
      ])],
      ssn: [null, Validators.compose([
        Validators.required,
        Validators.pattern(SSN_REGEXP)
      ])],
      firstname: ['', Validators.required],
      middlename: [''],
      lastname: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      confirmemail: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      password: ['', Validators.compose([
        Validators.required
      ])],
      confirmpassword: ['', Validators.required],
      level: [null, Validators.required],
      address: this.formBuilder.group({
        line1: ['', Validators.required],
        line2: '',
        aptsuite: '',
        city: ['', Validators.required],
        state: ['', Validators.required],
        zipcode: ['', Validators.compose([
          Validators.required,
          Validators.pattern(ZIPCODE_REGEXP)
        ])]
      }),
      isaddresspermanent: ['', Validators.required],
      permanentaddress: this.formBuilder.group({
        line1: [''],
        line2: '',
        aptsuite: '',
        city: [''],
        state: [''],
        zipcode: ['']
      })
    },
      {
        validator: Validation.MatchStudentEmailPassword
      });

    this.studentRegisterForm.controls.isaddresspermanent.valueChanges.subscribe((value: any) => {
      if (value === 'No') {
        this.studentRegisterForm.controls.permanentaddress.enable();
        this.studentRegisterForm.controls.permanentaddress.get('line1').setValidators([Validators.required]);
        this.studentRegisterForm.controls.permanentaddress.get('city').setValidators([Validators.required]);
        this.studentRegisterForm.controls.permanentaddress.get('state').setValidators([Validators.required]);
        this.studentRegisterForm.controls.permanentaddress.get('zipcode').setValidators([Validators.compose([
          Validators.required,
          Validators.pattern(ZIPCODE_REGEXP)
        ])]);
      }
      if (value === 'Yes') {
        this.studentRegisterForm.controls.permanentaddress.disable();
      }
    });

  }
  initializeTeacherRegisterForm() {
    this.teacherRegisterForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  initializeParentRegisterForm() {
    this.parentRegisterForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  register(value) {
    this.showErrors = true;
    console.log(value);
  }
}
