import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './components/pages/characters/characters.component';
import { EpisodeListComponent } from './components/pages/episode-list/episode-list.component';
import { AboutComponent } from './components/pages/about/about.component';
import { AuthGuard } from './helpers/auth.guard';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '', component: HomeComponent },
  { path: 'characters', component: CharactersComponent,  canActivate: [AuthGuard] },
  { path: 'episodes', component: EpisodeListComponent,  canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
