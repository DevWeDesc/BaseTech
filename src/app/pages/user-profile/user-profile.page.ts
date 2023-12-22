import { Component } from '@angular/core';
import { ProfileComponentComponent } from '../../components/profile-component/profile-component.component';
import { HeaderComponent } from '../../components/header-component/header.component';
import { FooterComponent } from '../../components/footer-component/footer.component';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  template: ` <app-header />
    <app-profile-component />
    <app-footer />`,
  imports: [ProfileComponentComponent, HeaderComponent, FooterComponent],
})
export class UserProfilePage {}
