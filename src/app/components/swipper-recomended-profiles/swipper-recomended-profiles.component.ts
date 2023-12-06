import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
import { RecomendedProfilesType } from '../../types/recomended-profiles';
import { RecomendedProfilesService } from '../../Services/recomended-profiles/recomended-profiles.service';
register();
@Component({
  selector: 'app-swipper-recomended-profiles',
  standalone: true,
  imports: [],
  templateUrl: './swipper-recomended-profiles.component.html',
  styleUrl: './swipper-recomended-profiles.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SwipperRecomendedProfilesComponent implements OnInit {
  swiper: any = new Swiper('.mySwiper', {});

  recomendedProfiles: RecomendedProfilesType[] = [];

  constructor(private recomendedProfilesData: RecomendedProfilesService) {}

  ngOnInit() {
    this.recomendedProfilesData.getUsers().subscribe((users) => {
      this.recomendedProfiles = users;
    });
    console.log(this.recomendedProfiles);
  }
}
