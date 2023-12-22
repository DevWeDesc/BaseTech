import { Component } from '@angular/core';
import { CreateAcountComponent } from '../../components/create-acount-component/create-acount.component';

@Component({
  selector: 'app-create-account',
  standalone: true,
  template: ` <app-create-acount /> `,
  imports: [CreateAcountComponent],
})
export class CreateAccountPage {}
