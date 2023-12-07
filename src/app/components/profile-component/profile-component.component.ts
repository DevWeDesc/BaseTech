import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

type optionsProfileMockType = {
  href: string;
  text: string;
  icon: string;
};
@Component({
  selector: 'app-profile-component',
  standalone: true,
  imports: [NgFor],
  templateUrl: './profile-component.component.html',
  styleUrl: './profile-component.component.scss',
})
export class ProfileComponentComponent implements OnInit {
  optionsProfileMock: optionsProfileMockType[] = [];
  ngOnInit() {
    this.optionsProfileMock = [
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
  }
}
