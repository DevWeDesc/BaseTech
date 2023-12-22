import { Component } from '@angular/core';
import { SharePostComponent } from '../../components/share-post-component/share-post.component';
import { HeaderComponent } from '../../components/header-component/header.component';
import { FooterComponent } from '../../components/footer-component/footer.component';

@Component({
  selector: 'app-new-post',
  standalone: true,
  template: ` <app-header />
    <app-share-post />
    <app-footer />`,
  imports: [SharePostComponent, HeaderComponent, FooterComponent],
})
export class NewPostPage {}
