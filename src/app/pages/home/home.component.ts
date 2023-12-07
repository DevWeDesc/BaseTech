import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { RecomendedProfilesComponent } from '../../components/recomended-profiles/recomended-profiles.component';
import { PostComponent } from '../../components/post-component/post.component';
import { FooterComponent } from '../../components/footer/footer.component';

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
export class HomePage {}
