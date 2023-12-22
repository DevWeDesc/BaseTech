import { Component, OnInit } from '@angular/core';
import { UserProfileDetailsComponent } from '../../components/user-profile-details-component/user-profile-details.component';
import { GetUsersService } from '../../Services/get-users.service';
import { userType } from '../../models/userType';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../components/header-component/header.component';
import { FooterComponent } from '../../components/footer-component/footer.component';

@Component({
  selector: 'app-user-profile-details',
  standalone: true,
  template: `
    <app-header />
    <app-user-profile-details-component [userSelected]="userSelected" />
    <app-footer />
  `,
  imports: [UserProfileDetailsComponent, HeaderComponent, FooterComponent],
})
export class UserProfileDetailsPage implements OnInit {
  constructor(
    private getUsersMockService: GetUsersService,
    private route: ActivatedRoute
  ) {}

  userSelected: userType | undefined = {
    id: 0,
    image: '',
    name: '',
    typeAccont: '',
    posts: [],
  };

  id: string | null | number = this.route.snapshot.paramMap.get('id');

  ngOnInit() {
    this.getUsersMockService.getUsersMock().subscribe((user) => {
      this.userSelected = user.find((item) => item.id == this.id);
    });

    console.log(this.userSelected);
  }
}
