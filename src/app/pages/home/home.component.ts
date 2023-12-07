import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { RecomendedProfilesComponent } from '../../components/recomended-profiles/recomended-profiles.component';
import { PostComponent } from '../../components/post-component/post.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { userType } from '../../types/userType';
import { GetUsersService } from '../../Services/get-users.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
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
