import { Component, Input } from '@angular/core';
import { SwipperRecomendedProfilesComponent } from '../swipper-recomended-profiles/swipper-recomended-profiles.component';
import { userType } from '../../models/userType';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-recomended-profiles',
  standalone: true,
  templateUrl: './recomended-profiles.component.html',
  styleUrl: './recomended-profiles.component.scss',
  imports: [SwipperRecomendedProfilesComponent, NgFor],
})
export class RecomendedProfilesComponent {
  @Input() users: userType[] = [];
}
