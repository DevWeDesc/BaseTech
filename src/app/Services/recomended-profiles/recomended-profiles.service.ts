import { Injectable } from '@angular/core';
import { RecomendedProfilesType } from '../../types/recomended-profiles';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecomendedProfilesService {
  getUsers(): Observable<RecomendedProfilesType[]> {
    const usersRecomended: RecomendedProfilesType[] = [
      { id: 1, image: '../../../assets/images/facebook.svg', name: 'Facebook' },
      { id: 2, image: '../../../assets/images/facebook.svg', name: 'Twitter' },
      {
        id: 3,
        image: '../../../assets/images/facebook.svg',
        name: 'Bill Gates',
      },
      {
        id: 4,
        image: '../../../assets/images/facebook.svg',
        name: 'Jeff Bezos',
      },
    ];
    return of(usersRecomended);
  }
}
