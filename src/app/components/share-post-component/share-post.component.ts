import { Component, Input } from '@angular/core';
import { userType } from '../../models/userType';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-share-post',
  standalone: true,
  templateUrl: './share-post.component.html',
  styleUrl: './share-post.component.scss',
  imports: [FormsModule],
})
export class SharePostComponent {
  @Input() content: string = '';

  handleContent(ev: any) {
    this.content = ev.value;
    console.log(this.content);
  }

  userInfosMockSharePost: userType = {
    id: 1,
    image: '../../../assets/images/facebook.svg',
    name: 'Facebook',
    typeAccont: 'Influencer',
    posts: [],
  };
}
