import { Routes } from '@angular/router';
import { NewPostPage } from './pages/new-post/new-post.component';
import { HomePage } from './pages/home/home.component';
import { LoginPage } from './pages/login/login.component';
import { CreateAccountPage } from './pages/create-account/create-account.component';
import { UserProfilePage } from './pages/user-profile/user-profile.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UserProfileDetailsPage } from './pages/user-profile-details/user-profile-details.component';

export const routes: Routes = [
  { path: '', component: LoginPage },
  { path: 'create-account', component: CreateAccountPage },
  { path: 'home', component: HomePage },
  { path: 'newPost', component: NewPostPage },
  { path: 'myaccount', component: UserProfilePage },
  { path: 'profileUser/:id', component: UserProfileDetailsPage },
  { path: '**', component: PageNotFoundComponent },
  // {path: "search", component: }
];
