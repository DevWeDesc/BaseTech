import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header-component/header.component';
import { RecomendedProfilesComponent } from '../../components/recomended-profiles/recomended-profiles.component';
import { PostComponent } from '../../components/post-component/post.component';
import { FooterComponent } from '../../components/footer-component/footer.component';
import { userType } from '../../models/userType';
import { GetUsersService } from '../../Services/get-users.service';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div>
      <app-header />
      <app-recomended-profiles [users]="usersList" />
      <app-post />
      <app-footer />
    </div>
  `,
  imports: [
    HeaderComponent,
    RecomendedProfilesComponent,
    PostComponent,
    FooterComponent,
  ],
})
export class HomePage implements OnInit {
  constructor(private getUsersMockService: GetUsersService) {}

  usersList: userType[] = [];

  ngOnInit(): void {
    this.getUsersMockService.getUsersMock().subscribe((user) => {
      this.usersList = user;
    });

    console.log(this.usersList);
  }
}
