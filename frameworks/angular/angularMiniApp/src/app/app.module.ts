import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { CharactersComponent } from './components/pages/characters/characters.component';
import { MaterialModule } from './material.module';
import { EpisodeListComponent } from './components/pages/episode-list/episode-list.component';
import { AboutComponent } from './components/pages/about/about.component';
import { LoginComponent } from './components/pages/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';

import { BasicAuthInterceptor, ErrorInterceptor, fakeBackendProvider } from './helpers';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CharactersComponent,
    EpisodeListComponent,
    AboutComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
