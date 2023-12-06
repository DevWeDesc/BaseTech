import { Component } from '@angular/core';
import { SwipperRecomendedProfilesComponent } from '../swipper-recomended-profiles/swipper-recomended-profiles.component';

@Component({
  selector: 'app-recomended-profiles',
  standalone: true,
  templateUrl: './recomended-profiles.component.html',
  styleUrl: './recomended-profiles.component.scss',
  imports: [SwipperRecomendedProfilesComponent],
})
export class RecomendedProfilesComponent {}
