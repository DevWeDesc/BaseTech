import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { IconMockType } from '../../types/iconMockType';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  iconData: IconMockType[] = [];

  ngOnInit(): void {
    this.iconData = [
      { href: 'home', image: 'assets/images/homeIcon.svg' },
      { href: 'search', image: 'assets/images/searchIcon.svg' },
      { href: 'newPost', image: 'assets/images/NewPostIcon.svg' },
      { href: 'myaccount', image: 'assets/images/userIcon.svg' },
    ];

    console.log(this.iconData);
  }
}
