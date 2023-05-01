import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponseCharacter } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyApiService {
  private apiUrl = 'https://rickandmortyapi.com/api/';

  constructor(private http: HttpClient) { }

  public getCharacters(): Observable<ApiResponseCharacter> {
    return this.http.get<ApiResponseCharacter>(`${this.apiUrl}character`);
  }
}
