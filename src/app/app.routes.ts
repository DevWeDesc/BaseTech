import { Routes } from '@angular/router';
import { NewPostPage } from './pages/new-post/new-post.page';
import { HomePage } from './pages/home/home.page';
import { LoginPage } from './pages/login/login.page';
import { CreateAccountPage } from './pages/create-account/create-account.page';
import { UserProfilePage } from './pages/user-profile/user-profile.page';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UserProfileDetailsPage } from './pages/user-profile-details/user-profile-details.component';
import { ExplorerComponent } from './components/explorer/explorer.component';
import { PostUserPage } from './pages/post-user/post-user.page';

export const routes: Routes = [
  { path: '', component: LoginPage },
  { path: 'create-account', component: CreateAccountPage },
  { path: 'home', component: HomePage },
  { path: 'newPost', component: NewPostPage },
  { path: 'myaccount', component: UserProfilePage },
  { path: 'profileUser/:id', component: UserProfileDetailsPage },
  { path: 'user/:id/post/:idPost', component: PostUserPage },
  { path: 'search', component: ExplorerComponent },
  { path: '**', component: PageNotFoundComponent },
];
