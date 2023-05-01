import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponseEpisode } from '../models/episode';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  private apiUrl = 'https://rickandmortyapi.com/api/episode';

  constructor(private http: HttpClient) { }

  getEpisodes(): Observable<ApiResponseEpisode> {
    return this.http.get<ApiResponseEpisode>(this.apiUrl);
  }
}
