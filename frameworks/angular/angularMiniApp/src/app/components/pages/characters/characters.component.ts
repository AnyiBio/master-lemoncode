import { Component, OnInit } from '@angular/core';
import { RickAndMortyApiService } from '../../../services/rick-and-morty-api.service';
import { ApiResponseCharacter, Character } from 'src/app/models/character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  public characters: Character[] = [];

  constructor(private apiService: RickAndMortyApiService) { }

  ngOnInit() {
    this.apiService.getCharacters().subscribe((data: ApiResponseCharacter) => {
      this.characters = data.results;
    });
  }
}

