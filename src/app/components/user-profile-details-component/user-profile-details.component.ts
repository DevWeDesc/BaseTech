import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-user-profile-details-component',
  standalone: true,
  templateUrl: './user-profile-details.component.html',
  styleUrl: './user-profile-details.component.scss',
  imports: [HeaderComponent, FooterComponent],
})
export class UserProfileDetailsComponent {}
