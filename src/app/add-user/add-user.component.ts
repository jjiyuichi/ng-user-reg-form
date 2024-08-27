import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({ selector: 'add-user', templateUrl: 'add-user.component.html' })
export class AddUserComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
