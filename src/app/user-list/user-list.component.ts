import { Component, OnInit } from '@angular/core';
import { USERS } from '../../model/userMock';
import { User } from '../../model/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  user = User;
  users = USERS;
  selectedUser: User;
  editForm: FormGroup;
  submitted = false;

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  constructor(private formBuilder: FormBuilder) {}

  get f() {
    return this.editForm.controls;
  }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.editForm.invalid) {
      return;
    }
  }

  onReset() {
    this.submitted = false;
    this.editForm.reset();
  }
}
