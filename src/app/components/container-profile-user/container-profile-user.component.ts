import { Component, Input } from '@angular/core';
import { userType } from '../types/userType';

@Component({
  selector: 'app-container-profile-user',
  standalone: true,
  imports: [],
  templateUrl: './container-profile-user.component.html',
  styleUrl: './container-profile-user.component.scss',
})
export class ContainerProfileUserComponent {
  @Input() infoUser: userType | undefined = {
    id: 0,
    image: '',
    name: '',
    typeAccont: '',
  };
}
