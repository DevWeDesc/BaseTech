import { Component, OnInit } from '@angular/core';
import { GetUsersService } from '../../Services/get-users.service';
import { userType } from '../../types/userType';
import { NgFor } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-explorer',
  standalone: true,
  templateUrl: './explorer.component.html',
  styleUrl: './explorer.component.scss',
  imports: [NgFor, HeaderComponent, FooterComponent],
})
export class ExplorerComponent implements OnInit {
  constructor(private usersPostMock: GetUsersService) {}
  usersPosts: userType[] = [];

  ngOnInit() {
    this.usersPostMock
      .getUsersMock()
      .pipe()
      .subscribe((user) => {
        this.usersPosts = user;
      });
  }
}
