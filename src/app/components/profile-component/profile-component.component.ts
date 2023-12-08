import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { ContainerProfileUserComponent } from '../../container-profile-user/container-profile-user.component';
import { optionsProfileMockType } from '../../types/optionsProfileMock';
import { GetOptionsProfileService } from '../../Services/get-options-profile.service';
import { GetUsersService } from '../../Services/get-users.service';
import { userType } from '../../types/userType';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile-component',
  standalone: true,
  templateUrl: './profile-component.component.html',
  styleUrl: './profile-component.component.scss',
  imports: [NgFor, ContainerProfileUserComponent],
})
export class ProfileComponentComponent implements OnInit {
  constructor(
    private OptionsMockService: GetOptionsProfileService,
    private GetUsersServiceMock: GetUsersService
  ) {}

  optionsProfileMock: optionsProfileMockType[] = [];
  profileUser: userType | undefined = {
    id: 0,
    name: '',
    image: '',
    typeAccont: '',
  };

  ngOnInit() {
    this.OptionsMockService.getOptionsProfile()
      .pipe()
      .subscribe((option) => {
        this.optionsProfileMock = option;
      });
    this.GetUsersServiceMock.getUserForId(1)
      .pipe()
      .subscribe((user) => {
        this.profileUser = user;
      });
  }
}
