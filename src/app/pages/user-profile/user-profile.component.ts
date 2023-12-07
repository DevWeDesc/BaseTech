import { Component } from '@angular/core';
import { ProfileComponentComponent } from '../../components/profile-component/profile-component.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  templateUrl: './user-profile.component.html',
  imports: [ProfileComponentComponent, HeaderComponent, FooterComponent],
})
export class UserProfilePage {}
