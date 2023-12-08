import { Injectable } from '@angular/core';
import { optionsProfileMockType } from '../types/optionsProfileMock';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetOptionsProfileService {
  optionsProfileMock: optionsProfileMockType[] = [
    {
      href: '',
      text: 'Detalhes da Conta',
      icon: '../../../assets/images/book-open.svg',
    },
    {
      href: '',
      text: 'Editar dados Pessoais',
      icon: '../../../assets/images/edit.svg',
    },
    {
      href: '/',
      text: 'Sair dessa Conta',
      icon: '../../../assets/images/log-out.svg',
    },
  ];

  getOptionsProfile() {
    return of(this.optionsProfileMock);
  }
}
