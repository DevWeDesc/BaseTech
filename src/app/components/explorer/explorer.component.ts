import { Component, OnInit } from '@angular/core';
import { GetUsersService } from '../../Services/get-users.service';
import { PostType, userType } from '../../models/userType';
import { NgFor } from '@angular/common';
import { HeaderComponent } from '../header-component/header.component';
import { FooterComponent } from '../footer-component/footer.component';

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
  usersPostFormated: PostType[] = [];

  ngOnInit() {
    this.usersPostMock
      .getUsersMock()
      .pipe()
      .subscribe((user) => {
        this.usersPosts = user;
      });

    for (let user of this.usersPosts) {
      for (let post of user.posts) {
        this.usersPostFormated.push(post);
      }
    }
    console.log(this.usersPostFormated);
  }
}
