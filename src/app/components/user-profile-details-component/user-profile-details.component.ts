import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { userType } from '../../types/userType';
import { ContainerProfileUserComponent } from '../../container-profile-user/container-profile-user.component';
import { NgIf, NgFor } from '@angular/common';
@Component({
  selector: 'app-user-profile-details-component',
  standalone: true,
  templateUrl: './user-profile-details.component.html',
  styleUrl: './user-profile-details.component.scss',
  imports: [
    HeaderComponent,
    FooterComponent,
    ContainerProfileUserComponent,
    NgIf,
    NgFor,
  ],
})
export class UserProfileDetailsComponent {
  @Input() userSelected: userType | undefined = {
    id: 0,
    image: '',
    name: '',
    typeAccont: '',
    posts: [],
  };
  postVisible: boolean = false;
  handleVisibilityPosts() {
    this.postVisible ? (this.postVisible = false) : (this.postVisible = true);
  }
}
