import { Component } from '@angular/core';
import { SharePostComponent } from '../../components/share-post-component/share-post.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-new-post',
  standalone: true,
  templateUrl: './new-post.component.html',
  imports: [SharePostComponent, HeaderComponent, FooterComponent],
})
export class NewPostPage {}
