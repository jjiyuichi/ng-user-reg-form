import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [AppComponent, AddUserComponent, UserListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
