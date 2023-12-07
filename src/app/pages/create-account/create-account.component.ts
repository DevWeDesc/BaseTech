import { Component } from '@angular/core';
import { CreateAcountComponent } from '../../components/create-acount-component/create-acount.component';

@Component({
  selector: 'app-create-account',
  standalone: true,
  templateUrl: './create-account.component.html',
  imports: [CreateAcountComponent],
})
export class CreateAccountPage {}
