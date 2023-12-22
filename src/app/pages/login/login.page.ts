import { Component } from '@angular/core';
import { LoginComponent } from '../../components/login-component/login.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  template: ` <app-login /> `,
  imports: [LoginComponent],
})
export class LoginPage {}
