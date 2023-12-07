import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
import { RecomendedProfilesType } from '../../types/recomended-profiles';
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
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  swiper: any = new Swiper('.mySwiper', {});
}
