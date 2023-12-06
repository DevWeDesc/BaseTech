import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RecomendedProfilesComponent } from '../recomended-profiles/recomended-profiles.component';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [HeaderComponent, RecomendedProfilesComponent, PostComponent],
})
export class HomeComponent {}
