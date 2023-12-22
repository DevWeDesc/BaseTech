import { Component, Input } from '@angular/core';
import { PostType, userType } from '../../models/userType';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-post-user',
  standalone: true,
  imports: [NgFor],
  templateUrl: './post-user.component.html',
  styleUrl: './post-user.component.scss',
})
export class PostUserComponent {
  @Input() User: userType | undefined = {
    id: 0,
    image: '',
    name: '',
    posts: [],
    typeAccont: '',
  };

  @Input() Post: PostType | undefined = {
    id: 0,
    idUser: 0,
    image: '',
    coments: [],
    content: '',
  };
}
