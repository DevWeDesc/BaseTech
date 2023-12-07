import { Component } from '@angular/core';
import { LoginComponent } from '../../components/login-component/login.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [LoginComponent],
})
export class LoginPage {}
