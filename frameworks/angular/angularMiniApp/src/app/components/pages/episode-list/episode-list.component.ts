import { Component, OnInit } from '@angular/core';
import { EpisodeService } from '../../../services/episode.service';
import { ApiResponseEpisode, Episode } from 'src/app/models/episode';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.scss']
})
export class EpisodeListComponent implements OnInit {

  episodes: Episode[];

  constructor(private episodeService: EpisodeService) { }

  ngOnInit(): void {
    this.episodeService.getEpisodes().subscribe((data: ApiResponseEpisode) => this.episodes = data.results);
  }

}
