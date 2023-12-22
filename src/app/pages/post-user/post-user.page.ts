import { Component, OnInit } from '@angular/core';
import { PostUserComponent } from '../../components/post-user-details-component/post-user.component';
import { HeaderComponent } from '../../components/header-component/header.component';
import { FooterComponent } from '../../components/footer-component/footer.component';
import { GetUsersService } from '../../Services/get-users.service';
import { PostType, userType } from '../../models/userType';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-post-user-page',
  standalone: true,
  template: `
    <app-header />
    <app-post-user [User]="UserPost" [Post]="PostUser" />
    <app-footer />
  `,
  imports: [PostUserComponent, HeaderComponent, FooterComponent],
})
export class PostUserPage implements OnInit {
  constructor(
    private getUsersService: GetUsersService,
    private route: ActivatedRoute
  ) {}

  UserPost: userType | undefined = {
    id: 0,
    image: '',
    name: '',
    posts: [],
    typeAccont: '',
  };

  PostUser: PostType | undefined = {
    id: 0,
    idUser: 0,
    image: '',
    coments: [],
    content: '',
  };

  idUser: any = this.route.snapshot.paramMap.get('id');
  idPost: any = this.route.snapshot.paramMap.get('idPost');

  ngOnInit() {
    this.getUsersService
      .getPostForId(this.idUser, this.idPost)
      .subscribe((post) => {
        this.PostUser = post;
      });

    this.getUsersService.getUserForId(this.idUser).subscribe((user) => {
      this.UserPost = user;
    });

    console.log(this.UserPost);
    console.log(this.PostUser);
  }
}
