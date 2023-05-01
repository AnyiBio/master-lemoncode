import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { CharactersComponent } from './components/pages/characters/characters.component';
import { MaterialModule } from './material.module';
import { EpisodeListComponent } from './components/pages/episode-list/episode-list.component';
import { NewsletterFormComponent } from './components/pages/newsletter-form/newsletter-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CharactersComponent,
    EpisodeListComponent,
    NewsletterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
