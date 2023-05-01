import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './components/pages/characters/characters.component';
import { EpisodeListComponent } from './components/pages/episode-list/episode-list.component';
import { NewsletterFormComponent } from './components/pages/newsletter-form/newsletter-form.component';


const routes: Routes = [
  { path: '', redirectTo: 'characters', pathMatch: 'full' },
  { path: 'characters', component: CharactersComponent },
  { path: 'episodes', component: EpisodeListComponent },
  { path: 'newsletter', component: NewsletterFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
